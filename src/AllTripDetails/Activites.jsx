import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Activites(props) {
  const { activites } = props;
  console.log(activites.itinerary);

  return (
    <div>
      <div>
        {activites.itinerary.days.map((each, index) => (
          <div key={index} className="px-9 my-2">
            <h1 className="text-[24px] font-bold ">
              Day {each.day}: {each.theme}
            </h1>
            <img
              src="/travel.jpg"
              className="sm:w-[650px] md:w-[800px] lg:w-[600px] xlg:w-[800px] w-[800px] my-5"
              style={{ borderRadius: "24px" }}
            />
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-1 px-2">
              {each.activities.map((trip, index1) => (
                <Link to ={`https://www.google.com/maps/search/?api=1&query=${trip.hotelName}`} target ="_blank">
                <div
                  key={index1}
                  className="shadow-sm hover:shadow-2xl cursor-pointer border border-slate-500 rounded-md px-2 py-2"
                >
                  <img src="/travel.jpg" className="w-[300px] rounded-md" />
                  <h2 className="text-[24px] font-bold font-sans  py-1">
                    {trip.placeName}{" "}
                    <span className="font-serif font-medium text-[18px]">
                      ⭐ {trip.rating}
                    </span>
                  </h2>
                  <p className="text-gray-500">{trip.placeDetails}</p>
                  <p className="text-gray-500">{trip.timeTravel}</p>
                  <p className="text-red-500">{trip.ticketPricing}</p>
                  <p className="text-gray-500">{trip.bestTimeToVisit}</p>
                </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activites;
