import { Component, ViewChild } from '@angular/core';
import { CountryServicesService } from './Services/country-services.service';
import { Countries } from './pojo/countries';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ELEMENT_DATA : Countries[];

  currentCountry:string=' ';

  displayedColumns: string[] = 
  [
    "country",
    "cases",
    "todayCases",
    "deaths",
    "todayDeaths",
    "recovered",
    "active",
    "critical",
    "tests",
  ];

  dataSource = new MatTableDataSource<Countries>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(private service:CountryServicesService) { }

  ngOnInit(){

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllReports();

    
  }

  public getAllReports(){

    let response = this.service.covid9Reports();
    response.subscribe(report => this.dataSource.data=report as Countries[]);

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
