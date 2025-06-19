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
  AuthenticateGetApiVersionListData,
  AuthenticateGetTokenCreateData,
  AuthenticateGetTokenCreateError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Authenticate<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Authenticate
   * @name AuthenticateGetTokenCreate
   * @summary Authenticate user
   * @request POST:/api-frontend/Authenticate/GetToken
   * @secure
   * @response `200` `AuthenticateGetTokenCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  authenticateGetTokenCreate = (
    data: AuthenticateCustomerRequest,
    params: RequestParams = {},
  ) =>
    this.request<
      AuthenticateGetTokenCreateData,
      AuthenticateGetTokenCreateError
    >({
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
   * @name AuthenticateGetApiVersionList
   * @summary Gets API version
   * @request GET:/api-frontend/Authenticate/GetApiVersion
   * @secure
   * @response `200` `AuthenticateGetApiVersionListData` OK
   */
  authenticateGetApiVersionList = (params: RequestParams = {}) =>
    this.request<AuthenticateGetApiVersionListData, any>({
      path: `/api-frontend/Authenticate/GetApiVersion`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
