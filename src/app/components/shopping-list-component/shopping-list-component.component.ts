import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list-component',
  templateUrl: './shopping-list-component.component.html',
  styleUrls: ['./shopping-list-component.component.css']
})
export class ShoppingListComponentComponent implements OnInit {
  item = '';
  constructor() {
  }

  ngOnInit() {
  }
    onClickMe(event: any) {
    console.log('adding item');

    this.getitems()

    const num1 = ((document.getElementById('item') as HTMLInputElement).value);
    let ammount = 1;
    interface Useritems {
      item: string;
      qty: number;
    }
    let items: Useritems = { item: num1, qty: ammount};

  let newitems= localStorage.getItem('items');

      const itemhold = JSON.stringify(items)

    console.log(num1);
    localStorage.setItem('items', itemhold);
    //this.reloadtable();
    }

    getitems(){
      const items:any = localStorage.getItem('items');
      console.log(items);
      console.log(typeof items)
    }
    reloadtable(){
      let table = document.getElementById('loaded-list');
        const items:any =localStorage.getItem('items');
        console.log(items);
      items.num.forEach(function (value) {
        console.log(value);
          });
      }
}





