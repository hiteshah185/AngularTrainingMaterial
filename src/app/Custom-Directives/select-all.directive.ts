import { AfterViewInit, Directive, Input, OnDestroy } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appSelectAll]',
  standalone: true
})
export class SelectAllDirective implements AfterViewInit, OnDestroy {
  @Input({ required: true }) allValues: any[] = [];

  private selectAllOption!: MatOption;
  private parentSelect!: MatSelect;
  private parentFormControl: any;
  private subscriptions: Subscription[] = [];

  constructor(
    private _matSelect: MatSelect,
    private _matOption: MatOption
  ) { }
  ngAfterViewInit(): void {
    this.selectAllOption = this._matOption;
    this.parentSelect = this._matSelect;
    this.parentFormControl = this.parentSelect.ngControl.control;

    this.configureSelectAllOption();
    this.configureOtherOptionSelection();
    this.handleInitialSelectionState();
  }
  private configureSelectAllOption() {
    this.subscriptions.push(
      this.selectAllOption.onSelectionChange.subscribe(({ isUserInput, source }) => {
        if (isUserInput) {
          if (source.selected) {
            this.selectAllValues();
          } else {
            this.deselectAllValues();
          }
        }
      })
    );
  }

  private configureOtherOptionSelection() {
    this.subscriptions.push(
      this.parentSelect.optionSelectionChanges.subscribe(({ isUserInput, source }) => {
        if (isUserInput && source.value !== this.selectAllOption.value) {
          if (!source.selected) {
            this.deselectAllOption();
          } else {
            this.handleAllValuesSelected();
          }
        }
      })
    );
  }

  private handleInitialSelectionState() {
    setTimeout(() => {
      this.handleAllValuesSelected();
    });
  }

  private selectAllValues() {
    this.parentFormControl?.setValue(this.allValues);
    this.deselectAllOption(); // Prevent multiple triggers
  }

  private deselectAllValues() {
    this.parentFormControl?.setValue([]);
    this.deselectAllOption(); // Prevent multiple triggers
  }

  private deselectAllOption() {
    this.selectAllOption.deselect(false);
  }

  private handleAllValuesSelected() {
    if (this.parentFormControl?.value.length === this.allValues.length) {
      this.selectAllOption.select(false);
    } else {
      this.deselectAllOption();
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

}
