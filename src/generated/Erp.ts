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
  GetErpGetApiVersionData,
  PostErpProductBaseData,
  PostErpProductBaseError,
  PostErpProductBasePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Erp<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ERP
   * @name PostErpProductBase
   * @request POST:/api-frontend/ERP/ProductBase
   * @secure
   * @response `200` `PostErpProductBaseData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  postErpProductBase = (
    data: PostErpProductBasePayload,
    params: RequestParams = {},
  ) =>
    this.request<PostErpProductBaseData, PostErpProductBaseError>({
      path: `/api-frontend/ERP/ProductBase`,
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
   * @tags ERP
   * @name GetErpGetApiVersion
   * @request GET:/api-frontend/ERP/GetApiVersion
   * @secure
   * @response `200` `GetErpGetApiVersionData` OK
   */
  getErpGetApiVersion = (params: RequestParams = {}) =>
    this.request<GetErpGetApiVersionData, any>({
      path: `/api-frontend/ERP/GetApiVersion`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
