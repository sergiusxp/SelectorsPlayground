import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './components/result/result.component';
import { MarkupComponent } from './components/markup/markup.component';
import { HtmlComponent } from './components/html/html.component';
import { SelectorsComponent } from './components/selectors/selectors.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    MarkupComponent,
    HtmlComponent,
    SelectorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
