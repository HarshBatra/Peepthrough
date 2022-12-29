import CategoriesComp from "./CategoriesComp";
import RetailComp from "./RetailComp";
import OurBlog from "./OurBlog";
import BlogSlideShow from "./BlogSlideshow";
import CitySlideshow from "./CitySlideshow";
import TrendingBusiness from "./TrendingBusiness";
import Navbar from "../../Components/Navbar";
import Footer from '../../Components/Footer';
function Home ()
{
  return (
    <>
      <div className=" font-poppins">
        <CategoriesComp />
        <RetailComp />
        <CitySlideshow />
        <TrendingBusiness />
        <BlogSlideShow />
        <OurBlog />
        <Footer />
      </div>
    </>
  );
}

export default Home;
