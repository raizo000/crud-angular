import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getUserDetail } from 'src/app/state/user.action';
import { selectUserDetail } from 'src/app/state/user.selector';
import { User } from 'src/app/user.modal';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private store: Store
  ) {}

  user$ = this.store.select(selectUserDetail);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.store.dispatch(getUserDetail({ id: params['id'] }));
    });
  }

  editUser() {
    this.router.navigate(['edit'], {
      relativeTo: this.activatedRoute,
    });
  }
}
