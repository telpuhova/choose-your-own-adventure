import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NameService } from '../name.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
  providers: [NameService]
})
export class NameComponent implements OnInit {


  constructor(private router: Router, private nameService: NameService) {}

  ngOnInit() {
  }

  submitForm(name: string){
    this.nameService.editName(name);
    this.router.navigate(['welcome']);

  }

}
