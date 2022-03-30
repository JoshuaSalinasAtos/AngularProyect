import { Pipe, PipeTransform } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
export interface LoadedObservable<T> {
  data?: T,
  loading?: boolean;
  error?: any;
}

@Pipe({
  name: 'observableLoader'
})
export class ObservableLoaderPipe implements PipeTransform {
  transform<T>(value: Observable<T>): Observable<LoadedObservable<T>>
  transform<T>(value: Observable<T>): Observable<LoadedObservable<T>> {
    return value.pipe(
      map((observableValue: T) => {
        return {
          loading: false,
          data: observableValue,
        }
      }),
      startWith({
        loading: true,
      }),
      catchError(error => of({ loading: false, error: error }) as Observable<LoadedObservable<T>>)
    )
  }

}
