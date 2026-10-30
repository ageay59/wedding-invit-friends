"use client";

import { useState } from "react";
import { config } from "@/config/config";
import { useFormSubmit } from "../lib/useFormSubmit";
import FormStage from "./FormStage";
import {
  AttendanceField,
  Honeypot,
  labelClass,
  NameField,
  SubmitButton,
} from "./FormFields";

const fieldClass = "rsvp-form__field";

function countOptions(max: number, one: string, many: string, min: number) {
  return Array.from({ length: max - min + 1 }, (_, i) => {
    const n = i + min;
    return { value: n, label: `${n} ${n > 1 ? many : one}` };
  });
}

export default function Form() {
  const r = config.slides.rsvp.rsvp;
  const { status, submit, reset } = useFormSubmit(r.form.action);
  const [diet, setDiet] = useState<string[]>([]);
  const [name, setName] = useState("");

  const toggleDiet = (tag: string) =>
    setDiet((current) =>
      current.includes(tag)
        ? current.filter((t) => t !== tag)
        : [...current, tag],
    );

  const handleReplay = () => {
    setName("");
    setDiet([]);
    reset();
  };

  return (
    <form name={r.form.name} className="rsvp-form" onSubmit={submit}>
      <FormStage
        status={status}
        animal={r.animal}
        onReplay={handleReplay}
        success={
          <>
            {r.success.fr}
            <br />
            <em>{r.success.en}</em>
          </>
        }
      >
        <input type="hidden" name="form-name" value={r.form.name} />
        <input type="hidden" name="diet" value={diet.join(", ")} />
        <Honeypot />

        <AttendanceField labels={r.attending} />

        <NameField
          label={r.nameLabel}
          placeholder={r.namePlaceholder}
          emptyLabel={r.nameEmpty}
          value={name}
          onChange={setName}
        />

        <div className="rsvp-form__children">
          <select
            id="rsvp-children"
            name="children"
            defaultValue={r.children.default}
            className={fieldClass}
          >
            {countOptions(
              r.children.max,
              r.children.one,
              r.children.many,
              0,
            ).map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
            <option value="stop">{r.children.stop}</option>
          </select>
          <p className="rsvp-form__note">{r.babysitterNote}</p>
        </div>

        <div>
          <label className={labelClass} htmlFor="rsvp-message">
            {r.goodToKnowLabel}
          </label>
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
                    selected ? "rsvp-form__diet-tag--selected" : ""
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
          <textarea
            id="rsvp-message"
            name="message"
            rows={2}
            placeholder={r.messagePlaceholder}
            className={`${fieldClass} rsvp-form__message`}
          />
        </div>

        <SubmitButton
          status={status}
          disabled={!name}
          label={r.submit}
          sendingLabel={r.sending}
        />
      </FormStage>

      {status === "error" && (
        <p
          className="rsvp-form__feedback rsvp-form__feedback--error"
          role="alert"
        >
          {r.error}
        </p>
      )}
    </form>
  );
}
