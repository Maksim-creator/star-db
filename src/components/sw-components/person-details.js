import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withMainApi} from '../hoc-helpers';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='gender' label='Gender' />
            <Record field='eyeColor' label='Eye color' /> 
            <Record field='birthday' label='Birthday' />    
        </ItemDetails>    
    );
}

const mapMethodsToProps = (mainApi) => {
    return {
        getData: mainApi.getPerson,
        getImageUrl: mainApi.getPersonImage
    }
}

export default withMainApi(PersonDetails, mapMethodsToProps);