import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShipWheelIcon as Wheelchair, Heart, Phone, Mail, MapPin } from "lucide-react"

export default function Home() {
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
            <Link href="#about" className="text-sky-800 hover:text-sky-600 font-medium">
              Acerca de
            </Link>
          </nav>
          <Button asChild className="bg-sky-600 hover:bg-sky-700">
            <Link href="/form">Solicitar Evaluacion </Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-sky-50 to-white py-16 md:py-24">
          <div className="container grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-sky-900 leading-tight">
                Ayudando a mejorar la movilidad
              </h1>
              <p className="text-lg text-sky-800">
              Ofrecer asistencia a los miembros de La Iglesia de Jesucristo de los Santos de los Últimos Días que necesitan dispositivos de movilidad. Antes de recibir una silla de ruedas, los solicitantes deben pasar por una evaluación. Tras la evaluación, se les brindará acceso a un catálogo de opciones accesibles para restaurar su independencia y esperanza, siguiendo el ejemplo de amor y servicio de Jesucristo.
              </p>
              <blockquote className="border-l-4 border-sky-300 pl-4 italic text-sky-700">
                "Cada alma tiene un valor infinito ante Dios." — Presidente Russell M. Nelson
              </blockquote>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link href="/form">Solicitar Dispositivo</Link>
                </Button>
                <Button asChild variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
                  <Link href="/catalog">Ver Catálogo</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <div className="absolute inset-0 bg-sky-200 rounded-lg -rotate-3"></div>
              <img
                src="/wheelchair-hero.webp?height=400&width=600"
                alt="Persona en silla de ruedas siendo asistida"
                className="relative rounded-lg shadow-lg w-full h-full object-cover rotate-2"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center text-sky-900 mb-12">Pasos a seguir</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-sky-50 p-6 rounded-lg shadow-sm border border-sky-100 text-center">
                <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wheelchair className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-sky-800 mb-2">Llenar formulario en linea</h3>
                <p className="text-sky-700">
                  Completar el formulario de solicitud con información personal y necesidades específicas para recibir una evaluación de parte de un personal certificado.
                </p>
              </div>
              <div className="bg-sky-50 p-6 rounded-lg shadow-sm border border-sky-100 text-center">
                <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-sky-800 mb-2">Identificar dispositivos de movilidad</h3>
                <p className="text-sky-700">
                  Al completar la evaluacion, se identifica el dispositivo que se adapte mejor a las necesidades de la persona solicitante y su entorno.
                </p>
              </div>
              <div className="bg-sky-50 p-6 rounded-lg shadow-sm border border-sky-100 text-center">
                <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-sky-800 mb-2">Entrega a Domicilio</h3>
                <p className="text-sky-700">
                  Coordinar la entrega de dispositivos directamente a su hogar para mayor comodidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-sky-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-sky-900 mb-6">Acerca de</h2>
              <p className="text-lg text-sky-800 mb-6">
                Servir a los miembros de la iglesia que enfrentan desafíos de movilidad,
                proporcionándoles los dispositivos que necesitan para participar plenamente en la vida familiar,
                comunitaria y espiritual.
              </p>
              <blockquote className="border-l-4 border-sky-300 pl-4 italic text-sky-700 text-left mb-8">
                "Llevad los unos las cargas de los otros, y cumplid así la ley de Cristo." — Gálatas 6:2
              </blockquote>
              <Button asChild className="bg-sky-600 hover:bg-sky-700">
                <Link href="/form">Solicitar evaluación</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center text-sky-900 mb-12">Testimonios</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-sky-50 p-6 rounded-lg shadow-sm border border-sky-100">
                <p className="italic text-sky-700 mb-4">
                  "Gracias a este programa, pude obtener una silla de ruedas que me permite asistir a las reuniones
                  dominicales. Ha sido una bendición para mi vida espiritual."
                </p>
                <p className="font-semibold text-sky-900">— María G.</p>
              </div>
              <div className="bg-sky-50 p-6 rounded-lg shadow-sm border border-sky-100">
                <p className="italic text-sky-700 mb-4">
                  "El andador que recibí me ha dado independencia y seguridad. Estoy muy agradecido por este servicio
                  que demuestra el amor cristiano en acción."
                </p>
                <p className="font-semibold text-sky-900">— Juan P.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-sky-100">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-sky-900 mb-6">¿Necesitas un dispositivo de movilidad?</h2>
            <p className="text-lg text-sky-800 mb-8 max-w-2xl mx-auto">
              Completa nuestro formulario para solicitar el dispositivo que necesitas o explora nuestro catálogo para
              ver las opciones disponibles.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-sky-600 hover:bg-sky-700">
                <Link href="/form">Completar Formulario</Link>
              </Button>
              <Button asChild variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
                <Link href="/catalog">Ver Catálogo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-sky-800 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="bg-white p-1 rounded-full">
                  <Wheelchair className="h-5 w-5 text-sky-800" />
                </div>
                <span className="font-bold text-xl">MobilityAssist</span>
              </Link>
              <p className="text-sky-100">''Llevad los unos las cargas de los otros, y cumplid así la ley de Cristo.'' — Gálatas 6:2</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>contacto@mobilityassist.org</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Calle Principal 123, Ciudad</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/form" className="hover:underline">
                    Solicitar
                  </Link>
                </li>
                <li>
                  <Link href="/catalog" className="hover:underline">
                    Catálogo
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:underline">
                    Acerca de
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-sky-700 mt-8 pt-8 text-center text-sky-200">
            <p>&copy; {new Date().getFullYear()} MobilityAssist. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
