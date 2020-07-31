import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { FormlyModule } from '@ngx-formly/core';

import { RulesetTypeComponent } from './ruleset-type/ruleset-type.component';
import { RulesetRulesTypeComponent } from './ruleset-rules-type/ruleset-rules-type.component';
import { RuleTypeComponent } from './rule-type/rule-type.component';
import { QueryBuilderFormComponent } from './query-builder-form/query-builder-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormlyModule.forChild({
      types: [
        { name: 'rule', component: RuleTypeComponent },
        { name: 'ruleset', component: RulesetTypeComponent },
        { name: 'ruleset-rules', component: RulesetRulesTypeComponent },
      ],
    }),
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    RulesetTypeComponent,
    RulesetRulesTypeComponent,
    RuleTypeComponent,
    QueryBuilderFormComponent,
  ],
  exports: [QueryBuilderFormComponent],
})
export class FormlyQueryBuilderModule {

}