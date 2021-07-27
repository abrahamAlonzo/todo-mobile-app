import React from 'react';
import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity`
  background-color: papayawhip;
`;

const StyledButtonLabel = styled.Text`
  color: palevioletred;
`;

interface IButtonProps {
  label: string;
}

function Button({label}: IButtonProps): React.ReactNode {
  return (
    <StyledButton>
      <StyledButtonLabel>{label}</StyledButtonLabel>
    </StyledButton>
  );
}

export default Button;
