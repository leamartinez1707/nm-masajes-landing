const Services = () => {
    return (
        <section id="servicios" className="py-20 bg-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestros Servicios</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Tratamientos personalizados diseñados especialmente para tu bienestar y comfort
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Masaje Relajante */}
                    <div className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <img
                            src="https://ecopostural.com/wp-content/uploads/2024/03/masaje_sueco_Ecopostural.jpg"
                            alt="Masaje relajante"
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Desktop overlay - solo visible en hover */}
                        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-2xl font-bold mb-2">Masaje Relajante</h3>
                            <p className="text-sm mb-4 leading-relaxed">
                                Ideal para liberar el estrés diario. Técnicas suaves que calman tu mente y relajan profundamente los músculos tensos.
                            </p>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors">
                                MÁS INFO
                            </button>
                        </div>
                        {/* Mobile info - siempre visible */}
                        <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                            <h3 className="text-xl font-bold mb-2">Masaje Relajante</h3>
                            <p className="text-sm mb-3 leading-relaxed">
                                Ideal para liberar el estrés diario. Técnicas suaves que calman tu mente y relajan profundamente los músculos tensos.
                            </p>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-sm text-xs font-medium transition-colors">
                                MÁS INFO
                            </button>
                        </div>
                        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-sm">
                            <span className="text-sm font-medium text-gray-800">Relajación</span>
                        </div>
                    </div>

                    {/* Drenaje Linfático */}
                    <div className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <img
                            src="https://f.fcdn.app/imgs/b74308/www.analiamartin.com.uy/anamuy/f145/original/catalogo/DLMMTAMS_DLMMTAMS_1/2000-2000/drenaje-linfatico-manual-metodo-tradicional-drenaje-linfatico-manual-metodo-tradicional.jpg"
                            alt="Drenaje linfático"
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Desktop overlay */}
                        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-2xl font-bold mb-2">Drenaje Linfático</h3>
                            <p className="text-sm mb-4 leading-relaxed">
                                Técnica especializada que te ayuda a eliminar toxinas y reducir la retención de líquidos. Mejora tu circulación linfática.
                            </p>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors">
                                MÁS INFO
                            </button>
                        </div>
                        {/* Mobile info */}
                        <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                            <h3 className="text-xl font-bold mb-2">Drenaje Linfático</h3>
                            <p className="text-sm mb-3 leading-relaxed">
                                Técnica especializada que te ayuda a eliminar toxinas y reducir la retención de líquidos. Mejora tu circulación linfática.
                            </p>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-sm text-xs font-medium transition-colors">
                                MÁS INFO
                            </button>
                        </div>
                        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-sm">
                            <span className="text-sm font-medium text-gray-800">Detox</span>
                        </div>
                    </div>

                    {/* Masaje Modelador */}
                    <div className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <img
                            src="https://www.younique.com.py/images/tratamientos/masaje-modelador-rf_foto_1.jpg"
                            alt="Masaje modelador"
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Desktop overlay */}
                        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-2xl font-bold mb-2">Masaje Modelador</h3>
                            <p className="text-sm mb-4 leading-relaxed">
                                Tratamiento estético que te ayuda a modelar tu figura, reducir medidas y mejorar la apariencia de tu piel.
                            </p>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors">
                                MÁS INFO
                            </button>
                        </div>
                        {/* Mobile info */}
                        <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                            <h3 className="text-xl font-bold mb-2">Masaje Modelador</h3>
                            <p className="text-sm mb-3 leading-relaxed">
                                Tratamiento estético que te ayuda a modelar tu figura, reducir medidas y mejorar la apariencia de tu piel.
                            </p>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-sm text-xs font-medium transition-colors">
                                MÁS INFO
                            </button>
                        </div>
                        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-sm">
                            <span className="text-sm font-medium text-gray-800">Estético</span>
                        </div>
                    </div>

                    {/* Piedras Calientes */}
                    <div className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <img
                            src="https://www.spazio26.com/wp-content/uploads/2019/02/Piedras_Calientes.jpg"
                            alt="Masaje con piedras calientes"
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Desktop overlay */}
                        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-2xl font-bold mb-2">Piedras Calientes</h3>
                            <p className="text-sm mb-4 leading-relaxed">
                                El calor de las piedras volcánicas penetra profundamente, relajando músculos y mejorando la circulación sanguínea.
                            </p>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors">
                                MÁS INFO
                            </button>
                        </div>
                        {/* Mobile info */}
                        <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                            <h3 className="text-xl font-bold mb-2">Piedras Calientes</h3>
                            <p className="text-sm mb-3 leading-relaxed">
                                El calor de las piedras volcánicas penetra profundamente, relajando músculos y mejorando la circulación sanguínea.
                            </p>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-sm text-xs font-medium transition-colors">
                                MÁS INFO
                            </button>
                        </div>
                        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-sm">
                            <span className="text-sm font-medium text-gray-800">Terapéutico</span>
                        </div>
                    </div>

                    {/* Masaje Descontracturante */}
                    <div className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <img
                            src="https://www.europeanhealthschool.com/es/wp-content/uploads/2024/07/masaje-relajante-descontracturante.jpg"
                            alt="Masaje descontracturante"
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Desktop overlay */}
                        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-2xl font-bold mb-2">Masaje Descontracturante</h3>
                            <p className="text-sm mb-4 leading-relaxed">
                                Tratamiento específico para dolores musculares y contracturas. Técnicas avanzadas para problemas posturales.
                            </p>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors">
                                MÁS INFO
                            </button>
                        </div>
                        {/* Mobile info */}
                        <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                            <h3 className="text-xl font-bold mb-2">Masaje Descontracturante</h3>
                            <p className="text-sm mb-3 leading-relaxed">
                                Tratamiento específico para dolores musculares y contracturas. Técnicas avanzadas para problemas posturales.
                            </p>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-sm text-xs font-medium transition-colors">
                                MÁS INFO
                            </button>
                        </div>
                        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-sm">
                            <span className="text-sm font-medium text-gray-800">Terapéutico</span>
                        </div>
                    </div>

                    {/* Vendas Neuromusculares */}
                    <div className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <img
                            src="https://sillasderuedascali.com/wp-content/uploads/2018/01/Cinta-Kinesiologica-Vendaje-Neuromuscular2.webp"
                            alt="Aplicación de vendas neuromusculares"
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Desktop overlay */}
                        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-2xl font-bold mb-2">Vendas Neuromusculares</h3>
                            <p className="text-sm mb-4 leading-relaxed">
                                Aplicación de vendas especializadas que ayudan en la recuperación muscular y mejoran el rendimiento físico.
                            </p>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors">
                                MÁS INFO
                            </button>
                        </div>
                        {/* Mobile info */}
                        <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                            <h3 className="text-xl font-bold mb-2">Vendas Neuromusculares</h3>
                            <p className="text-sm mb-3 leading-relaxed">
                                Aplicación de vendas especializadas que ayudan en la recuperación muscular y mejoran el rendimiento físico.
                            </p>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-sm text-xs font-medium transition-colors">
                                MÁS INFO
                            </button>
                        </div>
                        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-sm">
                            <span className="text-sm font-medium text-gray-800">Deportivo</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services