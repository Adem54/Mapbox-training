// Map.tsx
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from 'react-map-gl/mapbox';
// If using with mapbox-gl v1:
// import Map from 'react-map-gl/mapbox-legacy';
import 'mapbox-gl/dist/mapbox-gl.css';

const Mapbox = () => {
  return (
    <div>
      <Map
      mapboxAccessToken="pk.eyJ1IjoiYWRlbS01NCIsImEiOiJjbWFsM3R4d2MwNGtmMmpzZnk2ZW5tcGRsIn0.aCSC5Pe3IUcHI8MDeCTwxw"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 9
      }}
      style={{ width: '100vw', height: '100vh' }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    />
    </div>
  )
}

export default Mapbox;
/* 

Bu uygulamamiz Option2  ve npm install mapbox-gl npm install react-map-gl ikisi birlikte install edilerek kullaniliyor

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
