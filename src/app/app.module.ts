import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CoupleComponent } from './components/couple/couple.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { AboutComponent } from './components/about/about.component';
import { FriendsComponent } from './components/friends/friends.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { GiftComponent } from './components/gift/gift.component';
import { FooterComponent } from './components/footer/footer.component';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    CoupleComponent,
    CountdownComponent,
    AboutComponent,
    FriendsComponent,
    OrganizationComponent,
    GalleryComponent,
    QuestionsComponent,
    RsvpComponent,
    GiftComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    DialogModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},],
  bootstrap: [AppComponent]
})
export class AppModule { }
