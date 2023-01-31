// import {
//   Component,
//   ComponentRef,
//   Inject,
//   OnDestroy,
//   OnInit,
//   PLATFORM_ID,
//   ViewChild,
//   ViewContainerRef
// } from '@angular/core';
// import {Observable, Subscription} from "rxjs";
// import {SharedModalDirective} from "src/app/shared/component/templates/shared-modal-dialog/shared-modal.directive";
// import {MatDialog} from "@angular/material/dialog";
// import {isPlatformBrowser} from "@angular/common";
// import {Store} from "@ngrx/store";
// import {AppState} from "src/app/store/app.state";
// import {ModalDialogState} from "src/app/store/modal-dialog/modal-dialog.reducer";
// import {getFeatureModalState} from "src/app/store/modal-dialog/modal-dialog-selector.selectors";
// import * as ModalAction from "../../../../store/modal-dialog/modal-dialog.actions";
// import {ModalAddItem} from "src/app/store/modal-dialog/modal-add-item";

// @Component({
//   selector: 'app-shared-modal-dialog',
//   templateUrl: './shared-modal-dialog.component.html',
//   styleUrls: ['./shared-modal-dialog.component.scss']
// })
// export class SharedModalDialogComponent implements OnInit, OnDestroy {
//   align: string = 'center';
//   modalState$: Observable<ModalDialogState>;
//   componentRef?: ComponentRef<any>;
//   @ViewChild(SharedModalDirective, {static: false}) myRef?: SharedModalDirective;
//   modalStateSubscription?: Subscription;

//   constructor(private store: Store<AppState>,
//               private vcRef: ViewContainerRef,
//               @Inject(PLATFORM_ID) private platformId: any,
//               public dialog: MatDialog) {
//     this.modalState$ = this.store.select(getFeatureModalState);
//   }

//   ngOnDestroy(): void {
//     if (isPlatformBrowser(this.platformId)) {
//       this.componentRef?.destroy();
//     }
//     this.modalStateSubscription?.unsubscribe();
//     this.dialog?.ngOnDestroy();
//   }

//   ngOnInit(): void {
//     this.changeStateModal();
//     this.detectClose();
//   }

//   changeStateModal(): void {
//     this.modalStateSubscription = this.modalState$.subscribe(value => {
//       if (value.enable) {
//         this.loadComponent(value.child);
//       } else {
//         this.dialog.closeAll()
//       }
//     });
//   }

//   detectClose(): void {
//     this.dialog.afterAllClosed.subscribe(value => this.close());
//   }

//   close = (): void => this.store.dispatch(ModalAction.closeModal());

//   private loadComponent(childComponent: ModalAddItem): void {
//     setTimeout(() => {
//       this.vcRef?.clear();
//       this.vcRef.createComponent(childComponent.component);
//       //Exemplo chamando o método printMessage do SharedTypographyExampleComponent
//       //const component = this.vcRef.createComponent(childComponent.component)
//       //component.instance.printMessage();
//     });
//   }
// }
