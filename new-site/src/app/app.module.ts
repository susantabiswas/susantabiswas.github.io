import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faQuora, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './homepage/about-me/about-me.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ProjectsComponent } from './homepage/projects/projects.component';
import { ExperienceComponent } from './homepage/experience/experience.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SkillsComponent } from './homepage/skills/skills.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutMeComponent,
        CertificatesComponent,
        ProjectsComponent,
        ExperienceComponent,
        NotFoundComponent,
        SkillsComponent,
        HomepageComponent
    ],
    imports: [
        FontAwesomeModule,
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'homepage',
                pathMatch: 'full'
            },
            {
                path: 'homepage',
                component: HomepageComponent
            },
            {
                path: 'about-me',
                component: AboutMeComponent
            },
            {
                path: 'experience',
                component: ExperienceComponent
            },
            {
                path: 'skills',
                component: SkillsComponent
            },
            {
                path: 'projects',
                component: ProjectsComponent
            },
            {
                path: 'certificates',
                component: CertificatesComponent
            },
            {
                path: '**',
                component: NotFoundComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(){
        library.add(faGithub, faQuora, faLinkedin);
    }
 }
