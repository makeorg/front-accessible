// @flow
import {
  SEARCH_DESKTOP_EXPANDED,
  ADD_SEARCH_DESKTOP_ANIMATION,
  REMOVE_SEARCH_DESKTOP_ANIMATION,
} from 'Shared/constants/a11y';

export const addSearchDesktopHidden = (animationTiming?: number = 250) => {
  const menuItemsCollection = document.querySelectorAll(
    `.${SEARCH_DESKTOP_EXPANDED}`
  );
  const menuItemsArray = Array.from(menuItemsCollection);
  const searchForm = document.querySelector(`#search`);

  if (!menuItemsCollection || menuItemsArray.length === 0) {
    return undefined;
  }

  const menuItemsWithAttribute: any = menuItemsArray.map(menuItems => {
    menuItems.classList.add(ADD_SEARCH_DESKTOP_ANIMATION);
    const timer = setTimeout(() => {
      menuItems.setAttribute('aria-hidden', 'true');
      searchForm.classList.add('expanded');
    }, animationTiming);
    return () => clearTimeout(timer);
  });

  return menuItemsWithAttribute;
};

export const removeSearchDesktopHidden = (animationTiming?: number = 250) => {
  const menuItemsCollection = document.querySelectorAll(
    `.${SEARCH_DESKTOP_EXPANDED}`
  );
  const menuItemsArray = Array.from(menuItemsCollection);
  const searchForm = document.querySelector(`#search`);

  if (!menuItemsCollection || menuItemsArray.length === 0) {
    return undefined;
  }

  const menuItemsWithoutAttribute: any = menuItemsArray.map(menuItems => {
    searchForm.classList.remove('expanded');
    menuItems.classList.remove(ADD_SEARCH_DESKTOP_ANIMATION);
    menuItems.classList.add(REMOVE_SEARCH_DESKTOP_ANIMATION);
    const firstTimer = setTimeout(() => {}, animationTiming);
    const secondTimer = setTimeout(() => {
      menuItems.removeAttribute('aria-hidden');
    }, animationTiming * 2);
    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
    };
  });

  return menuItemsWithoutAttribute;
};
