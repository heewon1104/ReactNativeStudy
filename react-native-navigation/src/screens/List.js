import React from 'react';
import styled from 'styled-components/native';
import Button from '../components/button';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const StyledTest = styled.Text`
  font-size: 30px;
  margin: 10px;
`;
const items = [
  { id: 1, name: 'React Native' },
  { id: 2, name: 'React' },
  { id: 3, name: 'Expo' },
];

const List = ({ navigation }) => {
  return (
    <Container>
      <StyledTest>List</StyledTest>
      {items.map(({ id, name }) => (
        <Button
          key={id}
          title={name}
          onPress={() => navigation.navigate('Chat', { id, name })}
        ></Button>
      ))}
    </Container>
  );
};

export default List;
