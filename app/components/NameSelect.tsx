"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";

type NameSelectProps = {
  id: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  emptyLabel: string;
  className?: string;
};

const DROPDOWN_HEIGHT = 224;

const normalize = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export default function NameSelect({
  id,
  name,
  options,
  value,
  onChange,
  placeholder,
  emptyLabel,
  className = "",
}: Readonly<NameSelectProps>) {
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [dropUp, setDropUp] = useState(false);

  const indexed = useMemo(
    () => options.map((label) => ({ label, key: normalize(label) })),
    [options],
  );

  const matches = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    if (terms.length === 0 || query === value) return options;
    return indexed
      .filter(({ key }) => terms.every((term) => key.includes(term)))
      .map(({ label }) => label);
  }, [indexed, options, query, value]);

  useEffect(() => {
    const list = listRef.current;
    const item = list?.children[active] as HTMLElement | undefined;
    if (!list || !item) return;
    if (item.offsetTop < list.scrollTop) {
      list.scrollTop = item.offsetTop;
    } else if (item.offsetTop + item.offsetHeight > list.scrollTop + list.clientHeight) {
      list.scrollTop = item.offsetTop + item.offsetHeight - list.clientHeight;
    }
  }, [active, open]);

  const openList = () => {
    const rect = inputRef.current?.getBoundingClientRect();
    if (rect) {
      const below = window.innerHeight - rect.bottom;
      setDropUp(below < DROPDOWN_HEIGHT && rect.top > below);
    }
    setOpen(true);
  };

  const select = (option: string) => {
    onChange(option);
    setQuery(option);
    setOpen(false);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onChange("");
    setActive(0);
    openList();
  };

  const handleBlur = () => {
    setOpen(false);
    setQuery(value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!open) {
        openList();
        return;
      }
      const step = event.key === "ArrowDown" ? 1 : -1;
      setActive((current) =>
        Math.min(Math.max(current + step, 0), matches.length - 1),
      );
    } else if (event.key === "Enter" && open) {
      event.preventDefault();
      if (matches[active]) select(matches[active]);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  const showList = open && matches.length > 0;

  return (
    <div className={`name-select ${dropUp ? "name-select--up" : ""}`}>
      <input
        ref={inputRef}
        id={id}
        type="text"
        role="combobox"
        aria-expanded={showList}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={showList ? `${listId}-${active}` : undefined}
        autoComplete="off"
        spellCheck={false}
        value={query}
        placeholder={placeholder}
        className={className}
        onChange={handleInput}
        onFocus={openList}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
      <input type="hidden" name={name} value={value} />
      {showList && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          aria-label={placeholder}
          className="name-select__list"
        >
          {matches.map((option, index) => (
            <li
              key={option}
              id={`${listId}-${index}`}
              role="option"
              aria-selected={option === value}
              tabIndex={-1}
              className={`name-select__option ${
                index === active ? "name-select__option--active" : ""
              }`}
              onMouseDown={(event) => event.preventDefault()}
              onMouseEnter={() => setActive(index)}
              onClick={() => select(option)}
              onKeyDown={(event) => {
                if (event.key === "Enter") select(option);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      {open && matches.length === 0 && (
        <div className="name-select__empty">{emptyLabel}</div>
      )}
    </div>
  );
}
