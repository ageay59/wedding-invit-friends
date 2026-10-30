"use client";

import { useState } from "react";
import { config } from "@/config/config";
import { useFormSubmit } from "../lib/useFormSubmit";
import FormStage from "./FormStage";
import { AttendanceField, Honeypot, NameField, SubmitButton } from "./FormFields";

export default function BrunchForm() {
  const r = config.slides.brunch.brunch.rsvp;
  const { status, submit, reset } = useFormSubmit(r.form.action);
  const [name, setName] = useState("");

  const handleReplay = () => {
    setName("");
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
        <Honeypot />

        <AttendanceField labels={r.attending} />

        <NameField
          label={r.nameLabel}
          placeholder={r.namePlaceholder}
          emptyLabel={r.nameEmpty}
          value={name}
          onChange={setName}
        />

        <SubmitButton
          status={status}
          disabled={!name}
          label={r.submit}
          sendingLabel={r.sending}
        />
      </FormStage>

      {status === "error" && (
        <p className="rsvp-form__feedback rsvp-form__feedback--error" role="alert">
          {r.error}
        </p>
      )}
    </form>
  );
}
