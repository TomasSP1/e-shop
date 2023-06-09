import { Container, Carousel } from 'react-bootstrap';
import products from '../../data/data';
import './Home.css'

const Home = () => {
  return (
    <Container>
      <Carousel fade className='carousel-container'>
        {
          products.map(product => (
            <Carousel.Item key={product.id}>
              <img
                className="d-block w-100 carousel-img"
                src={product.imageUrl}
                alt={product.name} />
              <Carousel.Caption>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>
    </Container>
  )
}

export default Home
