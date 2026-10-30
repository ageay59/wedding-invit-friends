"use client";

import { useId } from "react";
import invitees from "@/config/invitees.json";
import type { Status } from "../lib/useFormSubmit";
import NameSelect from "./NameSelect";

const fieldClass = "rsvp-form__field";
export const labelClass = "rsvp-form__label";

export function Honeypot() {
  return (
    <p hidden>
      <label>
        Don&apos;t fill this out: <input name="bot-field" />
      </label>
    </p>
  );
}

export function AttendanceField({
  labels,
}: Readonly<{ labels: { yes: string; no: string } }>) {
  return (
    <div className="rsvp-form__attendance">
      <label className="rsvp-form__choice">
        <input
          defaultChecked
          className="rsvp-form__radio"
          name="attending"
          type="radio"
          value="yes"
        />
        <span className="rsvp-form__choice-label">{labels.yes}</span>
      </label>
      <label className="rsvp-form__choice">
        <input
          className="rsvp-form__radio"
          name="attending"
          type="radio"
          value="no"
        />
        <span className="rsvp-form__choice-label">{labels.no}</span>
      </label>
    </div>
  );
}

type NameFieldProps = {
  label: string;
  placeholder: string;
  emptyLabel: string;
  value: string;
  onChange: (value: string) => void;
};

export function NameField({
  label,
  placeholder,
  emptyLabel,
  value,
  onChange,
}: Readonly<NameFieldProps>) {
  const id = useId();

  return (
    <div>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <NameSelect
        id={id}
        name="name"
        options={invitees}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        emptyLabel={emptyLabel}
        className={fieldClass}
      />
    </div>
  );
}

export function SubmitButton({
  status,
  disabled,
  label,
  sendingLabel,
}: Readonly<{
  status: Status;
  disabled: boolean;
  label: string;
  sendingLabel: string;
}>) {
  return (
    <button
      type="submit"
      disabled={status === "pending" || disabled}
      className="rsvp-form__submit"
    >
      {status === "pending" ? sendingLabel : label}
    </button>
  );
}
