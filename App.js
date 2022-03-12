import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ListItem, GameOver, Wining} from './components';
import ReactNativeModal from 'react-native-modal';
import {playSound} from './utils';

const App = () => {
  const [data, setData] = useState([]);
  const [still, setStill] = useState(80);
  const [score, setScore] = useState(0);
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [showWiningModal, setShowWinningModal] = useState(false);

  const initialData = () => {
    const dt = Array.from({length: 100}, (_, i) => {
      return {
        id: i + 1,
        isTrap: false,
        hidden: true,
      };
    });
    const randomIds = Array.from({length: 25}, () =>
      Math.floor(Math.random() * 100),
    );

    randomIds.map(item => (dt[item].isTrap = true));

    console.table(dt);

    setShowGameOverModal(false);
    setShowWinningModal(false);
    setData([...dt]);
    setStill(0);
    setScore(0);
  };

  const onSelectItem = index => {
    const dt = data;

    dt[index - 1].hidden = false;

    setData([...dt]);

    if (!dt[index - 1].isTrap) {
      setScore(score + 10);
      setStill(still - 1);
      playSound('zapsplat_vehicles_bicycle_bell_broken_ping_001_78485.mp3');
    } else {
      playSound('zapsplat_human_male_voice_says_game_over_001_15726.mp3');
      setShowGameOverModal(true);
    }
  };

  const checkStill = () => {
    const rest = data;

    const result = rest.filter(item => item.hidden && !item.isTrap);

    if (result.length === 0) {
      setShowWinningModal(true);
      playSound('cartoon_success_fanfair.mp3');
    }
    setStill(result.length);
  };

  useEffect(() => {
    checkStill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    initialData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({item}) => (
    <ListItem
      number={item.id}
      isTrap={item.isTrap}
      hidden={item.hidden}
      onPress={() => onSelectItem(item.id)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>still : {still}</Text>
        {/* <Text style={styles.headerText}>time : {time}</Text> */}
        <Text style={styles.headerText}>score : {score}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={10}
        extraData={data}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={initialData}>
        <Text style={styles.textButton}>reset</Text>
      </TouchableOpacity>

      <ReactNativeModal isVisible={showGameOverModal} animationInTiming={500}>
        <GameOver score={score} restartGame={initialData} />
      </ReactNativeModal>

      <ReactNativeModal isVisible={showWiningModal} animationInTiming={500}>
        <Wining playAgain={initialData} />
      </ReactNativeModal>
    </SafeAreaView>
  );
};

const keyExtractor = item => item.id;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.5,
    paddingHorizontal: 10,
  },
  headerText: {
    fontFamily: 'AGENTRED',
    fontSize: 10,
  },
  buttonContainer: {
    alignSelf: 'center',
    height: 60,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'red',
  },
  textButton: {
    fontFamily: 'AGENTRED',
    color: 'white',
    fontSize: 16,
  },
});

export default App;
