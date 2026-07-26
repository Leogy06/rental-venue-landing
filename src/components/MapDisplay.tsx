import React from "react";

const MapDisplay = ({mapSrc}:{mapSrc: string}) => {
  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src={mapSrc}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Villa Christie Resort location"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default MapDisplay;
