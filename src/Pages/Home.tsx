import Header from '@componentsHome/Header';
import Category from '@componentsHome/Category';
import Cause from '@componentsHome/Cause';
import ProductList from '@componentsHome/ProductList';
import SaleSection from '@componentsHome/SaleSection';


const Home = () => {
  return (
    <div className="min-h-screen bg-white  ">
      <Header/>
      <Category/>
      <Cause/>
      <ProductList/>
      <SaleSection/>
   </div>
  )
}

export default Home