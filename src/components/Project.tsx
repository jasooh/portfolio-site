interface Props {
    children: JSX.Element | JSX.Element[];
}

export function Project({ children }: Props) {
    return (
        <>
            <div id="projectContainer" className="project-container">
                { children }
            </div>
        </>
    )
}