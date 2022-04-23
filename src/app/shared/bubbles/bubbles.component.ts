import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.css']
})
export class BubblesComponent implements OnInit {
  public bubbles:any = [1,2,3,4]
  constructor() { }

  ngOnInit(): void {
  }

}
