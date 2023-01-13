import { Component, forwardRef, Input, VERSION } from '@angular/core';
@Component({
  selector: 'my-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
})
export class RoleComponent {
  @Input() value: number = 0;
  @Input() text: string = '';
}
