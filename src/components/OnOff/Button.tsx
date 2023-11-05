import React from 'react';

type ButtonPropsType = {
  title: string
  className?: string
}
const Button: React.FC<ButtonPropsType> = (props) => {
  return (
    <button className={props.className}>
      {props.title}
    </button>
  );
};

export default Button;