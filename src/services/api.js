import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.open-meteo.com/v1/',
    
})

export default api;


//forecast?latitude=-23.5505&longitude=-46.6333&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min
