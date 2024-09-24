import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const MFE_APP_URL = 'http://localhost:4300/remoteEntry.js';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'todo',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mfeApp',
        remoteEntry: MFE_APP_URL,
        exposedModule: './TodoModule',
      })
        .then((m) => m.TodoModule)
        .catch((err) => console.error(err)),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routeCompArr = [HomeComponent];
