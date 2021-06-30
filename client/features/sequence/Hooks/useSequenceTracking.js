// @flow
import { useEffect } from 'react';
import { trackDisplaySequence } from 'Shared/services/Tracking';

export const useSequenceTracking = () => {
  useEffect(() => {
    trackDisplaySequence();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
