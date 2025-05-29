import { StatusBar } from 'expo-status-bar';
import { act } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/SlomoMainScreenPNG.png')}
        style={styles.image}
      />
     <ActivityIndicator size={100} color={"#66452a"} style ={styles.activityIndicator}/>
     <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  activityIndicator: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    bottom: "25%",
    top: "75%",
    left: 0, 
  }

});
