import products from '../data/data';

import { Heart } from 'react-bootstrap-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaStar } from '@fortawesome/free-brands-svg-icons'
import './Item.css'

const Item = () => {
  return (
    <div className='row d-flex justify-content-evenly'>
      {
        products.map(product => (
          <div class="col-md-3">
            <div class="card-sl cardContainer">
              <div class="card-image">
                <img
                  src={product.imageUrl} />
              </div>
              <div>
                <a class="card-action" href="#"><Heart /></a>
              </div>
              <div class="card-heading">
                {product.name}
              </div>
              <div class="card-text card-description">
                {product.description}
              </div>
              <div class="card-text">
                Price: {product.price}$
              </div>
              <a href="#" class="card-button">Purchase</a>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Item
