/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView4 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <b> Parceiros que podem lhe ajudar </b>

        <div class="card">
          <b>Adriana Santos Monteiro</b>  
          <p>(92) 98237-4312
          <p>Já trabalhou em 117 casos semelhantes ao seu.</p>
        </div>

        <div>
          <b> Para resolver seu problema vá ao TRT 11</b>
        </div>

        <div>
          <iframe width="100%" height="450" frameborder="0" style="border:0" target="_parent"
src="https://www.google.com/maps/embed/v1/undefined?origin=...&q=...&destination=...&center=...&zoom=...&key=..." allowfullscreen></iframe>
        </div>
      </div>
    `;
  }
}

window.customElements.define('my-view4', MyView4);
