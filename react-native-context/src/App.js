import React, { createContext } from 'react';
import styled from 'styled-components/native';
import { UserProvider } from './contexts/ContextUser';
import User from './components/User';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
const StyledText = styled.Text`
  font-size: 30px;
  font-weight: 600;
`;

export default function App() {
  //const UserContext = createContext({ name: 'Beomjun' });
  return (
    // <UserContext.Provider value={{ name: 'Beomjun Kim' }}>
    //   <Container>
    //     <UserContext.Consumer>
    //       {(value) => {
    //         console.log(value);
    //         return <StyledText>{value.name}</StyledText>;
    //       }}
    //     </UserContext.Consumer>
    //   </Container>
    // </UserContext.Provider>
    <UserProvider>
      <Container>
        <User></User>
      </Container>
    </UserProvider>
  );
}
