import { NgModule } from '@angular/core';
import { BrowserModule , Title} from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoyalityPointsComponent } from './loyality-points/loyality-points.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogContentExampleDialog} from "./loyality-points/loyality-points.component";
import { ActivitiesComponent } from './activities/activities.component'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RewardsComponent } from './rewards/rewards.component';
import { OneRewardsComponent } from './one-rewards/one-rewards.component';
import {DialogContentRewardsExampleDialog} from "./one-rewards/one-rewards.component";
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './table/table.component';
import {CdkTableModule} from '@angular/cdk/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TiresComponent } from './tires/tires.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RouterModule } from '@angular/router';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { OneActivitiesNotificationsComponent } from './one-activities-notifications/one-activities-notifications.component';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AdminsComponent } from './admins/admins.component';
import {Dialogcontentexampledialog2} from "./users/users.component";
import {Dialogcontentexampledialog3} from "./admins/admins.component";
import {MatRadioModule} from '@angular/material/radio';
import { NgxEditorModule } from 'ngx-editor';
import { BasicIntegrationsComponent } from './basic-integrations/basic-integrations.component';
import { LoginComponent } from './login/login.component';
import { VerifyyouremailComponent } from './verifyyouremail/verifyyouremail.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { OneresetpasswordComponent } from './oneresetpassword/oneresetpassword.component';
import { TworesetpasswordComponent } from './tworesetpassword/tworesetpassword.component';
import { ThreeresetpasswordComponent } from './threeresetpassword/threeresetpassword.component';
import { RegistrationComponent } from './registration/registration.component';


import { CommonModule } from '@angular/common';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';










 





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidemenuComponent,
    DashboardComponent,
    LoyalityPointsComponent,
    DialogContentExampleDialog,
    ActivitiesComponent,
    RewardsComponent,
    OneRewardsComponent,
    DialogContentRewardsExampleDialog,
    TableComponent,
    TiresComponent,
    NotificationsComponent,
    CompanyProfileComponent,
    ProfileComponent,
    OneActivitiesNotificationsComponent,
    UsersComponent,
    AdminsComponent,
    DialogContentRewardsExampleDialog,
    Dialogcontentexampledialog2,
    Dialogcontentexampledialog3,
    BasicIntegrationsComponent,
    LoginComponent,
    VerifyyouremailComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    OneresetpasswordComponent,
    TworesetpasswordComponent,
    ThreeresetpasswordComponent,
    RegistrationComponent,
    
    
        
    
    
    
    
    
    



    
  ],

  

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCheckboxModule,
    SidebarModule,
    MatExpansionModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatTableModule,
    CdkTableModule,
    FlexLayoutModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    NgxEditorModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    
    
    
    
    
    
    
    
    

    
    

  ],

 

  
  providers: [Title],
  bootstrap: [AppComponent]
  
})



export class AppModule {}
export class MyModule {}
