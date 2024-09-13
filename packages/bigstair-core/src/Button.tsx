import * as React from 'react';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  // if (false) {
  //   React.useEffect(() => {
  //   }, []);
  // }

  return (
    <button style={{ padding: '16px' }} {...props}>
      {children}
    </button>
  );
}

Button.displayName = 'Button';
