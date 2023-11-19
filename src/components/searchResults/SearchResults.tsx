import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export const SearchResults = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const filteredProducts = [].filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-96 h-96 px-6 bg-white flex-col justify-start items-center gap-4 inline-flex">
      {/* Resto del código */}
      <div className="w-60 h-10 pl-2 pr-10 py-2 bg-white rounded-lg border-2 border-black justify-start items-start gap-2 flex">
        <SearchIcon />
        <input
          className="w-40 h-6 text-black text-base font-normal font-['Inter'] leading-normal"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* Resto del código */}
      <div className="flex-col justify-start items-start gap-6 flex">
        {filteredProducts.map((product) => (
          <Link to={`/details/${product.id}`} key={product.id}>
            <div className="w-36 flex-col justify-start items-start gap-1 inline-flex">
              <div
                className="w-36 h-36 relative bg-white rounded-lg border-2 border-black"
                style={{
                  backgroundImage: `url(${product.thumbnail})`,
                  backgroundSize: "cover",
                }}
              />
              <div className="flex-col justify-start items-start flex">
                <div className="text-center text-black text-base font-normal font-['Inter'] leading-normal">
                  {product.title}
                </div>
                <div className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
                  Rp. {product.price}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Resto del código */}
    </div>
  );
};

export default SearchResults;
