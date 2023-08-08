import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormlyField, FormlyFieldConfig } from '@ngx-formly/core';
interface IProduct {
  name: string;
  price: number;
  quantity: number;
  category: string[];
  isAvailable: boolean;
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit {
  product: IProduct | undefined;
  userForm = this.fb.group({});

  model = { name: 'ahmed ali ', age: 20, salary: 500 };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
        pattern: 'A-Z',
      },
      validators: {
        validation: [Validators.required, Validators.pattern('[a-zA-Z]{1,}')],
      },
      validation: {
        messages: {
          required: 'Email address required',

          pattern: '[a-zA-Z] must contain at least one',
        },
      },
    },
    {
      key: 'username',
      type: 'checkbox',
      templateOptions: {
        label: 'Is Seller',
        required: true,
      },
    },
    {
      key: 'UserAge',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Enter your Age ',
      },
      // validators: {
      //   validation: [Validators.required],
      // },
      // validation: {
      //   messages: {
      //     required: 'Please enter an email',
      //   },
      // },

      // hideExpression: (model:any) => !model.email,
      expressionProperties: {
        'templateOptions.disabled': (model) => !model.email,
      },
    },
    {
      key: 'userImage',
      type: 'input',
      templateOptions: {
        type: 'file',
        required: true,
        label: 'Enter your image',
      },
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6 invalid',
          key: 'firstName',
          type: 'input',
          templateOptions: {
            label: 'First Name',
          },
        },
        {
          className: 'col-6',
          key: 'lastName',
          type: 'input',
          templateOptions: {
            label: 'Last Name',
          },
        },
      ],
    }

  ];
  constructor(private fb: FormBuilder) {}

  get userFormControls() {
    return this.userForm.controls;
  }
  ngOnInit(): void {}
  onSubmit(e?: any) {
    console.log('userFormControls', this.userFormControls);
    console.log('this.modal', this.model);
    console.log('this.userform.errors', this.userForm.errors);
  }
}
