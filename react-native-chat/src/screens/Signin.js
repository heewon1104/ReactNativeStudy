import React, { useContext, useState, useRef, useEffect } from 'react';
import { ThemeContext } from 'styled-components/native';
import styled from 'styled-components/native';
import { Button, Image, Input, ErrorMessage } from '../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signin } from '../firebase';
import { Alert } from 'react-native';
import { validateEmail, removeWhitespace } from '../utils';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0% 20px;
  padding-top: ${({ insets: { top } }) => top}px;
  padding-bottom: ${({ insets: { bottom } }) => bottom}px;
`;

const LOGO =
  'https://firebasestorage.googleapis.com/v0/b/react-native-chat-e69ee.appspot.com/o/Icon.png?alt=media';

const Signin = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const theme = useContext(ThemeContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(true);
  const refPassword = useRef(null);

  useEffect(() => {
    setDisabled(!(email && password && !errorMessage));
  }, [email, password, errorMessage]);

  const _handleEmailChanege = (email) => {
    const changedEmail = removeWhitespace(email);
    setEmail(changedEmail);
    setErrorMessage(
      validateEmail(changedEmail) ? '' : 'Please verify your email'
    );
  };

  const _handlePasswordChanege = (password) => {
    const changedPassword = removeWhitespace(password);
    setPassword(changedPassword);
  };

  const _handleSigninBtnPress = async () => {
    try {
      const user = await signin({ email, password });
      navigation.navigate('Profile', { user });
    } catch (e) {
      Alert.alert('Siginin Error', e.message);
    }
  };

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={20}
      contentContainerStyle={{ flex: 1 }}
    >
      <Container insets={insets}>
        <Image url={LOGO}></Image>
        <Input
          label="Email"
          placeholder="Email"
          returnKeyType="next"
          value={email}
          onChangeText={_handleEmailChanege}
          onSubmitEditing={() => refPassword.current.focus()}
        ></Input>
        <Input
          ref={refPassword}
          label="Password"
          placeholder="Password"
          returnKeyType="done"
          value={password}
          onChangeText={_handlePasswordChanege}
          isPassword={true}
          onSubmitEditing={_handleSigninBtnPress}
        ></Input>
        <ErrorMessage message={errorMessage}></ErrorMessage>
        <Button
          title="sign in"
          onPress={_handleSigninBtnPress}
          disabled={disabled}
        ></Button>
        <Button
          title="or sign up"
          onPress={() => navigation.navigate('Signup')}
          containerStyle={{ marginTop: 0, backgroundColor: 'transparent' }}
          textStyle={{ color: theme.btnTextLink, fontSize: 18 }}
        ></Button>
      </Container>
    </KeyboardAwareScrollView>
  );
};
export default Signin;
