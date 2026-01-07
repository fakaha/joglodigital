export const Button = (props) => {
    const { variant, font, children = '...', link, style } = props
    return (
        <button style={style} onClick={() => window.open(link, 'blank')} className={`h-10 px-6 rounded-lg font-medium ${variant} ${font}`}>
            {children}
        </button>
    )
}