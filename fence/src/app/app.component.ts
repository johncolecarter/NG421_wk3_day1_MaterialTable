import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IFence } from '../app/interfaces/IFence';
import { FenceServiceService } from './services/fence-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'streetAddress', 'city'];
  dataSource: MatTableDataSource<IFence>;

  constructor(private fenceServiceService: FenceServiceService) {

  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.fenceServiceService.getFence());
  }
}
