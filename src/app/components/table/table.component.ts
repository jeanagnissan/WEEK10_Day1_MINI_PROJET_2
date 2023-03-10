import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/interface/IUser.model';
import { FunctionService } from 'src/app/core/services/api/function.service';
import { SubjectService } from 'src/app/core/services/api/subject.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  listOfUser? : IUser[];

  constructor(private functionService : FunctionService, private subjectService : SubjectService) {}

  ngOnInit() : void {
    // this.listOfUser = this.functionService.getUser();
    this.getAllUser();
    this.subjectService.isClicked$.subscribe((response) => {
      if(response) this.getAllUser();
    })
  }

  getAllUser() {
    this.functionService.getUser().subscribe({
      next : (response: any) => {
        this.listOfUser = response;
        console.log(this.listOfUser);
      },
      error : (err: any) => {
        console.log(err);
      }
    });
  }
}
