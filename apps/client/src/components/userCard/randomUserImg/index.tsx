'use client';

import React from 'react';

import * as I from 'client/assets';

interface Props {
  temporaryImgNumber: number;
}

const RandomUserImg: React.FC<Props> = ({ temporaryImgNumber }) => {
  switch (temporaryImgNumber) {
    case 0:
      return <I.Rabbit1 />;
    case 1:
      return <I.Rabbit2 />;
    case 2:
      return <I.Rabbit3 />;
    case 3:
      return <I.Rabbit4 />;
    default:
      return null;
  }
};

export default RandomUserImg;
