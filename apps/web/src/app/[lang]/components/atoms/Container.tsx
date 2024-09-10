import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  display?: string;
  gap?: string;
  backgroundColor?: string;
  borderRadius?: string;
  padding?: string;
  margins?: string;
  boxShadow?: string;
  justifyContent?: string;
  alignItems?: string;
  height?: string;
  marginTop?:string
  flexDirection?: string
  position?: string,
  top?: string,
  bottom?: string,
  left?: string,
  right?: string,
  // Add more properties as needed
}

const Container: React.FC<ContainerProps> = ({
  display = 'block',
  gap = '0',
  backgroundColor = 'transparent',
  borderRadius = '0',
  padding = '0',
  margins = '0',
  boxShadow = 'none',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  height, 
  marginTop,
  flexDirection,
  position,
  left,
  bottom,
  children,
  ...rest
}) => {
  let divClasses = `
  ${left}
  ${bottom}
  ${position}
   mt-${marginTop} /
    ${display}
    gap-${gap}
    bg-${backgroundColor} 
    h-${height}
    rounded-${borderRadius}
    p-${padding}
    ${margins}
    shadow-${boxShadow}
    justify-${justifyContent}
    flex-${flexDirection}
    items-${alignItems}`;

  return (
    <div className={divClasses} {...rest}>
      {children}
    </div>
  );
};

export default Container;
