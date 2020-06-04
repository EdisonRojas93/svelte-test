export default class InputField extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // lets get the url from attribute
    this.url = this.getAttribute('url');

    // lets create our shadow root
    this.shadowObj = this.attachShadow({mode: 'open'});

    this.render();
  }

  render() {
    this.shadowObj.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
      <div>
        <img class="gif-cover__image"
          src="${this.url}" />
      </div>
      ${this.getStyle()}
    `;
  }

  getStyle() {
    return `
      <style>
        img {
          display: inline-block;
          width: 50px;
          height: auto;
        }
      </style>
    `;
  }
}

customElements.define('input-field', InputField);
