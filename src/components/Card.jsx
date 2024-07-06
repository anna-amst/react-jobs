function Card({ children, bg = "bg-slate-50" }) {
    return (
        <div className={ `${bg} p-6 rounded-lg shadow-md`}>
            {children}
        </div>
    )
}

export default Card
