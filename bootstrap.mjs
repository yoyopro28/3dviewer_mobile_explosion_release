const __jm_fp = "JM-3DVIEWER-2026-02-15-6f2c9a9d";

import * as THREE from "https://esm.sh/three@0.160.0";
import { GLTFLoader } from "https://esm.sh/three@0.160.0/examples/jsm/loaders/GLTFLoader.js";

// Lädt die obfuscate-payload und führt sie aus.
// payload.obf.js muss am Ende `export default function(THREE, GLTFLoader, __jm_fp){ ... }` liefern.
const mod = await import("./payload.obf.js");
mod.default(THREE, GLTFLoader, __jm_fp);
