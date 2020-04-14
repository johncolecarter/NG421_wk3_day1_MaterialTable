import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IFence } from '../app/interfaces/IFence';
import { FenceServiceService } from './services/fence-service.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'streetAddress', 'city'];
  dataSource: MatTableDataSource<IFence>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private fenceServiceService: FenceServiceService) {

  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.fenceServiceService.getFence());

    this.dataSource.sort = this.sort;
  }
}
