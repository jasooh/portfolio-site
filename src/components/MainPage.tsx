interface Props {
    head: string | JSX.Element;
    sub: string | JSX.Element;
    children: string | JSX.Element;
}

export function MainPage({ head, sub, children }: Props) {
    return (
        <>
            <h1>{head}</h1>
            <h2 className="cursor-effect">{sub}&nbsp;&nbsp;</h2>
            <div className="divider"></div>
            {children}
        </>
    )
}