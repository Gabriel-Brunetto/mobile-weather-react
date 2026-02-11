import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import useWeather from '../hooks/useWeather'

export default function TodayWeather({ data }) {
    const temperature = data?.current?.temperature_2m
    const max = data.daily.temperature_2m_max[0]
    const min = data.daily.temperature_2m_min[0]

    return (
        <View style={styles.weatherArea}>
            <Image
                source={{ uri: 'https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png' }}
                style={styles.weatherLogo}
            />
            <Text style={styles.cityWeather}>São Paulo</Text>
            <View style={styles.textInfo}>
                <Text style={styles.text}>Temperatura atual: {temperature}°C</Text>
                <Text style={styles.text}>Máxima: {max}°C</Text>
                <Text style={styles.text}>Mínima: {min}°C</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    weatherArea: {
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        width: '90%',
        height: '60%',
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.50,
        shadowRadius: 10,
        // Android
        elevation: 6,
        justifyContent: 'space-around'
    },
    weatherLogo: {
        width: 80,
        height: 80
    },
    cityWeather: {
        fontSize: 38,
        fontWeight: '600',
        letterSpacing: 1,
        color: '#222',
    },
    textInfo: {
        backgroundColor: 'rgba(31, 174, 187, 0.13)',
        height: 100,
        width: '70%',
        borderWidth: 0.5,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    }

})

