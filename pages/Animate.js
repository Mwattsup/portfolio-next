import TextyAnim from 'rc-texty';
import * as React from 'react';

const text = 'Matthew Watts';

export default function animate() {
  return (
    <TextyAnim
      type="mask-top"
      onEnd={(type) => {
        // tslint:disable-next-line
        console.log(type);
      }}
    >
      {text}
    </TextyAnim>
  );
}