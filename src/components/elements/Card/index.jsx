export const Card = (props) => {
    const { title, description, image } = props
    return (
        <div className="group relative flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl glass-panel glass-panel-hover overflow-hidden transition-all duration-500 hover:-translate-y-1">
            {/* Ambient background glow behind the card */}
            <div className="absolute -inset-px bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-sm -z-10" />
            
            {image && (
                <div className="relative w-[120px] h-[120px] flex-shrink-0 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 overflow-hidden p-3 group-hover:border-cyan-500/30 transition-colors duration-300">
                    <img src={image} alt={title} className="max-w-full max-h-full object-contain rounded-lg filter drop-shadow-[0_0_8px_rgba(6,182,212,0.3)] group-hover:scale-110 transition-transform duration-500" />
                </div>
            )}
            <div className="flex-1 text-center sm:text-left">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">{title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
            </div>
        </div>
    )
}