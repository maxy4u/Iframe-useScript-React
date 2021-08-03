import React, { memo, useRef } from 'react';
import Iframe from './Iframe';
import { useScript } from './hooks';
import { getDynamicScriptHtml } from './utils';
import './style.css';

const IframeContent = memo(({ iframeRef }) => {
  useScript({ url: './test-script.js' });
  useScript({ html: getDynamicScriptHtml(123) });
  return <h2> this is dynamic Iframe</h2>;
});

export default function App() {
  const iframeRef = useRef(null);
  return (
    <div>
      <h1>Static Iframe with Dynamic Script</h1>
      <section className="iframe-contaianer">
        <Iframe src="./test-iframe.html"> </Iframe>
      </section>
      <section className="iframe-contaianer-dynamic">
        <Iframe ref={iframeRef}>
          <IframeContent iframeRef={iframeRef} />
        </Iframe>
      </section>
    </div>
  );
}
