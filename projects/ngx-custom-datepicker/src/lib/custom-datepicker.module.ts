import { ModuleWithProviders, NgModule } from '@angular/core';
import { CustomDatepickerComponent } from './calendar/custom-datepicker.component';
import { MonthViewComponent } from './month-view/month-view.component';
import { DayViewComponent } from './day-view/day-view.component';
import { MonthSelectComponent } from './month-select/month-select.component';
import { YearSelectComponent } from './year-select/year-select.component';
import { WeekViewComponent } from './week-view/week-view.component';
import { CommonModule } from '@angular/common';
import { DayDirective } from './day.directive';

@NgModule({
  declarations: [
    CustomDatepickerComponent,
    MonthViewComponent,
    DayViewComponent,
    MonthSelectComponent,
    YearSelectComponent,
    WeekViewComponent,
    DayDirective
  ],
  imports: [CommonModule],
  exports: [CustomDatepickerComponent, DayDirective]
})
export class CustomDatepickerModule {
  static forRoot(): ModuleWithProviders<CustomDatepickerModule> {
    return {
      ngModule: CustomDatepickerModule
    };
  }
}
