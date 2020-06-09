import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { DataVerifyComponent } from './data-verify/data-verify.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { MyTrainingsComponent } from './my-trainings/my-trainings.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'main', component: MainComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'home', component: MyHomeComponent },
      { path: 'training', component: MyTrainingsComponent },
      { path: 'questionnaire', component: QuestionnaireComponent }
    ]
  },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
