import React, { useEffect } from 'react';

export function useScript({ url = '', html = '', async = false, node= document }) {
  useEffect(() => {
    let script = node && node.createElement('script');
    debugger;
    script.type = 'text/javascript';
    url && (script.src = url);
    script.async = async;
    html && !url && (script.innerHTML = html);
    node.body.appendChild(script);

    return () => {
      node.body.removeChild(script);
    };
  }, [url, html]);
}
