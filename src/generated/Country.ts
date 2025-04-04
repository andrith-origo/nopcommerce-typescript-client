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
  CountryGetStatesByCountryIdDetailData,
  CountryGetStatesByCountryIdDetailError,
  CountryGetStatesByCountryIdDetailParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Country<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Country
   * @name CountryGetStatesByCountryIdDetail
   * @request GET:/api-frontend/Country/GetStatesByCountryId/{countryId}
   * @secure
   * @response `200` `CountryGetStatesByCountryIdDetailData` Success
   * @response `401` `string` Unauthorized
   */
  countryGetStatesByCountryIdDetail = (
    { countryId, ...query }: CountryGetStatesByCountryIdDetailParams,
    params: RequestParams = {},
  ) =>
    this.request<CountryGetStatesByCountryIdDetailData, CountryGetStatesByCountryIdDetailError>({
      path: `/api-frontend/Country/GetStatesByCountryId/${countryId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
