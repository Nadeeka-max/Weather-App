import React, {useState , useEffect} from "react";
import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({location}) =>{
     /*const [query, setQuery] = useState('Sydney,au');
  const [city, setCity] = useState('');
  const [temp , setTemp] = useState('');
  const [condition , setCondition] = useState('');
  const [country , setCountry] = useState('');*/
  /*const location = 'Sydney,au';*/
  const [query, setQuery] = useState('')
  const [weather ,setWeather] = useState({
        temp: null,
        city: null,
        condition: null,
        country: null,
  });

  


  const getWeather = async (q) => {
    const apiRes =  await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=matric&APPID=11968038590c8405ac593785191ddaea`
    );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.country
      });
  }
 
 const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
      /*setTemp(res.main.temp);
      setCondition(res.weather[0].main);
      setCountry(res.sys.country);
      setCity(res.name);*/
     /* setWeather({
          temp: res.main.temp,
          city: res.name,
          condition: res.weather[0].main,
          country: res.country
      });
       });*/
 };
useEffect(() => {
  getWeather(location)
     /* setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.country
      });*/

    
},[location]);



return(
    <div>
         <WeatherCard 
              temp ={weather.temp} 
              condition={weather.condition} 
              city={weather.city} 
              country ={weather.country}/>
         
          <form>
              <input
                value ={query} onChange={(e) => setQuery(e.target.value)}/>

              <button onClick = {e=>handleSearch(e)}>Search</button>
          </form>
    </div>
);

};

export default WeatherEngine;
