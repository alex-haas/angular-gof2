import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gof',
  templateUrl: './gof.component.html',
  styleUrls: ['./gof.component.css']
})
export class GofComponent implements OnInit {
  width: number = 16;
  height: number = 48;
  cellSize: number = 10;

  rows: number[] = Array(this.height).fill(0).map((x,i)=>i);
  columns: number[] = Array(this.width).fill(0).map((x,i)=>i);
  
  data: boolean[][] = Array(this.height).fill(0).map((x,i)=>Array(this.width));

  constructor() { }

  ngOnInit() {
  }

  clicked(x: number, y: number) {
    this.data[y][x] = !this.data[y][x];
  }

}