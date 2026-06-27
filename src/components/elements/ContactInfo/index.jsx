export const ContactInfo = (props) => {
    const { icon, contact, link } = props
    return (
        <div 
            onClick={() => window.open(link, 'blank')} 
            className="flex items-center gap-4 py-3 px-5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-cyan-500/30 hover:cursor-pointer transition-all duration-300 group shadow-lg"
        >
            {icon && (
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                    {typeof icon === 'string' ? (
                        <img className="w-[20px] filter brightness-110 group-hover:scale-110 transition-transform duration-300" src={icon} alt="icon" />
                    ) : (
                        <div className="w-5 h-5 text-indigo-400 group-hover:text-cyan-400 transition-colors duration-300 flex items-center justify-center">
                            {icon}
                        </div>
                    )}
                </div>
            )}
            <p className="text-zinc-300 group-hover:text-white transition-colors duration-300 font-medium text-sm sm:text-base">{contact}</p>
        </div>
    )
}
