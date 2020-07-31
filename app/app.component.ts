import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';

import { createFormlyRuleset, Ruleset, RuleOptions } from './formly-query-builder/utils';

@Component({
  selector: 'my-app',
  template: `
    <h2 class="mat-title">@ngx-formly/material QueryBuilder</h2>
    
    <form role="form" novalidate [formGroup]="form" (submit)="submit()">
      <app-query-builder-form [model]="model" [form]="form" [ruleOptions]="ruleOptions"></app-query-builder-form>
    </form>

    <pre>{{ model | json }}</pre>
  `,
  styles: [`
    pre {
      background: white;
      padding: 1rem;
      border: 1px solid #ddd;
    }
  `]
})
export class AppComponent {
  form = new FormGroup({});
  model: Ruleset = {
    condition: 'and',
    rules: [
      {
        field: 'age',
        operator: '=',
        value: '18',
      },
      {
        field: 'gender',
        operator: '!=',
        value: 'm',
      },
    ],
  };

  ruleOptions: RuleOptions = {
    fields: [
      {
        value: 'age',
        label: 'Age',
        valueField: {
          type: 'input',
        },
      },
      {
        value: 'gender',
        label: 'Gender',
        valueField: {
          type: 'select',
          templateOptions: {
            options: [
              { label: 'Male', value: 'm' },
              { label: 'Female', value: 'f' },
            ],
          },
        },
      },
      {
        value: 'name',
        label: 'Name',
        valueField: {
          type: 'input',
        },
      },
      {
        value: 'notes',
        label: 'Notes',
        valueField: {
          type: 'textarea',
        },
      },
      {
        value: 'collegeDegree',
        label: 'College Degree?',
        valueField: {
          type: 'checkbox',
        },
      },
      {
        value: 'birthday',
        label: 'Birthday',
        valueField: {
          type: 'input',
        },
      },
      {
        value: 'school',
        label: 'School',
        valueField: {
          type: 'input',
        },
      },
      {
        value: 'occupation',
        label: 'Occupation',
        valueField: {
          type: 'input',
        },
      },
    ],
  };

  submit() {
    console.log(this.model);
  }
}