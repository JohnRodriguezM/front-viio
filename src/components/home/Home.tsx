import { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getAllProducts } from "../../services/products/getProducts.service";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { RingLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { seting } from "../../utils/constants/settings";
import { LoadingContext } from "../../context/LoadingContext";
import { setUser } from "../../toolkit/slice/viio-slice";

export const Home: React.FC = () => {
  // ? dispatch declaration
  const dispatch = useDispatch();

  // ? context declaration
  const { loading, handleLoading } = useContext(LoadingContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts(handleLoading).then((products) => {
      setProducts(products);
    });
  }, []);

  if (loading) {
    return (
      <>
        <div
          className="flex justify-center items-center"
          style={{ height: "100vh" }}
        >
          <RingLoader color="#36d7b7" />
        </div>
      </>
    );
  }

  return (
    <div className="container text-center flex justify-center mt-40">
      <Swiper
        {...seting}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {products.map((item, index) => (
          <SwiperSlide
            key={Math.random() * index + 1}
            className="swiper-slide"
            style={{
              width: "500px",
              height: "600px",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{ width: "500px", height: "500px" }}
              className="justify-center"
            />

            <div
              className="
              grid-cols-2
            "
            >
              <div>
                <h2 className="swiper-slide__title">{item.title}</h2>
                <p className="swiper-slide__price">{item.price}</p>
              </div>
              <div>
                <Link
                  to={`/product/${item.id}`}
                  className="swiper-slide__button"
                >
                  <button
                    className="
                  bg-blue-500
                  hover:bg-blue-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded-full
                  w-40
                  text-center
                  mt-4
                "
                    onClick={() => {
                      dispatch(setUser(item));
                    }}
                  >
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-controler mt-16">
          <div className="swiper-button-prev slider-arrow w-20 h-20 rounded-full bg-white shadow flex items-center justify-center text-blue-500"></div>
          <div className="swiper-button-next slider-arrow w-20 h-20 rounded-full bg-white shadow flex items-center justify-center text-blue-500"></div>
        </div>
      </Swiper>
    </div>
  );
};
