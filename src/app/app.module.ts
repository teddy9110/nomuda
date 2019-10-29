import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponentComponent } from './components/shopping-list-component/shopping-list-component.component';
import { ListItem } from './models/list-item';
import { ShoppingLoadComponentComponent } from './components/shopping-load-component/shopping-load-component.component';
@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponentComponent,
    ShoppingLoadComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
