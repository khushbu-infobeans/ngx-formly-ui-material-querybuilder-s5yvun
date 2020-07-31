import { FormlyFieldConfig } from '@ngx-formly/core';

export interface Ruleset {
  condition: 'and' | 'or';
  rules: Array<Ruleset | Rule>;
}

export interface Rule {
  field: string;
  value?: any;
  operator?: string;
  entity?: string;
}

export interface RuleOptions {
  fields: Array<{
    value: string;
    label: string;
    valueField: Partial<FormlyFieldConfig>;
  }>;
}

export function createRuleset(): Ruleset {
  return {
    condition: 'and',
    rules: [],
  };
}

export function createRule(): Rule {
  return {
    field: '',
    operator: '=',
    value: '',
  };
}

export function createFormlyRuleset(): FormlyFieldConfig[] {
  return [
    {
      type: 'ruleset',
      fieldGroup: [
        {
          key: 'condition',
          type: 'radio',
          defaultValue: 'and',
          templateOptions: {
            required: true,
            placeholder: 'Condition',
            options: [
              { value: 'and', label: 'AND' },
              { value: 'or', label: 'OR' },
            ],
          },
        },
        {
          key: 'rules',
          type: 'ruleset-rules',
          fieldArray: {
            fieldGroup: [],
          },
        },
      ],
    },
  ];
}

export function createFormlyRule(ruleOptions: RuleOptions): FormlyFieldConfig[] {
  const fieldOptions = ruleOptions.fields.map(({ value, label }) => ({ value, label }));
  const valueFieldGroups = ruleOptions.fields.map(({ value, valueField }) => ({
    key: 'value',
    hideExpression: `model.field !== '${value}'`,
    ...valueField,
  }));
  return [
    {
      type: 'rule',
      fieldGroup: [
        {
          key: 'field',
          type: 'select',
          templateOptions: {
            required: true,
            placeholder: 'Field',
            options: fieldOptions,
          },
        },
        {
          key: 'operator',
          type: 'select',
          defaultValue: '=',
          templateOptions: {
            required: true,
            placeholder: 'Operator',
            options: [
              { value: '=', label: '=' },
              { value: '!=', label: '!=' },
              { value: '>', label: '>' },
              { value: '>=', label: '>=' },
              { value: '<', label: '<' },
              { value: '<=', label: '<=' },
            ],
          },
        },
        {
          fieldGroup: valueFieldGroups,
        },
      ],
    },
  ];
}