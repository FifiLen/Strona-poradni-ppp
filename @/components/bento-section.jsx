'use client'

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, BookOpen, Certificate, Clock, Zap } from "lucide-react"

export function BentoSectionComponent() {
  return (
    (<section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Dlaczego warto wybrać nasze szkolenie TUS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="row-span-2 bg-gradient-to-br from-blue-50 to-indigo-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                Elastyczne terminy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Oferujemy różne daty szkoleń, abyś mógł wybrać najbardziej odpowiadający Ci termin.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="secondary">Weekendowe</Badge>
                <Badge variant="secondary">Tygodniowe</Badge>
                <Badge variant="secondary">Online</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-emerald-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6" />
                Małe grupy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Zajęcia w kameralnym gronie zapewniają indywidualne podejście i efektywną naukę.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-yellow-50 to-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Materiały szkoleniowe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Otrzymasz komplet materiałów, które pomogą Ci w prowadzeniu TUS.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-50 to-fuchsia-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Certificate className="w-6 h-6" />
                Certyfikat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Po ukończeniu szkolenia otrzymasz certyfikat potwierdzający Twoje kwalifikacje.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-red-50 to-rose-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-6 h-6" />
                24 godziny praktyki
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Intensywne szkolenie z naciskiem na praktyczne umiejętności.</p>
            </CardContent>
          </Card>
          
          <Card className="row-span-2 bg-gradient-to-br from-orange-50 to-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Wsparcie po szkoleniu
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Zapewniamy dalsze wsparcie i konsultacje po zakończeniu kursu.</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600">
                <li>Dostęp do grupy wsparcia</li>
                <li>Regularne webinary</li>
                <li>Materiały dodatkowe</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>)
  );
}