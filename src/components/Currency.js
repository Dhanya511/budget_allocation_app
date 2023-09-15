import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../index.css';

const Currency = (props) => {
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);

    const [newcurrency, setNewcurrency] = useState(currency);
    const handleCurrencyChange = (event) =>{
        setNewcurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newcurrency,
        });            
    }

    return(
        <div className="input-group-text">
            <span>Currency  :</span>
            <select className="curr-select" id="dropdown" >
             <option defaultValue value="£" name=" Pound" id ="Pound">£ Pound</option>
             <option name="dollar" value ="dollar" >$ Dollar</option>
             <option name="pound" value="pound" >£ Pound</option>
             <option name="euro" value="euro" >€ Euro</option>
             <option name="rupee" value="rupee" >₹ Ruppee</option>
             </select>
             <button className="btn btn-primary" onClick={handleCurrencyChange} style={{ marginLeft: '2rem' }}>
                        Change Currency
            </button>
        </div>
    )
}

export default Currency;