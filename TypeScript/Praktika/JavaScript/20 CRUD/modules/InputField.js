class InputField{
    constructor({ 
      // labelFor, 
      // inputName,
      inputId, // užtenka inputId, nes labelFor ir inputName sutampa su inputId
      labelText, 
      inputType,
      inputPlaceholder = '',
      inputValue
    }){
      this.inputId = inputId;
      this.labelText = labelText;
      this.inputType = inputType;
      this.inputPlaceholder = inputPlaceholder;
      this.inputValue = inputValue;
      return this.render();
    }
    render(){
      const div = document.createElement('div');
  
      const label = document.createElement('label');
      label.textContent = this.labelText;
      label.setAttribute('for', this.inputId);
  
      const input = document.createElement('input');
      input.setAttribute('type', this.inputType);
      input.setAttribute('name', this.inputId);
      input.setAttribute('id', this.inputId);
      input.setAttribute('placeholder', this.inputPlaceholder);
      input.setAttribute('required', true);
      input.setAttribute('value', this.inputValue);
  
      div.append(label, input);
      return div;
    }
  }
  
  export default InputField;