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

@NgModule({
    declarations: [
        AppComponent,
        AboutMeComponent,
        CertificatesComponent,
        ProjectsComponent,
        ExperienceComponent,
        NotFoundComponent
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
                path: 'certificates',
                component: CertificatesComponent
            },
            {
                path: 'homepage',
                component: AboutMeComponent
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
