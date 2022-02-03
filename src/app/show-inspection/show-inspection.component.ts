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
  inspectionTypesList$!: Observable<any[]>;

  inspectionTypesList: any[] = [];

  inspectionTypesMap: Map<number, string> = new Map();
  constructor(private inspectionService: InspectionApiService) {}

  ngOnInit(): void {
    this.inspectionList$ = this.inspectionService.getInspectionList();
    this.refreshInspectionTypes()
  }

  refreshInspectionTypes() {
    this.inspectionService.getInspectionTypesList().subscribe((data) => {
      this.inspectionTypesList = data;

      data.forEach((type: any) => {
        this.inspectionTypesMap.set(type.id, type.name);
      });
    });
  }
}
