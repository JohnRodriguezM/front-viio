import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getAllProducts } from "../../services/products/getProducts.service";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    getAllProducts().then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Replace this with your loading indicator
  }

  const paginatedProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(products.length / itemsPerPage) - 1)
    );
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <div className="w-[360px] h-auto px-6 py-1 flex-col justify-start items-start inline-flex">
      <div className="self-stretch h-[200px] flex-col justify-start items-center flex">
        <br /> <br /> <br />
        <Link
          className="bg-black text-white rounded-lg px-4 py-2"
          to="/searchresults"
        >
          Buscar producto
        </Link>
        <div className="self-stretch grow shrink basis-0 justify-center items-center gap-4 inline-flex">
          {paginatedProducts.map((product) => (
            <div key={product.id}>
              <img
                className="h-[200px] w-[200px] object-contain"
                src={product.thumbnail}
                alt={product.title}
              />
              <p className="legend">{product.title}</p>
            </div>
          ))}
          <div className="absolute bottom-0 flex space-x-2">
            <button
              className="bg-black text-white rounded-lg px-4 py-2"
              onClick={prevPage}
            >
              Previous
            </button>
            {Array(Math.ceil(products.length / itemsPerPage))
              .fill(0)
              .map((_, index) => (
                <button
                  className={`w-3 h-3 rounded-full border-2 border-black cursor-pointer ${
                    index === currentPage ? "bg-black" : "bg-white"
                  }`}
                  key={index}
                  onClick={() => setCurrentPage(index)}
                />
              ))}
            <button
              className="bg-black text-white rounded-lg px-4 py-2"
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
