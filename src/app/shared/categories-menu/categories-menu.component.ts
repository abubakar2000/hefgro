import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.css']
})
export class CategoriesMenuComponent implements OnInit {
  public categories = ["Laptops", "Furnicoms", "Watch & Accessories", "Kids Fashion", "Electronics", "Health & Beauty", "Jwellery", "Mens Collection"]
  constructor() { }

  ngOnInit(): void {
  }

}
