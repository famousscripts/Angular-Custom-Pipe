import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SqrtPipe } from './app.sqrt';
import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SqrtPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
