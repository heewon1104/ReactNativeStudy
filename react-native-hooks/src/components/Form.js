import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import Button from './Button';

const StyledInput = styled.TextInput`
  border: 1px solid #111111;
  padding: 10px;
  margin: 10px 0;
  width: 200px;
  font-size: 24px;
`;

const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  let count = 0;

  useEffect(() => {
    console.log(`name: ${name}, email: ${email}`);
  }, [email]);

  return (
    <>
      <StyledText>Name: {name}</StyledText>
      <StyledText>Email: {email}</StyledText>
      <StyledInput
        value={name}
        onChangeText={setName}
        placehorder="name"
      ></StyledInput>
      <StyledInput
        value={email}
        onChangeText={setEmail}
        placehorder="email"
      ></StyledInput>
      <Button title="count" onPress={() => count + 1}></Button>
    </>
  );
};

export default Form;
