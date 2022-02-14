import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePersonComponent } from './person/home-person/home-person.component';
import { RegistryPersonComponent } from './person/registry-person/registry-person.component';
import { HeaderComponent } from './header/header.component';

import { PersonService } from './service/person.service';
import { ProfessionService } from './service/profession.service';
import { ReadMorePersonComponent } from './person/read-more-person/read-more-person.component';
import { ErrorGeneralComponent } from './error/error-general/error-general.component';
import { RegistryProfessionComponent } from './profession/registry-profession/registry-profession.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePersonComponent,
    RegistryPersonComponent,
    HeaderComponent,
    ReadMorePersonComponent,
    ErrorGeneralComponent,
    RegistryProfessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    PersonService,
    ProfessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
