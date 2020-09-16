import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavbarComponent,
    ContactComponent
  ],
  exports: [
    NavbarComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})

export class SharedModule { }
