import { Component } from '@angular/core';
import { UnicoCheckBuilder, SelfieCameraTypes, UnicoThemeBuilder, DocumentCameraTypes } from 'unico-webframe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unico-poc';
  unicoCameraBuilder = new UnicoCheckBuilder();

}
