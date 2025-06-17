import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  formContact = this.formBuilder.group({
    name: ['', [Validators.minLength(4), Validators.required]],
    subject: ['', [Validators.minLength(10), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    message: ['', [Validators.minLength(20), Validators.required]],
    phone: ['', [Validators.minLength(11), Validators.required]],
  });
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  sendForm() {
    alert('Form submitted successfully!');
    this.formContact.reset();
  }
}
