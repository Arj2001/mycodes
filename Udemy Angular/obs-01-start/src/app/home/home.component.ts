import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSub: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObsSub = interval(1000).subscribe(count => console.log(count));
    const customIntervalObs = new Observable<number>(
      (observer) => {
        let count = 0;
        setInterval(() => {
          observer.next(count)
          if (count === 5) observer.complete();
          if (count > 3) observer.error(new Error('Value is incremented greater than 3'))
          count++
        }, 1000)

      }
    )

    this.firstObsSub = customIntervalObs.pipe(
      filter((data: number) => {
        return data % 2 == 0
      }), map((data) => {
        return 'Round :' + data
      })
    ).subscribe(
      count => {
        console.log(count);
      }, error => {
        console.log(error);
        alert(error.message)
      }, () => {
        console.log('observerable completed');
      }
    );
  }

  ngOnDestroy(): void {
    this.firstObsSub.unsubscribe();
  }
}
