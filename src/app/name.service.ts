import { Injectable } from '@angular/core';
import { Name } from './name.model';
import { names } from './names';

@Injectable()
export class NameService {

  constructor() { }

  getName() {
    return names[0].name;
  }

  editName(userName) {
    names[0].name = userName;
  }

}
