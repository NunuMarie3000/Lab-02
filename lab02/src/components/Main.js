import React, { Component } from 'react'

import HornedBeast from './HornedBeast'

import jsonData from './data.json'

import './Components.css'

export default class Main extends Component {
  render() {
    return (
      <div className='horned-beast-cards'>
        {jsonData.map(obj=>{return <HornedBeast image_url={obj.image_url} title={obj.title} description={obj.description}></HornedBeast>})}
      </div>
    )
  }
}
