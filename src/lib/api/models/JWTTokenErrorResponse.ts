/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Action: Attempt to fetch a JWT token with username and password.
 * Error: User does not exist or password is incorrect.
 */
export type JWTTokenErrorResponse = {
  detail?: string;
  exception_id?: string;
  username: string;
};
