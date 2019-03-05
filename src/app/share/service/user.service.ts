import {Injectable} from '@angular/core';
import {BaseServiceService} from './base-service.service';
import {Observable} from 'rxjs';
import {AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';
import {catchError, map} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class UniqueAlterEgoValidator implements AsyncValidator {
  constructor(private baseServiceService: BaseServiceService) {
  }

  validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.baseServiceService.callGetRequest('http://localhost:4200/assets/jsonFake/fakeValidateEmail.json').pipe(
      map(isTaken => {
        return (isTaken ? {uniqueAlterEgo: true} : null);
      }),
      catchError(() => null)
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private baseServiceService: BaseServiceService, private validator: UniqueAlterEgoValidator) {
  }

  validateUser(): Observable<any> {
    console.log('d');
    return this.baseServiceService.callGetRequest('http://localhost:4200/assets/jsonFake/fakeValidateEmail.json');
  }

  validate(control: AbstractControl) {
    this.validator.validate(control);
  }
}
