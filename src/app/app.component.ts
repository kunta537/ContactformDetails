import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
contactForm: FormGroup;
private _sub;
private details;
id : number;
private detailId;
res: any;
pagedItems: any[];
some : any;
constructor(private fb: FormBuilder, private contactService : ContactService ) {}

ngOnInit() {
this.contactForm = this.fb.group({
  fname: ['', [Validators.required]],
  lname: [''],
  email : ['',[Validators.required,
    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
  address: ['']
});
}

getDetails() {
this.details = this.contactService.getContact()
.subscribe( data => {
  console.log(data)
  this.details = data;
  this.pagedItems = data;
});
}

getDetailsById(id : number){
this.detailId = this.contactService.getContactById(id)
.subscribe( data => {
  console.log(data)
  this.detailId = data;
})
}
onSubmit() {
let formValue = this.contactForm.value;
this._sub = this.contactService.saveContact(formValue)
.subscribe(data => {
  console.log(data)
  this.res = data;
});

}

}