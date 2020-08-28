import axios from 'axios'

const url = "https://covid19.mathdro.id/api"

export const fetchData = async(country)=>{
    let changeUrl = url;
    if(country){
        changeUrl = `${url}/countries/${country}`
    }
    try {
        const response =await axios.get(changeUrl)

        return response;
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async()=>{
    try {
        const {data} = await axios.get(`${url}/daily`);
        return data;
    } catch (error) {
        console.log(error);
    }
                                 
}


export const fetchCountry = async()=>{

    try {
        const {data:{countries}} = await axios.get(`${url}/countries`)
         const d=countries.map((country=> country.name))
        return d;
    } catch (error) {
        console.log(error);
    }
}