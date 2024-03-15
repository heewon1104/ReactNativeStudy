// import React from 'react';
// import { TouchableOpacity, View, Text } from 'react-native';
// import PropTypes from 'prop-types';

// const Mybutton = (props) => {
//   return (
//     <TouchableOpacity
//       onPress={() => console.log('press')}
//       onPressIn={() => console.log('In')}
//       onPressOut={() => console.log('Out')}
//       onLongPress={() => console.log('Long')}
//       delayLongPress={3000}
//       //hitSlop={{bottom:100, top:100, left:100, right:100}}
//       //pressRetentionOffset={{bottom:10, top:10, left:10, right:10}}
//     >
//       <View style={{ backgroundColor: 'red', padding: 10, margin: 10 }}>
//         <Text style={{ fontSize: 20, color: 'white' }}>
//           {props.children || props.title}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// Mybutton.defaultProps = {
//   title: 'default',
//   onPress: () => {
//     alert('default');
//   },
// };
// Mybutton.propTypes = {
//   title: PropTypes.string,
//   onPress: PropTypes.func,
//   // title2: PropTypes.string.isRequired,
// };

// export default Mybutton;
