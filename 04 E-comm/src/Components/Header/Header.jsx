import {React, Fragment} from 'react'
import "./Header.css"
const Header = () => {
  return (
    <Fragment>
      <div id="head">
        <h6>Home</h6>
        <h6>
          Cart <i class="ri-shopping-cart-2-line"></i>
        </h6>
      </div>
    </Fragment>
  );
}

export default Header
