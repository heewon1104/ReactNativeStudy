import { Text, View, StatusBar } from 'react-native';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import Input from './input';
import IconButton from './iconButton';
import { icons } from './icons';
import Task from './Task';
import { Dimensions, useWindowDimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
//import { text } from 'body-parser';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

export default function App() {
  const width = useWindowDimensions().width;

  const [tasks, setTasks] = useState({});

  const storeData = async (tasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      setTasks(tasks);
    } catch (e) {}
  };

  const getData = async () => {
    const loadedData = await AsyncStorage.getItem('tasks');
    setTasks(JSON.parse(loadedData || '{}'));
  };

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.length < 1) {
      return;
    }
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false },
    };
    alert(newTask);
    setNewTask('');
    storeData({ ...tasks, ...newTaskObject });
  };

  const deleteTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    storeData(currentTasks);
  };

  const toggleTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id]['completed'] = !currentTasks[id]['completed'];
    storeData(currentTasks);
  };

  const updateTask = (item) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[item.id] = item;
    storeData(currentTasks);
  };

  const [isReady, setIsReady] = useState(false);

  return isReady ? (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#61dafb"
        ></StatusBar>
        <Title>TODO List</Title>
        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
          onSubmitEditing={addTask}
          onBlur={() => setNewTask('')}
        ></Input>
        <List width={width}>
          {Object.values(tasks)
            .reverse()
            .map((item) => (
              <Task
                key={item.id}
                item={item}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                updateTask={updateTask}
              ></Task>
            ))}
        </List>
      </Container>
    </ThemeProvider>
  ) : (
    <AppLoading
      startAsync={getData}
      onFinish={() => setIsReady(true)}
      onError={() => {}}
    ></AppLoading>
  );
}
