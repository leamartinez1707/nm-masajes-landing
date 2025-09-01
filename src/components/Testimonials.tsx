import { Star } from 'lucide-react'

const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Lo que dicen nuestros clientes</h2>
                    <p className="text-xl text-gray-600">
                        La satisfacción de nuestros clientes es nuestra mejor recomendación
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white backdrop-blur-sm rounded-sm p-6 shadow-lg border border-purple-200">
                        <div className="flex items-center mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                        </div>
                        <p className="text-gray-700 mb-4 italic">
                            "Increíble experiencia. Los masajes descontracturantes me ayudaron muchísimo con mis dolores de espalda.
                            El ambiente es súper relajante y profesional."
                        </p>
                        <div className="font-semibold text-gray-900">María González</div>
                        <div className="text-sm text-gray-600">Masaje Descontracturante</div>
                    </div>

                    <div className="bg-white backdrop-blur-sm rounded-sm p-6 shadow-lg border border-purple-200">
                        <div className="flex items-center mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                        </div>
                        <p className="text-gray-700 mb-4 italic">
                            "El masaje con piedras calientes fue una experiencia única. Salí completamente renovada.
                            Definitivamente voy a volver."
                        </p>
                        <div className="font-semibold text-gray-900">Ana Rodríguez</div>
                        <div className="text-sm text-gray-600">Piedras Calientes</div>
                    </div>

                    <div className="bg-white backdrop-blur-sm rounded-sm p-6 shadow-lg border border-purple-200">
                        <div className="flex items-center mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                        </div>
                        <p className="text-gray-700 mb-4 italic">
                            "El drenaje linfático me ayudó mucho con la retención de líquidos.
                            Me siento mucho mejor y más liviana después de cada sesión."
                        </p>
                        <div className="font-semibold text-gray-900">Carlos Méndez</div>
                        <div className="text-sm text-gray-600">Drenaje Linfático</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials