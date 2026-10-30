import { useState, type FormEvent } from "react";
import { MOCK_SUBMIT, mockSubmit } from "./mockSubmit";

export type Status = "idle" | "pending" | "success" | "error";

export function useFormSubmit(action: string) {
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("pending");
    try {
      const body = new URLSearchParams(
        Array.from(new FormData(event.currentTarget), ([key, value]) => [
          key,
          String(value),
        ]),
      ).toString();
      const res = MOCK_SUBMIT
        ? await mockSubmit()
        : await fetch(action, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body,
          });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => setStatus("idle");

  return { status, submit, reset };
}
