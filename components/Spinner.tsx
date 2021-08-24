import React, {useState, useEffect, VFC} from 'react';
import {Animated, Easing} from 'react-native';

export const Spinner: VFC = () => {
  const animation = useState(new Animated.Value(0))[0];
  const CallAnimation = () => {
    animation.setValue(0);
    Animated.timing(animation, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => CallAnimation());
  };
  useEffect(() => {
    CallAnimation();
  }, []);
  const RotateData = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View>
      <Animated.Image
        style={[{transform: [{rotate: RotateData}]}, {width: 200, height: 200}]}
        source={require('../assets/pokeball_icon.png')}
      />
    </Animated.View>
  );
};
