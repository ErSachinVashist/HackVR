// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance,Surface} from 'react-360-web';
import SimpleRaycaster from 'simple-raycaster';

const surface2 = new Surface(
  400,
  400,
  Surface.SurfaceShape.Flat
);

surface2.setAngle(
  -0.5,
  0
);

const surface1 = new Surface(
  400,
  400,
  Surface.SurfaceShape.Flat
);

surface1.setAngle(
  0.5,
  0
);

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot('reactvr'),
    surface1
  );

  r360.renderToSurface(
    r360.createRoot('reactvr2'),
    surface2
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
  r360.controls.clearRaycasters();
  r360.controls.addRaycaster(SimpleRaycaster);

}

window.React360 = {init};
