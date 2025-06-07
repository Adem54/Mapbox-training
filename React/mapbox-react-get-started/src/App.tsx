
import './App.css'
// If using with mapbox-gl v1:
// import Map from 'react-map-gl/mapbox-legacy';
import 'mapbox-gl/dist/mapbox-gl.css';
import Mapbox from './components/Mapbox';
// If using with mapbox-gl v1:

function App() {
  return (
    // <Map
    //   mapboxAccessToken="pk.eyJ1IjoiYWRlbS01NCIsImEiOiJjbWFsM3R4d2MwNGtmMmpzZnk2ZW5tcGRsIn0.aCSC5Pe3IUcHI8MDeCTwxw"
    //   initialViewState={{
    //     longitude: -122.4,
    //     latitude: 37.8,
    //     zoom: 9
    //   }}
    //   style={{ width: '100vw', height: '100vh' }}
    //   mapStyle="mapbox://styles/mapbox/streets-v12"
    // />
    <Mapbox/>
  );
}

export default App
