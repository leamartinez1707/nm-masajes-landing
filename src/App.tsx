import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Star, Check, MessageCircle } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppContact = (message: string) => {
    const phoneNumber = '+59898323837';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s+/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola! Soy ${formData.nombre}.

Estoy interesado/a en: ${formData.servicio}

Mi número: ${formData.telefono}

Mensaje: ${formData.mensaje}

¡Espero su respuesta!`;
    handleWhatsAppContact(message);
  };

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <header className="bg-white shadow-lg fixed w-full z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img
                src="/nm_log.png" 
                alt="NM Masajes Logo" 
                className="h-10 w-auto mr-3"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">NM Masajes</h1>
                <span className="text-sm text-gray-600">Bienestar y Relajación</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Servicios</a>
              <a href="#nosotros" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Nosotros</a>
              <a href="#precios" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Precios</a>
              <a href="#contacto" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Contacto</a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors" onClick={toggleMenu}>Inicio</a>
                <a href="#servicios" className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors" onClick={toggleMenu}>Servicios</a>
                <a href="#nosotros" className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors" onClick={toggleMenu}>Nosotros</a>
                <a href="#precios" className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors" onClick={toggleMenu}>Precios</a>
                <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors" onClick={toggleMenu}>Contacto</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-warm-50 via-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-10">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-bold text-earth-900 mb-6 leading-tight">
                Bienestar y Relajación
                <span className="text-primary-600 block">Profesional</span>
              </h2>
              <p className="text-xl text-earth-700 mb-8 leading-relaxed">
                Descubre el equilibrio perfecto entre cuerpo y mente con nuestros masajes terapéuticos y relajantes. 
                Tu bienestar es nuestra prioridad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => handleWhatsAppContact('¡Hola! Me gustaría reservar una sesión de masajes. ¿Podrían ayudarme con la disponibilidad?')}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full hover:from-green-700 hover:to-green-800 transition-all text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 flex justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Reservar por WhatsApp
                </button>
                <a
                  href="#servicios"
                  className="border-2 border-primary-600 text-primary-700 px-8 py-4 rounded-full hover:bg-primary-600 hover:text-white transition-all text-lg font-medium"
                >
                  Ver Servicios
                </a>
              </div>
            </div>
            <div className="relative">
              <video
                src="/video/spa_room.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl shadow-2xl w-full h-96 object-cover border-4 border-white"
              >
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tratamientos especializados para tu bienestar y relajación
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Masaje Relajante */}
            <div className="bg-orange-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-orange-200 hover:border-orange-400 transform hover:-translate-y-2">
              <img
                src="https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg"
                alt="Masaje relajante"
                className="w-full h-48 object-cover rounded-xl mb-6 shadow-md"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Masaje Relajante</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Perfecto para liberar el estrés diario. Técnicas suaves que calman la mente y relajan profundamente los músculos tensos.
              </p>
              <div className="flex items-center text-orange-600">
                <Star className="w-5 h-5 mr-2 fill-current" />
                <span className="font-medium">Ideal para: Estrés, ansiedad, insomnio</span>
              </div>
            </div>

            {/* Drenaje Linfático */}
            <div className="bg-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-green-200 hover:border-green-400 transform hover:-translate-y-2">
              <img
                src="https://images.pexels.com/photos/6621335/pexels-photo-6621335.jpeg"
                alt="Drenaje linfático"
                className="w-full h-48 object-cover rounded-xl mb-6 shadow-md"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Drenaje Linfático</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Técnica especializada que ayuda a eliminar toxinas y reducir la retención de líquidos. Mejora la circulación linfática.
              </p>
              <div className="flex items-center text-green-600">
                <Star className="w-5 h-5 mr-2 fill-current" />
                <span className="font-medium">Ideal para: Detox, retención de líquidos</span>
              </div>
            </div>

            {/* Masaje Modelador */}
            <div className="bg-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-200 hover:border-blue-400 transform hover:-translate-y-2">
              <img
                src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg"
                alt="Masaje modelador"
                className="w-full h-48 object-cover rounded-xl mb-6 shadow-md"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Masaje Modelador</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Tratamiento estético que ayuda a modelar la figura, reducir medidas y mejorar la apariencia de la piel.
              </p>
              <div className="flex items-center text-blue-600">
                <Star className="w-5 h-5 mr-2 fill-current" />
                <span className="font-medium">Ideal para: Modelado corporal, reducción de medidas</span>
              </div>
            </div>

            {/* Piedras Calientes */}
            <div className="bg-red-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-red-200 hover:border-red-400 transform hover:-translate-y-2">
              <img
                src="https://images.pexels.com/photos/7176301/pexels-photo-7176301.jpeg"
                alt="Masaje con piedras calientes"
                className="w-full h-48 object-cover rounded-xl mb-6 shadow-md"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Piedras Calientes</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                El calor de las piedras volcánicas penetra profundamente, relajando músculos y mejorando la circulación sanguínea.
              </p>
              <div className="flex items-center text-red-600">
                <Star className="w-5 h-5 mr-2 fill-current" />
                <span className="font-medium">Ideal para: Relajación profunda, circulación</span>
              </div>
            </div>

            {/* Masaje Descontracturante */}
            <div className="bg-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-purple-200 hover:border-purple-400 transform hover:-translate-y-2">
              <img
                src="https://images.pexels.com/photos/5659052/pexels-photo-5659052.jpeg"
                alt="Masaje descontracturante"
                className="w-full h-48 object-cover rounded-xl mb-6 shadow-md"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Masaje Descontracturante</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Tratamiento específico para dolores musculares y contracturas. Técnicas avanzadas para problemas posturales.
              </p>
              <div className="flex items-center text-purple-600">
                <Star className="w-5 h-5 mr-2 fill-current" />
                <span className="font-medium">Ideal para: Contracturas, dolores musculares</span>
              </div>
            </div>

            {/* Vendas Neuromusculares */}
            <div className="bg-yellow-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-yellow-200 hover:border-yellow-400 transform hover:-translate-y-2">
              <img
                src="https://images.pexels.com/photos/6663515/pexels-photo-6663515.jpeg"
                alt="Aplicación de vendas neuromusculares"
                className="w-full h-48 object-cover rounded-xl mb-6 shadow-md"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vendas Neuromusculares</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Aplicación de vendas especializadas que ayudan en la recuperación muscular y mejoran el rendimiento físico.
              </p>
              <div className="flex items-center text-yellow-600">
                <Star className="w-5 h-5 mr-2 fill-current" />
                <span className="font-medium">Ideal para: Recuperación, soporte muscular</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre NM Masajes</h2>
              <p className="text-lg text-earth-700 mb-6 leading-relaxed">
                En NM Masajes, creemos que el bienestar es fundamental para una vida plena. Con años de experiencia en 
                el cuidado integral de la salud, nuestro equipo de terapeutas especializados se dedica a brindar 
                tratamientos personalizados que restauran el equilibrio entre cuerpo, mente y espíritu.
              </p>
              <p className="text-lg text-earth-700 mb-8 leading-relaxed">
                Utilizamos técnicas especializadas y productos de la más alta calidad. Cada sesión es una experiencia 
                única diseñada específicamente para tus necesidades particulares y tu bienestar integral.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center p-4 bg-white/70 rounded-lg backdrop-blur-sm">
                  <Check className="w-6 h-6 text-secondary-600 mr-3" />
                  <span className="text-earth-700 font-medium">Terapeutas Especializados</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">Montevideo, Uruguay</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">info@nmmasajes.com</span>
                </div>
                <div className="flex items-center p-4 bg-white/70 rounded-lg backdrop-blur-sm">
                  <Check className="w-6 h-6 text-primary-600 mr-3" />
                  <span className="text-earth-700 font-medium">Atención Personalizada</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg"
                alt="Spa ambiente"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 bg-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Precios y Promociones</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos precios accesibles para que puedas disfrutar del bienestar que mereces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Precio Individual */}
            <div className="bg-orange-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-orange-200 hover:border-orange-400 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sesión Individual</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-orange-600">$2,200</span>
                <span className="text-gray-600 ml-2">UYU</span>
              </div>
              <ul className="text-gray-700 space-y-3 mb-8">
                <li>• 60 minutos de tratamiento</li>
                <li>• Consulta personalizada</li>
                <li>• Productos premium incluidos</li>
                <li>• Ambiente profesional</li>
              </ul>
              <button
                onClick={() => handleWhatsAppContact('Hola! Me interesa una sesión individual de masajes. ¿Podrían darme más información sobre disponibilidad y reservas?')}
                className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-full hover:from-green-700 hover:to-green-800 transition-all font-medium shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Reservar por WhatsApp
              </button>
            </div>

            {/* Paquete 3 Sesiones */}
            <div className="bg-green-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-pink-400 relative transform hover:-translate-y-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">Más Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Paquete 3 Sesiones</h3>
              <div className="mb-2">
                <span className="text-lg text-earth-500 line-through">$6,600</span>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-green-600">$5,500</span>
                <span className="text-gray-600 ml-2">UYU</span>
              </div>
              <ul className="text-gray-700 space-y-3 mb-8">
                <li>• 3 sesiones de 60 minutos</li>
                <li>• Ahorro de $1,100</li>
                <li>• Válido por 3 meses</li>
                <li>• Tratamiento personalizado</li>
              </ul>
              <button
                onClick={() => handleWhatsAppContact('¡Hola! Me interesa el paquete de 3 sesiones con descuento. ¿Podrían darme más detalles sobre cómo adquirirlo?')}
                className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-full hover:from-green-700 hover:to-green-800 transition-all font-medium shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Consultar por WhatsApp
              </button>
            </div>

            {/* Membresía Mensual */}
            <div className="bg-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-blue-200 hover:border-blue-400 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Plan Mensual</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">$7,500</span>
                <span className="text-gray-600 ml-2">UYU/mes</span>
              </div>
              <ul className="text-gray-700 space-y-3 mb-8">
                <li>• 4 sesiones mensuales</li>
                <li>• 25% descuento adicional</li>
                <li>• Prioridad en reservas</li>
                <li>• Consultas incluidas</li>
              </ul>
              <button
                onClick={() => handleWhatsAppContact('Hola! Me interesa el plan mensual de 4 sesiones. ¿Podrían explicarme cómo funciona la suscripción?')}
                className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-full hover:from-green-700 hover:to-green-800 transition-all font-medium shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Consultar Plan
              </button>
            </div>
          </div>

          {/* Ofertas Especiales */}
          <div className="bg-gradient-to-r from-orange-500 to-green-500 rounded-2xl p-8 text-white text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Promociones Especiales</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-3">Primera Visita</h4>
                <p className="text-primary-100 mb-2">40% de descuento en tu primera sesión</p>
                <p className="text-2xl font-bold">Solo $1,320 UYU</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-3">Referidos</h4>
                <p className="text-primary-100 mb-2">Trae un amigo y ambos obtienen 20% off</p>
                <p className="text-2xl font-bold">¡Bienestar compartido!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contáctanos</h2>
            <p className="text-xl text-earth-600">
              Estamos aquí para ayudarte. Reserva tu sesión o consulta cualquier duda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-orange-100 rounded-2xl p-8 shadow-xl border border-orange-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">+598 98 323 837</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-orange-600 mr-3 mt-1" />
                    <div className="text-gray-700">
                      <p className="font-medium mb-2">Horarios de Atención:</p>
                      <p>Lunes, Miércoles, Viernes y Sábados: 9:00 - 20:00</p>
                      <p>Martes y Jueves: 15:00 - 20:00</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Montevideo, Uruguay</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">info@nmmasajes.com</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-100 rounded-2xl p-8 shadow-xl border border-orange-200 mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Reserva tu Sesión</h3>
                
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-earth-700 font-medium mb-2">Nombre Completo</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-warm-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/70 backdrop-blur-sm"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-earth-700 font-medium mb-2">WhatsApp</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-warm-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/70 backdrop-blur-sm"
                      placeholder="Tu número de WhatsApp"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-earth-700 font-medium mb-2">Servicio de Interés</label>
                    <select 
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-warm-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/70 backdrop-blur-sm"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="Masaje Relajante">Masaje Relajante</option>
                      <option value="Masaje Terapéutico">Masaje Terapéutico</option>
                      <option value="Masaje Deportivo">Masaje Deportivo</option>
                      <option value="Reflexología">Reflexología</option>
                      <option value="Piedras Calientes">Piedras Calientes</option>
                      <option value="Drenaje Linfático">Drenaje Linfático</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-earth-700 font-medium mb-2">Mensaje</label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-warm-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/70 backdrop-blur-sm"
                      placeholder="Cuéntanos sobre tus necesidades o preferencias"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all font-medium text-lg shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Contactar por WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-earth-600">
              La satisfacción de nuestros clientes es nuestra mejor recomendación
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-warm-100 to-primary-200 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-warm-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-earth-700 mb-4 italic">
                "Increíble experiencia. Los masajes terapéuticos me ayudaron muchísimo con mis dolores de espalda. 
                El ambiente es súper relajante y profesional."
              </p>
              <div className="font-semibold text-earth-900">María González</div>
              <div className="text-sm text-earth-600">Masaje Terapéutico</div>
            </div>

            <div className="bg-gradient-to-br from-warm-100 to-primary-200 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-warm-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-earth-700 mb-4 italic">
                "El masaje con piedras calientes fue una experiencia única. Salí completamente renovada. 
                Definitivamente voy a volver."
              </p>
              <div className="font-semibold text-earth-900">Ana Rodríguez</div>
              <div className="text-sm text-earth-600">Piedras Calientes</div>
            </div>

            <div className="bg-gradient-to-br from-warm-100 to-primary-200 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-warm-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-earth-700 mb-4 italic">
                "Como deportista, necesito cuidar mi cuerpo. Los masajes deportivos aquí son excelentes 
                para mi recuperación muscular."
              </p>
              <div className="font-semibold text-earth-900">Carlos Méndez</div>
              <div className="text-sm text-earth-600">Masaje Deportivo</div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => handleWhatsAppContact()}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 whatsapp-float animate-pulse-soft"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 border-t-4 border-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/nm_log.png" 
                alt="NM Masajes Logo" 
                className="h-8 w-auto mr-3 filter brightness-0 invert"
              />
              <h3 className="text-2xl font-bold">NM Masajes</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Tu bienestar es nuestra pasión. Descubre el equilibrio perfecto entre cuerpo y mente.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#inicio" className="text-gray-300 hover:text-orange-400 transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-300 hover:text-orange-400 transition-colors">Servicios</a>
              <a href="#nosotros" className="text-gray-300 hover:text-orange-400 transition-colors">Nosotros</a>
              <a href="#precios" className="text-gray-300 hover:text-orange-400 transition-colors">Precios</a>
            </div>
            <div className="border-t border-gray-600 pt-8">
              <p className="text-gray-400">
                © 2025 NM Masajes. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;