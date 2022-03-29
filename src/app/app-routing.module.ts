import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { CoupleComponent } from './components/couple/couple.component';
import { FooterComponent } from './components/footer/footer.component';
import { FriendsComponent } from './components/friends/friends.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GiftComponent } from './components/gift/gift.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        //   {path: '', component: LoginComponent},
        //   {path: 'pages', component: ComponentsComponent,
        //     children: [
        //         {path: 'home', component: HomeComponent},                    
        //         {path: 'about', component: AboutComponent},                    
        //         {path: 'countdown', component: CountdownComponent},                    
        //         {path: 'couple', component: CoupleComponent},                    
        //         {path: 'footer', component: FooterComponent},                    
        //         {path: 'friends', component: FriendsComponent},                    
        //         {path: 'gallery', component: GalleryComponent},                    
        //         {path: 'gift', component: GiftComponent},                    
        //         {path: 'header', component: HeaderComponent},                    
        //         {path: 'organization', component: OrganizationComponent},                    
        //         {path: 'questions', component: QuestionsComponent},                    
        //         {path: 'rsvp', component: RsvpComponent},                    
        //         {path: 'sidebar', component: SidebarComponent},                
        //     ]
        // },
        // {path: '**', redirectTo: 'pages/empty'},
    ], {scrollPositionRestoration: 'enabled'})
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
