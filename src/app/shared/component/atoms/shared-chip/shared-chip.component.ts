import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-chip',
  templateUrl: './shared-chip.component.html',
  styleUrls: ['./shared-chip.component.scss']
})
export class SharedChipComponent implements OnInit {
  @Input() isDisabled: boolean = false;
  @Input() isSelected: boolean = false;
  @Input() text!: string;
  @Input() icon?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
