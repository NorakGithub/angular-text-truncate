# AngularTextTruncate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Install: 

```
npm install angular-text-truncate --save

import AngularTextTruncateModule from 'angular-text-truncate';

```

## Usage:

```
By default just specify the text message that you want to truncate

  <angular-text-truncate
      [textMessage]="textMessage">
  </angular-text-truncate>

```

## Attributes

```
  all avilable attributes are:
  
  -> [textMessage]="textMessage" // text message that needs to be truncated
  -> [textDisplayLength]="200" // how many characters you want to display in trucated text, default will be 100,
  -> [endingIcon]="endingTextIcon" // concat any icon at the end of truncated text, default will be '...' .
  -> [displayLabels]="['show more', 'show less']" // send array of labels that needs to be displayed, default will be 'more' , 'less';

```

```
  Example:
  
    <angular-text-truncate
      [textMessage]="textMessage"
      [textDisplayLength]="200"
      [endingIcon]="endingText"
      [displayLabels]="['show more', 'show less']">
    </angular-text-truncate>

```

### you can access the demo link here  https://rakeshuvsn.github.io/angular-text-truncate/
