import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, View, Text } from 'react-native';

const Container = styled.View`
  background-color: #778bdd;
  padding: 10px;
  margin: 10px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #ffffff;
`;

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Title>{title}</Title>
      </Container>
    </TouchableOpacity>
  );
};

export default Button;
