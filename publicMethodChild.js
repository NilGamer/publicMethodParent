import { LightningElement, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
  value = ['red'];

  options = [
    { label: 'Red Marker', value: 'red' },
    { label: 'Yellow Marker', value: 'yellow' },
    { label: 'Green Marker', value: 'green' }
  ];

  @api
  selectCheckBox(checkboxValue) {
    const selectedCheckbox = this.options.find(checkBox => {
      return checkboxValue === checkBox.value;
    });

    if (selectedCheckbox) {
      this.value = selectedCheckbox.value;
      return 'Successfully checked';
    }
    return 'No checkbox found';
  }
}
