
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';;
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {

  searchTerm = '';

  displayedColumns: string[] = ['Image', 'Name', 'DOB', 'DOD'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource<Country>();
  public tableData: MatTableDataSource<any> = new MatTableDataSource<Country>();
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<Country[]>('./assets/data/countries.json')
      .subscribe((data: any) => {
        this.dataSource = new MatTableDataSource<Country>(data);
        this.tableData = this.dataSource;
        this.tableData.filteredData = [];
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  filterCountries(searchTerm: string) {
    this.tableData.filteredData = [];
    this.tableData.filter = searchTerm.trim().toLocaleLowerCase();
    const filterValue = searchTerm;
    if (searchTerm.trim() == "") {
      this.tableData.filteredData = [];
    }
    else {
      this.tableData.filter = filterValue.trim().toLowerCase();
    }
  }

  onMatSortChange() {
    this.dataSource.sort = this.sort;
  }

  openDetailsPage(row: any) {
    this.router.navigate(['/details/'+row.id]);
  }

}
