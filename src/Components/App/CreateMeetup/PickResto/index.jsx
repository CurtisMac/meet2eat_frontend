import React, { Component } from 'react';


export default class PickedResto extends Component {



  render() {
    let List = this.props.ListResto.map((resto)=>{
      let restaurant= resto.restaurant
      return(
        <li className="collection-item avatar" key={restaurant.id} target="_self">
            <img src={restaurant.featured_image} alt="" className="circle" />
            <span className="title">{restaurant.name} </span>
            <p>{restaurant.location.adress}<br />{restaurant.user_rating.rating_text}</p>
            <a href={restaurant.menu_url} className="secondary-content"><i className="material-icons">restaurant_menu</i></a>
            {/* <a className="btn btn-large" type="button" onClick={()=>{ this.props.pickedResto(2)}} >pick</a> */}
           <a className="btn-floating btn-small red" onClick={() => { this.props.pickedResto(2) }} ><i className="material-icons">add</i></a>
          </li>
        // <li key={restaurant.id} target="_self">
        //   <img src={restaurant.featured_image} alt="" />
        //   <span className="title">{restaurant.name} </span>
        //   <p>{restaurant.location.adress}<br />{restaurant.user_rating.rating_text}</p>
        //   <a href={restaurant.menu_url} className="secondary-content"><i className="material-icons">restaurant_menu</i></a>
        //   {/* <a className="btn btn-large" type="button" onClick={()=>{ this.props.pickedResto(2)}} >pick</a> */}
        //   <button type="button" onClick={() => { this.props.pickedResto(2) }} ><i className="material-icons">add</i></button>
        // </li>
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

