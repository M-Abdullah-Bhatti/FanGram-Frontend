import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const about = [
    { name: "Our Story", link: "story-link" },
    { name: "Media Coverage", link: "media-link" },
    { name: "Blogs", link: "blogs-link" },
  ];

  const resources = [
    { name: "Terms & Condition", link: "story-link" },
    { name: "Privacy & Policy", link: "media-link" },
    { name: "Investor Relationship", link: "blogs-link" },
  ];

  const help = [
    { name: "FAQ", link: "story-link" },
    { name: "Contact us", link: "media-link" },
    { name: "Offers", link: "blogs-link" },
    { name: "Case Studies", link: "blogs-link" },
  ];

  const explore = [
    { name: "Browse all Celebrities", link: "story-link" },
    { name: "Returns & Refunds", link: "media-link" },
    { name: "How to Tring?", link: "blogs-link" },
    { name: "Careers", link: "blogs-link" },
  ];

  const followUs = [
    { image: "/images/footer__facebook.svg", link: "story-link" },
    { image: "/images/footer__insta.svg", link: "story-link" },
    { image: "/images/footer__youtube.svg", link: "story-link" },
    { image: "/images/footer__twitter.svg", link: "story-link" },
  ];

  return (
    <div className="flex flex-col relative bg-black">
      {/* Upper Container */}
      <div className="text-white flex justify-evenly py-10">
        <div className="w-[400px]">
          <img src="/images/logo.png" className="pb-5 mt-[-20px]" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
        {/* <div className="flex flex-col">
          <h3 className="text-[18px] font-semibold pb-5">About</h3>
          <Link className="text-[16px] font-normal pb-3">Our Story</Link>
          <Link className="text-[16px] font-normal pb-3">Our Story</Link>
          <Link className="text-[16px] font-normal pb-3">Our Story</Link>
        </div> */}
        <div className="flex flex-col">
          <h3 className="text-[18px] font-semibold pb-5">About</h3>
          {about.map((item, key) => (
            <Link
              className="text-[16px] font-normal pb-3"
              key={key}
              to={item.link}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col">
          <h3 className="text-[18px] font-semibold pb-5">Resources</h3>
          {resources.map((item, key) => (
            <Link
              className="text-[16px] font-normal pb-3"
              key={key}
              to={item.link}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col">
          <h3 className="text-[18px] font-semibold pb-5">Help</h3>
          {help.map((item, key) => (
            <Link
              className="text-[16px] font-normal pb-3"
              key={key}
              to={item.link}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col">
          <h3 className="text-[18px] font-semibold pb-5">Explore</h3>
          {explore.map((item, key) => (
            <Link
              className="text-[16px] font-normal pb-3"
              key={key}
              to={item.link}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col bg-yellow">
          <h3 className="text-[18px] font-semibold pb-5">Follow Us</h3>
          <div className="flex mt-5 gap-5">
            {followUs.map((item, key) => (
              <Link
                className="text-[16px] flex justify-center items-center font-normal  w-8 h-8 rounded-lg border-[1px]"
                key={key}
                to={item.link}
              >
                <img
                  // src="/images/footer__youtube.svg"
                  src={item.image}
                  className=""
                />
              </Link>
              // </div>
            ))}
          </div>
        </div>
      </div>

      {/* Below Container */}
      <div className="flex flex-col">
        <div className="w-[80%] min-h-[1px] bg-[#9A9A9A]"></div>
        <p className="text-[#747474] text-[14px] font-normal pb-2 pt-2 px-[100px]">
          Copyright © 2004-2023 FanGram® All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
