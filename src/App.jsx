
import './App.css'
import Footer from './Component/Footer'
import Hero from './Component/Hero'
import Navbar from './Component/Navbar'
import Pricing from './Component/Pricing'
import Steps from './Component/Steps'
import Tools from './Component/Tools'
import Transform from './Component/Transform'



const productsData = async () => {
  const res = await fetch("/Products.json")
  return res.json()
}

const productData = productsData()

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Tools productData={productData}></Tools>
      <Steps></Steps>
      <Pricing/>
      <Transform/>
      <Footer/>
    </>
  )
}

export default App
