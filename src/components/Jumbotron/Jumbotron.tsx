interface JumbotronProps extends React.HTMLProps<HTMLDivElement>{
    leftContent?: React.ReactNode,
    rightContent?: React.ReactNode
}

const Jumbotron = ({leftContent, rightContent} : JumbotronProps) => {
    return(
        <div className="jumbotron">
            <div className="jbt-left">
                {leftContent}
            </div>
            <div className="jbt-right">
                {rightContent}
            </div>
        </div>
    )
}

export default Jumbotron;