import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/user.modal';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  form?: FormGroup;
  user?: User;
  constructor(
    private userService: UserService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.userService.getUserById(params['id']).subscribe((user) => {
        this.initForm(user);
      });
    });
  }

  initForm(user?: User) {
    console.log(user);
    let userName = '';
    let phone = '';
    let email = '';
    if (user) {
      userName = user.username;
      phone = user.phone;
      email = user.email;
    }
    this.form = new FormGroup({
      userName: new FormControl(userName),
      email: new FormControl(email),
      phone: new FormControl(phone),
    });
  }

  onSubmit() {
    console.log(this.form?.value);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.activeRoute });
  }
}
