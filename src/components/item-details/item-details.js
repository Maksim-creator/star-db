import React, { Component } from 'react';
import MainApi from '../../services/server';
import './item-details.css';

const Record = ({item, label, field}) => {
	return (
		<li className="list-group-item">
			<span className="term">{label}</span>
			<span>{item[field]}</span>
    	</li>
	)
}

export {
	Record
}

export default class ItemDetails extends Component {
	mainApi = new MainApi()
	state = {
		item: null,
		image: null
	}

	componentDidMount(){
		this.updateItem()
	}

	componentDidUpdate(prevProps){
		if(this.props.itemId !== prevProps.itemId){
			this.updateItem()
		}
	}

	updateItem(){
		const {itemId, getData, getImageUrl} = this.props;
		if(!itemId){
			return
		}  

		getData(itemId)
			.then(item => {
				this.setState({
					item,
					image: getImageUrl(item)
				})
			})
  	}

  render() {
	const { item, image } = this.state;

	if(!item){
		return (
			<>
				<div className="title">
					Stop! Choose a person!
				</div>
				<img src="https://www.zr.ru/d/story/02/909314/0-0.jpg" alt="zeleniy-img" className="choose-img" />
			</>
		)
	}
	console.log(item);
	const {name} = this.state.item;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={image} alt='Img' />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
				React.Children.map(this.props.children, (child, index) => {
					return React.cloneElement(child, {item})
				})
			}
          </ul>
        </div>
      </div>
    )
  }
}
