export const ContactInfo = (props) => {
    const { icon, contact, link } = props
    return (
        <div 
            onClick={() => window.open(link, 'blank')} 
            className="flex items-center gap-4 py-3 px-5 rounded-xl border border-slate-200 bg-white/60 hover:bg-white hover:border-slate-300 hover:shadow-sm hover:cursor-pointer transition-all duration-200 group"
        >
            {icon && (
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100/50 group-hover:border-blue-200 group-hover:bg-blue-100/50 transition-colors duration-200">
                    {typeof icon === 'string' ? (
                        <img className="w-[18px] opacity-80 group-hover:opacity-100 transition-opacity duration-200" src={icon} alt="icon" />
                    ) : (
                        <div className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors duration-200 flex items-center justify-center">
                            {icon}
                        </div>
                    )}
                </div>
            )}
            <p className="text-slate-600 group-hover:text-slate-900 transition-colors duration-200 font-medium text-sm sm:text-base">{contact}</p>
        </div>
    )
}


