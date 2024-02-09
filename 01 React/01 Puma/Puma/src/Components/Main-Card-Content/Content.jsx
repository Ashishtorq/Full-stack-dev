import React, { Fragment } from 'react'
import './Content.css'
const Content = () => {
  return (
    <Fragment>
      <div className="card-container">
        <div className="card">
          <p>-50% OFF</p>
          <img src="https://source.unsplash.com/1600x600/?puma-shoes" alt="" />
          <h5>This is VIP Shoes</h5>
        </div>
      </div>
    </Fragment>
  );
}

export default Content
