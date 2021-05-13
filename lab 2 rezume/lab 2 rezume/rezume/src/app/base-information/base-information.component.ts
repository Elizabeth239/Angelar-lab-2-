import { Component, OnInit } from '@angular/core';
import {BaseInformation} from './BaseInformation';

@Component({
  selector: 'app-base-information',
  templateUrl: './base-information.component.html',
  styleUrls: ['./base-information.component.css']
})
export class BaseInformationComponent implements OnInit {
	information: BaseInformation={
	surname:"Surname",
	name:"Name",
	patronomic:"Patronomic",
	email:"youremail@.gmail.com",
	telephone:"123456789",
	city:"City"
	};

  constructor() { }

  ngOnInit(): void {
  }

}
