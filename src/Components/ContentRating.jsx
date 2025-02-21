
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
      dislikes: 0
    };
  }
  render() {
    return (
     <>
     <h1>Text Content Rating</h1>
     </>
    );
  }
}

export default ContentRating;
