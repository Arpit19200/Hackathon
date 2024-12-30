import * as React from "react";
import OtpInput from "./OtpInput";

function OtpVerification() {
  const otpInputs = Array(6).fill(null);

  return (
    <div className="flex overflow-hidden flex-col px-11 pb-10 bg-white max-md:px-5">
      <div className="flex items-center mx-20  h-[758px] max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[484px] max-md:max-w-full">
          <div className="flex gap-2.5 items-center w-[52px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f200e20b4d6bc932f4e20252c7bcc204fc576458c21374b143afbc86435abf4?placeholderIfAbsent=true&apiKey=5fd980f3be9141b1b823767a6d39fbe1"
              alt=""
              className="object-contain self-stretch my-auto aspect-square w-[52px]"
            />
          </div>
          <div className="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <div className="flex flex-col max-w-full font-semibold w-[390px]">
                  <div className="flex flex-col">
                    <h1 className="max-w-full text-5xl text-black rounded-none w-[212px]">
                      Enter OTP
                    </h1>
                    <div className="pb-3.5 w-full text-3xl rounded-none text-zinc-600">
                      sent on xxx@gmail.com
                    </div>
                  </div>
                </div>
                <form className="flex flex-col mt-3 w-full max-md:max-w-full">
                  <div className="flex gap-2 justify-center items-center w-full max-md:max-w-full">
                    <div className="flex flex-wrap gap-2 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
                      {otpInputs.map((_, index) => (
                        <OtpInput key={index} index={index} />
                      ))}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="flex flex-col mt-1 w-36 max-w-full text-2xl font-semibold text-zinc-500"
                  >
                    <div className="w-full rounded-none">Resend OTP</div>
                  </button>
                  <button
                    type="submit"
                    className="gap-2.5 self-stretch px-2.5 py-4 mt-1.5 w-full text-2xl font-semibold bg-cyan-300 rounded-xl min-h-[65px] max-md:max-w-full"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/074da58316a5ca172543fd6f4b69d02e77e6657129b4064d0332f730ce6cc40b?placeholderIfAbsent=true&apiKey=5fd980f3be9141b1b823767a6d39fbe1"
          alt=""
          className="object-contain self-stretch my-auto aspect-[0.94] min-w-[240px] w-[780px] max-md:max-w-full"
        />
      </div>
    </div>
  );
}

export default OtpVerification;
