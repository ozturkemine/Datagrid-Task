import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialMediaComponent } from './components/social-media/social-media.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // {path: '', component:SocialMediaComponent, children: [
  //   {path:"", loadChildren: () => import("./components/components.module").then(module => module.ComponentsModule)}
  // ]},
  {path:"", component:SocialMediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
