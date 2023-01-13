import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  month = 'January';
  year = 2022;
  day = 1;
  days = [];
  months = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  years = [];
  roles = [
    {
      name: 'CEO',
      number: 25,
    },
    {
      name: 'Director',
      number: 20,
    },
    {
      name: 'Manager',
      number: 15,
    },
    {
      name: 'Lead Developer',
      number: 10,
    },
    {
      name: 'Senior Developer',
      number: 5,
    },
    {
      name: 'Developer',
      number: 0,
    },
  ];
  role = 0;

  constructor() {
    for (var i = 0; i < 31; i++) {
      this.days.push(i + 1);
      this.years.push(1992 + i);
    }
    this.roles.sort((a, b) => b.number - a.number);
  }
}
