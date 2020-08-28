import React  from 'react'
import styles from './App.module.css'
import {Chart , Cards , CountryPicker,Creator} from './components'
import {fetchData, fetchCountry } from './api/Api'

class App extends React.Component{
	state ={
		data: {},
		country: '',
	};


	
	async componentDidMount(){
		const {data} = await fetchData();
		this.setState({data:data})
		console.log(data);
	}

	handleCountrySelect =async (coun)=>{
		const  {data} = await fetchData(coun);
		this.setState({data:data, country:coun})
		console.log(data);
	}


	render(){
		return (
			<div>
				
				<div className={styles.container}>
				<Creator/>
				<Cards data={this.state.data}/>
				<CountryPicker handleCountrySelect={this.handleCountrySelect} />
				<Chart country={this.state.country} data={this.state.data}/>
				
				</div>
			</div>
			)
	}
}

export default App;
