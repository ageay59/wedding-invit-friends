"use client";

import { useState } from "react";
import { config } from "@/config/config";

type Status = "idle" | "pending" | "success" | "error";

const fieldClass =
  "w-full rounded-xl bg-black/60 border border-white/30 text-xs text-white focus:border-amberaccent focus:ring-0";
const labelClass =
  "block text-[10px] uppercase tracking-wider text-amberaccent font-medium mb-1 text-glow";

function countOptions(max: number, one: string, many: string, min: number) {
  return Array.from({ length: max - min + 1 }, (_, i) => {
    const n = i + min;
    return { value: n, label: `${n} ${n > 1 ? many : one}` };
  });
}

export default function Form() {
  const r = config.slides.rsvp;
  const [status, setStatus] = useState<Status>("idle");
  const [diet, setDiet] = useState<string[]>([]);

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
    <form name={r.form.name} className="space-y-2.5" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value={r.form.name} />
      <input type="hidden" name="diet" value={diet.join(", ")} />
      <p hidden>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-2 gap-2">
        <label className="flex items-center justify-center p-2 rounded-xl bg-black/60 border border-white/30 cursor-pointer hover:border-amberaccent transition text-center">
          <input
            defaultChecked
            className="accent-[#e59b34] text-amberaccent focus:ring-0 mr-1.5 w-3.5 h-3.5"
            name="attending"
            type="radio"
            value="yes"
          />
          <span className="text-[11px] text-white font-medium">{r.attending.yes}</span>
        </label>
        <label className="flex items-center justify-center p-2 rounded-xl bg-black/60 border border-white/30 cursor-pointer hover:border-amberaccent transition text-center">
          <input
            className="accent-[#e59b34] text-amberaccent focus:ring-0 mr-1.5 w-3.5 h-3.5"
            name="attending"
            type="radio"
            value="no"
          />
          <span className="text-[11px] text-white/80">{r.attending.no}</span>
        </label>
      </div>

      <div>
        <label className={labelClass} htmlFor="rsvp-name">
          {r.nameLabel}
        </label>
        <input
          id="rsvp-name"
          name="name"
          required
          type="text"
          placeholder={r.namePlaceholder}
          className={`${fieldClass} px-3 py-1.5 placeholder-white/50`}
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className={labelClass} htmlFor="rsvp-adults">
            {r.adults.label}
          </label>
          <select
            id="rsvp-adults"
            name="adults"
            defaultValue={r.adults.default}
            className={`${fieldClass} px-2.5 py-1`}
          >
            {countOptions(r.adults.max, r.adults.one, r.adults.many, 1).map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="rsvp-children">
            {r.children.label}
          </label>
          <select
            id="rsvp-children"
            name="children"
            defaultValue={r.children.default}
            className={`${fieldClass} px-2.5 py-1`}
          >
            {countOptions(r.children.max, r.children.one, r.children.many, 0).map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>{r.goodToKnowLabel}</label>
        <div className="flex flex-wrap gap-1 mb-1.5">
          {r.dietTags.map((tag) => {
            const selected = diet.includes(tag);
            return (
              <button
                key={tag}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleDiet(tag)}
                className={`px-2 py-0.5 rounded-full text-[10px] border transition ${
                  selected
                    ? "bg-amberaccent text-stone-950 border-amberaccent font-bold"
                    : "bg-black/50 border-white/30 text-white hover:text-amberaccent"
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
          className={`${fieldClass} px-3 py-1.5 placeholder-white/50`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "pending" || status === "success"}
        className="w-full py-2.5 rounded-xl bg-amberaccent hover:bg-amberwarm text-stone-950 font-philosopher font-bold text-xs tracking-widest uppercase transition shadow-lg mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "pending" ? r.sending : r.submit}
      </button>

      {status === "success" && (
        <p className="text-[11px] text-champagne text-center text-glow-subtle" role="status">
          {r.success}
        </p>
      )}
      {status === "error" && (
        <p className="text-[11px] text-red-300 text-center text-glow-subtle" role="alert">
          {r.error}
        </p>
      )}
    </form>
  );
}
