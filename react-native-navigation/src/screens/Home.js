import React from 'react';
import styled from 'styled-components/native';
import Button from '../components/button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Container = styled.View`
  align-items: center;
  padding-top: ${({ insets: { top } }) => top}px;
  padding-left: ${({ insets: { left } }) => left}px;
  padding-bottom: ${({ insets: { bottom } }) => bottom}px;
  padding-right: ${({ insets: { right } }) => right}px;
`;
const StyledTest = styled.Text`
  font-size: 30px;
  margin: 10px;
`;

const Home = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <Container insets={insets}>
      <StyledTest>Home</StyledTest>
      <Button title="List" onPress={() => navigation.navigate('List')}></Button>
    </Container>
  );
};

export default Home;
