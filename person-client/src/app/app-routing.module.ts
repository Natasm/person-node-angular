import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomePersonComponent } from './person/home-person/home-person.component';
import { RegistryPersonComponent } from './person/registry-person/registry-person.component';
import { ReadMorePersonComponent } from './person/read-more-person/read-more-person.component';
import { RegistryProfessionComponent } from './profession/registry-profession/registry-profession.component';

const routes: Routes = [
  {
    path: '', component: HeaderComponent,
    children: [
      { path: '', component: HomePersonComponent},
      { path: 'person/registry', component: RegistryPersonComponent },
      { path: 'person/registry/:id', component: RegistryPersonComponent },
      { path: 'person/readmore/:id', component: ReadMorePersonComponent },

      { path: 'profession/registry', component: RegistryProfessionComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
