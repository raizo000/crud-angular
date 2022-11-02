import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { usersReducer, userFeatureKey } from '../user.reducer';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature(userFeatureKey, usersReducer)],
})
export class UserModule {}
