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
  ProfileIndexListData,
  ProfileIndexListError,
  ProfileIndexListParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Profile<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Profile
   * @name ProfileIndexList
   * @request GET:/api-frontend/Profile/Index
   * @secure
   * @response `200` `ProfileIndexListData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  profileIndexList = (
    query: ProfileIndexListParams,
    params: RequestParams = {},
  ) =>
    this.request<ProfileIndexListData, ProfileIndexListError>({
      path: `/api-frontend/Profile/Index`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
