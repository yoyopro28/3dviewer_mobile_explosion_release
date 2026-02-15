const __jm_fp = "JM-3DVIEWER-2026-02-15-6f2c9a9d";

import * as THREE from "https://esm.sh/three@0.160.0";
import { GLTFLoader } from "https://esm.sh/three@0.160.0/examples/jsm/loaders/GLTFLoader.js";

const mod = await import("./payload.obf.js");

function start() {
  mod.default(THREE, GLTFLoader, __jm_fp);
}

// Falls DOM schon fertig ist, direkt starten, sonst warten
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start, { once: true });
} else {
  start();
}
