// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { catchError, EMPTY, Observable, switchMap } from 'rxjs';
// import { tapResponse } from '@ngrx/component-store';
// import { HttpErrorResponse } from '@angular/common/http';
//
//
// export interface PlaceState {
//   deck?: Decks;
// }
//
// const initialState: DeckState = {};
//
// @Injectable()
// export class PlaceStore{
//   constructor(
//     private _service: DeckService, _store: Store<AppState>,
//   ) {}
//
//   readonly fetchPlaces = this.effect((status$: Observable<string>) => {
//     return status$.pipe(
//       // tap(() => this._loaderStore.start()),
//       switchMap((status) =>
//         this._service.fetchPlaces(status).pipe(
//           tapResponse(
//             (response) => {
//               this.setPlace(response);
//             },
//             (error: HttpErrorResponse) => {
//               console.log('deu error --');
//               this.setErrors(error);
//             }
//           ),
//           catchError(() => EMPTY)
//           // tap(() => this._loaderStore.end())
//         )
//       )
//     );
//   });
//
//   readonly setPlace = this.updater((state, place: Decks | undefined) => {
//     return { ...state, place };
//   });
//
//   getPlace(): Observable<Decks | undefined> {
//     return this.select((state) => state.place);
//   }
// }
