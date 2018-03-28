import { Component, OnInit } from '@angular/core';
import { Input, Inject } from '@angular/core';
//import { inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-budget-category',
  templateUrl: './budgetCategory.component.html',
  styleUrls: ['./budgetCategory.component.css']
})
export class budgetCategoryComponent implements OnInit {
  categories: budgetCategory[];
  @Input() year: number;
  @Input() month: number;
  @Input() budgetID: number;
  constructor( @Inject('BASE_URL') private baseUrl: string, private http: HttpClient) {
    
  }

  ngOnInit() {
    console.log("budgetID=" + this.budgetID);
    this.http.get<budgetCategory[]>(this.baseUrl + 'api/budgetCategory/getAll/' + this.budgetID).subscribe(result => this.categories = result), error => console.error(error);    
  }

}
