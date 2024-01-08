import React, {useCallback, useMemo, useState } from 'react';
import { GoogleMap, Marker } from "@react-google-maps/api";
import styles from './Map.module.css';
import { Theme } from './Theme';
import { adList } from '../../advs';
import { CardList } from '../CardList/CardList';

const containerStyle = {
  width: window.innerWidth <= 900 ? "100%" : "78%",
  height: "100%",
};

const options = {
  styles: Theme,
}

export const Map = ({ center }) => {
  const [selectedAd, setSelectedAd] = useState(null);
  const [ads, setAds] = useState(adList);
  const mapRef = React.useRef(null);

 const onBoundsChanged = useCallback(() => {
   const bounds = mapRef.current.getBounds();
   const adsInBounds = ads.filter((ad) => {
     const adPosition = new window.google.maps.LatLng(
       ad.position.lat,
       ad.position.lng
     );
     return bounds.contains(adPosition);
   });
    setAds(adsInBounds);
  //  setAds((prevAds) => [...prevAds, adsInBounds]);
 }, [mapRef, ads]);

 const visibleAds = useMemo(() => {
   if (!selectedAd) {
     return ads;
   }

   const updatedList = adList.filter((ad) => ad.id === selectedAd.id);
   return updatedList;
 }, [selectedAd, ads]);

  const onLoad = React.useCallback(
    (map) => {
      mapRef.current = map;
       
      map.addListener("bounds_changed", onBoundsChanged);
    },
    [onBoundsChanged]
  );

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = null;
  }, []);

   const handleFormSubmit = (newAd) => {
     setAds((prevAds) => [...prevAds, newAd]);
   };

  return (
    <div className={styles.container}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
      >
        {visibleAds.map((ad) => (
          <Marker
            key={ad.id}
            position={ad.position}
            onClick={() => {
              setSelectedAd(ad);
            }}
          />
        ))}
        {/* <Marker position={center} /> */}
      </GoogleMap>
      <CardList
        advs={visibleAds}
        selectedAd={selectedAd}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

