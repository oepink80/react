import React from 'react';

import classes from './my-button.module.css';

interface Props {
  onClick?: any; // Опциональный обработчик нажатия
  text: string; // Надпись на кнопке
  type?: 'submit' | 'reset' | 'button';
}

class Button extends React.Component<Props> {
  render() {
    const { onClick, text, type = 'button' } = this.props; // Используем дефолтный тип primary

    return (
      <div>
        <button type={type} className={classes.button} onClick={onClick}>
          {text}
        </button>
      </div>
    );
  }
}

export default Button;
