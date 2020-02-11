import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AdditionalInformation } from '@model/additional-information.model';

@Injectable({
  providedIn: 'root'
})
export class AdditionalInformationService {

  public informations: Array<AdditionalInformation> = [];

  private readonly currentValuesSubject = new ReplaySubject<Array<AdditionalInformation>>(1);

  public readonly currentValue$ = this.currentValuesSubject.asObservable();

  public setAdditionalInformation(information: AdditionalInformation): void {
    if (this.informations.some(a => a.code === information.code)) {
      this.informations.filter(a => a.code === information.code)
        .map(a => {
          a.value = information.value;
          return a;
        });
    } else {
      this.informations.push(information);
    }
    this.currentValuesSubject.next(this.informations);
  }
}
