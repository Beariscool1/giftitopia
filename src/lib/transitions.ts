
export type TransitionType = 'fade' | 'slide-up' | 'slide-down' | 'scale' | 'none';

export interface TransitionProps {
  type?: TransitionType;
  duration?: number;
  delay?: number;
}

export const getTransitionClasses = ({ 
  type = 'fade',
  duration = 300,
  delay = 0
}: TransitionProps = {}): string => {
  const baseClasses = `transition-all duration-${duration} delay-${delay}`;
  
  switch (type) {
    case 'fade':
      return `${baseClasses} animate-fade-in`;
    case 'slide-up':
      return `${baseClasses} animate-slide-up`;
    case 'slide-down':
      return `${baseClasses} animate-slide-down`;
    case 'scale':
      return `${baseClasses} animate-scale-in`;
    case 'none':
      return '';
    default:
      return `${baseClasses} animate-fade-in`;
  }
};

export const pageTransitions = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { 
    duration: 0.4, 
    ease: [0.22, 1, 0.36, 1] 
  }
};
