import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from 'express';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TodoComponent }]),
  ],
})
export class TodoModule {}
