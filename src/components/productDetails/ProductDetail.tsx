// import { useParams } from "react-router-dom";

export const ProductDetail = (): JSX.Element => {
  // const { id } = useParams();

  // ? el valor del product se va asignar a traves de un store y un metodo en reduxP
  // const product;

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
        <div className="w-[360px] h-14 pl-4 pr-6 py-4 justify-between items-start inline-flex">
          <div className="w-6 h-6 relative" />
          <div className="w-6 h-6 relative" />
        </div>
        <div className="self-stretch h-[124px] flex-col justify-start items-start gap-3 flex">
          <div className="w-[312px] text-black text-2xl font-bold font-['Inter'] leading-loose">
            Product Name
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="text-black text-base font-semibold font-['Inter'] leading-normal">
                Rp. 2.000.000
              </div>
              <div className="text-black text-opacity-60 text-sm font-normal font-['Inter'] line-through leading-tight">
                Rp. 2.500.000
              </div>
            </div>
            <div className="px-2 py-1 bg-black bg-opacity-10 rounded-2xl justify-start items-center flex">
              <div className="text-center text-black text-xs font-semibold font-['Inter'] uppercase leading-none tracking-wide">
                20% OFF
              </div>
            </div>
          </div>
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="justify-start items-center gap-3 flex">
              <div className="text-black text-opacity-60 text-xs font-semibold font-['Inter'] leading-tight">
                1.200 Sold
              </div>
              <div className="px-1.5 py-0.5 bg-black bg-opacity-10 rounded-lg justify-start items-center gap-1 flex">
                <div className="w-4 h-4 relative" />
                <div className="text-black text-xs font-semibold font-['Inter'] leading-tight">
                  4,8
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
          <div className="text-black text-base font-semibold font-['Inter'] leading-normal">
            Description
          </div>
          <div className="w-[312px] h-[102px] text-black text-opacity-60 text-sm font-normal font-['Inter'] leading-tight">
            Lorem ipsum dolor sit amet consectetur. Vitae adipiscing feugiat non
            nunc feugiat. Senectus egestas amet commodo tortor tincidunt diam
            imperdiet lorem. Mi ipsum nulla dictum fringilla a justo. Venenatis
            luctus amet sapien euismod. Id nec id fringilla pharetra. Mauris
            viverra lobortis integer fermentum vestibulum eget maecenas commodo.
            Purus egestas a ac velit pulvinar est enim habitasse. Elit tempor
            dignissim ut tincidunt ac. Scelerisque mi enim vestibulum curabitur
            tellus adipiscing in in nulla. Pulvinar montes quis integer neque
            gravida faucibus feugiat blandit eget. Vulputate massa nunc
            vulputate ultrices nam amet pellentesque nunc. Habitant placerat
            dictumst velit egestas. Nunc convallis imperdiet in ut quam aliquam
            leo non.
          </div>
          <div className="self-stretch pl-2 pr-1.5 py-1 rounded-lg justify-center items-center gap-2 inline-flex">
            <div className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
              View more
            </div>
            <div className="w-5 h-5 relative" />
          </div>
        </div>
        <div className="self-stretch h-[500px] flex-col justify-start items-start gap-2 flex">
          <div className="text-black text-base font-semibold font-['Inter'] leading-normal">
            Reviews
          </div>
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="h-32 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="w-9 h-9 relative bg-white rounded-full border-2 border-black" />
                <div className="grow shrink basis-0 pb-1 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-black text-sm font-semibold font-['Inter'] leading-tight">
                      Ronald Richards
                    </div>
                    <div className="text-black text-opacity-60 text-xs font-semibold font-['Inter'] leading-tight">
                      01-01-2023
                    </div>
                  </div>
                  <div className="justify-start items-start gap-0.5 inline-flex">
                    <div className="w-3 h-3 relative" />
                    <div className="w-3 h-3 relative" />
                    <div className="w-3 h-3 relative" />
                    <div className="w-3 h-3 relative" />
                    <div className="w-3 h-3 relative" />
                  </div>
                </div>
              </div>
              <div className="w-[312px] text-black text-sm font-normal font-['Inter'] leading-tight">
                Lorem ipsum dolor sit amet consectetur. Vitae adipiscing feugiat
                non nunc feugiat. Senectus egestas amet commodo tortor tincidunt
                diam imperdiet lorem.
              </div>
            </div>
            <div className="h-32 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="w-9 h-9 relative bg-white rounded-full border-2 border-black" />
                <div className="grow shrink basis-0 pb-1 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-black text-sm font-semibold font-['Inter'] leading-tight">
                      Ronald Richards
                    </div>
                    <div className="text-black text-opacity-60 text-xs font-semibold font-['Inter'] leading-tight">
                      01-01-2023
                    </div>
                  </div>
                  <div className="justify-start items-start gap-0.5 inline-flex">
                    <div className="w-3 h-3 relative" />
                    <div className="w-3 h-3 relative" />
                    <div className="w-3 h-3 relative" />
                    <div className="w-3 h-3 relative" />
                    <div className="w-3 h-3 relative" />
                  </div>
                </div>
              </div>
              <div className="w-[312px] text-black text-sm font-normal font-['Inter'] leading-tight">
                Lorem ipsum dolor sit amet consectetur. Vitae adipiscing feugiat
                non nunc feugiat. Senectus egestas amet commodo tortor tincidunt
                diam imperdiet lorem.
              </div>
            </div>
            <div className="h-32 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="w-9 h-9 relative bg-white rounded-full border-2 border-black" />
                <div className="grow shrink basis-0 pb-1 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-black text-sm font-semibold font-['Inter'] leading-tight">
                      Ronald Richards
                    </div>
                    <div className="text-black text-opacity-60 text-xs font-semibold font-['Inter'] leading-tight">
                      01-01-2023
                    </div>
                  </div>
                  <div className="justify-start items-start gap-0.5 inline-flex">
                    <div className="w-3 h-3 relative" />
                    <div className="w-3 h-3 relative" />
                    <div className="w-3 h-3 relative" />
                    <div className="w-3 h-3 relative" />
                    <div className="w-3 h-3 relative" />
                  </div>
                </div>
              </div>
              <div className="w-[312px] text-black text-sm font-normal font-['Inter'] leading-tight">
                Lorem ipsum dolor sit amet consectetur. Vitae adipiscing feugiat
                non nunc feugiat. Senectus egestas amet commodo tortor tincidunt
                diam imperdiet lorem.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
