import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

// Ace related modules
import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/twilight';
import { AceConfigInterface } from 'ngx-ace-wrapper';
import { BehaviorSubject } from 'rxjs';
import { ContainerDimensions } from '../core/interfaces/container-dimensions.interface';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit, AfterViewInit {
  // ide windows
  @ViewChild('ideWindowsContainer')
  ideWindowsContainer!: ElementRef<HTMLDivElement>;
  ideWindows!: {
    left: ContainerDimensions;
    center: ContainerDimensions;
    right: ContainerDimensions;
    bottom: ContainerDimensions;
  };

  @HostListener('window:resize', ['$event'])
  onBrowserResize(event: CustomEvent) {
    this.resizeIdeWindows();
  }

  aceConfig!: AceConfigInterface;
  aceCode!: string;

  moveable!: any;

  constructor() {}

  ngOnInit(): void {
    // initialize ide windows
    this.ideWindows = {
      left: { width: 0, height: 0 },
      center: { width: 0, height: 0 },
      right: { width: 0, height: 0 },
      bottom: { width: 0, height: 0 },
    };

    this.aceConfig = {
      tabSize: 2,
    };
    this.aceCode = 'let x = 4 * Math.PI;';
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.resizeIdeWindows();
    }, 0);
  }

  resizeIdeWindows(): void {
    const ideWindowDimensions = {
      width: this.ideWindowsContainer.nativeElement.offsetWidth,
      height: this.ideWindowsContainer.nativeElement.offsetHeight,
    };
    this.ideWindows.left = {
      width: 200,
      height: ideWindowDimensions.height - 100,
    };
    this.ideWindows.center = {
      width: ideWindowDimensions.width - 400,
      height: ideWindowDimensions.height - 100,
    };
    this.ideWindows.right = {
      width: 200,
      height: ideWindowDimensions.height - 100,
    };
    this.ideWindows.bottom = {
      width: ideWindowDimensions.width,
      height: 100,
    };
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
