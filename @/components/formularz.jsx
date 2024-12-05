'use client'

import React from "react"
import { useForm } from "@formspree/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useAccessibility } from "@/components/AccessibilityContext"

const getFontSizeClass = (level) => {
  const sizes = ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl']
  return sizes[level] || 'text-base'
}

function ContactForm() {
  const [state, handleSubmit] = useForm("mkndgljk") // Replace with your actual Formspree form ID
  const { fontSizeLevel, highContrast } = useAccessibility()
  const fontSizeClass = getFontSizeClass(fontSizeLevel)

  if (state.succeeded) {
    return (
      (<p
        className={`${fontSizeClass} font-semibold ${highContrast ? 'text-yellow-400' : 'text-green-600'}`}>Dziękujemy za wiadomość!
              </p>)
    );
  }

  return (
    (<Card className={highContrast ? 'bg-gray-800 text-yellow-400' : ''}>
      <CardHeader>
        <CardTitle className={`${getFontSizeClass(fontSizeLevel + 1)} font-semibold`}>Wyślij wiadomość</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="full-name" className={`block ${fontSizeClass} font-semibold`}>
              Imię/Pseudonim
            </label>
            <Input
              type="text"
              name="name"
              id="full-name"
              placeholder="Imię/Pseudonim"
              required
              className={highContrast ? 'bg-gray-700 text-yellow-400' : ''} />
          </div>
          <div>
            <label
              htmlFor="email-address"
              className={`block ${fontSizeClass} font-semibold`}>
              Adres Email
            </label>
            <Input
              type="email"
              name="_replyto"
              id="email-address"
              placeholder="email@domain.com"
              required
              className={highContrast ? 'bg-gray-700 text-yellow-400' : ''} />
          </div>
          <div>
            <label htmlFor="message" className={`block ${fontSizeClass} font-semibold`}>
              Wiadomość
            </label>
            <Textarea
              name="message"
              id="message"
              placeholder="Twoja wiadomość..."
              required
              className={highContrast ? 'bg-gray-700 text-yellow-400' : ''} />
          </div>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Zgłoszenie z formularza kontaktowego" />
          <Button
            type="submit"
            disabled={state.submitting}
            className={`w-full ${highContrast ? 'bg-yellow-400 text-black hover:bg-yellow-500' : 'bg-[#921d7f] text-white hover:bg-[#7a1968]'}`}>
            Wyślij
          </Button>
        </form>
      </CardContent>
    </Card>)
  );
}

export function FormularzComponent() {
  return <ContactForm />;
}