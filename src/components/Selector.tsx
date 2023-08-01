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
                        element.style.zIndex = "0";
                    });
                    // pull up requested ui
                    document.getElementById(id)!.style.opacity = "1";
                    document.getElementById(id)!.style.paddingBottom = "0%";
                    document.getElementById(id)!.style.zIndex = "1";
                }}
            >
                { name }
            </div>
        </> 
    )
}