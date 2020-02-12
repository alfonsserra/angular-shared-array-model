import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdditionalInformationService } from '../main-component/additional-information.service';

@Component({
  selector:    'app-component-one',
  templateUrl: './component-one.component.html'
})
export class ComponentOneComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  @ViewChildren('additionalInfo') public additionalInfo: QueryList<ElementRef>;

  constructor(private readonly additionalInformationService: AdditionalInformationService) {
  }

  public ngOnInit(): void {
    this.subscription = this.additionalInformationService.currentValue$
      .subscribe(c => {
        c.forEach(a => {
          this.additionalInfo.toArray()
            .filter(c2 => c2.nativeElement.id === a.code)
            .forEach(c2 => c2.nativeElement.value = a.value);
        });
      });
  }

  public doChange(c: string, event: any) {
    this.additionalInformationService.setAdditionalInformation({code: c, value: event.target.value});
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
