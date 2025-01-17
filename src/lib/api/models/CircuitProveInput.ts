/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Client input to prove a circuit.
 */
export type CircuitProveInput = {
  /**
   * An arbitrary mapping of metadata keys to string values. This can be used to track additional information about the proof such as an ID from an external system.
   */
  meta?: Record<string, string>;
  /**
   * An object mapping proof input variable names to their values. Can be a raw JSON object or a string serialized as JSON or TOML.
   */
  proof_input: Record<string, any> | string;
  /**
   * A boolean indicating whether to perform an internal verification check during the proof creation.
   */
  perform_verify?: boolean;
  /**
   * Internal prover implementation setting.
   */
  prover_implementation?: string;
};
