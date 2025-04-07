import { Button as AntdButton } from 'antd'; // Импорт компонента Button из AntD
import React from 'react';

class Button extends React.Component<{ text: string }> {
  render() {
    const { text } = this.props;
    return (
      <div>
        <AntdButton type="primary">{text}</AntdButton>{' '}
        {/* Используем компонент Button из AntD */}
      </div>
    );
  }
}

export default Button;
