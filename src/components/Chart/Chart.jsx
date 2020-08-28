import React,{useState, useEffect} from 'react'
import {fetchDailyData} from '../../api/Api'
import {Line, Bar} from 'react-chartjs-2'
import styles from './chart.module.css'

const Chart = ({ data: { confirmed, recovered, deaths, lastUpdate },country})=>{
    if(confirmed){
        console.log(confirmed.value);
    }
    const [dailyData, setDailyData] = useState([])

    useEffect(()=>{
       const fetchdata = async()=>{
           const fData=await fetchDailyData()
           setDailyData(fData)
       }
       fetchdata()
    },[])

    
    const lineChart = (
        dailyData.length?
        (
            <Line 

            data={{
                labels: dailyData.map((data) => data.reportDate),
                datasets: [ {
                    data: dailyData.map((data)=>data.confirmed.total),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                },{
                    data: dailyData.map((data)=>data.deaths.total),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0, 0,0.5)',
                    fill: true,
                }]
            }}
        />
        ): "Hello"
        
    )

    const barChart = (
        confirmed ?
        (<Bar
            data={{
                labels: ["Infected", "Recovered", "Deaths"],
                datasets:[{
                    label: "People",
                    backgroundColor: ['rgba(0,0,225,0.5)', 'rgba(0,225,0,0.5)', 'rgba(225,0,0,0.5)'],
                    data: [confirmed.value,recovered.value,deaths.value]
                }]
            }}
             options ={{
                 legend: {display:false},
                 title: {display:true, text: `Current State in ${country}`}
             }}
        />) : "muri"
    )
  


    return (
        <div className={styles.container}>
            {country ? barChart: lineChart}
        </div>
    )
}

export default Chart;