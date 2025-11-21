import Image from "next/image"

export default function TitleSection({ 
    preTitle = "Entre em", 
    titleHighlight = "Contato", 
    description = "Estamos prontos para atender você.",
    bgImage = "/images/topography.svg",
    children 
}) {
    return (
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <Image
                    src={bgImage}
                    alt="Background pattern"
                    fill
                    className="object-cover"
                    priority // Prioridade de carregamento para LCP (SEO)
                />
            </div>

            {/* Gradient Orbs - Elementos decorativos */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 text-center relative">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        {preTitle}{" "}
                        <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                            {titleHighlight}
                        </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
                        {description}
                    </p>

                    {/* Renderiza os botões (ou qualquer conteúdo extra) aqui */}
                    {children && (
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            {children}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}