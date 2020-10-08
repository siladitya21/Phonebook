import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServicesService } from '../../services/http-services.service';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public contactList: any = [];

  constructor(public activatedRoute: ActivatedRoute, public http: HttpServicesService) { }

  ngOnInit(): void {
    this.contactList = this.activatedRoute.snapshot.data['data'];
  }

  delete(con: Users) {
    this.http.deleteContact(con._id).subscribe((res) => {
      alert("Deleted " + res.name);
      this.contactList = this.contactList.filter(u => u !== con)
    }, (err) => {
      console.log(err);
    });
  }

}
