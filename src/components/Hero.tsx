import { MessageCircle } from "lucide-react"
import { handleWhatsAppContact } from "../utils"

const Hero = () => {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BhfGVufDB8fDB8fHww" alt="Hero image" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                    Tu Bienestar,
                    <span className="text-purple-300 block">Mi Pasión</span>
                </h1>
                <p className="text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
                    Experimenta el equilibrio perfecto entre cuerpo y mente con tratamientos personalizados.
                    Un emprendimiento dedicado exclusivamente a tu comfort y relajación.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => handleWhatsAppContact('¡Hola! Me gustaría reservar una sesión de masajes. ¿Podrían ayudarme con la disponibilidad?')}
                        className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-sm hover:from-purple-700 hover:to-purple-800 transition-all text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 justify-center"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Reservar por WhatsApp
                    </button>
                    <a
                        href="#servicios"
                        className="border-2 border-white text-white px-8 py-4 rounded-sm hover:bg-white hover:text-purple-700 transition-all text-lg font-medium"
                    >
                        Ver Servicios
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero