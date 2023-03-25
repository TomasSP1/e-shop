import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {

  const clickedItems = useSelector(state => state.clickedItems);

  return (
    <div>
     <h1>My Cart component</h1> 
     <div>
     {
        clickedItems.map(item => (
          <div className="col-md-3" key={item.id} >
            <div className="card-sl cardContainer">
              <div className='card-image'>
                <img
                  src={item.imageUrl} />
              </div>
              <div className="card-heading">
                {item.name}
              </div>
              <div className="card-text card-description">
                {item.description}
              </div>
              <div className="card-text">
                Price: {item.price}$
              </div>
            </div>
          </div>
        ))
      }
     </div>
    </div>
  )
}

export default Cart
