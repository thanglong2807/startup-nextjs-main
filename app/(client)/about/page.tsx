import AboutSectionFour from "@/components/About/AboutSectionFour";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Cenvi Launch",
  description: "This is About Page Cenvi Launch",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sứ mệnh của chúng tôi"
        description="Cenvi Launch là đơn vị cung cấp dịch vụ hỗ trợ doanh nghiệp toàn diện, bao gồm thành lập doanh nghiệp, kế toán thuế, và thiết kế website. Với đội ngũ chuyên gia giàu kinh nghiệm và quy trình làm việc chuyên nghiệp, chúng tôi cam kết mang đến cho khách hàng dịch vụ chất lượng cao, đáp ứng mọi nhu cầu. Sứ mệnh của chúng tôi là đồng hành cùng doanh nghiệp, giúp bạn tiết kiệm thời gian và chi phí, tập trung vào phát triển kinh doanh cốt lõi."
      />
      <AboutSectionOne />
      <AboutSectionThree/>
      <AboutSectionFour/>
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
