import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ToDoLstComponent } from './to-do-lst/to-do-lst.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ToDoLstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
