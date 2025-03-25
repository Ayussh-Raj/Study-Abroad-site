import React from 'react';
import { Star, Clock, MapPin, BookmarkPlus } from 'lucide-react';

export default function ProgramCard({
  title,
  university,
  location,
  duration,
  rating,
  reviews,
  image,
  price
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Program Image */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-0 right-0 m-2">
          <button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors">
            <BookmarkPlus className="w-5 h-5 text-white" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex items-center text-white">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1">{rating}</span>
            <span className="mx-1">•</span>
            <span>{reviews} reviews</span>
          </div>
        </div>
      </div>

      {/* Program Details */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{university}</p>

        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="mr-4">{location}</span>
          <Clock className="w-4 h-4 mr-1" />
          <span>{duration}</span>
        </div>

        {/* Pricing & Button */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">{price}</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            View Program
          </button>
        </div>
      </div>
    </div>
  );
}