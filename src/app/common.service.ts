import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, filter, map, take } from 'rxjs';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  allScientists : any = [];

  constructor(private http: HttpClient) {
    this.fetchData();
   }

   fetchData() {
    this.http.get('./assets/data/countries.json').subscribe((data) => {
      this.allScientists = data;
      localStorage.setItem('scientists',JSON.stringify(this.allScientists));
    });
   }

   getScientistById(Id: number) {
    let allData = JSON.parse(localStorage.getItem('scientists')!);
    return allData.filter((x: { id: number; })=> x.id == Id)[0];
  }
}
