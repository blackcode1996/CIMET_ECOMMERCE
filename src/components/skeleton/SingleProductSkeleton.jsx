import React from 'react';

const SingleProductSkeleton = () => {
  return (
    <section className="py-10 lg:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="pro-detail w-full flex flex-col justify-center order-last lg:order-none max-lg:max-w-[608px] max-lg:mx-auto">
            <p className="font-medium text-lg text-gray-300 mb-4 bg-gray-200 animate-pulse w-1/4"></p>
            <h2 className="mb-2 font-manrope font-bold text-3xl leading-10 text-gray-300 bg-gray-200 animate-pulse w-3/4"></h2>
            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
              <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-300 bg-gray-200 animate-pulse w-1/4"></h6>
              <h6 className="font-manrope font-light text-2xl leading-9 text-gray-300 bg-gray-200 animate-pulse w-1/4 line-through"></h6>
              <div className="flex items-center gap-2">
                <div className="bg-gray-200 animate-pulse w-16 h-6 rounded"></div>
                <span className="pl-2 font-normal leading-7 text-gray-500 text-sm bg-gray-200 animate-pulse w-24"></span>
              </div>
            </div>
            <p className="text-gray-500 text-base font-normal mb-8 bg-gray-200 animate-pulse w-full h-24"></p>
            <div className="block w-full mb-6">
              <p className="font-medium text-lg leading-8 text-gray-300 mb-4 bg-gray-200 animate-pulse w-1/4"></p>
              <div className="flex items-center justify-start gap-3 md:gap-6 relative mb-6">
                {["#10B981", "#FBBF24", "#F43F5E", "#2563EB"].map((color, index) => (
                  <div key={index} className="p-2.5 border border-gray-200 rounded-full bg-gray-200 animate-pulse"></div>
                ))}
              </div>
              <p className="font-medium text-lg leading-8 text-gray-300 mb-4 bg-gray-200 animate-pulse w-1/4"></p>
              <div className="grid grid-cols-2 min-[400px]:grid-cols-3 gap-3 mb-6">
                {["56 cm (S)", "67 cm (M)", "77 cm (L)"].map((size, index) => (
                  <div key={index} className="border border-gray-200 text-gray-300 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap bg-gray-200 animate-pulse"></div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center justify-center w-full">
                  <div className="group py-4 px-6 border border-gray-400 rounded-l-full bg-gray-200 animate-pulse"></div>
                  <input
                    type="text"
                    className="font-semibold text-gray-300 text-lg py-[13px] px-6 w-full lg:max-w-[118px] border-y border-gray-400 bg-gray-200 animate-pulse placeholder:text-gray-300"
                    placeholder="1"
                  />
                  <div className="group py-4 px-6 border border-gray-400 rounded-r-full bg-gray-200 animate-pulse"></div>
                </div>
                <div className="group py-4 px-5 rounded-full bg-gray-200 animate-pulse text-gray-300 font-semibold text-lg w-full flex items-center justify-center gap-2"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="group transition-all duration-500 p-4 rounded-full bg-gray-200 animate-pulse"></div>
                <div className="text-center w-full px-5 py-4 rounded-[100px] border border-gray-300 bg-gray-200 animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="w-full h-96 bg-gray-200 animate-pulse"></div> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductSkeleton;
