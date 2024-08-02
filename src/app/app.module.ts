import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { XyzComponent } from './components/xyz/xyz.component';
import { AbcComponent } from './components/abc/abc.component';
import { UvwComponent } from './components/uvw/uvw.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { UsersContainerComponent } from './components/users-container/users-container.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { FirstCustomPipe } from './pipes/first-custom.pipe';
import { SecondCustomPipe } from './pipes/second-custom.pipe';
import { HttpClientModule } from '@angular/common/http'
import { UserService } from './services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    XyzComponent,
    UvwComponent,
    MovieCardComponent,
    ProfileCardComponent,
    UsersContainerComponent,
    UserItemComponent,
    FirstCustomPipe,
    SecondCustomPipe,
    HomeComponent,
    NavigationComponent,
    NotFoundComponent,
    AboutComponent,
    UserDetailsComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }