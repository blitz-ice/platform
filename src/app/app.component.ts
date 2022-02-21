import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { TranslocoService } from '@ngneat/transloco';
import { routingUrls } from './core/constants/routing.const';
import { NavFlatNode } from './core/interfaces/nav-flat-node.interface';
import { NavTreeNode } from './core/interfaces/nav-tree-node.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  routingUrls = routingUrls;
  activeLanguage = this.transloco.getActiveLang();

  private _transformer = (node: NavTreeNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      label: node.label,
      icon: node.icon ?? undefined,
      url: node.url ?? undefined,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<NavFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private transloco: TranslocoService) {
    this.dataSource.data = [
      {
        label: 'home',
        icon: 'other_houses',
        url: '/',
      },
      {
        label: 'learn',
        icon: 'school',
        url: routingUrls['learn'][this.activeLanguage],
      },
      {
        label: 'develop',
        icon: 'keyboard_alt',
        url: routingUrls['develop'][this.activeLanguage],
      },
      {
        label: 'play',
        icon: 'sports_esports',
        url: routingUrls['play'][this.activeLanguage],
      },
      {
        label: 'share',
        icon: 'share',
        url: routingUrls['share'][this.activeLanguage],
      },
      {
        label: 'docs',
        icon: 'menu_book',
        url: routingUrls['docs'][this.activeLanguage],
        children: [
          {
            label: 'docs.web-ide',
          },
          {
            label: 'docs.blitz-basic-script',
          },
          {
            label: 'docs.testing',
          },
          {
            label: 'docs.release',
          },
        ],
      },
      {
        label: 'faq',
        icon: 'contact_support',
        url: routingUrls['faq'][this.activeLanguage],
      },
    ];
  }

  hasChild = (_: number, node: NavFlatNode) => node.expandable;
}
