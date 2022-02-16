import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  containerA: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerB: {
    backgroundColor: "lightgreen",
    alignItems: 'flex-end',
  },
  blueText: {
    color: 'blue'
  }
});


export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerA}>
      <Text style={styles.blueText}>Hello, world!</Text>
      <Text style={styles.blueText}>Hello, world!</Text>
      <Text style={styles.blueText}>Hello, world!</Text>
      <Button title="This is a button" onPress={() => alert('prout') }/>
      <StatusBar style="auto" />
    </View>
    <View style={styles.containerB}>
      <Text style={styles.blueText}>Hello, world!</Text>
      <Text style={styles.blueText}>Hello, world!</Text>
      <Text style={styles.blueText}>Hello, world!</Text>
    </View>
    </View>
  );
}
