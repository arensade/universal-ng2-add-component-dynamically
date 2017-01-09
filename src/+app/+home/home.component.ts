import {Component, ChangeDetectionStrategy, ViewEncapsulation, Output, EventEmitter} from '@angular/core';

import { ModelService } from '../shared/model/model.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {


  data: any = {};
  private _inputType;
  @Output inputEmitter:EventEmitter<any> = new EventEmitter<any>();
  constructor(public model: ModelService) {

    // we need the data synchronously for the client to set the server response
    // we create another method so we have more control for testing
    this.universalInit();
  }

  universalInit() {
    this.model.get('/data.json').subscribe(data => {
      this.data = data;
    });
  }

  get inputType(){
    return this._inputType;
  }

  set inputType(value){
    this._inputType=value;
    this.inputEmitter.emit(["keyV",value]);
  }
}
