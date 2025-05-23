import React from "react";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../CUstomHooks/UseAxiosPublic";
import Banner from "./Banner";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import Discount from "./Discount";
import GetTheAppSection from "./GetTheAppSection";
import FeatureBrand from "./FeatureBrand";
import ReferralCard from "../../ReferralCard";
import Testimonials from "../../Testimonials";
import Products from "./Products";

const Home = () => {
  const axiosPublic = UseAxiosPublic();

  const { data: category = [] } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axiosPublic.get("/getcategorymedicine");
      return res.data;
    },
  });

  const responsive = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4, // Show 4 slides
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3, // Show 3 slides
    },
    tablet: {
      breakpoint: { max: 768, min: 480 },
      items: 2, // Show 2 slides
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1, // Show 1 slide
    },
  };

  return (
    <div>
      <Banner />

      {/* Category Carousel */}
      <div className="p-6 my-14">
        <h1 className="text-3xl font-bold text-center mb-8">
          Medicine Categories
        </h1>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {category.map((item) => (
            <div key={item.id} className="p-2">
              <NavLink to={`/category/details/${item.category}`}>
                <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src={item.image || "/placeholder-image.png"}
                    alt={item.itemName || "Medicine"}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />

                  <div className="p-4 flex justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.category}
                    </h3>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
                      View All
                    </button>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </Carousel>
      </div>

      <Products></Products>

      <Discount></Discount>
      <GetTheAppSection></GetTheAppSection>
      <FeatureBrand></FeatureBrand>
      <ReferralCard></ReferralCard>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
