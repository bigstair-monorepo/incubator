import React from 'react';


interface TextProps {
  text: string;
  fontSize?: string;
  color?: string; 
  fontWeight?: string;
  alignSelf?: string;
  textAlign?: string
}

/**
 * Text component to display text with customizable styles.
 * @param {object} props - Component props.
 * @param {string} props.text - The text content to display.
 * @param {string} [props.fontSize='text-base'] - The font size of the text (Tailwind CSS class).
 * @param {string} [props.color='text-black'] - The color of the text (Tailwind CSS class).
 * @param {string} [props.fontWeight] - The font weight of the text (Tailwind CSS class).
 * @returns {JSX.Element} Text component.
 */

const Text: React.FC<TextProps> = ({
  text,
  fontSize = 'text-base',
  color = 'black',
  alignSelf='center',
  textAlign,
  fontWeight,
  ...rest
}) => {
 

  let textClasses = `
  font-${fontWeight} ${color} 
  self-${alignSelf} text-${textAlign} 
  text-${fontSize}`;

  return (
    <div className={textClasses} {...rest}>
      {text}
    </div>
  );
};

export default Text;
