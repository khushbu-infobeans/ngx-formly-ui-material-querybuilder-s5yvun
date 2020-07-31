import { Component, ContentChildren } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

import { createRuleset, createRule } from '../utils';

@Component({
  selector: 'app-ruleset-type',
  templateUrl: './ruleset-type.component.html',
  styleUrls: ['./ruleset-type.component.scss']
})
export class RulesetTypeComponent extends FieldType {
  addRuleset() {
    this.model.rules.push(createRuleset());
    (<any> this.options)._buildForm();
  }
  
  addRule() {
    this.model.rules.push(createRule());
    (<any> this.options)._buildForm();
  }
}