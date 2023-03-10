import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/core/interface/IUser.model';
import { FunctionService } from 'src/app/core/services/api/function.service';
import { SubjectService } from 'src/app/core/services/api/subject.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private functionService : FunctionService, private subjectService : SubjectService) {}

  testForm = new FormGroup({
    firstName: new FormControl(``, Validators.required),
    lastName: new FormControl(``, Validators.required),
    email: new FormControl(``, [Validators.required, Validators.email])
  });

  sendData() {
    if(this.testForm.valid) {
      this.functionService.setUser(this.testForm.value as IUser).subscribe({
        next : (response) => {
          this.subjectService.emitCount(true);
          console.log(response);
        },
        error : (err) => {
          console.log(err);
        }
      });
      console.log(this.testForm.value);
    } {
      console.log('clicked')
    }
  }
}
