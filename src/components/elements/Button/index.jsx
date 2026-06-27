export const Button = (props) => {
    const { variant, font, children = '...', link, style, className = '' } = props
    
    const baseStyle = "h-10 px-5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] text-sm"
    
    let appliedVariant = "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
    if (variant === 'outline') {
        appliedVariant = "border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
    } else if (variant) {
        appliedVariant = variant
    }

    return (
        <button 
            style={style} 
            onClick={() => window.open(link, 'blank')} 
            className={`${baseStyle} ${appliedVariant} ${font} ${className}`}
        >
            {children}
        </button>
    )
}
