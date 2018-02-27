import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [NameService]
})
export class WelcomeComponent implements OnInit {
  name;

  constructor(private nameService: NameService) {
  }

  ngOnInit() {
    this.name = this.nameService.getName();
  }



}
