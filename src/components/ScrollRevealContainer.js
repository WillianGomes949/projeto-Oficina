import useScrollReveal from "./hooks/useScrollReveal";


const ScrollRevealContainer = ({
  children,
  selector = '.reveal-item',
  config = {},
  className = '',
  ...props
}) => {
  const ref = useScrollReveal({
    ...config,
    selector: selector
  });

  return (
    <div
      ref={ref}
      className={`scroll-reveal-container ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollRevealContainer;