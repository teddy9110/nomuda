import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingLoadComponentComponent } from './shopping-load-component.component';

describe('ShoppingListComponentComponent', () => {
  let component: ShoppingLoadComponentComponent;
  let fixture: ComponentFixture<ShoppingLoadComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingLoadComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingLoadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
