// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance } from "react-360-web";
import SimpleRaycaster from 'simple-raycaster';
import { createSurface } from "./surfaces";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot("reactvr", {
      // 'instance': r360
    }),
      createSurface(800, 2.1 , -0.09)
    //r360.getDefaultSurface()
  );
  r360.renderToSurface(
    r360.createRoot("MainDoor"),
    createSurface(400, 1.2 , -0.09)
  );
  r360.renderToSurface(
    r360.createRoot("Mobiles"),
    createSurface(600, Math.PI / 4)
  );

  r360.renderToSurface(r360.createRoot("CategoryMobiles"), createSurface(600));
  r360.renderToSurface(r360.createRoot("CategoryTab"), createSurface(600, 0.5));
  r360.renderToSurface(
    r360.createRoot("BannerSurface"),
    createSurface(500, 2.39 , -0.20)
  );
  r360.renderToSurface(
    r360.createRoot("WatchSurface"),
    createSurface(800, 2.45 , -0.90)
  );


  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("vodabg.png"));

  // Load the initial environment
  // r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
  r360.controls.clearRaycasters();
  r360.controls.addRaycaster(SimpleRaycaster);
}

window.React360 = {init};
