import { LitElement, html } from 'https://cdn.skypack.dev/lit-element@2.4.0';

export class StacklessorgFooter extends LitElement {
	createRenderRoot() {
		return this;
	}
	render() {
		return html`
    <style>
      .footer a:hover {
        color: white;
      }
    </style>
    <div class="footer has-text-white has-text-weight-semibold has-background-black">
      <div class="container">
        <div class="columns is-desktop">
          <div class="column is-5">
          <h2 class="title is-5 has-text-white">Sponsored by Yax.com</h2>
          <p class="block">Yax.com is a showcase for stackless web development. <a href="https://yax.com/">Yax.com</a> is the do-it-yourself alternative to commercial site builders. Check it out!</p>
          <div>
          <p class="buttons">
            <a target="blank" href="https://github.com/yaxdotcom" class="button is-black">
            <span class="image is-24x24">
            <svg id="Layer_1" version="1.1"><path d="M12 0.75c-6.213 0-11.25 5.037-11.25 11.25s5.037 11.25 11.25 11.25 11.25-5.037 11.25-11.25-5.037-11.25-11.25-11.25zM21.75 12c0 0.001 0 0.002 0 0.004 0 4.454-2.986 8.21-7.066 9.375l-0.069 0.017v-3.648q0-1.298-0.696-1.9c0.516-0.052 0.983-0.137 1.435-0.255l-0.064 0.014c0.479-0.134 0.897-0.312 1.284-0.536l-0.026 0.014c0.425-0.234 0.784-0.531 1.080-0.884l0.005-0.006q0.435-0.529 0.709-1.405t0.274-2.014q0-1.619-1.057-2.757 0.495-1.218-0.107-2.73-0.375-0.121-1.084 0.147c-0.475 0.176-0.88 0.374-1.263 0.607l0.032-0.018-0.509 0.321c-0.77-0.221-1.655-0.348-2.57-0.348s-1.799 0.127-2.638 0.364l0.068-0.016c-0.59-1.127-2.086-1.199-2.837-1.057-0.5 0.797-0.44 2.054-0.094 2.73q-1.057 1.138-1.057 2.757 0 1.138 0.274 2.007t0.703 1.405c0.296 0.363 0.653 0.663 1.059 0.887l0.019 0.009c0.361 0.21 0.779 0.389 1.219 0.513l0.038 0.009c0.389 0.105 0.856 0.189 1.333 0.238l0.039 0.003q-0.535 0.482-0.656 1.379c-0.173 0.084-0.374 0.153-0.585 0.198l-0.017 0.003c-0.214 0.043-0.46 0.067-0.711 0.067-0.018 0-0.036-0-0.054-0l0.003 0q-0.442 0-0.877-0.288t-0.743-0.837c-0.166-0.281-0.383-0.513-0.642-0.691l-0.007-0.005q-0.395-0.268-0.662-0.321l-0.121-0.027c-0.020-0.005-0.044-0.008-0.068-0.008-0.12 0-0.224 0.068-0.275 0.167l-0.001 0.002-0.016 0.031c-0.022 0.041-0.034 0.090-0.034 0.142 0 0.125 0.073 0.232 0.179 0.281l0.002 0.001q0.294 0.134 0.582 0.509c0.159 0.198 0.3 0.422 0.413 0.662l0.009 0.020 0.134 0.308c0.113 0.336 0.318 0.617 0.585 0.82l0.004 0.003c0.25 0.196 0.553 0.337 0.884 0.399l0.013 0.002c0.276 0.054 0.597 0.088 0.925 0.094l0.005 0c0.037 0.001 0.081 0.002 0.125 0.002 0.218 0 0.432-0.018 0.64-0.052l-0.023 0.003 0.308-0.053q0 0.508 0.007 1.191c0.003 0.276 0.005 1.027 0.006 1.582-4.213-1.141-7.262-4.93-7.262-9.431 0-4.014 2.424-7.462 5.889-8.959l0.063-0.024c1.121-0.487 2.426-0.77 3.798-0.77 5.383 0 9.747 4.364 9.747 9.747 0 0.003 0 0.006 0 0.009v-0z" fill="#FFFFFF"/></svg>
            </span>
            <span class="ml-2">GitHub</span>
            </a>
            <a target="blank" href="https://twitter.com/yaxdotcom" class="button is-black">
            <span class="image is-24x24">
              <svg width="26" height="26" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" fill="#fff"/></svg>
            </span>
            <span class="ml-2">Twitter</span>
            </a>
            <a target="blank" href="https://www.reddit.com/r/stackless/" class="button is-black">
            <span class="image is-24x24" style="margin-top:-10px; margin-left:-10px;">
              <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" fill="#fff"><path d="M14.41016,16.86719A3.375,3.375,0,0,1,12.042,17.5a3.36829,3.36829,0,0,1-2.36523-.63184,1.00059,1.00059,0,0,0-1.416,1.41407A5.11054,5.11054,0,0,0,12.042,19.5a5.12,5.12,0,0,0,3.78223-1.2168,1.00058,1.00058,0,1,0-1.41406-1.416ZM9.2005,15.00165a1,1,0,1,0-1.0003-.9997A1.00079,1.00079,0,0,0,9.2005,15.00165Zm6-2a1,1,0,1,0,.9997,1.0003A1.00138,1.00138,0,0,0,15.2005,13.00165ZM23,11.78027a3.77157,3.77157,0,0,0-6.794-2.26471,16.50461,16.50461,0,0,0-3.05005-.47851l.85578-5.705,2.08752.70984a2.99694,2.99694,0,0,0,5.99353-.06433V3.95508a3.02886,3.02886,0,0,0-3-2.95508,2.97689,2.97689,0,0,0-2.33209,1.155L13.52246,1.05371a.999.999,0,0,0-1.31152.79785L11.13446,9.027A16.66426,16.66426,0,0,0,7.794,9.51556a3.76753,3.76753,0,0,0-6.22492,4.23487A4.86206,4.86206,0,0,0,1,16c0,3.9248,4.832,7,11,7s11-3.0752,11-7a4.86217,4.86217,0,0,0-.56866-2.2489A3.78344,3.78344,0,0,0,23,11.78027ZM19.09277,3a1,1,0,1,1-1,1A1.01672,1.01672,0,0,1,19.09277,3ZM4.78027,10a1.75976,1.75976,0,0,1,.88172.24951A9.97889,9.97889,0,0,0,3.0141,11.9234c-.004-.04785-.0141-.095-.0141-.14313A1.78255,1.78255,0,0,1,4.78027,10ZM12,21c-4.87891,0-9-2.29-9-5s4.12109-5,9-5,9,2.29,9,5S16.87891,21,12,21Zm8.9859-9.07654A9.97805,9.97805,0,0,0,18.338,10.24951,1.75993,1.75993,0,0,1,19.21973,10,1.78255,1.78255,0,0,1,21,11.78027C21,11.82837,20.98993,11.87561,20.9859,11.92346Z"/></svg>
            </span>
            <span class="ml-3">Reddit</span>
            </a>
          </p>
          </div>
          </div>
          <div class="column">
          <h3 class="title is-6 has-text-white">Get a Site</h3>
          <p>Build a website for free using Yax.com</p>
          <ul style="list-style-type: circle; list-style-position: inside;">
            <li><a href="https://try.yax.com/">Try Yax</a></li>
            <li><a href="https://sites.yax.com/#tiny_sites">Tiny Sites</a></li>
            <li><a href="https://sites.yax.com/#framework_forest">Framework Forest</a></li>
            <li><a href="https://sites.yax.com/#designer_showcase">Designer Showcase</a></li>
          </ul>
          </div>
          <div class="column">
          <h6 class="title is-6 has-text-white">Tutorials</h6>
          <p>Learn about stackless <br>web development</p>
          <ul style="list-style-type: circle; list-style-position: inside;">
            <li><a href="https://tutorials.yax.com/">Yax.com Tutorials</a></li>
          </ul>
          </div>
          <div class="column">
          <h6 class="title is-6 has-text-white">Resources</h6>
          <ul style="list-style-type: circle; list-style-position: inside;">
            <li><a href="https://www.reddit.com/r/stackless/">Stackless on Reddit</a></li>
            <li><a href="mailto:mail@stackless.community">mail@stackless.community</a></li>
          </ul>
          </div>
        </div>

        <div class="columns">
          <div class="column">
          <p class="subtitle is-7 has-text-white">© ${new Date().getFullYear()} Yax.com. All rights reserved.</p>
          </div>
        </div>
        </div>
      </div>
    `;
	}
}
customElements.define('stacklessorg-footer', StacklessorgFooter);
