/* @flow */
import * as React from 'react';
import SharingComponent from 'Components/Sharing';

export const decrementCurrentIndex = (prevState: Object) => ({
  currentIndex: prevState.currentIndex - 1
});

export const incrementCurrentIndex = (prevState: Object) => ({
  currentIndex: prevState.currentIndex + 1
});

/**
 * Handles Sharing Business Logic
 */
const SharingContainer = () => <SharingComponent />;

export default SharingContainer;
