// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location } from "react-360-web";
import SimpleRaycaster from "simple-raycaster";
import CONSTANTS from "./utils/CONSTANTS";
import { createSurface } from "./utils/surfaces";

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
    createSurface(800, 2.1, -0.09)
    //r360.getDefaultSurface()
  );
  r360.renderToSurface(
    r360.createRoot("MainDoor"),
    createSurface(1000, 0, -0.3)
  );

  r360.renderToSurface(
    r360.createRoot("BannerSurface"),
    createSurface(1100, (1.6 * Math.PI) / 2, -0.1)
  );

  r360.renderToSurface(
    r360.createRoot("CategoryMobiles"),
    createSurface(1000, (0.9 * Math.PI) / 2, -0.4)
  );
  r360.renderToSurface(
    r360.createRoot("CategoryTablets"),
    createSurface(1000, (-0.8 * Math.PI) / 2, -0.4)
  );
  r360.renderToSurface(
    r360.createRoot("LogoBanner"),
    createSurface(800, 0, 0.22)
  );

  r360.renderToSurface(
    r360.createRoot("DeviceSection"),
    createSurface(500, 0.25, -0)
  );

  const location = new Location([-0.18, -1.5, -1]);
  r360.renderToLocation(r360.createRoot("DeviceImagePhone"), location);

  r360.renderToSurface(
    r360.createRoot("CheckoutPage"),
    createSurface(1000, 0.25, -0.42)
  );

  r360.renderToSurface(
    r360.createRoot("ExitStore"),
    createSurface(400, Math.PI)
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL(CONSTANTS.IMAGES.ENTRANCE_BG));

  r360.controls.clearRaycasters();
  r360.controls.addRaycaster(SimpleRaycaster);
}

window.React360 = { init };
