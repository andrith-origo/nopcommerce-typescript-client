/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  UrlRecordGetBySlugListData,
  UrlRecordGetBySlugListError,
  UrlRecordGetBySlugListParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class UrlRecord<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags UrlRecord
   * @name UrlRecordGetBySlugList
   * @summary Gets a URL record by slug
   * @request GET:/api-frontend/UrlRecord/GetBySlug
   * @secure
   * @response `200` `UrlRecordGetBySlugListData` Success
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  urlRecordGetBySlugList = (query: UrlRecordGetBySlugListParams, params: RequestParams = {}) =>
    this.request<UrlRecordGetBySlugListData, UrlRecordGetBySlugListError>({
      path: `/api-frontend/UrlRecord/GetBySlug`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
