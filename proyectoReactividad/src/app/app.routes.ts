import { Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

export const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  
  { path: 'child', component: ChildComponent }, 

  { path: '', redirectTo: 'parent', pathMatch: 'full' }
];