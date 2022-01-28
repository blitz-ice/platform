import { Component, OnInit } from '@angular/core';

// Ace related modules
import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/twilight';
import { AceConfigInterface } from 'ngx-ace-wrapper';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  aceConfig!: AceConfigInterface;
  aceCode!: string;

  moveable!: any;

  constructor() {}

  ngOnInit(): void {
    this.aceConfig = {
      tabSize: 2,
    };
    this.aceCode = 'let x = 4 * Math.PI;';
  }

  frame = {
    translate: [0, 0],
  };
  onResizeStart({ target, set, setOrigin, dragStart }: any) {
    // Set origin if transform-origin use %.
    setOrigin(['%', '%']);

    // If cssSize and offsetSize are different, set cssSize. (no box-sizing)
    const style = window.getComputedStyle(target);
    const cssWidth = parseFloat(style.width);
    const cssHeight = parseFloat(style.height);
    set([cssWidth, cssHeight]);

    // If a drag event has already occurred, there is no dragStart.
    dragStart && dragStart.set(this.frame.translate);
  }
  onResize({ target, width, height, drag }: any) {
    target.style.width = `${width}px`;
    target.style.height = `${height}px`;

    // get drag event
    this.frame.translate = drag.beforeTranslate;
    target.style.transform = `translate(${drag.beforeTranslate[0]}px, ${drag.beforeTranslate[1]}px)`;
  }
  onResizeEnd({ target, isDrag, clientX, clientY }: any) {
    console.log('onResizeEnd', target, isDrag);
  }
}
