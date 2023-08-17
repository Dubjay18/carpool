
export default function Button({
    children, // making it coherent
    className,
    onClick,
    ...others
}) {
    return (
        <button className={className} onClick={onclick ?? console.log("Warning: No handler")} {...others}>
            {children}
        </button>
    )
}
