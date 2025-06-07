import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-mapbox',
  standalone: false,
  templateUrl: './mapbox.component.html',
  styleUrl: './mapbox.component.css'
})
export class MapboxComponent implements OnInit { 
  map: mapboxgl.Map | undefined;
  //EPSG codes are global identifiers for coordinate systems.
  //If you want a flat map, use:style: 'mapbox://styles/mapbox/streets-v11'

  style = 'mapbox://styles/mapbox/streets-v11';//	Mercator (EPSG:3857)- Standard flat/rectangular map
  //EPSG:3857 – Web Mercator (used by Google Maps, OpenStreetMap, etc.)

  //If you want a globe-like experience:style: 'mapbox://styles/mapbox/streets-v12'

  style2 = 'mapbox://styles/mapbox/streets-v12';//Globe (EPSG:4326)** - 🌐 Elliptical/round globe view
  //"style2 = streets-v12 makes map ellipse"-it's using a globe projection.
/*
You can also manually set the projection:
 const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [0, 0],
  zoom: 2,
  projection: 'mercator' // Force back to flat view - 'globe'
});
*/
  lat: number = 30.2672;
  lat2: number = 40;
  lng: number = -97.7431;
  lng2: number = -74.5;

  ngOnInit() {
     this.map = new mapboxgl.Map({
        accessToken: 'pk.eyJ1IjoiYWRlbS01NCIsImEiOiJjbWFsM3R4d2MwNGtmMmpzZnk2ZW5tcGRsIn0.aCSC5Pe3IUcHI8MDeCTwxw',
        container: 'map',
        style: this.style2,
        // zoom: 13,
        zoom: 9,
        center: [this.lng2, this.lat2],
        // projection:'mercator' //🗺️ (EPSG:3857)Mercator (EPSG:3857)- Standard flat/rectangular map
       // projection:'globe'//🌍 (EPSG:4326)Globe (EPSG:4326)** - 🌐 Elliptical/round globe view
        // projection:'equirectangular'
        //projection:'lambertConformalConic'
      });

   
  }
}
