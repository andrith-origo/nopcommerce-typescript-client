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
  GetUrlRecordGetBySlugData,
  GetUrlRecordGetBySlugError,
  GetUrlRecordGetBySlugParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class UrlRecord<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags UrlRecord
   * @name GetUrlRecordGetBySlug
   * @summary Gets a URL record by slug
   * @request GET:/api-frontend/UrlRecord/GetBySlug
   * @secure
   * @response `200` `GetUrlRecordGetBySlugData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getUrlRecordGetBySlug = (
    query: GetUrlRecordGetBySlugParams,
    params: RequestParams = {},
  ) =>
    this.request<GetUrlRecordGetBySlugData, GetUrlRecordGetBySlugError>({
      path: `/api-frontend/UrlRecord/GetBySlug`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
