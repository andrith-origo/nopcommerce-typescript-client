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
  KlokurAuthenticateCustomerRequest,
  KlokurAuthenticateExchangeTokenFromKeycloakCreateData,
  KlokurAuthenticateExchangeTokenFromKeycloakCreateError,
  KlokurAuthenticateGetApiVersionListData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class KlokurAuthenticate<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags KlokurAuthenticate
   * @name KlokurAuthenticateExchangeTokenFromKeycloakCreate
   * @request POST:/api-frontend/KlokurAuthenticate/ExchangeTokenFromKeycloak
   * @secure
   * @response `200` `KlokurAuthenticateExchangeTokenFromKeycloakCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  klokurAuthenticateExchangeTokenFromKeycloakCreate = (
    data: KlokurAuthenticateCustomerRequest,
    params: RequestParams = {},
  ) =>
    this.request<
      KlokurAuthenticateExchangeTokenFromKeycloakCreateData,
      KlokurAuthenticateExchangeTokenFromKeycloakCreateError
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
   * @name KlokurAuthenticateGetApiVersionList
   * @request GET:/api-frontend/KlokurAuthenticate/GetApiVersion
   * @secure
   * @response `200` `KlokurAuthenticateGetApiVersionListData` OK
   */
  klokurAuthenticateGetApiVersionList = (params: RequestParams = {}) =>
    this.request<KlokurAuthenticateGetApiVersionListData, any>({
      path: `/api-frontend/KlokurAuthenticate/GetApiVersion`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
