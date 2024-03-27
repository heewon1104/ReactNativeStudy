import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { theme } from '../theme';
import { MaterialIcons } from '@expo/vector-icons';
import { Button, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.imgBtnBackground};
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

const ButtonIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  name: 'photo-camera',
  size: 22,
  color: theme.imgBtnIcon,
}))``;

const PhotoButton = ({ onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonIcon></ButtonIcon>
    </ButtonContainer>
  );
};

const Container = styled.View`
  margin-bottom: 30px;
`;
const ProfileImage = styled.Image`
  background-color: ${({ theme }) => theme.imgBackGround};
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const Image = ({ url, showButton, onChangePhoto }) => {
  const _handlePhotoBtnPress = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      onChangePhoto(result.assets[0].uri);
    }
  };

  return (
    <Container>
      <ProfileImage source={{ uri: url }}></ProfileImage>
      {showButton && <PhotoButton onPress={_handlePhotoBtnPress}></PhotoButton>}
    </Container>
  );
};

// Image.defaultProps = {
//   url: 'https://firebasestorage.googleapis.com/v0/b/react-native-chat-e69ee.appspot.com/o/face.png?alt=media',
// };

Image.protoType = {
  url: PropTypes.string,
  showButton: PropTypes.bool,
  onChangePhoto: PropTypes.func,
};

export default Image;
