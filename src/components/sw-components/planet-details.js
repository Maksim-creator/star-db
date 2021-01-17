import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withMainApi} from '../hoc-helpers';

const PlanetDetails = ({itemId, mainApi}) => {
    const {getPlanet, getPlanetImage} = mainApi
    return (
        <ItemDetails 
            itemId={itemId} 
            getData={getPlanet} 
            getImageUrl={getPlanetImage}>

            <Record field="population" label='Population' />
            <Record field='rotation' label='Rotation' />
            <Record field='diametr' label="Diametr" />
        </ItemDetails>
    )
}

export default withMainApi(PlanetDetails)
