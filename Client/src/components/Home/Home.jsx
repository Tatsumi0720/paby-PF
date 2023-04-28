import React from 'react';
import { Link } from "react-router-dom";

import ContactUs from "../ContactUs/ContactUs";
import AboutUs from '../AboutUs/AboutUs'
import './Home.css'
import logo from '../../imgs/Logopaby.png'

export default function Home() {
 
    return (
        <div className="Home">

            <h1 className='title'>Bienvenidos a <img src={logo} alt='logoPaby' className='logo' /></h1>
            <p className='description'> Paby es la solución perfecta para tus necesidades de estacionamiento. Con nuestra aplicación web, puedes hacer reservas en cualquiera de nuestras sucursales de parqueaderos con tan solo unos clics. Olvídate de preocuparte por encontrar un lugar donde estacionar, con Paby tienes acceso a una red de parqueaderos confiables y seguros en todo momento.


                Además, nuestra plataforma te permite elegir la plaza que más te convenga y el tiempo que necesites, todo desde la comodidad de tu teléfono o computadora. Y no te preocupes por el pago, Paby te ofrece múltiples opciones de pago seguro a través de la aplicación.

                Únete a la comunidad de Paby y disfruta de la mejor experiencia de estacionamiento en línea. ¡Bienvenido a tu nueva forma de estacionar!</p>

            <Link to='/reservation-panel'><button>Reservar plaza</button></Link>


            <ContactUs/>
            
            <AboutUs/> 

           

        </div>
    )
}