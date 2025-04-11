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
import { ShipWheelIcon as Wheelchair, ArrowLeft, FileText, Camera, ChevronRight, ChevronLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function FormPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    ward: "",
    deviceType: "wheelchair",
    deviceSpecification: "",
    duration: "",
    additionalInfo: "",
    medicalDocuments: null as File[] | null,
    photos: null as File[] | null,
    termsAccepted: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, deviceType: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, termsAccepted: checked }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files)
      setFormData((prev) => ({ ...prev, [fieldName]: filesArray }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setFormSubmitted(true)
  }

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1)
    window.scrollTo(0, 0)
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

                {/* Progress Steps */}
                <div className="mb-8">
                  <div className="flex justify-between">
                    <div className={`text-center flex-1 ${currentStep >= 1 ? "text-sky-700" : "text-gray-400"}`}>
                      <div
                        className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${currentStep >= 1 ? "bg-sky-600 text-white" : "bg-gray-200"}`}
                      >
                        1
                      </div>
                      <div className="text-xs mt-1">Información Personal</div>
                    </div>
                    <div className={`text-center flex-1 ${currentStep >= 2 ? "text-sky-700" : "text-gray-400"}`}>
                      <div
                        className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${currentStep >= 2 ? "bg-sky-600 text-white" : "bg-gray-200"}`}
                      >
                        2
                      </div>
                      <div className="text-xs mt-1">Dispositivo</div>
                    </div>
                    <div className={`text-center flex-1 ${currentStep >= 3 ? "text-sky-700" : "text-gray-400"}`}>
                      <div
                        className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${currentStep >= 3 ? "bg-sky-600 text-white" : "bg-gray-200"}`}
                      >
                        3
                      </div>
                      <div className="text-xs mt-1">Documentos</div>
                    </div>
                    <div className={`text-center flex-1 ${currentStep >= 4 ? "text-sky-700" : "text-gray-400"}`}>
                      <div
                        className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${currentStep >= 4 ? "bg-sky-600 text-white" : "bg-gray-200"}`}
                      >
                        4
                      </div>
                      <div className="text-xs mt-1">Resumen</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 h-1 mt-4 rounded-full">
                    <div
                      className="bg-sky-600 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep / 4) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-sky-800 border-b border-sky-100 pb-2">
                        Información Personal
                      </h2>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Nombre</Label>
                          <Input
                            id="firstName"
                            placeholder="Ingrese su nombre"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Apellido</Label>
                          <Input
                            id="lastName"
                            placeholder="Ingrese su apellido"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Correo Electrónico</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="correo@ejemplo.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Teléfono</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(123) 456-7890"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Dirección</Label>
                        <Input
                          id="address"
                          placeholder="Ingrese su dirección completa"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">Ciudad</Label>
                          <Input
                            id="city"
                            placeholder="Ciudad"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">Estado/Provincia</Label>
                          <Input
                            id="state"
                            placeholder="Estado"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">Código Postal</Label>
                          <Input
                            id="zipCode"
                            placeholder="Código Postal"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="ward">Barrio/Rama</Label>
                        <Input
                          id="ward"
                          placeholder="Ingrese su barrio o rama"
                          value={formData.ward}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="pt-4 flex justify-end">
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="bg-sky-600 hover:bg-sky-700 flex items-center gap-2"
                        >
                          Siguiente
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Device Information */}
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-sky-800 border-b border-sky-100 pb-2">
                        Información del Dispositivo
                      </h2>

                      <div className="space-y-2">
                        <Label>Tipo de Dispositivo Necesitado</Label>
                        <RadioGroup
                          value={formData.deviceType}
                          onValueChange={handleRadioChange}
                          className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2"
                        >
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
                        <Select
                          value={formData.deviceSpecification}
                          onValueChange={(value) => handleSelectChange("deviceSpecification", value)}
                        >
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
                        <Select
                          value={formData.duration}
                          onValueChange={(value) => handleSelectChange("duration", value)}
                        >
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
                          value={formData.additionalInfo}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="pt-4 flex justify-between">
                        <Button type="button" variant="outline" onClick={prevStep} className="flex items-center gap-2">
                          <ChevronLeft className="h-4 w-4" />
                          Anterior
                        </Button>
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="bg-sky-600 hover:bg-sky-700 flex items-center gap-2"
                        >
                          Siguiente
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Documents Upload */}
                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-sky-800 border-b border-sky-100 pb-2">
                        Documentos y Fotos
                      </h2>

                      <Alert className="bg-sky-50 border-sky-200">
                        <AlertDescription>
                          Para procesar su solicitud, necesitamos documentación médica que respalde su necesidad.
                          También puede incluir fotos que ayuden a entender mejor su situación.
                        </AlertDescription>
                      </Alert>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="medicalDocuments" className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            Documentos Médicos (Requerido)
                          </Label>
                          <p className="text-sm text-muted-foreground mb-2">
                            Por favor, suba documentos médicos que justifiquen la necesidad del dispositivo solicitado
                            (recetas médicas, diagnósticos, etc.)
                          </p>
                          <Input
                            id="medicalDocuments"
                            type="file"
                            multiple
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            onChange={(e) => handleFileChange(e, "medicalDocuments")}
                            required
                            className="cursor-pointer"
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Formatos aceptados: PDF, DOC, DOCX, JPG, PNG. Tamaño máximo: 10MB por archivo.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="photos" className="flex items-center gap-2">
                            <Camera className="h-4 w-4" />
                            Fotos (Opcional)
                          </Label>
                          <p className="text-sm text-muted-foreground mb-2">
                            Si lo desea, puede subir fotos que muestren su situación actual o el entorno donde utilizará
                            el dispositivo.
                          </p>
                          <Input
                            id="photos"
                            type="file"
                            multiple
                            accept=".jpg,.jpeg,.png"
                            onChange={(e) => handleFileChange(e, "photos")}
                            className="cursor-pointer"
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Formatos aceptados: JPG, PNG. Tamaño máximo: 5MB por imagen.
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 flex justify-between">
                        <Button type="button" variant="outline" onClick={prevStep} className="flex items-center gap-2">
                          <ChevronLeft className="h-4 w-4" />
                          Anterior
                        </Button>
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="bg-sky-600 hover:bg-sky-700 flex items-center gap-2"
                        >
                          Revisar Solicitud
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Summary and Confirmation */}
                  {currentStep === 4 && (
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-sky-800 border-b border-sky-100 pb-2">
                        Resumen de la Solicitud
                      </h2>

                      <p className="text-sm text-muted-foreground mb-4">
                        Por favor, revise cuidadosamente la información proporcionada antes de enviar su solicitud.
                      </p>

                      <Card className="border-sky-100">
                        <CardContent className="p-4">
                          <h3 className="font-medium text-sky-800 mb-2">Información Personal</h3>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="text-muted-foreground">Nombre completo:</div>
                            <div>
                              {formData.firstName} {formData.lastName}
                            </div>

                            <div className="text-muted-foreground">Correo electrónico:</div>
                            <div>{formData.email}</div>

                            <div className="text-muted-foreground">Teléfono:</div>
                            <div>{formData.phone}</div>

                            <div className="text-muted-foreground">Dirección:</div>
                            <div>{formData.address}</div>

                            <div className="text-muted-foreground">Ciudad:</div>
                            <div>{formData.city}</div>

                            <div className="text-muted-foreground">Estado/Provincia:</div>
                            <div>{formData.state}</div>

                            <div className="text-muted-foreground">Código postal:</div>
                            <div>{formData.zipCode}</div>

                            <div className="text-muted-foreground">Barrio/Rama:</div>
                            <div>{formData.ward}</div>
                          </div>

                          <Separator className="my-4" />

                          <h3 className="font-medium text-sky-800 mb-2">Información del Dispositivo</h3>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="text-muted-foreground">Tipo de dispositivo:</div>
                            <div className="capitalize">{formData.deviceType}</div>

                            <div className="text-muted-foreground">Especificaciones:</div>
                            <div className="capitalize">{formData.deviceSpecification || "No especificado"}</div>

                            <div className="text-muted-foreground">Duración estimada:</div>
                            <div className="capitalize">{formData.duration || "No especificado"}</div>

                            <div className="text-muted-foreground">Información adicional:</div>
                            <div>{formData.additionalInfo || "No proporcionada"}</div>
                          </div>

                          <Separator className="my-4" />

                          <h3 className="font-medium text-sky-800 mb-2">Documentos Adjuntos</h3>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="text-muted-foreground">Documentos médicos:</div>
                            <div>
                              {formData.medicalDocuments
                                ? `${formData.medicalDocuments.length} documento(s) adjunto(s)`
                                : "No se han adjuntado documentos"}
                            </div>

                            <div className="text-muted-foreground">Fotos:</div>
                            <div>
                              {formData.photos
                                ? `${formData.photos.length} foto(s) adjunta(s)`
                                : "No se han adjuntado fotos"}
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <div className="flex items-start space-x-2 mt-6">
                        <Checkbox
                          id="terms"
                          className="mt-1"
                          checked={formData.termsAccepted}
                          onCheckedChange={handleCheckboxChange}
                          required
                        />
                        <div>
                          <Label htmlFor="terms" className="font-normal">
                            Confirmo que la información proporcionada es correcta y autorizo el contacto para coordinar
                            la entrega del dispositivo.
                          </Label>
                        </div>
                      </div>

                      <div className="pt-4 flex justify-between">
                        <Button type="button" variant="outline" onClick={prevStep} className="flex items-center gap-2">
                          <ChevronLeft className="h-4 w-4" />
                          Anterior
                        </Button>
                        <Button
                          type="submit"
                          disabled={!formData.termsAccepted}
                          className="bg-sky-600 hover:bg-sky-700"
                        >
                          Enviar Solicitud
                        </Button>
                      </div>
                    </div>
                  )}
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
