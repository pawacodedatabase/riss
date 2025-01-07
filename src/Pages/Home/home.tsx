
import CollectionComponent from "../components/CollectionComponent";
import FeaturedProduct from "../products/FeaturedProd";
import Carousel from "./carousel"



const Home: React.FC = () => {
  

  return (
    <>
    <Carousel/>
    <FeaturedProduct/>
    <CollectionComponent/>
    </>
   
  );
};

export default Home;
