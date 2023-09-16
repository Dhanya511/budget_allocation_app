import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';


const Currency = (props) => {
   const { dispatch } = useContext(AppContext);
   
    
    const handleCurrencyChange = (name) =>{
        let value = '£';
            switch(name){
                case 'dollar':
                    value = '$';
                    break;

                default:
                    value = '£';
                    break;

        };
        const currency = {
            name: name,
            id: value,
        };
         dispatch({
           type: 'CHG_CURRENCY',
            payload: currency,
        });            
    }

    return(
        <div className="input-group-text">
            <span>Currency  :</span>
            <select className="curr-select" id="dropdown" >
             <option defaultValue value="£" name=" Pound" id ="Pound">£ Pound</option>
             <option name="dollar" value ="dollar" onmouseover={handleCurrencyChange(props.name)}>$ Dollar</option>
             <option name="pound" value="pound" onmouseover={handleCurrencyChange(props.name)} >£ Pound</option>
             <option name="euro" value="euro" onmouseover={handleCurrencyChange(props.name)} >€ Euro</option>
             <option name="rupee" value="rupee" onmouseover={handleCurrencyChange(props.name)} >₹ Ruppee</option>
             </select>
             
        </div>
    )
}

export default Currency;