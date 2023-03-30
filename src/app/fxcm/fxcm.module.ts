import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FxcmRoutingModule } from './fxcm-routing.module';
import { HomeComponent } from './home/home.component';
import { ShareModule } from '../share/share.module';
import { MatInputModule} from '@angular/material/input'
import { MatFormFieldModule} from '@angular/material/form-field'
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FxcmRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FlexLayoutModule,
    ShareModule
  ]
})
export class FxcmModule { }
