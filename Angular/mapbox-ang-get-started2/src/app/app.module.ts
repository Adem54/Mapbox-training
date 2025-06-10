import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
