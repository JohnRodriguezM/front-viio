import { useSelector } from "react-redux";
import { RootState } from "./types/productDetails.types";

/**
 * Renders the product details component.
 * @returns The JSX element representing the product details component.
 */
export const ProductDetail: React.FC = (): JSX.Element => {
  // ? import { useParams } from "react-router-"const { id } = useParams();

  const { product } = useSelector((state: RootState) => state?.viioSlice);

  return (
    <div className="w-96 h-96 p-28 bg-white border-2 border-black justify-center items-center inline-flex mt-32">
      <div className="w-[360px] h-[2074px] px-6 pt-96 pb-20 bg-white flex-col justify-start items-start gap-6 inline-flex">
        <div className="flex-col justify-start items-center flex">
          <div className="w-[360px] h-[360px] p-[108px] bg-white border-2 border-black justify-center items-center inline-flex" />
          <div className="justify-center items-center inline-flex">
            <div className="p-1.5 justify-center items-center flex">
              <div className="w-3 h-3 bg-black rounded-full" />
            </div>
            <div className="p-1.5 justify-center items-center flex">
              <div className="w-3 h-3 bg-white rounded-full border-2 border-black" />
            </div>
          </div>
        </div>
        <div className="w-[360px] h-14 pl-4 pr-6 py-4 justify-between items-start inline-flex">
          <div className="w-6 h-6 relative" />
          <div className="w-6 h-6 relative" />
        </div>
        <div className="self-stretch h-[124px] flex-col justify-start items-start gap-3 flex">
          <div className="w-[312px] text-black text-2xl font-bold font-['Inter'] leading-loose">
            {product?.title}
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="text-black text-base font-semibold font-['Inter'] leading-normal">
                {product?.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </div>
              <div className="text-black text-opacity-60 text-sm font-normal font-['Inter'] line-through leading-tight">
                {product?.discountedPrice.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </div>
            </div>
            <div className="px-2 py-1 bg-black bg-opacity-10 rounded-2xl justify-start items-center flex">
              <div className="text-center text-black text-xs font-semibold font-['Inter'] uppercase leading-none tracking-wide">
                {product?.discountPercentage.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }) + " OFF"}
              </div>
            </div>
          </div>
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="justify-start items-center gap-3 flex">
              <div className="text-black text-opacity-60 text-xs font-semibold font-['Inter'] leading-tight">
                {product?.total.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }) + " /pcs"}
              </div>
              <div className="px-1.5 py-0.5 bg-black bg-opacity-10 rounded-lg justify-start items-center gap-1 flex">
                <div className="w-4 h-4 relative" />
                <div className="text-black text-xs font-semibold font-['Inter'] leading-tight">
                  {product?.quantity.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }) + " pcs"}
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-3 flex">
              <div className="w-6 h-6 relative" />
              <div className="w-6 h-6 relative" />
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="w-[312px] h-[300px] text-black text-opacity-60 text-sm font-normal font-['Inter'] leading-tight">
            <img
              src={product?.thumbnail}
              alt={product?.title}
              className="w-full h-full object-cover rounded-s-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
