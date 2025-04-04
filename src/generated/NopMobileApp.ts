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
  NopMobileAppSettingsListData,
  NopMobileAppSettingsListError,
  NopMobileAppSliderDataListData,
  NopMobileAppSliderDataListError,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class NopMobileApp<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags NopMobileApp
   * @name NopMobileAppSettingsList
   * @summary Get all settings
   * @request GET:/api-frontend/NopMobileApp/Settings
   * @secure
   * @response `200` `NopMobileAppSettingsListData` Success
   * @response `401` `string` Unauthorized
   */
  nopMobileAppSettingsList = (params: RequestParams = {}) =>
    this.request<NopMobileAppSettingsListData, NopMobileAppSettingsListError>({
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
   * @name NopMobileAppSliderDataList
   * @request GET:/api-frontend/NopMobileApp/SliderData
   * @secure
   * @response `200` `NopMobileAppSliderDataListData` Success
   * @response `401` `string` Unauthorized
   */
  nopMobileAppSliderDataList = (params: RequestParams = {}) =>
    this.request<NopMobileAppSliderDataListData, NopMobileAppSliderDataListError>({
      path: `/api-frontend/NopMobileApp/SliderData`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
