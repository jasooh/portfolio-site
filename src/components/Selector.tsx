interface Props {
    name: string | JSX.Element;
    id: string;
}

export function Selector({ name, id }: Props) {
    const defaultOffset = "15%";
    return ( // pass navigation pointers to children
        <>
            <div 
                className="nav-selector"
                onClick={() => {
                    // clear content section
                    const containerChildren = document.getElementById("contentContainer")!.children; 
                    const containerArray = Array.from(containerChildren);
                    containerArray.forEach(e => {
                        let element = e as HTMLElement;
                        element.style.opacity = "0";
                        element.style.paddingBottom = defaultOffset;
                    });
                    // pull up requested ui
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