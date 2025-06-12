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
  GetCountryGetStatesByCountryIdData,
  GetCountryGetStatesByCountryIdError,
  GetCountryGetStatesByCountryIdParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Country<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Country
   * @name GetCountryGetStatesByCountryId
   * @request GET:/api-frontend/Country/GetStatesByCountryId/{countryId}
   * @secure
   * @response `200` `GetCountryGetStatesByCountryIdData` OK
   * @response `401` `string` Unauthorized
   */
  getCountryGetStatesByCountryId = (
    { countryId, ...query }: GetCountryGetStatesByCountryIdParams,
    params: RequestParams = {},
  ) =>
    this.request<
      GetCountryGetStatesByCountryIdData,
      GetCountryGetStatesByCountryIdError
    >({
      path: `/api-frontend/Country/GetStatesByCountryId/${countryId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
