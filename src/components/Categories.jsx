import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function CategorySection() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories').then(json => setCategories(json.data))
    }, [])


    return (
        <div className="container my-5 pb-5 bg-dark">

            <div className="my-5 text-center text-warning">
                <h1><i>Categories</i></h1>
                <p className='text-secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quos architecto, aliquid commodi facilis rerum tempora beatae doloribus in sed fugiat nihil ullam excepturi minima aspernatur ad, temporibus magni consequuntur!</p>
            </div>


            <div className="row">
                {
                    categories.map((category, key) => <div className="col-md-3 my-2 text-center fw-bold" key={key}>
                        <Link className='text-decoration-none' to={`/products/category/${category}`}>
                            <Card className='bg-primary'>
                                <Card.Body><i>{category.toUpperCase()}</i></Card.Body>
                            </Card>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    )
}