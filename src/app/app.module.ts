import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//root component
import { AppComponent } from './app.component';

/*Angular Material */
import { AngularMaterial } from './app.material.components';
import { ToolbarComponent } from './shared/ca-toolbar/ca-toolbar.component';
import { DataBindingComponent } from './ca-data-binding/ca-data-binding.component';
import { ClassStyleBindingComponent } from './ca-class-style-binding/ca-class-style-binding.component';
import { EventBindingComponent } from './ca-event-binding/ca-event-binding.component';
import { InputPropertiesComponent } from './ca-input-properties/ca-input-properties.component';
import { TemplateDrivenComponent } from './ca-template-driven/ca-template-driven.component';
import { ReactiveFormsComponent } from './ca-reactive-forms/ca-reactive-forms.component';
import { DebugTemplateDrivenComponent } from './ca-debug-template-driven/ca-debug-template-driven.component';
import { RatingComponent } from './shared/rating/rating.component';
import { GridListComponent } from './ca-grid-list/ca-grid-list.component';
import { GithubComponent } from './ca-github/ca-github.component';
import { GithubService } from './ca-github/github.service';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DataBindingComponent,
    ClassStyleBindingComponent,
    EventBindingComponent,
    InputPropertiesComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    DebugTemplateDrivenComponent,
    RatingComponent,
    GridListComponent,
    GithubComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterial

  ],
  entryComponents: [
    AppComponent,
    ToolbarComponent,
    DataBindingComponent,
    ClassStyleBindingComponent,
    EventBindingComponent,
    InputPropertiesComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    DebugTemplateDrivenComponent,
    RatingComponent,
    GridListComponent,
    GithubComponent
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
