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
  GetNopMobileAppSettingsData,
  GetNopMobileAppSettingsError,
  GetNopMobileAppSliderDataData,
  GetNopMobileAppSliderDataError,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class NopMobileApp<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags NopMobileApp
   * @name GetNopMobileAppSettings
   * @summary Get all settings
   * @request GET:/api-frontend/NopMobileApp/Settings
   * @secure
   * @response `200` `GetNopMobileAppSettingsData` OK
   * @response `401` `string` Unauthorized
   */
  getNopMobileAppSettings = (params: RequestParams = {}) =>
    this.request<GetNopMobileAppSettingsData, GetNopMobileAppSettingsError>({
      path: `/api-frontend/NopMobileApp/Settings`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags NopMobileApp
   * @name GetNopMobileAppSliderData
   * @request GET:/api-frontend/NopMobileApp/SliderData
   * @secure
   * @response `200` `GetNopMobileAppSliderDataData` OK
   * @response `401` `string` Unauthorized
   */
  getNopMobileAppSliderData = (params: RequestParams = {}) =>
    this.request<GetNopMobileAppSliderDataData, GetNopMobileAppSliderDataError>(
      {
        path: `/api-frontend/NopMobileApp/SliderData`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
    );
}
