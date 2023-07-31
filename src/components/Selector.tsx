interface Props {
    name: string | JSX.Element;
    id: string;
}

export function Selector({ name, id }: Props) {
    return ( // pass navigation pointers to children
        <>
            <div 
                className="nav-selector"
                onClick={() => {
                    const containerChildren = document.getElementById("contentContainer")!.children;
                    const containerArray = Array.from(containerChildren);
                    containerArray.forEach(element => {
                        element.style.opacity = "0";
                        element.style.paddingBottom = "15%";
                    });

                    console.log(document.getElementById(id));
                    document.getElementById(id)!.style.display = "flex";
                    document.getElementById(id)!.style.opacity = "1";
                    document.getElementById(id)!.style.paddingBottom = "0%";
                }}
            >
                { name }
            </div>
        </> 
    )
}