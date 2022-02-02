import { InspectionApiService } from './../inspection-api.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css'],
})
export class ShowInspectionComponent implements OnInit {
  inspectionList$!: Observable<any[]>;
  inpectionTypesList$!: Observable<any[]>;

  inpectionTypesList = [];

  inpectionTypesMap : Map<number, string> = new Map();
  constructor(private inspectionService: InspectionApiService) {}

  ngOnInit(): void {
    this.inspectionList$ = this.inspectionService.getInspectionList();
  }
}
