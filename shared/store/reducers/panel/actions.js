// @flow
export const PANEL_OPEN = 'PANEL_OPEN';
export const PANEL_CLOSE = 'PANEL_CLOSE';
export const PANEL_SET_CONTENT = 'PANEL_SET_CONTENT';
export const PANEL_REMOVE_CONTENT = 'PANEL_REMOVE_CONTENT';

export const openPanel = () => ({
  type: PANEL_OPEN,
});

export const closePanel = () => ({
  type: PANEL_CLOSE,
});

export const setPanelContent = (panelContent: any) => ({
  type: PANEL_SET_CONTENT,
  payload: { panelContent },
});

export const removePanelContent = () => ({
  type: PANEL_REMOVE_CONTENT,
});
