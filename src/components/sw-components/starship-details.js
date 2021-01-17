import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withMainApi} from '../hoc-helpers';

const StarshipDetails = ({itemId, mainApi}) => {
    const {getStarshipImage, getStarship} = mainApi
    return (
        <ItemDetails 
            itemId={itemId} 
            getData={getStarship} 
            getImageUrl={getStarshipImage}>

            <Record field="cargoCapacity" label='Cargo capacity' />
            <Record field='consumables' label='Consumables' />
            <Record field='created' label="created" />
        </ItemDetails>
    )
}

export default withMainApi(StarshipDetails)