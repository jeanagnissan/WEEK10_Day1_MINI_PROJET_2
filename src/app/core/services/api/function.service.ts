import { Injectable } from '@angular/core';
import { endPoint } from '../../enum/endPoint.ressource';
import { IUser } from '../../interface/IUser.model';
import { HttpService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor(private httpService : HttpService) { }

  setUser(user : IUser) {
    return this.httpService.post({endPoint : 'api/users', data : user});
  }

  getUser() {
    return this.httpService.get(`${endPoint.registerAndGetAllUser}`);
  }

  countUser() {
    return this.httpService.Count(`${endPoint.countUser}`);
  }
}
