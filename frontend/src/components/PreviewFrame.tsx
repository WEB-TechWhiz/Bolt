import { WebContainer } from '@webcontainer/api';
import React, { useCallback, useEffect, useState } from 'react';
import { FileItem } from '../types';

interface PreviewFrameProps {
  files: FileItem[];
  webContainer: WebContainer;
}

export function PreviewFrame({ files, webContainer }: PreviewFrameProps) {
  // In a real implementation, this would compile and render the preview
  const [url, setUrl] = useState("");

  const main = useCallback(async () => {
    if (!files.length) {
      return;
    }

    const installProcess = await webContainer.spawn('npm', ['install']);

    installProcess.output.pipeTo(new WritableStream({
      write(data) {
        console.log(data);
      }
    }));

    await webContainer.spawn('npm', ['run', 'dev']);

    // Wait for `server-ready` event
    webContainer.on('server-ready', (port, url) => {
      // ...
      console.log(url)
      console.log(port)
      setUrl(url);
    });
  }, [files.length, webContainer]);

  useEffect(() => {
    main()
  }, [main])
  return (
    <div className="h-full flex items-center justify-center text-gray-400">
      {!url && <div className="text-center">
        <p className="mb-2">Loading...</p>
      </div>}
      {url && <iframe width={"100%"} height={"100%"} src={url} />}
    </div>
  );
}
