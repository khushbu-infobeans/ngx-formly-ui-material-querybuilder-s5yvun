import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { RuleOptions, createFormlyRuleset } from '../utils';

@Component({
  selector: 'app-query-builder-form',
  templateUrl: './query-builder-form.component.html',
  styleUrls: ['./query-builder-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryBuilderFormComponent {
  @Input() form: FormGroup;
  @Input() model: any;
  @Input() ruleOptions: RuleOptions;

  fields: FormlyFieldConfig[] = [...createFormlyRuleset()];
}