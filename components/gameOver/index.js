import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export const GameOver = ({score, restartGame}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('assets/images/game-over.png')}
        style={styles.img}
      />
      <Text style={styles.gameOver}>Game Over</Text>
      <Text style={styles.score}>Your score : {score}</Text>

      <TouchableOpacity style={styles.buttonContainer} onPress={restartGame}>
        <Text style={styles.textButton}>Restart</Text>
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
  gameOver: {
    fontFamily: 'AGENTRED',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  score: {
    fontFamily: 'AGENTRED',
    fontSize: 20,
    marginTop: 30,
    color: 'red',
    textAlign: 'center',
  },
  buttonContainer: {
    alignSelf: 'center',
    height: 60,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'red',
    marginTop: 50,
  },
  textButton: {
    fontFamily: 'AGENTRED',
    color: 'white',
    fontSize: 16,
  },
});
