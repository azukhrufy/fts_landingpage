interface TextContainerProps extends React.HTMLProps<HTMLDivElement> {
  gap: string;
  title: string;
  subtitle: string;
}

const TextContainer = ({
  gap,
  title,
  subtitle,
  ...props
}: TextContainerProps) => {
  return (
    <div className={`text-container ${gap}`} {...props}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  );
};

export default TextContainer;
