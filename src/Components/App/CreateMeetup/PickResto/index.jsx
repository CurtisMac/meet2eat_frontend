import React, { Component } from 'react';


export default class PickedResto extends Component {



  render() {
    let List = this.props.ListResto.map((resto)=>{
      let restaurant= resto.restaurant
      return(
        <li className="collection-item avatar" key={restaurant.id} target="_self">
          <img src={restaurant.featured_image} alt="" className="circle" onClick={() => { this.props.pickedResto(2) }}/>
            <span className="title">{restaurant.name} </span>
            <p>{restaurant.location.adress}<br />{restaurant.user_rating.rating_text}</p>
            <a href={restaurant.menu_url} className="secondary-content"><i className="material-icons">restaurant_menu</i></a>
<<<<<<< HEAD
            {/* <a className="btn btn-large" type="button" onClick={()=>{ this.props.pickedResto(2)}} >pick</a> */}
           <a className="btn-floating btn-small red" onClick={() => { this.props.pickedResto(restaurant) }} ><i className="material-icons">add</i></a>
=======
>>>>>>> 31db5eedc1181b9ce28b936e84984d6e9b034ab8
          </li>
      )
    })
    return (

      <div className="restList col s12">
        <h3 className="center-align">Pick a Restaurant</h3>
        <ul className="collection">
          {List}
        </ul>
      </div>
    );
  }
}

