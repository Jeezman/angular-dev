import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

export const firebaseConfig = {
  apiKey: "AIzaSyDJM2CBln7hg5hWOg8jpqPBVNG_SOyPWjc",
  authDomain: "chat-app-f9435.firebaseapp.com",
  databaseURL: "https://chat-app-f9435.firebaseio.com",
  projectId: "chat-app-f9435",
  storageBucket: "",
  messagingSenderId: "948932233607"
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
