import styled from '@emotion/styled';
import React from 'react';

type EButtonProps = {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
};

const StyledEButton = styled.button<EButtonProps>(
  ({ variant = 'primary' }) => ({
    padding: '8px 16px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    ...(variant === 'primary'
      ? {
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          '&:hover': {
            backgroundColor: '#0056B3',
          },
        }
      : {
          backgroundColor: 'transparent',
          color: '#007BFF',
          border: '1px solid #007BFF',
          '&:hover': {
            backgroundColor: '#E8F0FE',
          },
        }),
  }),
);

const EButton = ({ variant, children, onClick }: EButtonProps) => {
  return (
    <StyledEButton variant={variant} onClick={onClick}>
      {children}
    </StyledEButton>
  );
};

export default EButton;
