import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routingModule } from './routing.module'
import { FormsModule }   from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';


import { AppComponent } from './app.component';
import { GaveComponent } from './Components/gave/gave.component';
import { ScoreComponent } from './Components/score/score.component';
import { PlayComponent } from './Components/play/play.component';
import { UserService } from './Services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    GaveComponent,
    ScoreComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    routingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
