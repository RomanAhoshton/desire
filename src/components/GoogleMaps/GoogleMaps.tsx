import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styles from "./index.module.scss";
import Location from "../Location";

const GoogleMaps = () => {
  const GOOGLE_MAPS_API_KEY = "AIzaSyCbdGIQbdbxhixRNB6va2HYRLqBOGW8jlA";
  const mapContainerStyle = {
    minWidth: "100%",
    height: "500px",
  };
  const center = {
    lat: 37.7991272,
    lng: -122.4128817,
  };
  const mapOptions = {
    disableDefaultUI: true,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className={styles.maps}>
      <div className={styles.location}>
        <Location />
      </div>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        options={mapOptions}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default GoogleMaps;
