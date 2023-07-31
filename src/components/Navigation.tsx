interface Props {
    children: JSX.Element | JSX.Element[]
}

export function Navigation({ children }: Props) {
    return ( // pass navigation pointers to children
        <>
            <div className="nav-container">
                {children} 
            </div>
        </> 
    )
}
