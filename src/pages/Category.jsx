
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useParams,Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


export default function CategoryPage() {

  const { CategoryName } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${CategoryName}`).then(json => setProducts(json.data.products))
  }, [CategoryName])


  return (
    <div className='container'>
      <div className="my-5 text-center">
        <h1>{CategoryName.toUpperCase()}</h1>
        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, minus.</p>
      </div>

      <div className="row">

        {
          products.map((product, key) =>
            <div className="col-md-4 " key={key}>
              <Link to={`/products/${product.id}`} className='text-decoration-none '>
                <Card style={{ width: '100%', height: '100%' }}>
                  <Card.Img variant="top" src={product.thumbnail} />
                  <Card.Body className='bg-dark'>
                    <Card.Title className='bg-warning'>{product.title} - {product.price}$</Card.Title>
                    <Card.Text className='bg-info'><i>{product.description}</i>
                    </Card.Text>
                  
                    <Button variant="primary">See More</Button>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          )
        }

      </div>



    </div>
  )
}