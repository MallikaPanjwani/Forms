import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  userName = "";
  email: string;
  password: string;

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(""),
      emailRf: new FormControl(""),
      passwordRf: new FormControl("")
    });
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }
  onSubmitRf(form: FormGroup) {
    console.log("Valid?", form.valid);
    console.log("Name", form.value.name);
    console.log("Email", form.value.emailRf);
    console.log("Password", form.value.passwordRf);
  }
}
