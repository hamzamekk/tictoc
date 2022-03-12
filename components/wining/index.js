import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export const Wining = ({playAgain}) => {
  return (
    <View style={styles.container}>
      <Image source={require('assets/images/winner.png')} style={styles.img} />
      <Text style={styles.congratulation}>Congratulation !!</Text>

      <TouchableOpacity style={styles.buttonContainer} onPress={playAgain}>
        <Text style={styles.textButton}>Play again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 12,
    alignSelf: 'center',
  },
  img: {
    height: 60,
    width: 60,
    alignSelf: 'center',
  },
  congratulation: {
    fontFamily: 'AGENTRED',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    alignSelf: 'center',
    height: 60,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
    marginTop: 50,
  },
  textButton: {
    fontFamily: 'AGENTRED',
    color: 'white',
    fontSize: 12,
  },
});
