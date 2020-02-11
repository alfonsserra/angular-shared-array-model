import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AdditionalInformationService } from '../main-component/additional-information.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit, OnDestroy {

  @ViewChildren('additionalInfo') public additionalInfo: QueryList<ElementRef>;

  private subscription: Subscription;

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
