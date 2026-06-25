import { fillScalarField } from "../orbitals.js";

self.onmessage = function (e) {
  const { jobId, fieldBuffer, params, options, sign } = e.data;
  try {
    const field = new Float32Array(fieldBuffer);
    fillScalarField(field, params, options, sign);
    self.postMessage({ jobId, fieldBuffer: field.buffer }, [field.buffer]);
  } catch (error) {
    self.postMessage({ jobId, error: error.message });
  }
};
