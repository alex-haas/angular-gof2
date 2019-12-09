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

  next_state(x: number, y: number) {
    var cnt = 0;
    if (y > 0) {
      cnt += this.data[y - 1][x] ? 1 : 0;
    }
    if (y < this.height - 1) {
      cnt += this.data[y + 1][x] ? 1 : 0;
    }
    if (x > 0) {
      cnt += this.data[y][x - 1] ? 1 : 0;
      if (y > 0) {
        cnt += this.data[y - 1][x - 1] ? 1 : 0;
      }
      if (y < this.height - 1) {
        cnt += this.data[y + 1][x - 1] ? 1 : 0;
      }
    }
    if (x < this.width - 1) {
      cnt += this.data[y][x + 1] ? 1 : 0;
      if (y > 0) {
        cnt += this.data[y - 1][x + 1] ? 1 : 0;
      }
      if (y < this.height - 1) {
        cnt += this.data[y + 1][x + 1] ? 1 : 0;
      }
    }

    if (this.data[y][x]) {
      return cnt == 2 || cnt == 3;
    } else {
      return cnt == 3;
    }
  }

  next() {
    let new_data = Array(this.height).fill(0).map((x,i)=>Array(this.width));
    
    for (var y = 0; y < this.height; y++) {
      for (var x = 0; x < this.width; x++) {
        new_data[y][x] = this.next_state(x, y);
      }
    }
    
    this.data = new_data;
  }

}