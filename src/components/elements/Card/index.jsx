export const Card = (props) => {
    const { title, description, image } = props
    return (
        <div className="group relative flex flex-col sm:flex-row items-center gap-6 p-6 rounded-xl card-panel card-panel-hover overflow-hidden">
            {image && (
                <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] flex-shrink-0 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-slate-200 transition-colors duration-300 p-3">
                    <img src={image} alt={title} className="max-w-full max-h-full object-contain rounded-md transition-transform duration-300" />
                </div>
            )}
            <div className="flex-1 text-center sm:text-left">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{description}</p>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors duration-200 hover:cursor-pointer">
                    <span>Detail Layanan</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

