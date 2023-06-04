import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./Map/Map";
import TransactionRecord from "./TransactionRecord/TransactionRecord";

function Home() {


    const { isLoaded } = useJsApiLoader({
      // id: mapOptions.googleMapApiKey,
      id: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      // googleMapsApiKey: mapOptions.googleMapApiKey,
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });

    console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)

    return (
      <div className="App">
          <TransactionRecord />
          <Map isLoaded={isLoaded} />
      </div>
    
    );
  }

  export default Home;