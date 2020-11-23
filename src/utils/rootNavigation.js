import * as React from 'react';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

export function navigate(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    // eslint-disable-next-line no-unused-expressions
    navigationRef.current?.navigate(name, params);
  }
}
