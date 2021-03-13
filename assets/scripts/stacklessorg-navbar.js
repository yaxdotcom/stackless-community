import { LitElement, html } from 'https://cdn.skypack.dev/lit-element@2.4.0';

export class StacklessorgNavbar extends LitElement {

  async performUpdate() {
    super.performUpdate();
    // set up hamburger menu after super.performUpdate() calls render()
    // toggles the class is-active on both the navbar-burger and the targeted navbar-menu

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  }

  createRenderRoot() {
    return this;
  }

  render(){
    return html`
    <nav class="navbar is-transparent is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://stackless.community/">
        <figure class="image">
            <img src="/favicon-32x32.png" width="32" height="32">
          </figure>
        </a>
        <a class="navbar-item" target="blank" href="https://github.com/stackless-community">
          <figure class="image is-24x24 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </figure>
        </a>
        <a class="navbar-item" target="blank" href="https://twitter.com/yaxdotcom">
          <figure class="image is-24x24" style="">
            <svg width="26" height="26" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" fill="#fff"/></svg>
          </figure>
        </a>
        <a class="navbar-item" target="blank" href="https://www.reddit.com/r/stackless/">
          <figure class="image is-24x24" style="">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" fill="#fff"><path d="M14.41016,16.86719A3.375,3.375,0,0,1,12.042,17.5a3.36829,3.36829,0,0,1-2.36523-.63184,1.00059,1.00059,0,0,0-1.416,1.41407A5.11054,5.11054,0,0,0,12.042,19.5a5.12,5.12,0,0,0,3.78223-1.2168,1.00058,1.00058,0,1,0-1.41406-1.416ZM9.2005,15.00165a1,1,0,1,0-1.0003-.9997A1.00079,1.00079,0,0,0,9.2005,15.00165Zm6-2a1,1,0,1,0,.9997,1.0003A1.00138,1.00138,0,0,0,15.2005,13.00165ZM23,11.78027a3.77157,3.77157,0,0,0-6.794-2.26471,16.50461,16.50461,0,0,0-3.05005-.47851l.85578-5.705,2.08752.70984a2.99694,2.99694,0,0,0,5.99353-.06433V3.95508a3.02886,3.02886,0,0,0-3-2.95508,2.97689,2.97689,0,0,0-2.33209,1.155L13.52246,1.05371a.999.999,0,0,0-1.31152.79785L11.13446,9.027A16.66426,16.66426,0,0,0,7.794,9.51556a3.76753,3.76753,0,0,0-6.22492,4.23487A4.86206,4.86206,0,0,0,1,16c0,3.9248,4.832,7,11,7s11-3.0752,11-7a4.86217,4.86217,0,0,0-.56866-2.2489A3.78344,3.78344,0,0,0,23,11.78027ZM19.09277,3a1,1,0,1,1-1,1A1.01672,1.01672,0,0,1,19.09277,3ZM4.78027,10a1.75976,1.75976,0,0,1,.88172.24951A9.97889,9.97889,0,0,0,3.0141,11.9234c-.004-.04785-.0141-.095-.0141-.14313A1.78255,1.78255,0,0,1,4.78027,10ZM12,21c-4.87891,0-9-2.29-9-5s4.12109-5,9-5,9,2.29,9,5S16.87891,21,12,21Zm8.9859-9.07654A9.97805,9.97805,0,0,0,18.338,10.24951,1.75993,1.75993,0,0,1,19.21973,10,1.78255,1.78255,0,0,1,21,11.78027C21,11.82837,20.98993,11.87561,20.9859,11.92346Z"/></svg>
          </figure>
        </a>
        <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item has-text-weight-bold">
            <a itemprop="url" class="navbar-item has-text-white" href="https://tutorials.yax.com/">
              <span itemprop="name">Tutorials</span></a>
          </div>
        </div>
      </div>
    </nav>
    `;
  }
}
customElements.define('stacklessorg-navbar', StacklessorgNavbar);
