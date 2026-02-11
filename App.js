import { StyleSheet, Text, View } from 'react-native';
import TodayWeather from './src/components/TodayWeather'
import Loading from './src/components/Loading';
import useWeather from './src/hooks/useWeather';
import ForecastList from './src/components/ForecastList';


export default function App() {
  const { loading, currentWeather } = useWeather()

  if (loading) {
    return (
      <Loading />
    );
  }
  return (
    <View style={styles.container}>
      <TodayWeather data={currentWeather} />
      <ForecastList data={currentWeather}/>
    </View>
  )


}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4c89ceff',
    flex: 1,
    alignItems: 'center'
  },
});
