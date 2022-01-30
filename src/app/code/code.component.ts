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
  onBrowserResize() {
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

  resizeIdeWindows(config?: {
    which: string;
    width: number;
    height: number;
  }): void {
    const ideWindowDimensions = {
      width: this.ideWindowsContainer.nativeElement.offsetWidth,
      height: this.ideWindowsContainer.nativeElement.offsetHeight,
    };

    if (config === undefined) {
      this.ideWindows = {
        left: {
          width: 200,
          height: ideWindowDimensions.height - 100,
        },
        center: {
          width: ideWindowDimensions.width - 400,
          height: ideWindowDimensions.height - 100,
        },
        right: {
          width: 200,
          height: ideWindowDimensions.height - 100,
        },
        bottom: {
          width: ideWindowDimensions.width,
          height: 100,
        },
      };
      return;
    }

    switch (config.which) {
      case 'left':
        this.ideWindows = {
          ...this.ideWindows,
          left: {
            width: config.width,
            height: config.height,
          },
          center: {
            width:
              ideWindowDimensions.width -
              this.ideWindows.right.width -
              config.width,
            height: config.height,
          },
        };
        break;
      case 'right':
        this.ideWindows = {
          ...this.ideWindows,
          right: {
            width: config.width,
            height: config.height,
          },
          center: {
            width:
              ideWindowDimensions.width -
              this.ideWindows.left.width -
              config.width,
            height: config.height,
          },
        };
        break;
      case 'bottom':
        this.ideWindows = {
          ...this.ideWindows,
          bottom: {
            width: config.width,
            height: config.height,
          },
          left: {
            width: this.ideWindows.left.width,
            height: ideWindowDimensions.height - config.height,
          },
          center: {
            width:
              ideWindowDimensions.width -
              this.ideWindows.left.width -
              config.width,
            height: config.height,
          },
          right: {
            width: this.ideWindows.right.width,
            height: ideWindowDimensions.height - config.height,
          },
        };
        break;
    }
  }

  frame = {
    translate: [0, 0],
  };

  onResize(event: any) {
    const className = event.target.getAttribute('class');
    this.resizeIdeWindows({
      which: className.split(' ').reverse()[0],
      width: event.width,
      height: event.height,
    });
  }
}
