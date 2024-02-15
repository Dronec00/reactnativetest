import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { COLORS } from './colors';
import Logo from './components/Logo';
import { useFonts } from 'expo-font';
import HelloUser from './components/HelloUser';
import Attempts from './components/Attempts';
import NavSellsBlock from './components/NavSellsBlock/NavSellsBlock';
import BottomNavigation from './components/BottomNavigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    RuberoidRegular: require('./assets/fonts/Ruberoid-Regular.ttf'),
    RuberoidBold: require('./assets/fonts/Ruberoid-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    
    <View style={styles.container}>
      <ScrollView>
      <Logo />
      <HelloUser />
      <Attempts />
      <NavSellsBlock />
      </ScrollView>
      <BottomNavigation />
      <StatusBar theme="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightgreen,
    alignItems: 'center',
    paddingTop: 45,
    paddingLeft: 0
  },
});
