import { Component } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FieldArrayType, FormlyFieldConfig } from '@ngx-formly/core';

import { createFormlyRuleset, createFormlyRule } from '../utils';

@Component({
  selector: 'app-ruleset-rules-type',
  templateUrl: './ruleset-rules-type.component.html',
  styleUrls: ['./ruleset-rules-type.component.scss']
})
export class RulesetRulesTypeComponent extends FieldArrayType {
  onPopulate(field: FormlyFieldConfig) {
    if (!field.parent) {
      return;
    }

    field.fieldGroup = field.fieldGroup || [];
    if (field.fieldGroup.length > field.model.length) {
      for (let i = field.fieldGroup.length; i >= field.model.length; --i) {
        (field.formControl as FormArray).removeAt(i);
        field.fieldGroup.splice(i, 1);
      }
    }

    for (let i = field.fieldGroup.length; i < field.model.length; i++) {
      // Add correct field based on model signature
      if (field.model[i].operator) {
        const { ruleOptions } = field.options.formState;
        field.fieldGroup.push({
          key: `${i}`,
          fieldGroup: [...createFormlyRule(ruleOptions)],
        });
      } else {
        field.fieldGroup.push({
          key: `${i}`,
          fieldGroup: [...createFormlyRuleset()],
        });
      }
    }
  }
}