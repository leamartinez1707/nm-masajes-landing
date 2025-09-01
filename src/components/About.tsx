import { Check, Mail, MapPin } from 'lucide-react'

const About = () => {
    return (
        <section id="nosotros" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre NM Masajes</h2>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Soy una profesional apasionada por el bienestar y la relajación. Mi emprendimiento nació del deseo de
                            brindar un espacio de tranquilidad donde cada persona pueda encontrar el equilibrio que necesita.
                            Con formación especializada y dedicación completa, me enfoco en ofrecer tratamientos de calidad.
                        </p>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Utilizo técnicas especializadas y productos premium para garantizar tu comfort. Cada sesión es
                            personalizada según tus necesidades específicas, creando una experiencia única de bienestar y relajación.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex items-center p-4 bg-white rounded-sm shadow-sm">
                                <Check className="w-6 h-6 text-purple-600 mr-3" />
                                <span className="text-gray-700 font-medium">Atención Profesional</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-sm shadow-sm">
                                <Check className="w-6 h-6 text-purple-600 mr-3" />
                                <span className="text-gray-700 font-medium">Tratamientos Personalizados</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-sm shadow-sm">
                                <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                                <span className="text-gray-700">Montevideo, La Teja</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-sm shadow-sm">
                                <Mail className="w-5 h-5 text-purple-600 mr-3" />
                                <span className="text-gray-700">nataliasantos@hotmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <video
                            src="/videos/spa_room.mp4"
                            autoPlay
                            loop
                            muted
                            className="rounded-sm shadow-2xl w-full h-[500px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About