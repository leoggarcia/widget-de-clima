import { useEffect, useState } from 'react';
import InfoBox from './InfoBox';
import logo from '../logo.svg';
import './Clima.css';
import Loader from './Loader';

export default function Clima(){
    const [clima, setClima] = useState(null);
    const [city,  setCity] = useState('Mexico city');

    useEffect(function(){
        cargarInfo();
    }, []);

    useEffect(function(){
        document.title = 'Clima | ' + clima?.location.name ?? "";
    }, [clima]);

    function onInputChhange(e){
        const valor = e.target.value;

        if(valor != ''){
            setCity(valor);
        }
    }

    function submitFormulario(e){
        e.preventDefault();
        
        onChangeCity();
    }

    function onChangeCity(){
        setClima(null);
        
        cargarInfo(city);
    }

    async function cargarInfo(cityToLoad = "Mexico city" ){
        try {
            const request = await fetch(process.env.REACT_APP_URL+"key="+process.env.REACT_APP_KEY+"&q="+cityToLoad);

            const request2Json = await request.json();

            setClima(request2Json);

            console.log(request2Json);
        } catch (error) {
            
        }
    }

    return <div className="clima-box">
        <form onSubmit={submitFormulario}>
            <input type="text" placeholder='Digite la cuidad que desea consultar' onChange={onInputChhange} />
        </form>
        {clima ? <InfoBox clima={clima} /> : <Loader />}
    </div>
}