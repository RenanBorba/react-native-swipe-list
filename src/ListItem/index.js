import React from 'react';
import
  {
    View,
    Text,
    Animated,
    TouchableOpacity
  } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import styles from './styles';

export default function ListItem({ data, handleLeft, handleRight }) {
  function LeftActions(progress, dragX) {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    return(
      <View style={styles.leftAction}>
        <Animated.Text
          style={[
            styles.textAction,
            { transform: [{ scale }] }
          ]}
        >
          Concluir
        </Animated.Text>
      </View>
    );
  };

  function RightActions({ progress, dragX, onPress }) {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })

    return(
      <TouchableOpacity onPress={ onPress }>
        <View style={styles.rightAction}>
          <Animated.Text
            style={[
              styles.textAction,
              { transform: [{ scale }] }
            ]}
          >
            Excluir
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <Swipeable
      renderLeftActions={ LeftActions }
      onSwipeableLeftOpen={ handleLeft }
      renderRightActions=
        {(progress, dragX) =>
          <RightActions
            progress={ progress }
            dragX={ dragX }
            onPress={ handleRight }
          />
        }
    >
      <View style={styles.container}>
        <Text style={styles.text}>{ data.task }</Text>
      </View>
    </Swipeable>
  );
};