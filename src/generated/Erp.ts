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
  ErpGetApiVersionListData,
  ErpProductBaseCreateData,
  ErpProductBaseCreateError,
  ErpProductBaseCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Erp<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ERP
   * @name ErpProductBaseCreate
   * @request POST:/api-frontend/ERP/ProductBase
   * @secure
   * @response `200` `ErpProductBaseCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  erpProductBaseCreate = (
    data: ErpProductBaseCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<ErpProductBaseCreateData, ErpProductBaseCreateError>({
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
   * @name ErpGetApiVersionList
   * @request GET:/api-frontend/ERP/GetApiVersion
   * @secure
   * @response `200` `ErpGetApiVersionListData` OK
   */
  erpGetApiVersionList = (params: RequestParams = {}) =>
    this.request<ErpGetApiVersionListData, any>({
      path: `/api-frontend/ERP/GetApiVersion`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
