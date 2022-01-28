import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { NavFlatNode } from './core/interfaces/nav-flat-node.interface';
import { NavTreeNode } from './core/interfaces/nav-tree-node.interface';

const SIDE_NAV_TREE: NavTreeNode[] = [
  {
    label: 'home',
    icon: 'other_houses',
    url: '/'
  },
  {
    label: 'learn',
    icon: 'school',
    url: '/learn'
  },
  {
    label: 'code',
    icon: 'keyboard_alt',
    url: '/code'
  },
  {
    label: 'play',
    icon: 'sports_esports',
    url: '/play'
  },
  {
    label: 'share',
    icon: 'share',
  },
  {
    label: 'docs',
    icon: 'menu_book',
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
    url: '/faq'
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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

  constructor() {
    this.dataSource.data = SIDE_NAV_TREE;
  }

  hasChild = (_: number, node: NavFlatNode) => node.expandable;
}
