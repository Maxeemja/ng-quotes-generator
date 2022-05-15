import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../Quote';
import { ApiService } from '../services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss'],
})
export class QuotesListComponent implements OnInit {
  @Input() name?: string;
  constructor(private apiService: ApiService, private spinner: NgxSpinnerService) {}
  quotes: Quote[] = [];
  ngOnInit(): void {
    this.spinner.show()
    this.apiService.getQuotes(this.name).subscribe((quotes) => {
      this.quotes = quotes;
      this.spinner.hide()
    });
  }
}
