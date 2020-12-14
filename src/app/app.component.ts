import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators
} from "@angular/forms";

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
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.myForm = this.fb.group({
      name: ["", Validators.required],
      emailRf: ["", Validators.required, Validators.email],
      passwordRf: ["", Validators.required]
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
