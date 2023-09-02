import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgbDropdownModule,
    NgbCarouselModule,
    DataTablesModule
  ],
  exports: [
    
    CommonModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgbDropdownModule,
    NgbCarouselModule,
    DataTablesModule
  ]
})
export class SharedModule { }
