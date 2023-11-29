import { Subscription } from 'rxjs';
import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Directive({
  selector: '[RtlSupported]'
})
export class RtlSupportDirective implements OnInit, OnDestroy {
  constructor(
    private _element: ElementRef,
    public _translate: TranslateService
  ) {
    _element.nativeElement.style.textAlign = _translate.currentLang === 'he' || _translate.currentLang === 'ar' ? 'right' : 'left';
    _element.nativeElement.style.direction = _translate.currentLang === 'he' || _translate.currentLang === 'ar' ? 'rtl' : 'ltr';
  }

  private subscription: Subscription | undefined;

  ngOnInit(): void {
    this.subscription = this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this._element.nativeElement.style.textAlign = event.lang === 'he' || event.lang === 'ar' ? 'right' : 'left';
        this._element.nativeElement.style.direction = event.lang === 'he' || event.lang === 'ar' ? 'rtl' : 'ltr';
      }
    );
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
