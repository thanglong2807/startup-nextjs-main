"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Thành lập doanh nghiệp với chi phí tối ưu nhất"
          paragraph="Cenvi Launch cam kết minh bạch về giá. Xem chi tiết bảng giá dịch vụ thành lập doanh nghiệp của chúng tôi để lựa chọn gói phù hợp nhất với nhu cầu của bạn."
          center
          width="680px"
        />

        {/* <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div> */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Cơ bản"
            price={isMonthly ? "199.000 " : "0"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Gói khởi đầu tiết kiệm, phù hợp với doanh nghiệp nhỏ, bao gồm tư vấn và thủ tục đăng ký kinh doanh cơ bản."
          >
            <OfferList text="Giấy phép kinh doanh" status="active" />
            <OfferList text="Biển tên công ty" status="inactive" />
            <OfferList text="Dấu tròn doanh nghiệp" status="inactive" />
            <OfferList text="Chữ ký số" status="inactive" />
            <OfferList text="Hóa đơn điện tử" status="inactive" />
            <OfferList text="Thuế môn bài" status="inactive" />
            <OfferList text="Thiết kế website" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Đầy đủ"
            price={isMonthly ? "1.499.000 " : "0"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Gói trọn gói, tiện lợi, bao gồm tất cả thủ tục từ đăng ký kinh doanh, con dấu, chữ ký số đến hóa đơn điện tử."
          >
            <OfferList text="Giấy phép kinh doanh" status="active" />
            <OfferList text="Biển tên công ty" status="active" />
            <OfferList text="Dấu tròn doanh nghiệp" status="active" />
            <OfferList text="Chữ ký số" status="active" />
            <OfferList text="Hóa đơn điện tử" status="active" />
            <OfferList text="Thuế môn bài" status="active" />
            <OfferList text="Thiết kế website" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="VIP"
            price={isMonthly ? "15.000.000 " : "0"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Gói cao cấp, hỗ trợ toàn diện, bao gồm tất cả dịch vụ của gói Đầy đủ kèm thiết kế website và tư vấn chiến lược."
          >
            <OfferList text="Giấy phép kinh doanh" status="active" />
            <OfferList text="Biển tên công ty" status="active" />
            <OfferList text="Dấu tròn doanh nghiệp" status="active" />
            <OfferList text="Chữ ký số" status="active" />
            <OfferList text="Hóa đơn điện tử" status="active" />
            <OfferList text="Thuế môn bài" status="active" />
            <OfferList text="Thiết kế website" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
