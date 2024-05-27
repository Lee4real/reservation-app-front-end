import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})
export class AdminTemplateComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  reserve(item: any): void {
    alert(`êtes-vous sûr de reserver cette salle ${item.name} pour ${item.heur}`);
  }
  fetchItems(): void {
    this.http.get<any[]>('http://localhost:8089/products')
      .subscribe(data => {
        this.products = data;
      });
  }
}
