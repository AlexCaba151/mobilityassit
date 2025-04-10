"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ShipWheelIcon as Wheelchair, ArrowLeft } from "lucide-react"

export default function FormPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setFormSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-sky-50 py-4 border-b border-sky-100">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-sky-600 p-2 rounded-full">
              <Wheelchair className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-sky-800">MobilityAssist</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sky-800 hover:text-sky-600 font-medium">
              Inicio
            </Link>
            <Link href="/form" className="text-sky-800 hover:text-sky-600 font-medium">
              Solicitar
            </Link>
            <Link href="/catalog" className="text-sky-800 hover:text-sky-600 font-medium">
              Catálogo
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow bg-sky-50 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <Link href="/" className="inline-flex items-center text-sky-600 hover:text-sky-800 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>

            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
                  <h2 className="text-2xl font-bold mb-2">¡Solicitud Enviada!</h2>
                  <p>Gracias por completar el formulario. Nos pondremos en contacto contigo pronto.</p>
                </div>
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link href="/">Volver al Inicio</Link>
                </Button>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-sky-900">Solicitud de Dispositivo de Movilidad</h1>
                  <p className="text-sky-700 mt-2">
                    Complete el siguiente formulario para solicitar un dispositivo de movilidad
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-sky-800 border-b border-sky-100 pb-2">
                      Información Personal
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input id="firstName" placeholder="Ingrese su nombre" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input id="lastName" placeholder="Ingrese su apellido" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input id="email" type="email" placeholder="correo@ejemplo.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input id="phone" type="tel" placeholder="(123) 456-7890" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Dirección</Label>
                      <Input id="address" placeholder="Ingrese su dirección completa" required />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">Ciudad</Label>
                        <Input id="city" placeholder="Ciudad" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">Estado/Provincia</Label>
                        <Input id="state" placeholder="Estado" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">Código Postal</Label>
                        <Input id="zipCode" placeholder="Código Postal" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ward">Barrio/Rama</Label>
                      <Input id="ward" placeholder="Ingrese su barrio o rama" required />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-sky-800 border-b border-sky-100 pb-2">
                      Información del Dispositivo
                    </h2>

                    <div className="space-y-2">
                      <Label>Tipo de Dispositivo Necesitado</Label>
                      <RadioGroup defaultValue="wheelchair" className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="wheelchair" id="wheelchair" />
                          <Label htmlFor="wheelchair">Silla de Ruedas</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="walker" id="walker" />
                          <Label htmlFor="walker">Andador</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cane" id="cane" />
                          <Label htmlFor="cane">Bastón</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Otro</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deviceSpecification">Especificaciones del Dispositivo</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Estándar</SelectItem>
                          <SelectItem value="lightweight">Ligero</SelectItem>
                          <SelectItem value="electric">Eléctrico</SelectItem>
                          <SelectItem value="pediatric">Pediátrico</SelectItem>
                          <SelectItem value="bariatric">Bariátrico</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Duración Estimada de Uso</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="temporary">Temporal (menos de 3 meses)</SelectItem>
                          <SelectItem value="short">Corto plazo (3-6 meses)</SelectItem>
                          <SelectItem value="medium">Mediano plazo (6-12 meses)</SelectItem>
                          <SelectItem value="long">Largo plazo (más de 1 año)</SelectItem>
                          <SelectItem value="permanent">Permanente</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Información Adicional</Label>
                      <Textarea
                        id="additionalInfo"
                        placeholder="Por favor, proporcione cualquier información adicional que pueda ser relevante para su solicitud"
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-sky-800 border-b border-sky-100 pb-2">Confirmación</h2>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" className="mt-1" required />
                      <div>
                        <Label htmlFor="terms" className="font-normal">
                          Confirmo que la información proporcionada es correcta y autorizo el contacto para coordinar la
                          entrega del dispositivo.
                        </Label>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700">
                        Enviar Solicitud
                      </Button>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-sky-800 text-white py-8">
        <div className="container text-center">
          <Link href="/" className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-white p-1 rounded-full">
              <Wheelchair className="h-5 w-5 text-sky-800" />
            </div>
            <span className="font-bold text-xl">MobilityAssist</span>
          </Link>
          <p className="text-sky-100 mb-4">Ayudando a mejorar la movilidad y calidad de vida de nuestra comunidad.</p>
          <p className="text-sky-200 text-sm">
            &copy; {new Date().getFullYear()} MobilityAssist. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
