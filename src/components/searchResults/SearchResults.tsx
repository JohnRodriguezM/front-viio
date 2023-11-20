/**
 * Renders the search results component.
 *
 * @returns The JSX element representing the search results component.
 */
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getSearchedProducts } from "../../services/products/getProducts.service";
import { useContext } from "react";
import { LoadingContext } from "../../context/LoadingContext";
import { toast } from "sonner";
import { RingLoader } from "react-spinners";
import { StateSearch } from "./types/searchResults.types";

export const SearchResults: React.FC = (): JSX.Element => {
  //* state declaration
  const [stateSearch, setStateSearch] = useState<StateSearch>({
    search: "",
    filteredProducts: [],
  });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

  // ? context declaration
  const { loading, handleLoading } = useContext(LoadingContext);

  const { search, filteredProducts } = stateSearch;

  const totalPages: number = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await getSearchedProducts(search, handleLoading);
      setStateSearch((prevState) => ({
        ...prevState,
        filteredProducts: response,
      }));
    } catch (error) {
      setStateSearch((prevState) => ({
        ...prevState,
        filteredProducts: [],
      }));
      if (error.message.includes("No products found")) {
        toast.error("No products found");
      } else {
        toast.error("An error occurred while fetching products");
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateSearch({
      ...stateSearch,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full h-full flex justify-center items-center gap-4"
      >
        <div className="w-[360px] h-[800px] px-6 bg-white flex-col justify-start items-center gap-4 inline-flex mt-24">
          <div className="h-[92px] pl-4 pr-6 pt-3 border-b border-black border-opacity-20 flex-col justify-center items-start gap-1 flex">
            <div className="justify-start items-center gap-4 inline-flex">
              <Link to="/home">
                <ArrowBackIcon />
              </Link>
              <div className="h-10 justify-center items-center flex">
                <div className="w-60 h-10 pl-2 pr-10 py-2 bg-white rounded-lg border-2 border-black justify-start items-start gap-2 flex">
                  <div className="w-6 h-6 relative flex-col justify-center items-start flex" />

                  <input
                    onChange={handleChange}
                    type="text"
                    name="search"
                    placeholder="Search products..."
                    className="w-40 h-6 text-black text-base font-normal font-['Inter'] leading-normal outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-10 h-10 rounded-lg flex justify-center items-center gap-1"
              >
                <SearchIcon />
              </button>
            </div>
          </div>
          <div className="self-stretch h-[664px] flex-col justify-start items-start gap-3 flex">
            {loading ? (
              <>
                <div
                  className="flex justify-center items-center"
                  style={{ height: "100vh", width: "100%" }}
                >
                  <RingLoader color="#36d7b7" />
                </div>
              </>
            ) : filteredProducts.length > 0 ? (
              <>
                <div className="self-stretch justify-start items-start gap-1 inline-flex">
                  <div className="text-center text-black text-lg font-semibold font-['Inter'] leading-7">
                    {`${filteredProducts?.length} results for ${search}`}
                  </div>
                </div>

                <section className="grid grid-cols-2 gap-6">
                  {currentProducts.map((product, index) => (
                    <Link
                      to={`/product/${product.id}`}
                      className="flex-col justify-start items-start gap-6 flex"
                    >
                      <div
                        key={Math.random() * index + 1}
                        className="flex-col justify-start items-start gap-6 flex"
                      >
                        <div className="w-[312px] justify-start items-start gap-6 inline-flex">
                          <div className="w-36 flex-col justify-start items-start gap-1 inline-flex">
                            <div className="w-36 h-36 relative bg-white rounded-lg border-2 border-black">
                              <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="w-6 h-6 relative" />
                            <div className="flex-col justify-start items-start flex">
                              <div className="text-center text-black text-base font-normal font-['Inter'] leading-normal">
                                {product.title}
                              </div>
                              <div className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
                                {product.price}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </section>

                <div className="flex justify-center items-center">
                  <button
                    className="w-20 h-10 rounded-lg flex justify-center items-center gap-1
                bg-black text-white font-semibold font-['Inter'] leading-tight
              "
                    onClick={() =>
                      setCurrentPage((page) => Math.max(page - 1, 1))
                    }
                  >
                    Previous
                  </button>
                  <button
                    className="w-20 h-10 rounded-lg flex justify-center items-center gap-1
                bg-black text-white font-semibold font-['Inter'] leading-tight
              "
                    onClick={() =>
                      setCurrentPage((page) => Math.min(page + 1, totalPages))
                    }
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchResults;
