import React from 'react';
import styled from 'styled-components/native';
import Button from '../components/button';

const Container = styled.View`
  align-items: center;
`;
const StyledTest = styled.Text`
  font-size: 30px;
  margin: 10px;
`;

const Chat = ({ navigation, route }) => {
  return (
    <Container>
      <StyledTest>Chat</StyledTest>
      <StyledTest>{route.params.id}</StyledTest>
      <StyledTest>{route.params.name}</StyledTest>
      <Button
        title="Home"
        onPress={() =>
          navigation.reset({ routes: [{ name: 'Home' }, { name: 'List' }] })
        }
      ></Button>
    </Container>
  );
};

export default Chat;
