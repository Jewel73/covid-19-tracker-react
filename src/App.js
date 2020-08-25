import React  from 'react'
import styles from './App.module.css'
import {Chart , Cards , CountryPicker} from './components'
import {fetchData } from './api/Api'

class App extends React.Component{
	state ={
		data: {}
	}
	async componentDidMount(){
		const data = await fetchData();
		
		this.setState({data:data})
	}
	render(){
		return (
			<div className={styles.container}>
				<Cards data={this.state.data}/>
				<Chart />
				<CountryPicker />
			</div>
			)
	}
}

export default App;
