interface Props {
    name: string | JSX.Element;
}

export default function Selector({ name }: Props) {
    return ( // pass navigation pointers to children
        <>
            <div 
                className="nav-selector"
                onClick={() => {console.log("pressed!")}}
            >
                { name }
            </div>
        </> 
    )
}
