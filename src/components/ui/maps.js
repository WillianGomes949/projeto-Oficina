import React from 'react';

const Maps = ({
  lat = "-23.5505",
  lng = "-46.6333",
  zoom = "15",
  height = "400px",
  width = "100%",
  className = "",
  showControls = true,
  markerText = "Nossa Localização"
}) => {
  const staticMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${
    parseFloat(lng) - 0.01
  },${parseFloat(lat) - 0.01},${parseFloat(lng) + 0.01},${parseFloat(lat) + 0.01}&layer=mapnik&marker=${lat},${lng}&zoom=${zoom}`;

  const openInMapsUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoom}/${lat}/${lng}`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${markerText}`;

  return (
    <div className={`w-full ${className}`}>
      <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50">
        <iframe
          width={width}
          height={height}
          src={staticMapUrl}
          className="w-full"
          title={`Mapa - ${markerText}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        
        {/* Overlay com botões de ação */}
        {showControls && (
          <div className="absolute bottom-4 right-4 flex gap-2">
            <a
              href={openInMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md border border-slate-200"
            >
              Ampliar Mapa
            </a>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Abrir no Google Maps
            </a>
          </div>
        )}
      </div>

      {showControls && (
        <div className="mt-3 flex justify-between items-center text-sm text-slate-500">
          <span>{markerText}</span>
          <div className="flex gap-4">
            <a 
              href={openInMapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 hover:underline transition-colors duration-200"
            >
              OpenStreetMap
            </a>
            <a 
              href={googleMapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 hover:underline transition-colors duration-200"
            >
              Google Maps
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Maps;