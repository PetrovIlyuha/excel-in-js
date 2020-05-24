import { ExcelComponent } from '../../core/ExcelComponent';
import { $ } from '@core/dom';
export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      subscribe: ['currentText'],
      ...options,
    });
  }

  toHTML() {
    return `      
      <div class="info">f&chi;</div>
      <div 
        id="formula" 
        class="input" 
        contenteditable 
        spellcheck="false"
      >
      </div>      
    `;
  }

  storeChanged({ currentText }) {
    this.$formula.text(currentText);
  }

  init() {
    super.init();

    this.$formula = this.$root.findOneCell('#formula');
    this.$on('table:select', ($cell) => {
      this.$formula.text($cell.text());
    });
  }

  onInput(event) {
    this.$emit('formula:input', $(event.target).text());
  }

  onKeydown(event) {
    const keys = ['Enter', 'Tab'];
    if (keys.includes(event.key)) {
      event.preventDefault();
      this.$emit('formula:done');
    }
  }
}
