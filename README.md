# Weather App 🌤️

Um aplicativo de **previsão do tempo** desenvolvido em **React Native**, com foco em **componentização, arquitetura limpa e consumo de API**.  

O app exibe:  
- Temperatura atual  
- Temperatura máxima e mínima do dia  
- Previsão dos próximos dias em formato horizontal  

---

## 📂 Estrutura do Projeto

/WeatherApp  
│  
├─ /components  
│   ├─ TodayWeather.js      
│   ├─ ForecastList.js     
│   └─ Loading.js    
│  
├─ /hooks  
│   └─ useWeather.js       
│  
├─ /services  
│   └─ api.js            
│  
└─ App.js               


---

## ⚙️ Tecnologias Utilizadas

- **React Native** – Framework mobile  
- **Axios** – Requisições HTTP  
- **FlatList** – Renderização performática da previsão diária  
- **Hooks customizados** – `useWeather` para dados assíncronos e loading  
- **Open-Meteo API** – Fonte de dados meteorológicos  
- **StyleSheet** – Estilização responsiva dos componentes  

---

## 🛠️ Funcionalidades

- Exibe **temperatura atual** da cidade (São Paulo)  
- Mostra **máxima e mínima do dia**  
- Renderiza a **previsão dos próximos dias** em cards horizontais  
- Tela de **loading** enquanto os dados são carregados  

---

## 🚀 Instalação

1. Clone o repositório:  
```bash
git clone https://github.com/seu-usuario/weather-app.git
Instale as dependências:
npm install
ou
yarn install
Inicie o app no Expo:
npx expo start
