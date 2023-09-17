import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  allScientists: any = [];

  constructor(private http: HttpClient) {
    this.http.get<Country[]>('./assets/data/countries.json')
      .subscribe((data: any) => {
        this.allScientists = data;
      });
   }

   getScientistById(Id : any) {
    return this.allScientists.filter((x: { id: any; }) => x.id == Id)[0];
   }
}
