export const Button = (props) => {
    const { variant, font, children = '...', link, style, className = '' } = props
    
    const baseStyle = "h-11 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
    const defaultVariant = "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-[1.03]"
    const appliedVariant = variant || defaultVariant

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