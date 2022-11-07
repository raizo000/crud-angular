import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { usersReducer, userFeatureKey } from './user.reducer';
import { UserEffects } from './user.effect';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(userFeatureKey, usersReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class UserModule {}
