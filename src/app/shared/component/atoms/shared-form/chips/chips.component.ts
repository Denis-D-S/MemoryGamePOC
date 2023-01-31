import {Component, Input, OnInit} from '@angular/core';
import {
  SharedDefaultComponentDirective
} from "src/app/shared/component/atoms/shared-default-component.directive";
import {SharedFormModel} from "src/app/shared/component/atoms/shared-form/common/shared-form-model";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-shared-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent extends SharedDefaultComponentDirective implements OnInit{
  @Input() placeholder: string = 'Select Data';
  @Input() keywords: Array<SharedFormModel> = [];
  @Input() keywordSelected: Set<SharedFormModel> = new Set([]);
  @Input() parentForm = new FormControl<SharedFormModel[]>([]);

  controlInputFilter = new FormControl();
  filteredData: Observable<Array<SharedFormModel>>;
  filterString: string = '';

  constructor() {
    super();
    this.filteredData = this.initFilterObservable();
  }

  ngOnInit(): void {
    this.parentForm.value?.forEach(value => this._addKeyWordSelected(value));
  }

  initFilterObservable(): Observable<Array<SharedFormModel>> {
    return this.controlInputFilter.valueChanges.pipe(
        startWith<string>(this.displayFn()),
        map(value => typeof value === 'string' ? value : this.filterString),
        map(filter => this.filter(filter)));
  }

  filter = (filter: string): Array<SharedFormModel> => {
    this.filterString = filter;
    if (filter.length > 0) {
      return this.keywords.filter(option => {
        return option.description.toLowerCase().indexOf(filter.toLowerCase()) >= 0;
      });
    } else {
      return this.keywords.slice();
    }
  };

  displayFn = (): string => '';

  optionClicked = (event: Event, data: SharedFormModel): void => {
    event.stopPropagation();
    this.toggleSelection(data);
  };

  toggleSelection = (data: SharedFormModel): void => {
    !this.isItemChecked(data) ? this._addKeyWordSelected(data) : this._deleteKeyWord(data);
    this.parentForm.setValue(Array.from(this.keywordSelected));
  };

  _addKeyWordSelected(data: SharedFormModel) {
    this.keywordSelected = new Set([...this.keywordSelected, data]);
  }

  _deleteKeyWord(keyword: SharedFormModel): void {
    this.keywordSelected = new Set([...this.keywordSelected].filter(value => value.value !== keyword.value));
  }

  removeChip = (data: SharedFormModel): void => {
    console.log('data --->', data);
    this.toggleSelection(data);
  };

  isItemChecked(data: SharedFormModel): boolean {
    return [...this.keywordSelected].some(value => value.value === data.value)
  }
}
