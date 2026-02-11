import { useState, useEffect } from 'react'
import api from '../services/api';

export default function useWeather() {
    const [currentWeather, setCurrentWeather] = useState(null)
    const [loading, setLoading] = useState(true)

        useEffect(() => {
            async function loadWeather() {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const response = await api.get('forecast?latitude=-23.5505&longitude=-46.6333&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min')

                console.log(response.data)
                setCurrentWeather(response.data)
                setLoading(false)
            }

            loadWeather();
            
        }, [])
        return { currentWeather, loading }
}
