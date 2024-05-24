import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsModule } from './signals/signals.module';

const routes: Routes = [
  {
    path: 'signals',
    loadChildren: () =>
      import('./signals/signals.module').then((m) => m.SignalsModule),
  },
  {
    path: '**',
    redirectTo: 'signals',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
