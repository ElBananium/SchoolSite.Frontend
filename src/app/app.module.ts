import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './main/navigation/navigation.component';
import { ContentComponent } from './main/content/content.component';
import { CardComponent } from './main/content/card/card.component';
import { QuillModule } from 'ngx-quill';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavigationComponent,

    ContentComponent,
     CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    QuillModule.forRoot(),
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatTreeModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
