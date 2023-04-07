interface CardProps extends React.HTMLProps<HTMLDivElement>{
    children?: React.ReactNode,
    color?: string,
    icon?: any,
}

const Card = ({children, color, icon}: CardProps) => {
    return(
        <div className="card">
            <div className="icon-container" style={{backgroundColor :`${color}`}}>
                <img src={icon} />
            </div>
            {children}
        </div>
    );
}

export default Card;