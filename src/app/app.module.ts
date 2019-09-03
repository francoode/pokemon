import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {SyncService} from "./services/sync.service";
import {HttpClientModule} from "@angular/common/http";
import {PokemonService} from "./services/pokemon.service";
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonElementComponent } from './pokemon-element/pokemon-element.component';
import {NgImageSliderModule} from "ng-image-slider";
import {ReactiveFormsModule} from "@angular/forms";
import { PokemonMissingnoComponent } from './pokemon-detail/pokemon-missingno/pokemon-missingno.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonElementComponent,
    PokemonMissingnoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
