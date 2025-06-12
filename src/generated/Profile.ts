/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  GetProfileIndexData,
  GetProfileIndexError,
  GetProfileIndexParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Profile<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Profile
   * @name GetProfileIndex
   * @request GET:/api-frontend/Profile/Index
   * @secure
   * @response `200` `GetProfileIndexData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getProfileIndex = (
    query: GetProfileIndexParams,
    params: RequestParams = {},
  ) =>
    this.request<GetProfileIndexData, GetProfileIndexError>({
      path: `/api-frontend/Profile/Index`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
