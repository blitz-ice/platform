import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  questions: string[] = [
    'what-is-blitz-ice',
    'how-to-start',
    'what-is-web-ide',
    'what-is-blitz-basic-script',
    'save-projects-offline',
    'how-to-publish',
    'common-projects',
  ];

  constructor() {}

  ngOnInit(): void {}
}
