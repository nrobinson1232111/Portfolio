export default function ContentContainer({ children }){
    return(
        <div className="max-h-[90vh] overflow-scroll mx-1.5">
            {children}
        </div>
    )
}