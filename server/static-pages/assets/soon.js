const hiddenClass = 'isHidden';
const cookieName = 'make-cookie';
const banner = document.getElementById('cookie_banner');
const button = document.getElementById('accept_cookies');

function hideCookieBanner() {
  const hasMakeCookie = document.cookie.match(cookieName);
  if (hasMakeCookie) {
    banner.classList.add(hiddenClass);
  }
}

function acceptMakeCookie() {
  // eslint-disable-next-line
  document.cookie = cookieName+'=true; path=/';
  banner.classList.add(hiddenClass);
}

window.addEventListener('load', hideCookieBanner);
button.onclick = acceptMakeCookie;
