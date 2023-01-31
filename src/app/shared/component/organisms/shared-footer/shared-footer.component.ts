import {Component, Input} from '@angular/core';
import {colorTypeModel} from "../../atoms/shared.types";

@Component({
  selector: 'app-shared-footer',
  templateUrl: './shared-footer.component.html',
  styleUrls: ['./shared-footer.component.scss']
})
export class SharedFooterComponent {

  @Input() color: colorTypeModel = 'none';
  @Input() logo: string = 'https://source.unsplash.com/random/250X220'

}
