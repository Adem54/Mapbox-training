import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

/*
🔍 Option 1: mapbox-gl (Official Mapbox)
You write raw Mapbox JS inside React (useEffect, useRef)
Most flexible and matches official Mapbox docs exactly
Sadece mapbox-gl yi yukleyerek calisan sekilde bu kisim

npm install mapbox-gl
Bu uygulamamiz Option-1 e uyuyor 

🔍 Option 2: react-map-gl (Uber)
Created by Uber as a React abstraction over mapbox-gl
Created by Uber as a React abstraction over mapbox-gl
npm install react-map-gl
Direk Map componenti veriyor 2.opsiyonda direk olark..dolayisi ile de bu iki farklilik cok onemli...

Final Recommendation (For You Right Now)
npm install react-map-gl mapbox-gl
use this import 
import Map from 'react-map-gl';
And use this documentation:
👉 https://visgl.github.io/react-map-gl/docs/api-reference/map

✅ What we do recommend:
react-map-gl (Uber’s)
Docs: https://visgl.github.io/react-map-gl

GitHub: visgl/react-map-gl

✅ Maintained by Uber (under the vis.gl project)

✅ Supports React 18+

✅ React-friendly (gives you a <Map /> component)

✅ Works with Mapbox access tokens and styles

✅ Best option if you want JSX-style maps in React


❌ The outdated one is react-mapbox-gl (NOT react-map-gl) Avoid: react-mapbox-gl
Docs: alex3165/react-mapbox-gl (GitHub only)
🔗 GitHub: alex3165/react-mapbox-gl

❌ Last updated: 2020

❌ Supports only React 16

❌ Breaks with React 17, 18, 19

❌ Officially marked as no longer maintained

So yes — this is the one that’s outdated, React 16-only, and NOT to be used.
*/

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRlbS01NCIsImEiOiJjbWFsM3R4d2MwNGtmMmpzZnk2ZW5tcGRsIn0.aCSC5Pe3IUcHI8MDeCTwxw';

function App() 
{
    //Reactta componntler Dom tamamen render edilmeden calisiyor..dolayisi ile o zaman da ne oluyor. React daha map i div e ekleyemeden calistigi icin map i bulamiyor...yani map dom da yukleniyor ama yuklenmesi bitmeden react onu calistirmaya calisiyor ve bulamiyor o zaman da
    //Iste bu sebepten dolayi bizim bu islemi sen dom yuklendikten sonra react i calistir..diye useRef ve useEffect ile kullanmamiz gerekiyor
    //With useRef, you're saying:"Wait until the component has actually rendered, then" 
    //🔒 By the time useEffect runs, the ref (like mapRef.current) is guaranteed to be connected to the actual DOM element — as long as it was rendered.
    // if (!mapRef.current) return; // defensive   // create the map safely
    //You can confidently assume:
    //mapRef.current points to the real <div>
    //It’s safe to call new mapboxgl.Map({ container: mapRef.current })
    //✅ What useEffect(() => {}, []) really means
    /*
      It runs once, right after the first render
      The DOM is ready
      Your <div ref={mapRef}> has been inserted into the page
      React has already set mapRef.current = <div>
    */

  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new mapboxgl.Map({
      container: mapRef.current,// ✅ Safe: runs after the DOM <div> exists
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-122.4, 37.8],
      zoom: 14
    });

    return () => map.remove(); // ✅ Clean up on component unmount
  }, []);

  return <div ref={mapRef} style={{ width: '100vw', height: '100vh' }} />;
  
}

export default App

/*
  const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [0, 0],
  zoom: 2
});
return <div id="map"></div>;
bu yanlis cunku dom hizlica yuklenyor ama mapbox un yuklenmesi tamamlanmadigi icin, bulamiyor map id yi..ondan dolayi react-lifecylc indaki useEffecten faydalaniriz..
*/