import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './Components.css'

export default class HornedBeast extends Component {
  constructor(props){
    super(props)
    this.state ={
      likes: 0
    }
  }

  updateLikes(){
    this.setState((prev) =>({
      likes: prev.likes + 1
    }))
  }

  render() {
    return (
        <Card>
        <Card.Img className='card-img' variant="top" src={this.props.image_url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Button onClick={()=>this.updateLikes()} variant="primary">Like</Button>
        </Card.Body>
        <Card.Footer><div>{this.state.likes} <i class="fa-solid fa-heart"></i> Favorites</div></Card.Footer>
      </Card>
    )
  }
}
