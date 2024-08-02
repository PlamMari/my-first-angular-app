import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersContainerComponent } from './components/users-container/users-container.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LoginComponent } from './components/login/login.component';
import { aboutGuard } from './guards/about.guard';
import { AboutClassGuard } from './guards/about-class.guard';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'users', component: UsersContainerComponent },
  {path: 'users/:userId', component: UserDetailsComponent },
  // {path: 'about', component: AboutComponent, canActivate: [AboutClassGuard], data: {testValue1: 'test 142421', testValue2: 'test2' } },
  {path: 'about', component: AboutComponent, canActivate: [aboutGuard], data: {testValue1: 'test 142421', testValue2: 'test2' } },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: '**', component: NotFoundComponent }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
