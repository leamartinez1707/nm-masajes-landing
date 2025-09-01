import { MessageCircle } from "lucide-react"
import { handleWhatsAppContact } from "../utils"

const WhatsappButton = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={() => handleWhatsAppContact('¡Hola! Me gustaría obtener más información sobre sus servicios de masajes.')}
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 whatsapp-float animate-pulse-soft"
                aria-label="Contactar por WhatsApp"
            >
                <MessageCircle className="w-8 h-8" />
            </button>
        </div>
    )
}

export default WhatsappButton