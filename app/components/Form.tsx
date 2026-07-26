"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(Array.from(formData.entries()) as [string, string][]).toString(),
      });

      if (response.ok) {
        router.push("/thank-you");
      } else {
        alert("Terjadi kesalahan. Silakan coba lagi.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      name="wedding-rsvp" 
      method="POST"
      onSubmit={handleSubmit}
      className="mt-8 space-y-4"
    >
      {/* Hidden fields for Netlify Forms */}
      <input type="hidden" name="form-name" value="wedding-rsvp" />
      <p hidden>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>
      {/* Form fields */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Nama
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full p-2 mt-1 bg-white/10 text-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label
          htmlFor="attendance"
          className="block text-sm font-medium text-white"
        >
          Kehadiran
        </label>
        <select
          id="attendance"
          name="attendance"
          className="block w-full p-2 mt-1 bg-black/40 text-white border border-gray-300 rounded-md shadow-sm  sm:text-sm"
          required
        >
          <option value="">Pilih Kehadiran</option>
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="guests"
          className="block text-sm font-medium text-white"
        >
          Jumlah Tamu
        </label>
        <select
          id="guests"
          name="guests"
          className="block w-full p-2 mt-1  bg-black/40 text-white border border-gray-300 rounded-md shadow-sm  sm:text-sm"
          required
        >
          <option value="">Pilih Jumlah Tamu</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white"
        >
          Ucapan
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="block w-full p-2 mt-1 bg-white/10 text-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="block w-full p-2 text-sm font-medium text-center text-black bg-white border border-transparent rounded-md shadow-sm hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Mengirim..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default Form;
