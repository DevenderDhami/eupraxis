import Link from "next/link";
import Image from "next/image";
import { CMP_TITLE } from "@/app/lib/constants";
import Logo from "../common/logo";

interface ProductLink {
  name: string;
  url?: string; // URL is optional to accommodate non-link items
}

interface ProductType {
  id: number;
  section: string;
  links: ProductLink[];
}

interface SocialLink {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: SocialLink[] = [
  {
    imgSrc: "/assets/footer/facebook.svg",
    link: "https://www.facebook.com",
    width: 10,
  },
  {
    imgSrc: "/assets/footer/insta.svg",
    link: "https://www.instagram.com",
    width: 14,
  },
  {
    imgSrc: "/assets/footer/twitter.svg",
    link: "https://www.twitter.com",
    width: 14,
  },
];

const products: ProductType[] = [
  {
    id: 1,
    section: "Quick links",
    links: [
      { name: "About", url: "/about-us" },
      { name: "How we work?", url: "/about-us" },
      { name: "Our Approvals", url: "/approvals-and-collabrations/approvals" },
      { name: "FAQ", url: "/faq" },
    ],
  },
  {
    id: 2,
    section: "Useful Links",
    links: [
      { name: "Contact us", url: "/contact-us" },
      { name: "Work with us", url: "/career" },
      { name: "Gallery", url: "/gallery" },
      // { name: "Partners", url: "/partners" },
    ],
  },
  {
    id: 3,
    section: "Address",
    links: [
      {
        name: "IGCSM, 36B/1, Gali Number 1, near Kalkaji Depot, Govindpuri, New Delhi, Delhi 110019",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 theme-bg text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 py-5 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
          <div className="sm:col-span-6 lg:col-span-5">
            <div className="flex flex-shrink-0 items-center border-right">
              <div className="bg-white p-1 px-4 opacity-90 rounded-lg">
              <Logo />
              </div>
            </div>
            <h3 className="text-xs font-medium lh-160 mt-5 mb-4 lg:mb-16 pr-10">
              {CMP_TITLE} is dedicated to empowering learners by offering
              accessible, high-quality education and skill development
              opportunities worldwide.
            </h3>
            <div className="flex gap-4">
              {socialLinks?.map((item, i) => (
                <Link href={item.link} key={i} target="">
                  <div className="bg-white h-12 w-12 shadow-xl rounded-full flex items-center justify-center hover:theme-clr">
                    <Image
                      src={item.imgSrc}
                      alt={item.imgSrc}
                      width={item.width}
                      height={2}
                      className="sepiaa"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Dynamic Columns */}
          {products?.map((product) => (
            <div key={product.id} className="sm:col-span-2">
              <p className="text-white text-lg font-medium mb-5">
                {product.section}
              </p>
              <ul>
                {product.links.map((link, index) => (
                  <li key={index} className="mb-5">
                    {link.url ? (
                      <Link
                        href={link.url}
                        className="text-white text-base font-normal mb-3 space-links"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <p className="text-white text-base font-normal mb-3">
                        {link.name}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <div className="py-3 md:flex items-center justify-between border-t border-t-gray-blue">
          <h4 className="text-white text-sm text-center md:text-start font-normal">
            @2025.{CMP_TITLE}. All rights reserved
          </h4>
          <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
            <h4 className="text-white text-sm font-normal">
              <Link href="/privacy-policy" target="">
                Privacy policy
              </Link>
            </h4>
            <div className="h-5 bg-white opacity-25 w-0.5"></div>
            <h4 className="text-white text-sm font-normal">
              <Link href="/terms-conditions" target="">
                Terms & conditions
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
