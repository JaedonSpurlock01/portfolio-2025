"use client";

import React, { useEffect, useRef } from "react";
import Map, { Marker, MapRef } from "react-map-gl";
import { useTheme } from "next-themes";
import PulsatingDot from "./ui/pulsating-dot";
import Clock from "./ui/clock";
import { Badge } from "./ui/badge";

export const LocationMap = () => {
  const { theme } = useTheme();
  const mapRef = useRef<MapRef>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (mapRef && mapRef.current) {
        mapRef.current.flyTo({
          center: [-117.3873015907678, 33.20330913063883],
          zoom: 12.5,
          speed: 0.8,
          curve: 1.5,
          essential: true,
        });
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [mapRef]);

  return (
    <div className="relative overflow-hidden rounded-lg translate-y-20">
      <Map
        initialViewState={{
          latitude: 33.20330913063883,
          longitude: -117.3873015907678,
          zoom: 5,
        }}
        ref={mapRef as React.LegacyRef<MapRef> | undefined}
        mapStyle={
          theme === "dark"
            ? "mapbox://styles/mapbox/dark-v11"
            : "mapbox://styles/mapbox/light-v11"
        }
        style={{ width: "100%", height: 250 }}
        scrollZoom={false}
        doubleClickZoom={false}
        mapboxAccessToken="pk.eyJ1IjoiamFlZG9uMDEiLCJhIjoiY20zdXY4em95MG12bTJtb2VuNDE2NnE3YiJ9.INFgoseS-jxCVH6BjEM8Mw"
      >
        <Marker
          latitude={33.20330913063883}
          longitude={-117.3873015907678}
          anchor="center"
        >
          <PulsatingDot />
        </Marker>
      </Map>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* CLOCK */}
      <Clock className="absolute top-4 right-4 bg-primary-foreground text-secondary" />

      {/* LOCATION */}
      <Badge className="absolute top-4 left-4 bg-primary-foreground text-secondary">
        <p className="text-xs">Oceanside, CA</p>
      </Badge>
    </div>
  );
};