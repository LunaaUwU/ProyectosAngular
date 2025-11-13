import { Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

export const routes: Routes = [
  {path: '', redirectTo: 'parent', pathMatch: 'full'},
  
  { path: 'child', component: ChildComponent },

  { path: 'parent', component: ParentComponent },
];