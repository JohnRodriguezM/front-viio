import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FavoriteIcon  from '@mui/icons-material/Favorite';

export const SearchResults = () => {
  return (
    <div className="w-96 h-96 px-6 bg-white flex-col justify-start items-center gap-4 inline-flex">
      <div className="h-24 pl-4 pr-6 pt-3 border-b border-black border-opacity-20 flex-col justify-center items-start gap-1 flex">
        <div className="justify-start items-center gap-4 inline-flex">
          <ArrowBackIcon/>
          <div className="h-10 justify-center items-center flex">
            <div className="w-60 h-10 pl-2 pr-10 py-2 bg-white rounded-lg border-2 border-black justify-start items-start gap-2 flex">
              <SearchIcon/>
              <div className="w-40 h-6 text-black text-base font-normal font-['Inter'] leading-normal">
                Sofa
              </div>
            </div>
          </div>
          <FilterAltIcon/>
        </div>
        <div className="self-stretch pl-2 justify-between items-center inline-flex">
          <div className="py-2 border-b-2 border-black justify-start items-start flex">
            <div className="text-black text-sm font-semibold font-['Inter'] leading-tight">
              Relevance
            </div>
          </div>
          <div className="py-2 justify-start items-start flex">
            <div className="text-black text-opacity-60 text-sm font-semibold font-['Inter'] leading-tight">
              Latest
            </div>
          </div>
          <div className="py-2 justify-start items-start flex">
            <div className="text-black text-opacity-60 text-sm font-semibold font-['Inter'] leading-tight">
              Top Sales
            </div>
          </div>
          <div className="justify-start items-center flex">
            <div className="text-black text-opacity-60 text-sm font-semibold font-['Inter'] leading-tight">
              Price
            </div>
            <div className="w-4 h-4 relative" />
          </div>
        </div>
      </div>
      <div className="self-stretch h-96 flex-col justify-start items-start gap-3 flex">
        <div className="self-stretch justify-start items-start gap-1 inline-flex">
          <div className="text-center text-black text-lg font-semibold font-['Inter'] leading-7">
            100 Results for Sofa
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="w-80 justify-start items-start gap-6 inline-flex">
            <div className="w-36 flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-36 h-36 relative bg-white rounded-lg border-2 border-black" />
              <FavoriteIcon />
              <div className="flex-col justify-start items-start flex">
                <div className="text-center text-black text-base font-normal font-['Inter'] leading-normal">
                  Product Name
                </div>
                <div className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
                  Rp. 500.000
                </div>
              </div>
            </div>
            <div className="w-36 flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-36 h-36 relative bg-white rounded-lg border-2 border-black" />
              <FavoriteIcon />
              <div className="flex-col justify-start items-start flex">
                <div className="text-center text-black text-base font-normal font-['Inter'] leading-normal">
                  Product Name
                </div>
                <div className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
                  Rp. 500.000
                </div>
              </div>
            </div>
          </div>
          <div className="w-80 justify-start items-start gap-6 inline-flex">
            <div className="w-36 flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-36 h-36 relative bg-white rounded-lg border-2 border-black" />
              <FavoriteIcon />
              <div className="flex-col justify-start items-start flex">
                <div className="text-center text-black text-base font-normal font-['Inter'] leading-normal">
                  Product Name
                </div>
                <div className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
                  Rp. 500.000
                </div>
              </div>
            </div>
            <div className="w-36 flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-36 h-36 relative bg-white rounded-lg border-2 border-black" />
              <FavoriteIcon />
              <div className="flex-col justify-start items-start flex">
                <div className="text-center text-black text-base font-normal font-['Inter'] leading-normal">
                  Product Name
                </div>
                <div className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
                  Rp. 500.000
                </div>
              </div>
            </div>
          </div>
          <div className="w-80 justify-start items-start gap-6 inline-flex">
            <div className="w-36 flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-36 h-36 relative bg-white rounded-lg border-2 border-black" />
              <FavoriteIcon />
              <div className="flex-col justify-start items-start flex">
                <div className="text-center text-black text-base font-normal font-['Inter'] leading-normal">
                  Product Name
                </div>
                <div className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
                  Rp. 500.000
                </div>
              </div>
            </div>
            <div className="w-36 flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-36 h-36 p-11 bg-white rounded-lg border-2 border-black justify-center items-center inline-flex" />
              <FavoriteIcon />
              <div className="flex-col justify-start items-start flex">
                <div className="text-center text-black text-base font-normal font-['Inter'] leading-normal">
                  Product Name
                </div>
                <div className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
                  Rp. 500.000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
