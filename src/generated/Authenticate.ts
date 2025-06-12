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
  AuthenticateCustomerRequest,
  GetAuthenticateGetApiVersionData,
  PostAuthenticateGetTokenData,
  PostAuthenticateGetTokenError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Authenticate<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Authenticate
   * @name PostAuthenticateGetToken
   * @summary Authenticate user
   * @request POST:/api-frontend/Authenticate/GetToken
   * @secure
   * @response `200` `PostAuthenticateGetTokenData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  postAuthenticateGetToken = (
    data: AuthenticateCustomerRequest,
    params: RequestParams = {},
  ) =>
    this.request<PostAuthenticateGetTokenData, PostAuthenticateGetTokenError>({
      path: `/api-frontend/Authenticate/GetToken`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Authenticate
   * @name GetAuthenticateGetApiVersion
   * @summary Gets API version
   * @request GET:/api-frontend/Authenticate/GetApiVersion
   * @secure
   * @response `200` `GetAuthenticateGetApiVersionData` OK
   */
  getAuthenticateGetApiVersion = (params: RequestParams = {}) =>
    this.request<GetAuthenticateGetApiVersionData, any>({
      path: `/api-frontend/Authenticate/GetApiVersion`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
