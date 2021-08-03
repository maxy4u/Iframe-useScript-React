import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const IFrame = ({ children, title, ref, ...props }) => {
  const [contentRef, setContentRef] = useState(ref);
  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <iframe title={title} {...props} ref={setContentRef}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};

export default IFrame;
