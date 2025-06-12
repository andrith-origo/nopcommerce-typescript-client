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
  DeleteVendorRemovePictureData,
  DeleteVendorRemovePictureError,
  GetVendorApplyVendorData,
  GetVendorApplyVendorError,
  GetVendorInfoData,
  GetVendorInfoError,
  InfoRequest,
  PostVendorApplyVendorSubmitData,
  PostVendorApplyVendorSubmitError,
  PostVendorApplyVendorSubmitParams,
  PostVendorInfoData,
  PostVendorInfoError,
  PostVendorInfoParams,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Vendor<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Vendor
   * @name GetVendorApplyVendor
   * @request GET:/api-frontend/Vendor/ApplyVendor
   * @secure
   * @response `200` `GetVendorApplyVendorData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  getVendorApplyVendor = (params: RequestParams = {}) =>
    this.request<GetVendorApplyVendorData, GetVendorApplyVendorError>({
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
   * @name PostVendorApplyVendorSubmit
   * @request POST:/api-frontend/Vendor/ApplyVendorSubmit
   * @secure
   * @response `200` `PostVendorApplyVendorSubmitData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  postVendorApplyVendorSubmit = (
    query: PostVendorApplyVendorSubmitParams,
    data: ApplyVendorRequest,
    params: RequestParams = {},
  ) =>
    this.request<
      PostVendorApplyVendorSubmitData,
      PostVendorApplyVendorSubmitError
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
   * @name GetVendorInfo
   * @request GET:/api-frontend/Vendor/Info
   * @secure
   * @response `200` `GetVendorInfoData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  getVendorInfo = (params: RequestParams = {}) =>
    this.request<GetVendorInfoData, GetVendorInfoError>({
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
   * @name PostVendorInfo
   * @request POST:/api-frontend/Vendor/Info
   * @secure
   * @response `200` `PostVendorInfoData` OK
   * @response `400` `(string)[]` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postVendorInfo = (
    query: PostVendorInfoParams,
    data: InfoRequest,
    params: RequestParams = {},
  ) =>
    this.request<PostVendorInfoData, PostVendorInfoError>({
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
   * @name DeleteVendorRemovePicture
   * @request DELETE:/api-frontend/Vendor/RemovePicture
   * @secure
   * @response `200` `DeleteVendorRemovePictureData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  deleteVendorRemovePicture = (params: RequestParams = {}) =>
    this.request<DeleteVendorRemovePictureData, DeleteVendorRemovePictureError>(
      {
        path: `/api-frontend/Vendor/RemovePicture`,
        method: "DELETE",
        secure: true,
        ...params,
      },
    );
}
