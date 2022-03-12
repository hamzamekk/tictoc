import Sound from 'react-native-sound';

// Sound.setCategory('Playback');

export const playSound = name => {
  const sound = new Sound(name, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    sound.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
};
