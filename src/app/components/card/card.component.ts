import { Component, OnInit } from '@angular/core';
import { FunctionService } from 'src/app/core/services/api/function.service';
import { SubjectService } from 'src/app/core/services/api/subject.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  countUser? : number = 0;

  constructor(private functionService : FunctionService, private subjectService : SubjectService) {}

  ngOnInit() : void {
    this.count();
    this.subjectService.isClickedCount$.subscribe((response) => {
      if(response) this.count();
    })
  }

  getAllUsers() : any {
    this.subjectService.emit(true);
  }

  count() {
    this.functionService.countUser().subscribe({
      next : (response: number | undefined) => {
        this.countUser = response;
        console.log(response);
      },
      error : (err: number | undefined) => {
        console.log(err);
      }
    })
  }
}
