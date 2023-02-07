import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = ({ title, desc, btnText, btnLink }) => {
  return (
    <div class="grid grid-cols-6 w-full mb-8 rounded-xl bg-[#1c1c24]">
      <div class="col-span-4">
        <h2 class="font-bold text-3xl text-white ml-10 mt-8">{
        title ? title : 'Empty title'
        }</h2>

        <p class="font-light text-white text-sm ml-10 mt-5 max-w-[620px] mb-4">{desc ? desc : 'Empty desc'}</p>

        <Link
          to={btnLink ? btnLink : '/create-campaign'}
          class="text-white block font-semibold ml-10 mt-5 mb-8 group "
        >
          { btnText ? btnText : 'Create your company' }
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block h-6 w-6 group-hover:translate-x-2 transition delay-100 transition-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>

      <div class="col-span-2 relative">
        <img
          src="https://www.digitalocean.com/_next/static/media/cloudJourneyImage.954519ea.svg"
          class="absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
