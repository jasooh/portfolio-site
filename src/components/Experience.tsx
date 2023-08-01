interface Props {
    children: JSX.Element | JSX.Element[];
}

export function Experience({ children }: Props) {
    return (
        <>
            <div id="experienceContainer" className="experience-container">
                { children }
            </div>
        </>
    )
}

