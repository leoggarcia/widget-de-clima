import './Clima.css';

export default function InfoBox({clima}){
    return <div className="info-box">
        <div className="col-50">
            <p className="nombre-ciudad">{clima?.location.name}</p>
            <p className="pais">{clima?.location.country}</p>
            <p className='temperatura'>{clima?.current.temp_c}° Centigrados</p>
        </div>
        <div className="col-50" style={{alignItems:'end',}}>
            <img src={clima?.current.condition.icon} alt="Estado del clima" />
            <p className='estado-clima'>{clima?.current.condition.text}</p>
        </div>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240863.68495049933!2d-99.28370025945254!3d19.39100384169753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1664491743884!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    </div>;
}