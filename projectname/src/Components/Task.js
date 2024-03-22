import React, { useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import IconButton from './iconButton';
import { icons } from './icons';
import Input from './input';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0;
`;
const Contents = styled.Text`
  flex: 1;
  font-size: 24px;
  color: ${({ theme, completed }) => (completed ? theme.done : theme.text)};
  text-decoration-line: ${({ completed }) =>
    completed ? 'line-through' : 'none'};
`;

const Task = ({ item, deleteTask, toggleTask, updateTask }) => {
  const [isEditing, SetIsEditing] = useState(false);
  const [text, setText] = useState(item.text);

  const _onSubmit = () => {
    if (isEditing) {
      const updateItem = Object.assign({}, item);
      updateItem['text'] = text;
      SetIsEditing(false);
      updateTask(updateItem);
    }
  };

  return isEditing ? (
    <Input
      value={text}
      onChangeText={(text) => setText(text)}
      onSubmitEditing={_onSubmit}
      onBlur={() => {
        setText(item.text);
        SetIsEditing(false);
      }}
    ></Input>
  ) : (
    <Container>
      <IconButton
        icon={item.completed ? icons.check : icons.uncheck}
        item={item}
        onPress={toggleTask}
      ></IconButton>
      <Contents completed={item.completed}>{item.text}</Contents>
      {item.completed || (
        <IconButton
          icon={icons.edit}
          onPress={() => SetIsEditing(true)}
        ></IconButton>
      )}
      <IconButton icon={icons.delete} item={item} onPress={deleteTask} />
    </Container>
  );
};

Task.protoType = {
  item: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};
export default Task;
