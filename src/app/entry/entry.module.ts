import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [EntryComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EntryModule { }
