import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorMessage from '../error-message';
import PeoplePage from '../people-page';
import MainApi from '../../services/server';
import ItemList from '../item-list';
import ItemDetails, {Record} from '../item-details/item-details';
import Row from '../row';
import {Provider} from '../context-api';
import DummySwapiService from '../../services/dummy-swapi-service';
import {
    PersonList,
  PlanetList,
  StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components'

import './app.css'

export default class App extends Component {

    mainApi = new MainApi();

    state = {
        showRandomPlanet: true,
        hasError: false
    }

    toggleBtn = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        })
    }

    componentDidCatch(){
        this.setState({hasError: true})
    }

    render(){
        if(this.state.hasError){
            return <ErrorMessage />
        }

        

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
        return (
            <div>
                <Provider value={this.mainApi}>
                    <Header />

                    <PersonDetails itemId={11} />
                    <PlanetDetails itemId={6} />
                    <StarshipDetails itemId={9} />

                    {/* <PersonList />
                    <StarshipList />
                    <PlanetList /> */}
                    

                    {/* <Row left={personDetails} right={starshipDetails} />
                    {planet}
                    <button className="btn btn-warning"
                            onClick={this.toggleBtn}>Click</button>
                    
                    <PeoplePage/> */}

                    {/* <div className="row mt-5">
                        <div className="col-md-6">
                            <ItemList 
                                onItemSelected ={this.onItemSelected}
                                getData={this.mainApi.getAllPlanets}
                                renderItem={(item) => item.name}/>
                        </div>
                        <div className="col-md-6">
                            <ItemDetails itemId={this.state.selectedPerson} />
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-6">
                            <ItemList 
                                onItemSelected ={this.onItemSelected}
                                getData={this.mainApi.getAllStarships}
                                renderItem={(item) => item.name}/>
                        </div>
                        <div className="col-md-6">
                            <ItemDetails itemId={this.state.selectedPerson} />
                        </div>
                    </div> */}
                </Provider>
            </div>
        )
    }
}
