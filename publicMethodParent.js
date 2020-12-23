import { LightningElement } from 'lwc';

export default class PublicMethodParent extends LightningElement {
  value;

  checkBoxSelectHandler = () => {
    const childCmp = this.template.querySelector('c-public-method-child');
    const returnMsg = childCmp.selectCheckBox(this.value);
    console.log(returnMsg);
  };

  inputChangeHandler = event => {
    this.value = event.target.value;
  };
}
