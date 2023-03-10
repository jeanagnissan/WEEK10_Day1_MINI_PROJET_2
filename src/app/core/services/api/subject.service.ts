import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SubjectService {

    subject: Subject<boolean> = new Subject<boolean>;
    countSubject: Subject<boolean> = new Subject<boolean>;
    isClicked$ = this.subject.asObservable();
    isClickedCount$ = this.countSubject.asObservable();

    emit(value: boolean) {
        this.subject.next(value);
    }

    emitCount(value: boolean) {
        this.countSubject.next(value);
    }
}
