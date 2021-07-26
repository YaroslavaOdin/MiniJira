import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { SearchComponent } from './search/search.component';
import { FilterTaskPipe  } from './pipes/filter.pipe'; 
import { HoverDirective } from './directives/hover.directive';

@NgModule({
  declarations: [
    ListComponent,
    SearchComponent,
    FilterTaskPipe,
    HoverDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    SearchComponent,
    FilterTaskPipe,
    HoverDirective
  ]
})
export class CoreModule { }
