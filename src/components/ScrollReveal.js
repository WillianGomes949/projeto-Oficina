import useScrollReveal from './hooks/useScrollReveal';

const ScrollReveal = ({
  children,
  animation = 'bottom',
  duration = 1500,
  distance = '80px',
  delay = 0,
  easing = 'ease-in-out',
  reset = false,
  className = '',
  style = {},
  interval = 0,
  ...props
}) => {
  // Mapeia animações pré-definidas
  const getAnimationConfig = () => {
    const baseConfig = {
      duration,
      distance,
      delay,
      easing,
      reset
    };

    const animations = {
      left: { ...baseConfig, origin: 'left' },
      right: { ...baseConfig, origin: 'right' },
      top: { ...baseConfig, origin: 'top' },
      bottom: { ...baseConfig, origin: 'bottom' },
      zoom: { 
        ...baseConfig, 
        scale: 0.9,
        distance: '0px'
      },
      rotate: {
        ...baseConfig,
        rotate: { x: 0, y: 0, z: 10 },
        distance: '0px'
      },
      fade: {
        ...baseConfig,
        opacity: 0,
        distance: '0px'
      }
    };

    return animations[animation] || animations.bottom;
  };

  const ref = useScrollReveal(getAnimationConfig());

  return (
    <div
      ref={ref}
      className={`scroll-reveal-element ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;