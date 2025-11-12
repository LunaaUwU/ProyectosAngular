import { Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

export const routes: Routes = [
  { path: '', component: ChildComponent },

  // { path: 'parent', component: ParentComponent },
];