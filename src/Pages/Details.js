import {
  StarIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  HomeIcon,
  CheckBadgeIcon,
  BeakerIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import PrimaryButton from "../Components/Button/PrimaryButton";
import DetailsCart from "../Components/Details/DetailsCart";
import HomeDetails from "../Components/Details/HomeDetails";

const Details = () => {
  const homeData = useLoaderData()
  console.log(homeData);
  let totalNights = 0;
  let sub_total = 0;
  let total = 0;

  return (
    <div>
    {/* Header */}
    <div className='flex flex-wrap h-[400px]'>
      <div className='w-1/2 h-full overflow-hidden'>
        <img
          alt='feature'
          className='object-cover object-start h-full w-full'
          src={homeData.image}
        />
      </div>
      <div className='w-1/2 h-full overflow-hidden'>
        <img
          alt='feature'
          className='object-cover object-start h-full w-full'
          src='https://i.ibb.co/DCzG2cp/christine-roy-ir5-MHI6r-Pg0-unsplash-1.jpg'
        />
      </div>
    </div>

    {/* Main Content */}
    <div className='md:flex justify-between sm:mx-10 md:mx-20 px-4 lg:mx-40 py-12'>
      {/* Details */}
      <HomeDetails homeData={homeData} />
      {/* Cart */}
      <DetailsCart homeData={homeData} />
    </div>
  </div>
  );
};

export default Details;
