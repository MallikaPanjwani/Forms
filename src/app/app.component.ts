import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  userName = "";
  email: string;
  nickName: string;
  password: string;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
