import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  textMessage = 'Product icon design is inspired by the tactile and physical quality of material. Each icon is cut, folded, and lit as paper would be, but represented by simple graphic elements. The quality of the material is sturdy, with clean folds and crisp edges. The matte-like finish interacts with light through subtle highlights and consistent ';
  textLength = 50;
  endingText = '<span>...</span>';
  labels = [];
}
