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
  MultiprofileSwitchProfileListData,
  MultiprofileSwitchProfileListError,
  MultiprofileSwitchProfileListParams,
  MultiprofileSwitchProfileToSomethingElseListData,
  MultiprofileSwitchProfileToSomethingElseListError,
  MultiprofileSwitchProfileToSomethingElseListParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Multiprofile<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Multiprofile
   * @name MultiprofileSwitchProfileList
   * @request GET:/api-frontend/Multiprofile/SwitchProfile
   * @secure
   * @response `200` `MultiprofileSwitchProfileListData` Success
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  multiprofileSwitchProfileList = (query: MultiprofileSwitchProfileListParams, params: RequestParams = {}) =>
    this.request<MultiprofileSwitchProfileListData, MultiprofileSwitchProfileListError>({
      path: `/api-frontend/Multiprofile/SwitchProfile`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Multiprofile
   * @name MultiprofileSwitchProfileToSomethingElseList
   * @request GET:/api-frontend/Multiprofile/SwitchProfileToSomethingElse
   * @secure
   * @response `200` `MultiprofileSwitchProfileToSomethingElseListData` Success
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  multiprofileSwitchProfileToSomethingElseList = (
    query: MultiprofileSwitchProfileToSomethingElseListParams,
    params: RequestParams = {},
  ) =>
    this.request<MultiprofileSwitchProfileToSomethingElseListData, MultiprofileSwitchProfileToSomethingElseListError>({
      path: `/api-frontend/Multiprofile/SwitchProfileToSomethingElse`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
