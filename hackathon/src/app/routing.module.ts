import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// import { AppComponent } from './app.component';
import { GaveComponent } from './Components/gave/gave.component';
import { ScoreComponent } from './Components/score/score.component';
import { PlayComponent } from './Components/play/play.component';


const appRoutes: Routes = [ {path: 'gave', component: GaveComponent },
                            {path: 'play', component: PlayComponent},
                            {path: 'score', component:ScoreComponent},
                            {path: '**', component:GaveComponent}]


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(
      appRoutes,
      { enableTracing: false })],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class routingModule { }
