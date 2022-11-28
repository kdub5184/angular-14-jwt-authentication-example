import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jackpot',
  templateUrl: './jackpot.component.html',
  styleUrls: ['./jackpot.component.less']
})
export class JackpotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const data = [
      {
        "id": 1,
        "name": "Leanne Graham",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
      }
    ];

  }

}
