import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import './SearchBar.css'

export default function SearchBar() {
    const dispatch = useDispatch()
    const [vehicleBrand, setVehicleBrand] = useState('')

    function handleInputChange(e) {
        setVehicleBrand(e.target.value)
    }
    // function handleSubmit(e) {
    //     e.preventDefault()
    //     if (!vehicleBrand) {
    //         alert('Debe escribir un nombre')
    //         return false
    //     }
    //     dispatch()
    //     setVehicleBrand('')
    // }

    return (
        <div className="SearchBar">
            <input
            type="text"
            placeholder="Buscar vehiculo.."
            value={vehicleBrand}
            onChange={e=>handleInputChange(e)}/>
            <button type='submit' className='search-button' onClick={(e)=> handleSubmit(e)}><i className="fas fa-search"></i>Buscar</button>
        </div>
    )

}