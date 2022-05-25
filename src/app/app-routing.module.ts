import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from 'src/app/landing-page/landing-page.component'
import { CuteMessageComponent} from 'src/app/cute-message/cute-message.component'

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'cute-message', component: CuteMessageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
