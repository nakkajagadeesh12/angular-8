import { Component, VERSION } from "@angular/core";
import { User } from "./user";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string = "Angular " + VERSION.full;
  technologies = ["Angular", "React", "SpringBoot", "Django"];
  userModel = new User(
    "Jagath",
    "nakka@gmail.com",
    3342222,
    "",
    "morning",
    true
  );
}
