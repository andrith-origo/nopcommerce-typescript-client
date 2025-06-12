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
  GetKlokurAuthenticateGetApiVersionData,
  KlokurAuthenticateCustomerRequest,
  PostKlokurAuthenticateExchangeTokenFromKeycloakData,
  PostKlokurAuthenticateExchangeTokenFromKeycloakError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class KlokurAuthenticate<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags KlokurAuthenticate
   * @name PostKlokurAuthenticateExchangeTokenFromKeycloak
   * @request POST:/api-frontend/KlokurAuthenticate/ExchangeTokenFromKeycloak
   * @secure
   * @response `200` `PostKlokurAuthenticateExchangeTokenFromKeycloakData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  postKlokurAuthenticateExchangeTokenFromKeycloak = (
    data: KlokurAuthenticateCustomerRequest,
    params: RequestParams = {},
  ) =>
    this.request<
      PostKlokurAuthenticateExchangeTokenFromKeycloakData,
      PostKlokurAuthenticateExchangeTokenFromKeycloakError
    >({
      path: `/api-frontend/KlokurAuthenticate/ExchangeTokenFromKeycloak`,
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
   * @tags KlokurAuthenticate
   * @name GetKlokurAuthenticateGetApiVersion
   * @request GET:/api-frontend/KlokurAuthenticate/GetApiVersion
   * @secure
   * @response `200` `GetKlokurAuthenticateGetApiVersionData` OK
   */
  getKlokurAuthenticateGetApiVersion = (params: RequestParams = {}) =>
    this.request<GetKlokurAuthenticateGetApiVersionData, any>({
      path: `/api-frontend/KlokurAuthenticate/GetApiVersion`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
