import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl } from '@angular/forms';
import { HttpServicesService } from '../../services/http-services.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  contactForm: FormGroup;
  btn_text: string="SUBMIT";
  id: any;


  constructor(public formBuilder: FormBuilder, public myService: HttpServicesService, public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.generateForm();

    // console.log(this.activatedRoute.snapshot.data['data']._id);
    this.id = this.activatedRoute.snapshot.data['data']._id;


    if (this.id) {
      this.contactForm.patchValue({
        name: this.activatedRoute.snapshot.data['data'].name,
        mobile: this.activatedRoute.snapshot.data['data'].mobile
      });
      this.btn_text = "UPDATE";
    }
    else {
      this.btn_text = "SUBMIT";
    }


  }

  generateForm() {
    this.contactForm = this.formBuilder.group({
      name: [],
      mobile: []
    });
  }

  submit() {


    if (this.id) {
      this.myService.updateContact(this.activatedRoute.snapshot.data['data']._id, this.contactForm.value).subscribe((res) => {
        if (res._id)
          alert('Contact Updated!');
        this.router.navigateByUrl('/list');
      }, (err) => {
        console.log(err);
      });

    }
    else {
      this.myService.insertContact(this.contactForm.value).subscribe((res) => {
        if (res._id)
          alert('Contact Added!');
        this.router.navigateByUrl('/list');
      }, (err) => {
        console.log(err);
      });
    }
  }



  // console.log(this.contactForm.value);


}
