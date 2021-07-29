import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { SearchComponent } from './search/search.component';
import { FilterPipe  } from './pipes/filter.pipe';
import { HoverDirective } from './directives/hover.directive';

@NgModule({
  declarations: [
    ListComponent,
    SearchComponent,
    FilterPipe,
    HoverDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    SearchComponent,
    FilterPipe,
    HoverDirective
  ]
})
export class CoreModule { }
