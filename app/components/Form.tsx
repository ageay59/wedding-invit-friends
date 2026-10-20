"use client";

import { useState } from "react";
import { config } from "@/config/config";

type Status = "idle" | "pending" | "success" | "error";

const fieldClass = "rsvp-form__field";
const labelClass = "rsvp-form__label";

function countOptions(max: number, one: string, many: string, min: number) {
  return Array.from({ length: max - min + 1 }, (_, i) => {
    const n = i + min;
    return { value: n, label: `${n} ${n > 1 ? many : one}` };
  });
}

export default function Form() {
  const r = config.slides.rsvp.rsvp;
  const [status, setStatus] = useState<Status>("idle");
  const [diet, setDiet] = useState<string[]>([]);
  const [name, setName] = useState("");

  const toggleDiet = (tag: string) =>
    setDiet((current) =>
      current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag]
    );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("pending");
    try {
      const formData = new FormData(event.currentTarget);
      const res = await fetch(r.form.action, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          Array.from(formData.entries()) as [string, string][]
        ).toString(),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form name={r.form.name} className="rsvp-form" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value={r.form.name} />
      <input type="hidden" name="diet" value={diet.join(", ")} />
      {status !== "success" && (
        <>
          <p hidden>
            <label>
              Don&apos;t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="rsvp-form__attendance">
            <label className="rsvp-form__choice">
              <input
                defaultChecked
                className="rsvp-form__radio"
                name="attending"
                type="radio"
                value="yes"
              />
              <span className="rsvp-form__choice-label">{r.attending.yes}</span>
            </label>
            <label className="rsvp-form__choice">
              <input
                className="rsvp-form__radio"
                name="attending"
                type="radio"
                value="no"
              />
              <span className="rsvp-form__choice-label">{r.attending.no}</span>
            </label>
          </div>

          <div>
            <label className={labelClass} htmlFor="rsvp-name">
              {r.nameLabel}
            </label>
            <input
              id="rsvp-name"
              name="you"
              required
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={r.namePlaceholder}
              className={fieldClass}
            />
          </div>
          <div className="rsvp-form__counts">
            <div>
              <select
                id="rsvp-adults"
                name="adults"
                defaultValue={r.adults.default}
                className={fieldClass}
              >
                {countOptions(r.adults.max, r.adults.one, r.adults.many, 1).map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                id="rsvp-children"
                name="children"
                defaultValue={r.children.default}
                className={fieldClass}
              >
                {countOptions(r.children.max, r.children.one, r.children.many, 0).map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
                <option value="stop">{r.children.stop}</option>
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>{r.goodToKnowLabel}</label>
            <div className="rsvp-form__diet-tags">
              {r.dietTags.map((tag) => {
                const selected = diet.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => toggleDiet(tag)}
                    className={`rsvp-form__diet-tag ${
                      selected
                        ? "rsvp-form__diet-tag--selected"
                        : ""
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
            <textarea
              name="message"
              rows={2}
              placeholder={r.messagePlaceholder}
              className={`${fieldClass} rsvp-form__message`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "pending" || !name.trim()}
            className="rsvp-form__submit"
          >
            {status === "pending" ? r.sending : r.submit}
          </button>
        </>
      )}

      {status === "success" && (
        <output className="rsvp-form__success">
          {r.success.fr}
          <br />
          <em>{r.success.en}</em>
        </output>
      )}
      {status === "error" && (
        <p className="rsvp-form__feedback rsvp-form__feedback--error" role="alert">
          {r.error}
        </p>
      )}
    </form>
  );
}
