import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Quote } from './Quote';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'quotes-generator';
  toggleList = false;
  quote: Quote = {
    text: '',
    author: '',
    genre: '',
  };

  constructor(
    private apiService: ApiService,
    private spinner: NgxSpinnerService
  ) {}
  
  setQuote() {
    if (this.toggleList) {
      this.toggleList = false;
    }
    this.quote = {
      text: '',
      author: '',
      genre: '',
    };
    this.spinner.show();
    this.apiService.getQuote().subscribe((quote) => {
      this.quote = quote;
      this.spinner.hide();
    });
  }
  ngOnInit(): void {
    this.setQuote();
  }
  handleToggle(): void {
    this.toggleList = !this.toggleList;
  }
}
