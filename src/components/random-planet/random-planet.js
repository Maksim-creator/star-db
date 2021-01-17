import React, { Component } from 'react';
import MainApi from '../../services/server';
import './random-planet.css';
import Spiner from '../spiner';
import ErrorMessage from '../error-message';

export default class RandomPlanet extends Component {
	mainApi = new MainApi();

	state = {
		planet: {},
		loading: true,
		error: false
	}

	
	componentDidMount(){
		// this.updatePlanet()
		this.interval = setInterval(() => {
			this.updatePlanet()
		}, 4000);
	}

	componentWillUnmount(){
		clearInterval(this.interval)
	}

	onPlanetLoaded = (planet) => {
		this.setState({
			planet,
			loading: false, 
			error: false
		})
	}

	onError = () => {
		this.setState({
			error: true,
			loading: false
		})
	}

	updatePlanet(){
		const id = Math.floor(Math.random()*10)+2;
		this.mainApi.getPlanet(id)
					.then(this.onPlanetLoaded)
					.catch(this.onError);
	}

	render() {
		const {planet, loading, error} = this.state;
		const hasData = !(error || loading)
		const errorMessage  = error ? <ErrorMessage /> : null 
		const spiner = loading ? <Spiner />: null;
		const content = hasData ? <PlanetView planet={planet} /> : null;
		
		
		return (
			<div className="random-planet jumbotron rounded">
				{errorMessage}
				{spiner}
				{content}
			</div>
		);
	}
}

const PlanetView = ({planet}) => {
	const {id,name, population, rotation, diametr} = planet
	console.log(id);
	return (
		<>
			<img className="planet-image"
					src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="1" />
				<div>
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
					<span className="term">Population</span>
					<span>{population}</span>
					</li>
					<li className="list-group-item">
					<span className="term">Rotation Period</span>
					<span>{rotation}</span>
					</li>
					<li className="list-group-item">
					<span className="term">Diameter</span>
					<span>{diametr}</span>
					</li>
				</ul>
				</div>
		</>

	)
}
