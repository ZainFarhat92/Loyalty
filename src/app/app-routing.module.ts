import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { LoyalityPointsComponent } from './loyality-points/loyality-points.component';
import { ActivitiesComponent } from './activities/activities.component';
import { NavComponent } from './nav/nav.component';
import { RewardsComponent } from './rewards/rewards.component';
import { OneRewardsComponent } from './one-rewards/one-rewards.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { OneActivitiesNotificationsComponent } from './one-activities-notifications/one-activities-notifications.component';
import { UsersComponent } from './users/users.component';
import { AdminsComponent } from './admins/admins.component';
import { LoginComponent } from './login/login.component';
import { BasicIntegrationsComponent } from './basic-integrations/basic-integrations.component';
import { VerifyyouremailComponent } from './verifyyouremail/verifyyouremail.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { OneresetpasswordComponent } from './oneresetpassword/oneresetpassword.component';
import { TworesetpasswordComponent } from './tworesetpassword/tworesetpassword.component';
import { ThreeresetpasswordComponent } from './threeresetpassword/threeresetpassword.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [


  {
    path: 'Dashboard',
    component: SidemenuComponent,
    children: [
      {
        path: 'Dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard ',
        },
      },
      {
        path: 'Activities',
        component: ActivitiesComponent,
        data: {
          title: 'Activities ',
        },
      },
      {
        path: 'details',
        component: LoyalityPointsComponent,
        data: {
          title: 'Account Creation ',
        },
      },

      {
        path: 'Rewards',
        component: RewardsComponent,
        data: {
          title: 'Rewards ',
        },
      },

      {
        path: 'Rewardsdetails',
        component: OneRewardsComponent,
        data: {
          title: 'Rewards 1 ',
        },
      },

      {
        path: 'CompanyProfile',
        component: CompanyProfileComponent,
        data: {
          title: ' Company Profile',
        },
      },

      {
        path: 'Profile',
        component: ProfileComponent,
        data: {
          title: ' Profile',
        },
      },

      {
        path: 'Users',
        component: UsersComponent,
        data: {
          title: ' Users',
        },
      },

      {
        path: 'Admins',
        component: AdminsComponent,
        data: {
          title: ' Admins',
        },
      },

      {
        path: 'NotificationsActivities',
        component: NotificationsComponent,
        data: {
          title: 'Activities Notifications',
        },
      },
      {
        path: 'details1',
        component: OneActivitiesNotificationsComponent,
        data: {
          title: 'Activities Notifications',
        },
      },

      { path: 'Rewards', component: RewardsComponent },
      { path: 'Rewardsdetails', component: OneRewardsComponent },
      { path: 'NotificationsActivities', component: NotificationsComponent },
      { path: 'CompanyProfile', component: CompanyProfileComponent },
      { path: 'Profile', component: ProfileComponent },
      { path: 'details1', component: OneActivitiesNotificationsComponent },
      { path: 'Users', component: UsersComponent },
      { path: 'Admins', component: AdminsComponent },
      { path: 'basicIntegrations', component: BasicIntegrationsComponent },
    ],
  },
  {
    path: '',
    component: LoginComponent,
  },
  { path: 'verifyyouremail', component: VerifyyouremailComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'oneresetpassword', component: OneresetpasswordComponent },
  { path: 'tworesetpassword', component: TworesetpasswordComponent },
  { path: 'threeresetpassword', component: ThreeresetpasswordComponent },
  { path: 'returntologin', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'LogOut', component: LoginComponent },
  { path: 'Back', component: LoginComponent },
  { path: 'SubmitAccount', component:LoginComponent},





  {
    path: 'nav',
    component: NavComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
