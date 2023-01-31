import {Component, Input, OnInit} from '@angular/core';
import {
  SharedDefaultComponentDirective
} from "src/app/shared/component/atoms/shared-default-component.directive";
import {FormControl} from "@angular/forms";
import {SharedFormModel} from "src/app/shared/component/atoms/shared-form/common/shared-form-model";

@Component({
  selector: 'app-shared-form-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent extends SharedDefaultComponentDirective implements OnInit {
  @Input() keywords: SharedFormModel[] = [];
  @Input() keywordSelected?: string | undefined;
  @Input() parentForm = new FormControl<SharedFormModel | undefined>(undefined);

  ngOnInit(): void {
    if (!!this.keywordSelected) {
      setTimeout(() => this.setFormControl());
    }
  }

  isSelected(keyword: string): boolean {
    return this.keywordSelected === keyword;
  }

  addKeyword(keyword: string): void {
    this.keywordSelected = keyword
    this.setFormControl();
  }

  setFormControl(): void {
    this.parentForm.patchValue(this.keywords.find(keyword => keyword.value === this.keywordSelected));
  }
}
