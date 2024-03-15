// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import Mybutton from './MyButton';
// import { React, useState } from 'react';

// export default function App() {
//   const [score, SetScore] = useState(0);

//   const addTwo = function () {
//     SetScore(() => score + 2);
//     console.log(score);
//   };
//   const multiTwo = function () {
//     SetScore(() => score * 2);
//     console.log(score);
//   };
//   return (
//     <View style={styles.container}>
//       {/* <Mybutton></Mybutton>
//       <Mybutton title={'123'} onPress={() => alert('2')}></Mybutton>
//       <Mybutton>children</Mybutton>
//       <Mybutton onPress={() => SetScore(score + 2)}>add</Mybutton>
//       <Mybutton onPress={() => SetScore(score * 2)}>multi</Mybutton>
//       <Text style={{ fontSize: 20 }}>{score}</Text> */}

//       <TextInput
//         // onChange={(event) => console.log(event.nativeEvent.text)}
//         onChangeText={(value) => console.log(value)}
//         style={{ borderWidth: 1, padding: 10, fontSize: 20 }}
//       ></TextInput>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
