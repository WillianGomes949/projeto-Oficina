import React from 'react';

const Maps = ({
  lat = "",
  lng = "",
  zoom = "",
  height = "500px",
  width = "100%",
  className = "",
 
}) => {
  const staticMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${
    lng - 0.02
  },${lat - 0.02},${lng + 0.02},${lat + 0.02}&layer=mapnik&marker=${lat},${lng}`;

  return (
    <div className={`w-full  ${className}`}>
      <iframe
        width={width}
        height={height}
        latitude={lat}
        longitude={lng}
        zoom={zoom}
        src={staticMapUrl}
        className="rounded-lg shadow-lg border border-gray-200"
        title="Mapa OpenStreetMap"
      >
      </iframe>
      <br/>
      <small className="text-gray-500">
        <a 
          href={`https://www.openstreetmap.org/query?lat=${lat}&lon=${lng}&zoom=${zoom}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Ver mapa ampliado
        </a>
      </small>
    </div>
  );
};

export default Maps;