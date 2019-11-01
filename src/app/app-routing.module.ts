import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponentComponent } from './components/shopping-list-component/shopping-list-component.component';
import { ShoppingLoadComponentComponent } from './components/shopping-load-component/shopping-load-component.component';

const routes: Routes = [{path: 'list', component: ShoppingListComponentComponent},
{path: 'load', component: ShoppingLoadComponentComponent},
{path: 'account', component: ShoppingListComponentComponent},
{path: 'about', component: ShoppingListComponentComponent},
{path: 'contact', component: ShoppingListComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
