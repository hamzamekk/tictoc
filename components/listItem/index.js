import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const {width} = Dimensions.get('screen');

export const ListItem = ({number, isTrap, hidden, onPress}) => {
  return (
    <TouchableOpacity
      disabled={!hidden}
      style={[
        styles.container,
        !hidden && isTrap && styles.isTrapContainer,
        !hidden && !isTrap && styles.isNotTrapContainer,
      ]}
      onPress={onPress}>
      {hidden && <Text style={styles.number}>{number}</Text>}
      {!hidden && isTrap && (
        <Image
          source={require('assets/images/virus.png')}
          style={styles.image}
        />
      )}
      {!hidden && !isTrap && (
        <Image
          source={require('assets/images/flag.png')}
          style={styles.image}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 10,
    height: width / 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
  },
  isTrapContainer: {
    backgroundColor: 'red',
  },
  isNotTrapContainer: {
    backgroundColor: 'green',
  },
  number: {
    fontFamily: 'AGENTRED',
    color: 'black',
    fontSize: 10,
  },
  image: {
    width: width / 12,
    height: width / 12,
  },
});
