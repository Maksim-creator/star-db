export default class MainApi {

  _apiBase = 'https://swapi.dev/api';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPeople);
  }

  getPerson = async (id) => {
    const res = await this.getResource(`/people/${id}/`);
    return this._transformPeople(res)
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
    const res = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(res)
  }

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
    const res = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(res)
  }

  getPersonImage = ({id}) => {
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  }

  getPlanetImage = ({id}) => {
    return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
  }

  getStarshipImage = ({id}) => {
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1]
  }

  _transformPlanet = (planet) => {
    return {
        id: this._extractId(planet),
				name:planet.name || 'n/a',
				population: planet.population || 'n/a',
				rotation: planet.rotation_period || 'n/a',
				diametr: planet.diametr || 'n/a'
    }
  }

  _transformPeople = (people) => {
    return {
      id: this._extractId(people),
      name: people.name,
      gender: people.gender,
      height: people.height,
      mass: people.mass,
      birthday: people.birth_year,
      eyeColor: people.eye_color
    }
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      cargoCapacity: starship.cargo_capacity,
      consumables: starship.consumables,
      created: starship.created,
      crew: starship.crew,
      length: starship.length,
      edited: starship.edited,
      name: starship.name,
      model: starship.model
    }
  }
}


