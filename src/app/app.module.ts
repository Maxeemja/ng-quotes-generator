import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { AuthorComponent } from './author/author.component';
import { QuotesListComponent } from './quotes-list/quotes-list.component';
@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    AuthorComponent,
    QuotesListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
