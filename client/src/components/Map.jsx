import { useEffect } from "react";

function Map() {
  useEffect(() => {
    const loadGoogleMapsScript = () =>
      new Promise((resolve, reject) => {
        if (window.google) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = (error) => reject(error);
        document.head.appendChild(script);
      });

    const initMap = () => {
      const selector = document.getElementById("map");
      const center = { lat: 47.21133, lng: -1.547447 };
      const options = {
        center,
        zoom: 19,
      };

      const map = new window.google.maps.Map(selector, options);

      const imageWcs =
        "https://raw.githubusercontent.com/Ange230700/wild-eats/main/images/wcsiconmarker.png";

      new window.google.maps.Marker({
        position: center,
        map,
        icon: imageWcs,
        title: "Wild Code School",
      });

      const styles = {
        default: [],
        hide: [
          {
            featureType: "poi.business",
            elementType: "all",
            stylers: [{ visibility: "on" }],
          },

          {
            featureType: "poi.school",
            elementType: "all",
            stylers: [{ visibility: "on" }],
          },
        ],
      };

      map.setOptions({ styles: styles.hide });
    };

    loadGoogleMapsScript()
      .then(initMap)
      .catch((error) => {
        console.error("Failed to load Google Maps script:", error);
      });
  }, []);

  return <div id="map" />;
}

export default Map;
