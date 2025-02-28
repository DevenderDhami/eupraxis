import Testimonials from "./components/Testimonials/index";
import Services from "./components/Services";
import ScrollToTop from "./components/common/ScrollToTop";
import BannerCarousel from "./components/Banner/BannerCarousel";
import OurPartners from "./components/LandingPage/OurGovPartners";
import ContactUs from "./components/LandingPage/ContactUs";
import OurTeam from "./components/LandingPage/OurTeam";
import WhoWeAre from "./components/LandingPage/WhoWeAre";
import NewsAndNotifications from "./components/LandingPage/NewsAndNotifications";
import OurIndustryPartners from "./components/LandingPage/OurIndustryPartners";

export default function Home() {
  return (
    <main>
      <div id="home-section" className="">
        <BannerCarousel />
      </div>

      <div className="py-10 container mx-auto ">
        <WhoWeAre />
      </div>

      <div id="services" className=" bg-lightkblue py-10">
        <Services />
      </div>
      <ScrollToTop />

      <div id="team" className=" py-10 ">
        <OurTeam />
      </div>

      <div className="py-10" id="testimonial">
        <Testimonials />
      </div>

      <div className="py-10 bg-gray-50" id="industry">
        <OurIndustryPartners />
      </div>
      <div className="py-10 bg-gray-50" id="news">
        <NewsAndNotifications />
      </div>

      {/* <div id="contact" className="contact-us bg-blue-50 py-10">
        <ContactUs />
      </div> */}
    </main>
  );
}
