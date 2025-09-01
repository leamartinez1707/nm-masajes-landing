import { MessageCircle } from 'lucide-react'
import { handleWhatsAppContact } from '../utils'

const Pricing = () => {
  return (
    <section id="precios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Precios y Promociones</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos precios accesibles para que puedas disfrutar del bienestar que mereces
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Precio Individual */}
          <div className="bg-gray-50 rounded-sm p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Masajes Básicos</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-purple-600">$990</span>
              <span className="text-gray-600 ml-2">UYU</span>
            </div>
            <ul className="text-gray-700 space-y-3 mb-8">
              <li>• 60 minutos de tratamiento</li>
              <li>• Masaje Relajante</li>
              <li>• Masaje Descontracturante</li>
              <li>• Drenaje Linfático</li>
            </ul>
            <button
              onClick={() => handleWhatsAppContact('Hola! Me interesa un masaje (relajante, descontracturante o drenaje linfático) por $990. ¿Podrían darme más información sobre disponibilidad y reservas?')}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-sm hover:from-purple-700 hover:to-purple-800 transition-all font-medium shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Reservar por WhatsApp
            </button>
          </div>

          {/* Masajes Reductores */}
          <div className="bg-orange-50 rounded-sm p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-orange-400 relative transform hover:-translate-y-2">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-orange-600 text-white px-4 py-2 rounded-sm text-sm font-medium shadow-lg">Especializado</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Masajes Reductores</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-orange-600">$1,200</span>
              <span className="text-gray-600 ml-2">UYU</span>
            </div>
            <ul className="text-gray-700 space-y-3 mb-8">
              <li>• 60 minutos de tratamiento</li>
              <li>• Productos especializados</li>
              <li>• Técnicas reductoras</li>
              <li>• Resultados visibles</li>
            </ul>
            <button
              onClick={() => handleWhatsAppContact('Hola! Me interesa un masaje reductor por $1,200. ¿Podrían darme más información sobre este tratamiento especializado?')}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 px-6 rounded-sm hover:from-orange-700 hover:to-orange-800 transition-all font-medium shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Consultar por WhatsApp
            </button>
          </div>

          {/* Paquete 3 Sesiones */}
          <div className="bg-purple-50 rounded-sm p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-purple-400 relative transform hover:-translate-y-2">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-600 text-white px-4 py-2 rounded-sm text-sm font-medium shadow-lg">Más Popular</span>
            </div>
            <div className='flex flex-col justify-between'>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Paquete 3 Sesiones</h3>
                <div className="mb-2">
                  <span className="text-lg text-gray-500 line-through">$2,970</span>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-purple-600">$2,700</span>
                  <span className="text-gray-600 ml-2">UYU</span>
                </div>
                <ul className="text-gray-700 space-y-3 mb-8">
                  <li>• 3 sesiones de 60 minutos</li>
                  <li>• Ahorro de $270</li>
                  <li>• Válido por 3 meses</li>
                  <li>• Combiná diferentes masajes</li>
                </ul>
              </div>
              <button
                onClick={() => handleWhatsAppContact('¡Hola! Me interesa el paquete de 3 sesiones con descuento. ¿Podrían darme más detalles sobre cómo adquirirlo?')}
                className="block w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-sm hover:from-purple-700 hover:to-purple-800 transition-all font-medium shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Consultar por WhatsApp
              </button>
            </div>
          </div>

          {/* Membresía Mensual */}
          <div className="bg-gray-50 rounded-sm p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300 transform hover:-translate-y-2 flex flex-col justify-between">

            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Plan Mensual</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-purple-600">$3,500</span>
                <span className="text-gray-600 ml-2">UYU/mes</span>
              </div>
              <ul className="text-gray-700 space-y-3 mb-8">
                <li>• 4 sesiones mensuales</li>
                <li>• 12% descuento adicional</li>
                <li>• Prioridad en reservas</li>
                <li>• Consultas incluidas</li>
              </ul>
            </>
            <button
              onClick={() => handleWhatsAppContact('Hola! Me interesa el plan mensual de 4 sesiones. ¿Podrían explicarme cómo funciona la suscripción?')}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-sm hover:from-purple-700 hover:to-purple-800 transition-all font-medium shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Consultar por WhatsApp
            </button>
          </div>
        </div>

        {/* Ofertas Especiales */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-sm p-8 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Promociones Especiales</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-sm p-6 backdrop-blur-sm">
              <h4 className="text-xl text-purple-800 font-semibold mb-3">Primera Visita</h4>
              <p className="text-purple-600 mb-2">20% de descuento en tu primera sesión</p>
              <p className="text-2xl text-purple-800 font-bold">Solo $792 UYU</p>
            </div>
            <div className="bg-white rounded-sm p-6 backdrop-blur-sm">
              <h4 className="text-xl text-purple-800 font-semibold mb-3">Referidos</h4>
              <p className="text-purple-600 mb-2">Trae un amigo y ambos obtienen 20% off</p>
              <p className="text-2xl text-purple-800 font-bold">¡Bienestar compartido!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing