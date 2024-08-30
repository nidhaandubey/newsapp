import React, { Component } from 'react'
import NewsItem from './NewsItem'


export default class News extends Component {
  render() {
    return (
      <div className='container my-4'>
        <h2>Diplomacy - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="cricket" description="click for news "/>
          </div>
          <div className="col-md-4">
            <NewsItem title="cricket" description="click for news "/>
          </div>
          <div className="col-md-4">
            <NewsItem title="cricket" description="click for news "/>
          </div>
        </div>
      </div>
    )
  }
}
