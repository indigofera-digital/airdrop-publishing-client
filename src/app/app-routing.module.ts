import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirdropCreationComponent } from './components/airdrop-creation/airdrop-creation.component';
import { CompletePageComponent } from './components/complete-page/complete-page.component';

const routes: Routes = [
  {
    path: '',
    component: AirdropCreationComponent
  },
  {
    path: 'complete',
    component: CompletePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
