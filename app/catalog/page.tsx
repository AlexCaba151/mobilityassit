"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { ShipWheelIcon as Wheelchair, ArrowLeft, Search, Filter, ChevronDown, ChevronUp, Info } from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Mock data for the catalog
const catalogItems = [
  {
    id: 1,
    name: "Silla de Ruedas Activa",
    category: "wheelchair",
    type: "standard",
    description: "Esta silla de ruedas activa es ideal para personas que desean ser activas e independientes en entornos urbanos. Un triciclo opcional, que se puede acoplar o desmontar según sea necesario, la hace ideal para quienes necesitan recorrer largas distancias.",
    features: [
      "Profundidad de asiento ajustable: 300–450 mm",
      'Anchos disponibles: 300–500 mm',
      'Ruedas: traseras de 24” con neumático, delanteras de 130 mm en poliuretano',
    ],
    image: "/active-wheelchair.jpg?height=300&width=300",
    availability: true,
  },
  
  {
    id: 2,
    name: "Silla de Ruedas Todo Terreno",
    category: "wheelchair",
    type: "Heavy",
    description: "La silla de ruedas todoterreno ofrece mayor estabilidad gracias a su mayor distancia entre ejes. Es ideal para personas que desean ser activas e independientes y que necesitan desplazarse por terrenos irregulares, típicos de las zonas rurales. Puede utilizarse en zonas urbanas o semiurbanas con condiciones irregulares similares a las de las zonas rurales.",
    features: [
      "Anchos disponibles: 300, 350, 400, 450 y 500 mm",
      'Profundidad del asiento ajustable: 300–450 mm (según el ancho)',
      "Reposapiés ajustable: en altura, ángulo de la base y posición frontal/trasera",
    ],
    image: "/all-terrain-wheelchair.jpg?height=300&width=300",
    availability: true,
  },

  {
    id: 3,
    name: "Silla de ruedas para terrenos mixtos",
    category: "wheelchair",
    type: "heavy",
    description: "Andador plegable con cuatro ruedas y asiento incorporado para descanso.",
    features: [
      "Anchos disponibles: 300, 350, 400, 450 y 500 mm",
      "Profundidad del asiento ajustable: 300, 350, 400 o 450 mm (según ancho)",
      "Respaldo plegable: regulable en altura (300, 350 o 400 mm) y ángulo (78° a 126°, en incrementos de 6°), con correas de tensión ajustables",
      "Reposapiés ajustable: en altura, ángulo y posición (adelante/atrás)",
      "Altura del asiento al suelo: 470, 490 o 510 mm",
    ],
    image: "/cross-terrain-wheelchair.jpg?height=300&width=300",
    availability: true,
  },

  {
    id: 4,
    name: "Silla Estándar",
    category: "wheelchair",
    type: "standard",
    description: "La silla de ruedas estándar sería apropiada para personas que utilizarán la silla de ruedas principalmente en casa o tendrán el apoyo de un cuidador cuando salgan de casa.",
    features: [
      "Anchos disponibles: 300, 350, 400, 450, 500, 550 y 600 mm",
      "Profundidad del asiento ajustable: 330, 380 o 430 mm",
      "Altura del respaldo ajustable: 350, 400 o 450 mm",
      "Reposapiés desmontable: ajustable en altura (permite cambiar la posición de la placa) y ángulo",
    ],
    image: "/standard-wheelchair.jpg?height=300&width=300",
    availability: true,
  },

  {
    id: 5,
    name: "Silla Pediatríca",
    category: "Wheelchair",
    type: "standard",
    description: "La silla de ruedas activa pediátrica sería apropiada para los niños que quieren ser activos e independientes.",
    features: [
      "Anchos del asiento: 250, 300, 350 y 400 mm",

      "Profundidad del asiento: fija de 250 mm y ajustable entre 300 y 400 mm",
      
      "Respaldo plegable: ajustable en altura (300–400 mm) y ángulo (78°–126°), con correas de tensión",
      
    ],
    image: "/pediatric-wheelchair.jpg?height=300&width=300",
    availability: true,
  },

  {
    id: 6,
    name: "Bastón",
    category: "cane",
    type: "one",
    description: "Bastón con base de cuatro patas para mayor estabilidad y soporte.",
    features: [
      "Almohadillas para muletas axilares",
      "puntas de repuesto para ayudas para caminar",
    ],
    image: "/walking-aid1.jpg?height=300&width=300",
    availability: true,
  },

  {
    id: 7,
    name: "Muletas Axilares",
    category: "cane",
    type: "one",
    description: "Silla de ruedas eléctrica con batería de larga duración y controles fáciles de usar.",
    features: [
      "muletas de aluminio ajustables.",
    ],
    image: "/walking-aid2.jpg?height=300&width=300",
    availability: false,
  },

  {
    id: 8,
    name: "Muletas de antebrazo",
    category: "cane",
    type: "one",
    description: "Silla de ruedas diseñada específicamente para niños con ajustes de crecimiento.",
    features: [
      "Capacidad de peso: 150 lbs",
      "Ancho del asiento ajustable",
      "Respaldo reclinable",
      "Diseño colorido y atractivo",
      "Reposapiés elevables",
    ],
    image: "/walking-aid3.jpg?height=300&width=300",
    availability: true,
  },

  {
    id: 8,
    name: "Andador",
    category: "walk aid",
    type: "one",
    description: "Silla de ruedas diseñada específicamente para niños con ajustes de crecimiento.",
    features: [
      "Capacidad de peso: 150 lbs",
      "Ancho del asiento ajustable",
      "Respaldo reclinable",
      "Diseño colorido y atractivo",
      "Reposapiés elevables",
    ],
    image: "/walking-aid4.jpg?height=300&width=300",
    availability: true,
  },
]

export default function CatalogPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [availabilityFilter, setAvailabilityFilter] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)

  // Filter items based on search, category, type, and availability
  const filteredItems = catalogItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeTab === "all" || item.category === activeTab
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(item.type)
    const matchesAvailability = !availabilityFilter || item.availability

    return matchesSearch && matchesCategory && matchesType && matchesAvailability
  })

  // Get unique types for filter
  const types = Array.from(new Set(catalogItems.map((item) => item.type)))

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
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
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-sky-600 hover:text-sky-800 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>
            <h1 className="text-3xl font-bold text-sky-900">Catálogo de Dispositivos de Movilidad</h1>
            <p className="text-sky-700 mt-2">
              Explore nuestra selección de dispositivos de movilidad disponibles para solicitud
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters - Desktop */}
            <div className="hidden lg:block w-64 bg-white p-6 rounded-lg shadow-sm h-fit">
              <h2 className="font-semibold text-lg text-sky-900 mb-4">Filtros</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-sky-800 mb-2">Tipo</h3>
                  <div className="space-y-2">
                    {types.map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={`type-${type}`}
                          checked={selectedTypes.includes(type)}
                          onCheckedChange={() => handleTypeChange(type)}
                        />
                        <Label htmlFor={`type-${type}`} className="capitalize">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-sky-800 mb-2">Disponibilidad</h3>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="availability"
                      checked={availabilityFilter}
                      onCheckedChange={() => setAvailabilityFilter(!availabilityFilter)}
                    />
                    <Label htmlFor="availability">Solo mostrar disponibles</Label>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Search and Filter Bar */}
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      placeholder="Buscar dispositivos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button
                    variant="outline"
                    className="md:w-auto flex items-center gap-2 lg:hidden"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter size={18} />
                    Filtros
                    {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </Button>
                </div>

                {/* Mobile Filters */}
                {showFilters && (
                  <div className="mt-4 border-t pt-4 lg:hidden">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="type">
                        <AccordionTrigger className="text-sm font-medium">Tipo</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            {types.map((type) => (
                              <div key={type} className="flex items-center space-x-2">
                                <Checkbox
                                  id={`mobile-type-${type}`}
                                  checked={selectedTypes.includes(type)}
                                  onCheckedChange={() => handleTypeChange(type)}
                                />
                                <Label htmlFor={`mobile-type-${type}`} className="capitalize">
                                  {type}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="availability">
                        <AccordionTrigger className="text-sm font-medium">Disponibilidad</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="mobile-availability"
                              checked={availabilityFilter}
                              onCheckedChange={() => setAvailabilityFilter(!availabilityFilter)}
                            />
                            <Label htmlFor="mobile-availability">Solo mostrar disponibles</Label>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                )}
              </div>

              {/* Category Tabs */}
              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="all">Todos</TabsTrigger>
                  <TabsTrigger value="wheelchair">Sillas de Ruedas</TabsTrigger>
                  <TabsTrigger value="walker">Andadores</TabsTrigger>
                  <TabsTrigger value="cane">Bastones</TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Results */}
              {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="aspect-square relative bg-sky-50">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="object-contain w-full h-full p-4"
                        />
                        {!item.availability && (
                          <div className="absolute top-2 right-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                            No disponible
                          </div>
                        )}
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <CardDescription className="line-clamp-2">{item.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="flex justify-between">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="flex items-center gap-1">
                              <Info size={16} />
                              Detalles
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[500px]">
                            <DialogHeader>
                              <DialogTitle>{item.name}</DialogTitle>
                              <DialogDescription>{item.description}</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="aspect-square relative bg-sky-50 rounded-md">
                                <img
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  className="object-contain w-full h-full p-4"
                                />
                              </div>
                              <div>
                                <h4 className="font-medium mb-2">Características:</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                  {item.features.map((feature, index) => (
                                    <li key={index} className="text-sm">
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="flex items-center">
                                <div
                                  className={`w-3 h-3 rounded-full mr-2 ${item.availability ? "bg-green-500" : "bg-red-500"}`}
                                ></div>
                                <span>{item.availability ? "Disponible" : "No disponible actualmente"}</span>
                              </div>
                            </div>
                            <div className="flex justify-end">
                              {item.availability && (
                                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                                  <Link href="/form">Solicitar</Link>
                                </Button>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                        {item.availability && (
                          <Button asChild className="bg-sky-600 hover:bg-sky-700">
                            <Link href="/form">Solicitar</Link>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <p className="text-lg text-sky-800">
                    No se encontraron dispositivos que coincidan con los filtros seleccionados.
                  </p>
                  <Button
                    variant="link"
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedTypes([])
                      setAvailabilityFilter(false)
                      setActiveTab("all")
                    }}
                    className="mt-2"
                  >
                    Limpiar filtros
                  </Button>
                </div>
              )}
            </div>
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
