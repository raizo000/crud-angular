import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user.modal';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit {
  @Input() user?: User;

  constructor() {}

  ngOnInit(): void {}
}
