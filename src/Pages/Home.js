import CategoriesComp from "./Homepage Components/CategoriesComp";
import RetailComp from "./Homepage Components/RetailComp";
import OurBlog from "./Homepage Components/OurBlog";
import BlogSlideShow from "./Homepage Components/BlogSlideshow";
import CitySlideshow from "./Homepage Components/CitySlideshow";
import TrendingBusiness from "./Homepage Components/TrendingBusiness";
import IntroComp from "./Homepage Components/IntroComp"

function Home() {
  return (
    <>
        <div className="font-poppins">
            <IntroComp />
            <CategoriesComp />
            <RetailComp />
            <CitySlideshow />
            <TrendingBusiness />
            <BlogSlideShow />
            <OurBlog />
        </div>
    </>
  );
}

export default Home;
