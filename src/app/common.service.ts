import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, filter, map } from 'rxjs';

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

  private jsonDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  jsonData$: Observable<any> = this.jsonDataSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchData();
   }

   private fetchData() {
    this.http.get('./assets/data/countries.json').subscribe((data) => {
      this.jsonDataSubject.next(data);
    });
   }

   getScientistById(id: number): Observable<any> {
    return this.jsonData$.pipe(
      map((data) => data.find((item: { id: number; }) => item.id === id))
    );
  }
}
