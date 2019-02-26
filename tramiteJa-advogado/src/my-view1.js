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

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        .btn {
            display: inline-block;
            padding: 6px 12px;
            margin-bottom: 0;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-image: none;
            border: 1px solid transparent;
            border-radius: 4px
        }
        .btn-success {
            color: #fff;
            background-color: #5cb85c;
            border-color: #4cae4c
        }

        .text-right {
            text-align: right
        }
      </style>

      <div class="card">
        <h3>Voce acha que seus direitos estão sendo lesados? Conte-me sua história.</h3>

        <form class="form text-right">
          <textarea style="width:100%; height: 200px"></textarea>
          <a name="view3" href="[[rootPath]]view4">
            <input type="submit" value="Enviar" class="btn btn-success" />
          </a>
        </form>
      </div>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
