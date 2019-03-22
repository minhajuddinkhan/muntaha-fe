import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedComponent } from './shared.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule} from '@angular/material/slide-toggle'



@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatSlideToggleModule
  ]
})
export class SharedModule { }
