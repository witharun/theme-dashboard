import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { cn } from "../../utils/cn";

interface Location {
  name: string;
  revenue: string;
  coordinates: [number, number]; // [longitude, latitude]
  color?: string;
}

interface LocationCardProps {
  title: string;
  locations: Location[];
  className?: string;
}

// ✅ Correct World Atlas topojson file
const geoUrl =
  "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const LocationCard: React.FC<LocationCardProps> = ({
  title,
  locations,
  className,
}) => {
  return (
    <div className={cn("card p-6 animate-fade-in", className)}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>

      {/* World Map with location pins */}
      <div className="mb-6 w-full h-72 bg-gray-900 rounded-lg overflow-hidden">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 140 }}
          width={800}
          height={400}
          className="w-full h-full"
        >
          {/* ✅ Proper world map */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#374151", // gray-700
                      stroke: "#1f2937", // gray-800
                      strokeWidth: 0.5,
                    },
                    hover: { fill: "#4b5563" },
                    pressed: { fill: "#6b7280" },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Markers */}
          {locations.map((loc, i) => (
            <Marker key={i} coordinates={loc.coordinates}>
              <circle
                r={6}
                fill={loc.color || "#6C5DD3"}
                className="animate-pulse"
              />
              <circle
                r={12}
                fill={loc.color || "#6C5DD3"}
                fillOpacity={0.2}
              />
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* Location list */}
      <div className="space-y-3">
        {locations.map((location, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-200"
          >
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {location.name}
              </span>
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {location.revenue}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationCard;
