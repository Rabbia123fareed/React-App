
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import ReactStars from 'react-stars'
import Swal from 'sweetalert2'
import Carousel from 'react-bootstrap/Carousel';


export default function ProductPage() {
  const { productID } = useParams()
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [review, setReview] = useState("")
  const [ratingstar, setratingStar] = useState([])
  const ratingChanged = (newRating) => {
    setratingStar(newRating)
    Swal.fire({
      title: 'Rate us!',
      text: 'Thanks for your Rating',
      icon: 'success',
      confirmButtonText: 'Continue'
    })
}

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productID}`).then(json => setProduct(json.data))
  }, [])


  const submitReview = () => {
    const payload = {
        productID: productID,
        review: review,
        rating: ratingstar
    }
    console.log(payload)
    Swal.fire({
      title: 'Review Submiited!',
      text: 'Thanks for your Review',
      icon: 'success',
      confirmButtonText: 'Continue'
    })
  }

  const addtoCart = () => {

    const payload = {
      ...product,
      quantity: quantity,
      productTotal: product.price * quantity
    }

    console.log(payload)
    Swal.fire({
      title: 'Added to Cart!',
      text: 'Check your Cart for Check Out',
      icon: 'success',
      confirmButtonText: 'Enjoy Shopping'
  })

  }


  return (
    <>

<div className='bg-secondary'>

<div className="container py-5 ">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/products">products</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.title}
            </li>
          </ol>
        </nav>
      </div>


      <div className="container bg-info">





        <h1 className="mt-5 text-center">
          {product.title} - {product.price}$
        </h1>
        <p className=" text-center text-secondary">
          {product.description}
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <ReactStars value={product.rating} edit={false}
            count={5}
            size={24}
            color2={'#ffd700'} />  <span className='ms-3 fw-bold'> - {product.rating}</span>
        </div>

        <div className="text-center mt-3">
          {
            quantity > 1
              ?
              (<button className="btn btn-dark mx-2" onClick={() => setQuantity(quantity - 1)}>-</button>)
              :
              (<button disabled className="btn btn-dark mx-2" onClick={() => setQuantity(quantity - 1)}>-</button>)
          }

          <span className="mx-4">{quantity}</span>
          <button className="btn btn-dark mx-2" onClick={() => setQuantity(quantity + 1)}>+</button>


          <div className="mt-4">
            <button className='mx-5 btn btn-dark' onClick={addtoCart}>Add to Cart</button>
          </div>

         


        </div>


        <div className="py-5">
          <Carousel>
            {
              product?.images?.map((img, key) => <Carousel.Item key={key}>
                <img
                  className="d-block w-100"
                  src={img}
                  alt="First slide"
                />
              </Carousel.Item>)
            }

          </Carousel>
        </div>
    

       
        
          

         
        <div className="col-mb-6">
          <div className="containertext-center">
            <div className="mb-5">
              <h1>Review Us</h1>
              <p>Share your review us in commit box</p>
            </div>

            <div className="container py-3">
          <h5 className=''>Review us:</h5>
          <div className="form-floating mt-3">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: 100 }}
              defaultValue={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <label htmlFor="floatingTextarea2">Write here Comments</label>
          </div>
          </div>
          <div className='d-flex align-items-center'>
            Rate Us
          <ReactStars 
            count={5}
            size={24}
            value={ratingstar}
            onChange={ratingChanged}
            color2={'#ffd700'} />  <span className='ms-3 fw-bold'>({ratingstar}) </span>
      
          
         
          </div>

          <button className="btn btn-dark mt-2" onClick={submitReview}>
            Submit
          </button>
        </div>
        </div>
        


      </div>
</div>

    </>
  )
}

