import AddHomeIcon from "@mui/icons-material/AddHome";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";

// ! ESTE COMPONENTE VENDRIA A SER EL HOME DE LA APLICACION
export const Component1 = () => {
  return (
    <>
      <div className="w-[360px] h-[696px] px-6 py-4 flex-col justify-start items-start gap-3 inline-flex">
        {/*primer parte*/}
        <div className="w-[360px] h-14 px-6 py-3.5 justify-between items-center inline-flex">
          <div className="text-center text-black text-lg font-semibold font-['Inter'] leading-7">
            MAYNOOTH
          </div>
          <>
            <NotificationsIcon />
          </>
        </div>

        {/*segunda parte*/}
        <div className="w-[360px] h-52 px-6 py-1 flex-col justify-start items-start inline-flex">
          <div className="self-stretch h-[200px] flex-col justify-start items-center flex">
            <div className="self-stretch grow shrink basis-0 justify-center items-center gap-4 inline-flex">
              <div className="w-[312px] h-40 relative bg-white rounded-lg border-2 border-black" />
            </div>
            <div className="py-2 justify-center items-center inline-flex">
              <div className="p-1.5 justify-center items-center flex">
                <div className="w-3 h-3 bg-black rounded-full" />
              </div>
              <div className="p-1.5 justify-center items-center flex">
                <div className="w-3 h-3 bg-white rounded-full border-2 border-black" />
              </div>
              <div className="p-1.5 justify-center items-center flex">
                <div className="w-3 h-3 bg-white rounded-full border-2 border-black" />
              </div>
              <div className="p-1.5 justify-center items-center flex">
                <div className="w-3 h-3 bg-white rounded-full border-2 border-black" />
              </div>
              <div className="p-1.5 justify-center items-center flex">
                <div className="w-3 h-3 bg-white rounded-full border-2 border-black" />
              </div>
            </div>
          </div>
        </div>

        {/*tercera parte*/}

        <div className="w-[360px] h-[226px] px-6 py-4 flex-col justify-start items-start gap-3 inline-flex">
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="text-center text-black text-lg font-semibold font-['Inter'] leading-7">
              Room Ideas
            </div>
          </div>
          <div className="w-64 justify-start items-start gap-6 inline-flex">
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-64 h-[154px] px-[76.80px] py-[46.20px] bg-white rounded-lg border-2 border-black justify-center items-center inline-flex" />
            </div>
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-64 h-[154px] relative bg-white rounded-lg border-2 border-black" />
            </div>
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-64 h-[154px] relative bg-white rounded-lg border-2 border-black" />
            </div>
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-64 h-[154px] relative bg-white rounded-lg border-2 border-black" />
            </div>
          </div>
        </div>

        {/*cuarta parte*/}
        <div className="w-[360px] h-[188px] px-6 py-4 flex-col justify-start items-start gap-3 inline-flex">
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="text-center text-black text-lg font-semibold font-['Inter'] leading-7">
              Shop By Room
            </div>
          </div>
          <div className="w-[536px] justify-start items-start gap-6 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-[116px] h-[116px] relative bg-white rounded-lg border-2 border-black" />
              <div className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
                Living room
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-[116px] h-[116px] relative bg-white rounded-lg border-2 border-black" />
              <div className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
                Dining room
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-[116px] h-[116px] relative bg-white rounded-lg border-2 border-black" />
              <div className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
                Bedroom
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-[116px] h-[116px] relative bg-white rounded-lg border-2 border-black" />
              <div className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
                Kitchen
              </div>
            </div>
          </div>
        </div>

        <div className="self-stretch justify-start items-start inline-flex">
          <div className="text-center text-black text-lg font-semibold font-['Inter'] leading-7">
            Recommended for you
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="w-[312px] justify-start items-start gap-6 inline-flex">
            <div className="w-36 flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-36 h-36 relative bg-white rounded-lg border-2 border-black" />
              <div className="flex-col justify-start items-start flex">
                <FavoriteIcon />
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

          <div className="w-[312px] justify-start items-start gap-6 inline-flex">
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
          <div className="w-[312px] justify-start items-start gap-6 inline-flex">
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
        </div>

        <div className="w-[360px] h-14 px-6 py-2.5 border-t border-black border-opacity-20 justify-between items-center inline-flex">
          <div className="px-3 py-2 bg-black bg-opacity-10 rounded-full justify-center items-center gap-1 flex">
            <>
              <AddHomeIcon />
            </>

            <div className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
              Home
            </div>
          </div>
          <div className="w-6 h-6 relative">
            <SearchIcon />
          </div>

          <div className="w-6 h-6 relative">
            <AddShoppingCartIcon />
          </div>

          <div className="w-6 h-6 relative">
            <FavoriteIcon />
          </div>

          <div className="w-6 h-6 relative">
            <PersonIcon />
          </div>
        </div>
      </div>
    </>
  );
};
