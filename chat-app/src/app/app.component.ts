import { Component } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  msg: String = "";

  constructor(public af: AngularFireDatabase) {
    this.itemsRef = af.list("/messages");
    this.items = af.list("/messages").valueChanges();
  }

  send(chatMsg: String) {
    this.itemsRef.push({ message: chatMsg });
    this.msg = "";
  }
}
