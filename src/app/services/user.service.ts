import { Injectable } from '@angular/core';
import { UserEnum } from '../enums/enums';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  role: UserEnum = UserEnum.ANONYMOUS;

  constructor() {}

  getRole(): Observable<UserEnum> {
    return of(this.role);
  }
}
