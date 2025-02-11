import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "@/service/fireBaseConfig";
import TopDetails from "@/AllTripDetails/TopDetails";
import HotelsOptions from "@/AllTripDetails/HotelsOptions";
import Activites from "@/AllTripDetails/Activites";

function ViewTrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrip = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("AiTrips") // Your database table name
        .select("*")
        .eq("id", tripId) // Filter by tripId
        .single();

      if (error) {
        console.error("Error fetching trip:", error);
      } else {
        setTrip(data);
      }
      setLoading(false);
    };

    fetchTrip();
  }, [tripId]);

  if (loading) return <p>Loading trip details...</p>;
  if (!trip) return <p>Trip not found.</p>;

  console.log(trip);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div>
        <TopDetails trips={trip.tripData.tripDetails} />
        <h1 className="text-[24px] font-bold font-serif px-8 py-2">Hotel Recommadations</h1>
        <HotelsOptions hotels ={trip.tripData.hotelOptions}/>
        <h1 className="text-[24px] font-bold font-serif px-8 py-2">Visit places</h1>
        <Activites activites ={trip.tripData} />
      </div>
      

    </div>
  );
}

export default ViewTrip;
