import { useState } from "react";

export default function Nav() {
  const [barClose, setBarClose] = useState(true);
  function isClickBar() {
    setBarClose((state) => !state);
  }

  return (
    <>
      <style>
        {`
          @media screen and (min-width: 768px) {
            .logo {
                display: none;
                }
        }

          `}
      </style>

      <div className="sm:text-center sm:pt-[80px] sm:w-[24%] w-[100%] sm:relative">
        <div className="relative flex justify-between items-center px-[10px] py-[20px] sm:static sm:inline-block sm:px-0">
          {barClose ? (
            <span class="material-symbols-outlined logo" onClick={isClickBar}>
              menu
            </span>
          ) : (
            <>
              <span class="material-symbols-outlined logo" onClick={isClickBar}>
                close
              </span>
              <div className="absolute top-[99%] left-0 bg-white text-center w-[100%] z-[2]">
                <a className="block text-[18px] py-[11px] hover:decoration-[#AA6666] hover:text-[#AA6666] hover:underline hover:font-bold">
                  白頭翁的特性
                </a>
                <a className="block text-[18px] py-[11px] hover:decoration-[#AA6666] hover:text-[#AA6666] hover:underline hover:font-bold">
                  白頭翁的故事
                </a>
                <a className="block text-[18px] py-[11px] hover:decoration-[#AA6666] hover:text-[#AA6666] hover:underline hover:font-bold">
                  白頭翁的美照
                </a>
                <a className="block text-[18px] py-[11px] hover:decoration-[#AA6666] hover:text-[#AA6666] hover:underline hover:font-bold">
                  白頭翁的危機
                </a>
              </div>
            </>
          )}

          <h1 className="font-bold text-[20px] sm:text-3xl sm:pb-[65px]">
            白頭翁不吃小米
          </h1>
          <div
            id="logo"
            className="bg-white drop-shadow-[0_20px_10px_rgb(0,0,0,0.08)]  w-[50px] h-[50px] rounded-[50%] sm:hidden">
            <svg
              className="absolute top-0 left-0 translate-x-[45%] translate-y-[50%]"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 61 45"
              fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.3132 1.13304C9.6601 4.91712 -0.171913 16.0215 0.0899546 25.1039L0.179909 28.2303L1.09844 25.0589C2.33382 20.7911 9.97594 14.2564 16.3207 12.0425C22.8234 9.77366 42.1466 9.4818 45.8618 11.5957C47.5969 12.5832 47.9007 13.1659 46.9792 13.7356C45.1261 14.8811 46.5894 22.0964 48.5244 21.3538C49.309 21.0529 52.2145 20.5062 54.9821 20.1384C57.7497 19.7716 60.2395 19.1079 60.5143 18.6632C61.4119 17.2099 56.8252 13.8886 53.0381 13.2489C49.9607 12.7292 49.1251 12.0425 48.0916 9.18495C47.408 7.29291 45.2321 4.51332 43.2571 3.00709C40.2326 0.699255 38.5475 0.228494 32.5765 0.0225979C28.6235 -0.113333 23.641 0.377418 21.3132 1.13304ZM28.7684 20.3123C27.5061 23.0819 28.2937 25.2618 31.2232 27.1099C33.9248 28.814 37.9807 26.3203 37.9807 22.954C37.9807 21.4038 37.441 19.5947 36.7814 18.935C34.5615 16.7151 30.0538 17.4897 28.7684 20.3123ZM46.7613 27.7535C43.502 33.4886 37.8588 34.9959 17.741 35.5026L0 35.9494V40.3991V44.8479L17.9089 44.535L35.8168 44.2222L40.0927 41.2147C44.7163 37.9614 49.358 30.3033 48.8083 26.834C48.5074 24.937 48.3105 25.0259 46.7613 27.7535Z"
                fill="black"
              />
            </svg>
          </div>
          <div
            id="logo"
            className="hidden bg-white drop-shadow-[0_20px_10px_rgb(0,0,0,0.08)] sm:absolute w-[100px] h-[100px] rounded-[50%] sm:z-[1] sm:block sm:top-[6%] sm:right-[-13%]">
            <svg
              className="absolute top-0 left-0 translate-x-[45%] translate-y-[50%]"
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="45"
              viewBox="0 0 61 45"
              fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.3132 1.13304C9.6601 4.91712 -0.171913 16.0215 0.0899546 25.1039L0.179909 28.2303L1.09844 25.0589C2.33382 20.7911 9.97594 14.2564 16.3207 12.0425C22.8234 9.77366 42.1466 9.4818 45.8618 11.5957C47.5969 12.5832 47.9007 13.1659 46.9792 13.7356C45.1261 14.8811 46.5894 22.0964 48.5244 21.3538C49.309 21.0529 52.2145 20.5062 54.9821 20.1384C57.7497 19.7716 60.2395 19.1079 60.5143 18.6632C61.4119 17.2099 56.8252 13.8886 53.0381 13.2489C49.9607 12.7292 49.1251 12.0425 48.0916 9.18495C47.408 7.29291 45.2321 4.51332 43.2571 3.00709C40.2326 0.699255 38.5475 0.228494 32.5765 0.0225979C28.6235 -0.113333 23.641 0.377418 21.3132 1.13304ZM28.7684 20.3123C27.5061 23.0819 28.2937 25.2618 31.2232 27.1099C33.9248 28.814 37.9807 26.3203 37.9807 22.954C37.9807 21.4038 37.441 19.5947 36.7814 18.935C34.5615 16.7151 30.0538 17.4897 28.7684 20.3123ZM46.7613 27.7535C43.502 33.4886 37.8588 34.9959 17.741 35.5026L0 35.9494V40.3991V44.8479L17.9089 44.535L35.8168 44.2222L40.0927 41.2147C44.7163 37.9614 49.358 30.3033 48.8083 26.834C48.5074 24.937 48.3105 25.0259 46.7613 27.7535Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <a className="hidden cursor-pointer sm:block text-[18px] py-[11px] hover:decoration-[#AA6666] hover:text-[#AA6666] hover:underline hover:font-bold">
          白頭翁的特性
        </a>
        <a className="hidden cursor-pointer sm:block text-[18px] py-[11px] hover:decoration-[#AA6666] hover:text-[#AA6666] hover:underline hover:font-bold">
          白頭翁的故事
        </a>
        <a className="hidden cursor-pointer sm:block text-[18px] py-[11px] hover:decoration-[#AA6666] hover:text-[#AA6666] hover:underline hover:font-bold">
          白頭翁的美照
        </a>
        <a className="hidden cursor-pointer sm:block text-[18px] py-[11px] hover:decoration-[#AA6666] hover:text-[#AA6666] hover:underline hover:font-bold">
          白頭翁的危機
        </a>
      </div>
    </>
  );
}
