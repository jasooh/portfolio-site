interface Props {
    children: string | JSX.Element | JSX.Element[];
    date: string | JSX.Element;
    title: string | JSX.Element;
}

export function ExperienceCard({ children, date, title }: Props) {
    return (
        <>
            <div className="experience-card">
                <div className="experience-card-date">
                    { date }
                </div>
                <div className="experience-card-text-container">
                    <div className="experience-card-title">
                        { title }
                    </div>
                    <div className="experience-card-text">
                        { children }
                    </div>
                </div>
            </div>
        </>
    )
}

