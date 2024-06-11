import React from "react";
import { useForm } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mkndgljk"); // zmień "mkndgljk" na faktyczny ID twojego formularza Formspree
  if (state.succeeded) {
    return (
      <p className="text-lg font-semibold text-green-600">
        Dziękujemy za wiadomość!
      </p>
    );
  }
  return (
    <form
      id="fs-frm"
      name="simple-contact-form"
      acceptCharset="utf-8"
      action="https://formspree.io/f/mkndgljk"
      method="post"
      onSubmit={handleSubmit}
      className="w-full max-w-lg"
    >
      <fieldset id="fs-frm-inputs" className="space-y-4">
        <label
          htmlFor="full-name"
          className="block text-sm font-semibold text-gray-700 font-display"
        >
          Imię/Pseudonim
        </label>
        <input
          type="text"
          name="name"
          id="full-name"
          placeholder="Imię/Pseudonim"
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
               focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />

        <label
          htmlFor="email-address"
          className="block mt-3 text-sm font-semibold text-gray-700 font-display"
        >
          Adres Email
        </label>
        <input
          type="email"
          name="_replyto"
          id="email-address"
          placeholder="email@domain.com"
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
               focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />

        <label
          htmlFor="message"
          className="block mt-3 text-sm font-semibold text-gray-700"
        >
          Wiadomość
        </label>
        <textarea
          rows="5"
          name="message"
          id="message"
          placeholder="Twoja wiadomość..."
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>

        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Zgłoszenie z formularza kontaktowego"
        />
      </fieldset>
      <input
        type="submit"
        value="Wyślij"
        className="bg-[#921d7f] text-white mt-4 w-full cursor-pointer hover:text-slate-800  rounded-md hover:bg-transparent  hover:border border-gray-300 transition-all duration-500 font-medium py-2 px-4  focus:outline-none focus:shadow-outline"
        disabled={state.submitting}
      />
    </form>
  );
}

function Formularz() {
  return <ContactForm />;
}

export default Formularz;
