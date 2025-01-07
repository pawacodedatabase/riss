
import CollectionComponent from "../components/CollectionComponent";
import DualImageComponent from "../components/dualimage";
import FeaturedProduct from "../products/FeaturedProd";
import Carousel from "./carousel"



const Home: React.FC = () => {
  

  return (
    <>
    <Carousel/>
    <FeaturedProduct/>
    <CollectionComponent/>
    <DualImageComponent/>
    </>
   
  );
};

export default Home;
