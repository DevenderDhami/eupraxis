"use client";
import ImageModal from "@/app/components/common/ImageModal";
import PageLinks from "@/app/components/common/PageLink";
import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import OurPartnersLogoSlider from "@/app/components/LandingPage/OurPartnersLogoSlider";
import { placementPartnersImages } from "@/app/lib/constants";
import NewsAndNotifications from "@/app/components/LandingPage/NewsAndNotifications";

const data = [
  { imgSrc: "/assets/partners/Placement-partners/Job Fair Photos/Agra.png" },
  { imgSrc: "/assets/partners/Placement-partners/Job Fair Photos/gzb.jpeg" },
  { imgSrc: "/assets/partners/Placement-partners/Job Fair Photos/gzb1.jpeg" },
  { imgSrc: "/assets/partners/Placement-partners/Job Fair Photos/gzb2.jpeg" },
  { imgSrc: "/assets/partners/Placement-partners/Job Fair Photos/gzb3.jpeg" },
];

const PlacementTieUpsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = ""; // Restore scrolling
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (event.key) {
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "Escape":
          closeModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <PageLinks
        title="Placement Partners "
        imageUrl="/assets/pagelinks/partnership.webp"
        items={[
          { name: "Home", link: "/" },
          {
            name: "Placement Partners",
            link: "/approvals-and-collabrations/placement-tie-ups",
          },
        ]}
      />

      <div className="container mx-auto py-8  flex flex-col gap-4 text-gray-700">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="contetn w-full md:w-2/3 px-4">
            <p className="text-gray-600 indent-10">
              {`
          At Eupraxis, we go beyond skill development by ensuring our trainees
          have direct access to employment opportunities through strong
          placement tie-ups with reputed organizations. We have established
          partnerships with leading companies across diverse sectors, enabling
          rural youth to secure stable jobs that match their skill sets. Our
          placement collaborations bridge the gap between trained talent and
          industry demand, ensuring that every individual completing our
          programs finds meaningful employment.
          `}
            </p>

            <h2 className="text-xl font-bold ">
              {`
          From Training to Employment: Your Success Journey
          `}
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Self-Employment</h3>
                <p>
                  {`
              At Eupraxis, we are committed to unlocking your potential for
              thriving in the realm of self-employment through our robust
              two-step approach.
            `}
                </p>
                <p>
                  <strong>First, master in-demand skills </strong>
                  with our expert-curated curriculum and hands-on OJT programs,
                  providing the theoretical knowledge and practical experience
                  needed for success.
                </p>
                <p>
                  <strong>Second, achieve financial empowerment </strong>
                  with access to a range of resources and guidance, enabling you
                  to empower your entrepreneurial dream with confidence.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold"> Captives</h3>
                <p>
                  {`
              Captives Our commitment extends even further than placement. We
              recognize the talent and potential nurtured within our training
              programs, and many of our graduates choose to build their careers
              with us. This allows us to provide a seamless transition from
              training to professional practice, ensuring continuity and
              leveraging the skills they've honed specifically for our needs.
              This mutually beneficial approach not only empowers our graduates
              to excel in their chosen fields but also strengthens our
              organization with a workforce deeply invested in its success.
            `}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">
                  {" "}
                  Campus Placement & Job Fairs
                </h3>
                <p>
                  {`
              Campus Placement & Job Fairs Our company, IGCSM, plays a pivotal
              role in facilitating campus placement for registered candidates
              through job fairs like Rozgar Mela organized by the Department of
              Employment. Specializing in education, we focus on training
              students with the necessary skills and guiding them through the
              placement process. Our active involvement includes registering on
              the official Rozgar Mela portal, providing comprehensive
              skill-building programs, and offering personalized guidance to
              ensure they're well-prepared for the interview process. We
              prioritize the holistic development of individuals, equipping them
              to confidently enter the job market. Our commitment goes beyond
              merely hiring; we strive to place candidates effectively, helping
              them find suitable roles that match their aspirations. This not
              only contributes to the success of Rozgar Mela job fairs but also
              fosters a skilled and qualified workforce, ultimately benefiting
              both employers and job seekers
            `}
                </p>
                <h2 className="py-2 text-2xl font-semibold">
                  Job Fair Pictures
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="relative cursor-pointer group rounded-lg overflow-hidden"
                      onClick={() => openModal(index)}
                    >
                      {/* Image */}
                      <img
                        src={item.imgSrc}
                        alt={`Gallery ${index + 1}`}
                        className="w-full max-h-[300px] object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-orange-600 bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <VisibilityIcon
                          style={{ fontSize: 40, color: "white" }}
                        />
                        <span className="text-white font-semibold text-lg">
                          Gallery
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {isModalOpen && (
                  <ImageModal
                    imgSrc={data[currentIndex].imgSrc}
                    closeModal={closeModal}
                    nextImage={nextImage}
                    prevImage={prevImage}
                  />
                )}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold"> International</h3>
                <p>
                  {`
              Our commitment to expanding opportunities transcends borders. We
              actively leverage the Technical Intern Training Program (TITP) and
              other international initiatives to empower talented individuals
              worldwide. By strategically utilizing these programs, we've
              successfully placed candidates in diverse roles and industries
              across the globe. This approach not only broadens our talent pool
              and fosters cultural exchange, but also contributes to the
              development of international workforces. We combine our rigorous
              training programs with strategic placement efforts, ensuring a
              seamless transition and maximizing success for both individuals
              and our company on a global scale.
            `}
                </p>
              </div>
            </div>
          </div>

          <div className="news hidden md:block  w-1/3 h-[800px] ">
          <NewsAndNotifications isCol={true}/>

          </div>
        </div>
      </div>
      <div className="mb-10 bg-orange-50 py-5">
        <OurPartnersLogoSlider
          title={"Placement Partners"}
          images={placementPartnersImages}
        />
      </div>
    </>
  );
};

export default PlacementTieUpsPage;
