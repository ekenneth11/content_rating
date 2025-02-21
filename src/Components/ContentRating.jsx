
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    /* This is a comment */
    /**
     * added a state for the likes and dislikes
     */
    this.state = {
      likes: 0,
      dislikes: 0,
      /*event handlers */
      handleLikes: () =>{
        this.setState((prevState) => ({
          likes: prevState.likes + 1
        }))
      },
      handleDislikes: () =>{
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1
        }))
      }
    };
  }
  render() {
    return (
     <>
     <div className='content-rating'>
        <p>

        </p>
        <div className='rating-buttons'>
          <button className='like-button'>Like ({this.state.likes})</button>
          <button className='dislike-button'>Dislike ({this.state.dislikes}) </button>
        </div>

     </div>
     </>
    );
  }
}

export default ContentRating;
