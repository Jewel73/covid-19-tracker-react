import React, { useState } from 'react'
import {FormControl, NativeSelect} from '@material-ui/core'
import { useEffect } from 'react'
import {fetchCountry} from '../../api/Api'

import styles from './countrypicker.module.css'


const CountryPicker =({handleCountrySelect})=>{
    const [conuntryData, setCountryData] = useState([])

    useEffect(()=>{
        const fetchAPI = async()=>{  
            setCountryData(await fetchCountry())
        }
        fetchAPI()
        
    },[setCountryData]); 

    
    return(
        
           <FormControl style={{minWidth: 220}} onChange={(e)=>handleCountrySelect(e.target.value)} className={styles.formControl}>
               <NativeSelect className={styles.fullOption}>
                    <option  className={styles.others} value="">Select Country--</option>
                    {conuntryData.map((contry, i)=> <option  className={styles.fullOption} key={i} value={contry}>{contry}</option>)}
                
               </NativeSelect>
           </FormControl>
        
    )
}

export default CountryPicker;