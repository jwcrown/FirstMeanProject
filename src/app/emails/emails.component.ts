import { Component, OnInit } from '@angular/core';
import { Email} from './../email'

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {
  emails:Array<object>;

  constructor() { 
    this.emails = [];
    this.emails.push(new Email('josh@gmail.com', true, 'New Windows', 'Windows XI luaching next year.'));
    this.emails.push(new Email('mikey@gmail.com', false, 'Programming', 'Enchantress of Numbers.'));
    this.emails.push(new Email('Ray@email.com', false, 'Updated Algo', 'New algorithm'));
    this.emails.push(new Email('Brian@123dojo.com', true, 'HL3!', 'Just Kidding...'));

  }
  ngOnInit() {
  }

}
