interface Props {
    name: string | JSX.Element;
    id: string;
}

export function Selector({ name, id }: Props) {
    const refElement = document.getElementById(id);
    return ( // pass navigation pointers to children
        <>
            <div 
                className="nav-selector"
                onClick={() => {
                    refElement!.style.display = "flex";
                    refElement!.style.opacity = "1";
                }}
            >
                { name }
            </div>
        </> 
    )
}