import React from 'react';
import { FaShareAlt,  FaStar } from 'react-icons/fa';
import { IoIosEye } from "react-icons/io";

const SingleCard = ({ news }) => {
  return (
    <div className="w-full border rounded-lg shadow-lg overflow-hidden bg-white">
      {/* Profile Section */}
      <div className="flex items-center p-4">
        <img
          src={news.author.img}
          alt="profile"
          className="rounded-full w-10 h-10 mr-3"
        />
        <div>
          <p className="text-sm font-semibold">{news.author.name}</p>
          <p className="text-xs text-gray-500">{new Date(news.author.published_date).toLocaleDateString()}</p>
        </div>
        <FaShareAlt className="ml-auto cursor-pointer text-gray-500 hover:text-gray-700" />
      </div>

      {/* Banner Image */}
      <div className='px-4'>
      <img
        src={news.thumbnail_url}
        alt="banner"
        className="w-full h-64 object-cover rounded-sm"
      />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{news.title}</h2>
        <p className="text-xs text-gray-500 mb-3">
          {news.details.slice(0, 100)}...
        </p>
        <button className="text-blue-500 font-semibold hover:underline">Read More</button>
      </div>

      {/* Footer with Rating and Icons */}
      <div className="flex items-center p-4 pt-0 border-t border-gray-200">
        <div className="flex items-center text-yellow-400">
          {/* Star Rating */}
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={index < Math.round(news.rating.number) ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        <span className="text-sm font-semibold ml-2">{news.rating.number}</span>

        {/* Like icon and view count */}
        <IoIosEye className="ml-auto text-gray-500 hover:text-red-500 cursor-pointer" />
        <span className="ml-2 text-gray-500">{news.total_view}</span>
      </div>
    </div>
  );
};

export default SingleCard;
