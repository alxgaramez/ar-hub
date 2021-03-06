const fileHolderTemplate = `
  <style>
    .image-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20em;
      width: 20em;
      background: var(--passive-color);
      border: 1px solid var(--passive-color-dark);
      box-sizing: border-box;
      border-radius: 2px;
      font-family: Chakra Petch;
      font-style: normal;
      font-weight: 600;
      font-size: 1.25em;
      line-height: 20px;
      color: var(--passive-color-dark);
      cursor: pointer;
    }
  </style>
  <div>
    <div class="image-placeholder">
      Click to upload
    </div>
  </div>`;

class FileHolder extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = fileHolderTemplate;
    setTimeout(function () {
      var targetAttr = this.parentElement.getAttribute('target');
      var target = document.querySelector('#' + targetAttr)
      if (target) {
        this.onclick = function () {
          target.click();
        };
      }
    }.bind(this), 500);
  }

  connectedCallback() {
    this.classList.add('pages-content-element');
  }
}

customElements.define('file-holder', FileHolder);