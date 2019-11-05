import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-shopping-list-component',
  templateUrl: './shopping-list-component.component.html',
  styleUrls: ['./shopping-list-component.component.css']
})
export class ShoppingListComponentComponent implements OnInit {
  

  ngOnInit() {    
  }  

  headMessage : string;
  selectedRow : Number;
  setClickedRow : Function;
  setnewitem: Function;
  setClickedPrevRow:Function;
  setpreviousitem:Function;
  setpreviousitemtonew:Function;
  items : [{
      item: string,
  }]; 
  previousitems : [{
    item: string,
}]; 

constructor() {
  this.headMessage = "Please click below rows !!";

      this.items = [{
          item : "apple"            
      }];
      
      this.previousitems = [{
        item : "apple"            
    }             
    ];

      this.setClickedRow = function(index){
          this.selectedRow = index;
          this.selectedPrevRow = null;
      }
     this.setClickedPrevRow = function(index){
        this.selectedPrevRow = index;
        this.selectedRow = null;
     }

      this.setnewitem = function(index){
        var   newitem = ((document.getElementById("input") as HTMLInputElement).value);
        this.items.push({item:newitem})
        
        console.log('test')
    } 

    this.setpreviousitem = function(index){
  
      var   newitem = this.items[index];
      
      console.log(typeof newitem);
      console.log(index);
      this.items.splice(index,1);

      this.previousitems.push(newitem);
      
      console.log('test');
  } 
    
  this.setpreviousitemtonew = function(index){
  
    var   newitem = this.items[index];
    
    console.log( newitem);
    console.log(index);
    this.previousitems.splice(index,1);

    this.items.push(newitem);
    
    console.log('test');
    } 


    
}


   
}





