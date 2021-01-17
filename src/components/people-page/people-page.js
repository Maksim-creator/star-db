import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorMessage from '../error-message';
import MainApi from '../../services/server';
import Row from '../row';

class ErrorBoundry extends Component {
    
    state = {
        hasError: false
    }

    componentDidCatch(){
        this.setState({
            hasError: true
        })
    }

    render(){
        if(this.state.hasError){
            return <ErrorMessage />
        }
        return this.props.children
    }
}

export default class PeoplePage extends Component {
   mainApi = new MainApi()
   
    state = {
        selectedPerson: null
    }


    onItemSelected = (selectedPerson) => {
        this.setState({selectedPerson})
    }

    render(){
        if(this.state.hasError){
            return <ErrorMessage />
        }

        const itemList =( 
            <ItemList 
                onItemSelected ={this.onItemSelected}
                getData={this.mainApi.getAllPeople} >
                    {(i) => 
                        `${i.name} (${i.birthday})`
                    }
            </ItemList>
        );

        const personDetails = (<ItemDetails itemId={this.state.selectedPerson} />);

        return (
          <ErrorBoundry>
              <Row left={itemList} right={personDetails}/>
          </ErrorBoundry>  
        )
    }
}