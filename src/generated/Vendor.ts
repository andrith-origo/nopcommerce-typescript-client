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
  ApplyVendorRequest,
  InfoRequest,
  VendorApplyVendorListData,
  VendorApplyVendorListError,
  VendorApplyVendorSubmitCreateData,
  VendorApplyVendorSubmitCreateError,
  VendorApplyVendorSubmitCreateParams,
  VendorInfoCreateData,
  VendorInfoCreateError,
  VendorInfoCreateParams,
  VendorInfoListData,
  VendorInfoListError,
  VendorRemovePictureDeleteData,
  VendorRemovePictureDeleteError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Vendor<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Vendor
   * @name VendorApplyVendorList
   * @request GET:/api-frontend/Vendor/ApplyVendor
   * @secure
   * @response `200` `VendorApplyVendorListData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  vendorApplyVendorList = (params: RequestParams = {}) =>
    this.request<VendorApplyVendorListData, VendorApplyVendorListError>({
      path: `/api-frontend/Vendor/ApplyVendor`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Vendor
   * @name VendorApplyVendorSubmitCreate
   * @request POST:/api-frontend/Vendor/ApplyVendorSubmit
   * @secure
   * @response `200` `VendorApplyVendorSubmitCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  vendorApplyVendorSubmitCreate = (
    query: VendorApplyVendorSubmitCreateParams,
    data: ApplyVendorRequest,
    params: RequestParams = {},
  ) =>
    this.request<
      VendorApplyVendorSubmitCreateData,
      VendorApplyVendorSubmitCreateError
    >({
      path: `/api-frontend/Vendor/ApplyVendorSubmit`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Vendor
   * @name VendorInfoList
   * @request GET:/api-frontend/Vendor/Info
   * @secure
   * @response `200` `VendorInfoListData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  vendorInfoList = (params: RequestParams = {}) =>
    this.request<VendorInfoListData, VendorInfoListError>({
      path: `/api-frontend/Vendor/Info`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Vendor
   * @name VendorInfoCreate
   * @request POST:/api-frontend/Vendor/Info
   * @secure
   * @response `200` `VendorInfoCreateData` OK
   * @response `400` `(string)[]` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  vendorInfoCreate = (
    query: VendorInfoCreateParams,
    data: InfoRequest,
    params: RequestParams = {},
  ) =>
    this.request<VendorInfoCreateData, VendorInfoCreateError>({
      path: `/api-frontend/Vendor/Info`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Vendor
   * @name VendorRemovePictureDelete
   * @request DELETE:/api-frontend/Vendor/RemovePicture
   * @secure
   * @response `200` `VendorRemovePictureDeleteData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  vendorRemovePictureDelete = (params: RequestParams = {}) =>
    this.request<VendorRemovePictureDeleteData, VendorRemovePictureDeleteError>(
      {
        path: `/api-frontend/Vendor/RemovePicture`,
        method: "DELETE",
        secure: true,
        ...params,
      },
    );
}
