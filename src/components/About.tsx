interface Props {
    children: string | JSX.Element[];
}

export function About({ children }: Props) {
    return (
        <>
            <div id="aboutContainer" className="about-container">
                { children }
            </div>
        </>
    )
}