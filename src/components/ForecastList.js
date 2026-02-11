import { View, Text, StyleSheet, FlatList,Image } from 'react-native'

export default function ForecastList({data}) {
    const forecast = data.daily.time.map((date, index) => ({
        date,
        max: data.daily.temperature_2m_max[index],
        min: data.daily.temperature_2m_min[index],
  })).slice(1)

  return (
    <FlatList
      data={forecast}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.date}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.card}>
        <Image
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnEIpmfsrQ9SAsAMCfyqSZjG3fbWiR_WFs_6KCY3xlfg&s'}}
            style={styles.imgLogo}
        />
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.tempMax}>{item.max}°</Text>
          <Text style={styles.tempMin}>{item.min}°</Text>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  card: {
    width: 110,
    height: '50%',
    padding: 15,
    marginRight: 12,
    borderRadius: 16,
    backgroundColor: '#FFF',

    // sombra iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    // sombra Android
    elevation: 5,

    alignItems: 'center',
  },
  imgLogo:{
    marginTop: -10,
    height: 50,
    width: 50,
  },
  date: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  tempMax: {
    fontSize: 18,
    fontWeight: '700',
  },
  tempMin: {
    fontSize: 14,
    color: '#666',
  },
})
