import React, { useState } from 'react'
import { Route,Routes,Navigate  } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Category from './pages/Category'
import Productpages from './pages/Productpages'
import Products from './pages/Products'
import Page404 from './pages/Page404'
import Signup from './pages/Signup'
import NavigationBar from './components/NaveBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
function App() {
  const [ user, setUser ] = useState(true)
 
  return (
    <>
    
    <NavigationBar/>
    {
      user
       ?
        (
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='products' element={<Products/>}/>
          <Route path='products/:productID' element={<Productpages/>}/>
          <Route path="/products/Category/:CategoryName" element={<Category />} />
          <Route path='*' element={<Page404/>}/>
        </Routes>
        )
        :
        (
          <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='Products' element={<Products/>}/> */}
          <Route path='Login' element={<Login/>}/>
          <Route path='Signup' element={<Signup/>}/>
          <Route path='*' element={ <Navigate to="/Login" replace={true} />}/>
        </Routes>
        )
    }

   <Footer/>
  
    
    </>
  )
}

export default App
