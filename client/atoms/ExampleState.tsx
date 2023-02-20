import React from 'react';
import { atom } from 'recoil'

interface ExampleStateProp {
  test: string;
}

export const ExampleState = atom<ExampleStateProp>({
  key: 'ExampleState',
  default: {
    test: ''
  }
})