import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DefinitionComponent } from './definition/definition.component';
import { VocabListComponent } from './vocab-list/vocab-list.component';
import { VocabDetailComponent } from './vocab-detail/vocab-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'definition',
    component: DefinitionComponent
  },
  {
    path: 'list',
    component: VocabListComponent
  },
  {
    path: 'details/:id',
    component: VocabListComponent
  }
];

const routesModule = RouterModule.forRoot(routes);
export { routesModule };
