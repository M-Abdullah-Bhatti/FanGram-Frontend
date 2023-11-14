import React from "react";
import OfferTicket from "./OfferTicket";
import { ticketData } from "../../Data";

function Offers({ data, loading }) {
  return (
    <div className="pb-6">
      <h1 className="text-2xl md:text-5xl font-semibold mb-4">
        Available Offers
      </h1>
      {loading ? (
        "Loading..."
      ) : (
        <div className="flex flex-wrap gap-2">
          {data?.offers.map((offer, index) => (
            <OfferTicket ticket={offer} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Offers;
