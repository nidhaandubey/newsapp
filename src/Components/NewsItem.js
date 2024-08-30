import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    
    const { title, description } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="News Image"/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetail" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}
