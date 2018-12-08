import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutMeComponent,
        CertificatesComponent,
        ProjectsComponent,
        ExperienceComponent,
        NotFoundComponent,
        SkillsComponent
    ],
    imports: [
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
export class AppModule { }
