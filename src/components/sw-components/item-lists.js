import React from 'react';
import ItemList from '../item-list';
import {withData} from '../hoc-helpers';
import MainApi from '../../services/server';

const mainApi = new MainApi();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = mainApi

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )

    }
}

const renderName = ({name}) => <span>{name}</span>
const renderNameAndModel = ({name, model}) => <span>{name} , Model: {model}</span>

const ListWithChildren = withChildFunction(ItemList, renderName)
const ListWithChildrenMod = withChildFunction(ItemList, renderNameAndModel)

const PersonList = withData(ListWithChildren, getAllPeople)
const PlanetList = withData(ListWithChildren, getAllPlanets)
const StarshipList = withData(ListWithChildrenMod, getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}