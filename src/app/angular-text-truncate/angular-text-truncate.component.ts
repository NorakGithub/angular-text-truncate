import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-angular-text-truncate',
  templateUrl: './angular-text-truncate.component.html',
  styleUrls: ['./angular-text-truncate.component.scss']
})
export class AngularTextTruncateComponent implements OnInit {
  @Input() textMessage: string;
  @Input() endingIcon: string;
  @Input() textDisplayLength: number;
  truncatedTextMessage: string;
  isDisplayFullText: boolean = false;
  isButtonDisplayed: boolean;
  constructor() { }

  ngOnInit() {
    this.truncatedTextMessage = this.text_truncate(this.textMessage, this.textDisplayLength, this.endingIcon);
  }

  private text_truncate = function(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      console.log(str.length);
      this.isButtonDisplayed = true;
      return str.substring(0, length - ending.length) + ending;
    } else {
      this.isButtonDisplayed = false;
      return str;
    }
  };

  toggleMoreOrLess() {
    this.isDisplayFullText = !this.isDisplayFullText;

    if(this.isDisplayFullText){
      this.truncatedTextMessage = this.textMessage;
    }else{
      this.truncatedTextMessage = this.text_truncate(this.textMessage, this.textDisplayLength, this.endingIcon);
    }
  }

}
