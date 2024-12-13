import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const categories = [
    { title: "Food & Beverages", route: "/food", index: 0 },
    { title: "Beer, Coolers, Ciders", route: "/beer", index: 1 },
    { title: "Shots, Cocktails, Soju", route: "/shots", index: 2 },
    { title: "Wine List", route: "/wines", index: 3 },
    { title: "Shooters", route: "/shooters", index: 4 },
    { title: "Cocktails", route: "/cocktails", index: 5 },
  ];

  return (
    <div className="App w-full h-full">
      {/* Background Image */}
      <img
        className="fixed top-0 left-0 h-full w-full object-cover backdrop-contrast-50 -z-10"
        src="./bg.jpg"
        alt="Background"
      />

      <div className="mx-[5%] bg-zinc-700 bg-opacity-75 min-h-screen relative">
        {/* Fixed Header with Logo */}
        <div className="fixed top-0 left-0 w-full bg-black flex h-[70px] items-center px-5 z-20">
          <img src="./Logo.jpg" alt="Logo" className="h-12" />
        </div>

        {/* Fixed Swiper Navigation */}
        <div className="fixed top-[70px] left-0 w-full z-20">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={5}
            slidesPerView={3}
            // autoplay={{ delay: 3000 }}
            // loop={true}
            // navigation={true}
            // pagination={{ clickable: true }}
            className="w-full bg-gray-800 py-2"
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`flex items-center justify-center text-white text-[12px] font-bold  p-2 shadow-inner cursor-pointer
                    ${
                      selectedIndex === category.index
                        ? "bg-[#333] active:bg-slate-600"
                        : "bg-[#7d7d7d] hover:bg-[#555]"
                    }`}
                >
                  <Link
                    onClick={() => setSelectedIndex(category.index)}
                    to={category.route}
                  >
                    {category.title}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Main Content with Padding to Avoid Overlap */}
        <div className="pt-[150px] p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
