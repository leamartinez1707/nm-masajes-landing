import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

interface ContactProps {
    handleFormSubmit: (e: React.FormEvent) => void;
    formData: any;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
}
const Contact = ({ handleFormSubmit, formData, handleInputChange }: ContactProps) => {
    return (
        <section id="contacto" className="py-20 bg-purple-50 mx-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Contáctanos</h2>
                    <p className="text-xl text-gray-600">
                        Estoy aquí para ayudarte. Reserva tu sesión o consulta cualquier duda sobre los tratamientos
                    </p>
                </div>

                <div className="flex gap-12">
                    {/* Contact Info */}
                    <div className="flex flex-col lg:flex-row items-center justify-between mx-auto w-full">
                        <div className="bg-white rounded-sm p-8 shadow-xl border border-purple-200 w-full max-w-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Información de Contacto</h3>

                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-purple-600 mr-3" />
                                    <span className="text-gray-700">+598 98 323 837</span>
                                </div>
                                <div className="flex items-start">
                                    <Clock className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                                    <div className="text-gray-700">
                                        <p className="font-medium mb-2">Horarios de Atención:</p>
                                        <p>Lunes, Miércoles, Viernes y Sábados: 9:00 - 20:00</p>
                                        <p>Martes y Jueves: 15:00 - 20:00</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                                    <span className="text-gray-700">Montevideo, La Teja</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 text-purple-600 mr-3" />
                                    <span className="text-gray-700">natimarti357@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-sm p-8 shadow-xl border border-purple-200 mt-8 w-full max-w-2xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Reserva tu Sesión</h3>

                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Nombre Completo</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                                        placeholder="Tu nombre completo"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">WhatsApp</label>
                                    <input
                                        type="tel"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                                        placeholder="Tu número de WhatsApp"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Servicio de Interés</label>
                                    <select
                                        name="servicio"
                                        value={formData.servicio}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                                    >
                                        <option value="">Selecciona un servicio</option>
                                        <option value="Masaje Relajante">Masaje Relajante - $990</option>
                                        <option value="Masaje Descontracturante">Masaje Descontracturante - $990</option>
                                        <option value="Drenaje Linfático">Drenaje Linfático - $990</option>
                                        <option value="Masaje Reductor">Masaje Reductor - $1,200</option>
                                        <option value="Masaje Modelador">Masaje Modelador</option>
                                        <option value="Piedras Calientes">Piedras Calientes</option>
                                        <option value="Vendas Neuromusculares">Vendas Neuromusculares</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Mensaje</label>
                                    <textarea
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                                        placeholder="Cuéntanos sobre tus necesidades o preferencias"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-sm hover:from-purple-700 hover:to-purple-800 transition-all font-medium text-lg shadow-lg flex items-center justify-center gap-2"
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
    )
}

export default Contact