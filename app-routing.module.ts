import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'todo',canActivate:[AuthGuard], loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) },
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  {path:'**',component:PageNotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
