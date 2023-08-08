import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user/userprofile',
    pathMatch: 'full',
  },
  {
    path: 'userprofile',
    component: UserProfileComponent,
  },

  {
    path: 'edituser',
    component: EditUserProfileComponent,
  },
];

@NgModule({
  declarations: [UserProfileComponent, EditUserProfileComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserModuleModule {}
