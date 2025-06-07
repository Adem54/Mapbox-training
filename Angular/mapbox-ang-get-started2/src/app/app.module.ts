import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideMapboxGL } from 'ngx-mapbox-gl';
import { MapComponent } from './mapbox/mapbox.component'; // ✅ Your map component


@NgModule({
  declarations: [
    AppComponent,
   MapComponent  // ✅ Declare here if not standalone
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [
     provideMapboxGL({
      accessToken: 'pk.eyJ1IjoiYWRlbS01NCIsImEiOiJjbWFsM3R4d2MwNGtmMmpzZnk2ZW5tcGRsIn0.aCSC5Pe3IUcHI8MDeCTwxw', // Replace with your actual token
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
