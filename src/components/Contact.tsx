"use client"

import { sendMail } from "@/actions/sendMail";
import React, { useState } from "react";
export const Contact = () => {

  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (formData: FormData) => {    
    const response = await sendMail(formData);
    
    if (response.success) {
      setMessage("Wiadomość została wysłana pomyślnie!");
    } else {
      setMessage("Wystąpił błąd podczas wysyłania maila. Proszę o kontakt bezpośrednio na maila lub numer telefonu.");
    }
  };

  return (
    <form action={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Imię i nazwisko"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
        />
      </div>
      <div>
        <textarea
          placeholder="Wiadomość"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-blue-500 rounded-md font-bold text-white transition-all duration-200 hover:bg-blue-600"
        type="submit"
      >
        Wyślij
      </button>
      <span className="mt-2 text-center text-red-500">{message}</span>
    </form>
  );
};
