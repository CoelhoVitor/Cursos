import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { PhotosModule } from "./photos/photos.module";
import { ErrorsModule } from "./errors/errors.module";
import { DarkenOnHoverModule } from "./shared/directives/darken-on-hover/darken-on-hover.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    ErrorsModule,
    DarkenOnHoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
