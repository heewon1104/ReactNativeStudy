import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, View } from 'react-native';
import Proptypes from 'prop-types';
import { icons } from './icons';

const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
  tint-color: ${({ theme, completed }) =>
    completed ? theme.done : theme.text};
`;

const IconButton = ({ icon, onPress, item }) => {
  const _onPress = () => {
    onPress(item.id);
  };
  return (
    <TouchableOpacity onPress={_onPress}>
      <View>
        <Icon source={icon} completed={item.completed} />
      </View>
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  item: { completed: false },
};

IconButton.Proptypes = {
  icon: Proptypes.oneOf(Object.values(icons)).isRequired,
  onPress: Proptypes.func,
  item: Proptypes.object,
};

export default IconButton;
