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
  GetReturnRequestCustomerReturnRequestsData,
  GetReturnRequestCustomerReturnRequestsError,
  GetReturnRequestReturnRequestData,
  GetReturnRequestReturnRequestError,
  PostReturnRequestReturnRequestSubmitData,
  PostReturnRequestReturnRequestSubmitError,
  PostReturnRequestUploadFileReturnRequestData,
  PostReturnRequestUploadFileReturnRequestError,
  PostReturnRequestUploadFileReturnRequestParams,
  PostReturnRequestUploadFileReturnRequestPayload,
  SubmitReturnRequestModelDtoBaseModelDtoRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ReturnRequest<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ReturnRequest
   * @name GetReturnRequestCustomerReturnRequests
   * @request GET:/api-frontend/ReturnRequest/CustomerReturnRequests
   * @secure
   * @response `200` `GetReturnRequestCustomerReturnRequestsData` OK
   * @response `401` `string` Unauthorized
   */
  getReturnRequestCustomerReturnRequests = (params: RequestParams = {}) =>
    this.request<
      GetReturnRequestCustomerReturnRequestsData,
      GetReturnRequestCustomerReturnRequestsError
    >({
      path: `/api-frontend/ReturnRequest/CustomerReturnRequests`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ReturnRequest
   * @name GetReturnRequestReturnRequest
   * @request GET:/api-frontend/ReturnRequest/ReturnRequest/{orderId}
   * @secure
   * @response `200` `GetReturnRequestReturnRequestData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  getReturnRequestReturnRequest = (
    orderId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      GetReturnRequestReturnRequestData,
      GetReturnRequestReturnRequestError
    >({
      path: `/api-frontend/ReturnRequest/ReturnRequest/${orderId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ReturnRequest
   * @name PostReturnRequestReturnRequestSubmit
   * @request POST:/api-frontend/ReturnRequest/ReturnRequestSubmit/{orderId}
   * @secure
   * @response `200` `PostReturnRequestReturnRequestSubmitData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  postReturnRequestReturnRequestSubmit = (
    orderId: number,
    data: SubmitReturnRequestModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<
      PostReturnRequestReturnRequestSubmitData,
      PostReturnRequestReturnRequestSubmitError
    >({
      path: `/api-frontend/ReturnRequest/ReturnRequestSubmit/${orderId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ReturnRequest
   * @name PostReturnRequestUploadFileReturnRequest
   * @request POST:/api-frontend/ReturnRequest/UploadFileReturnRequest
   * @secure
   * @response `200` `PostReturnRequestUploadFileReturnRequestData` OK
   * @response `401` `string` Unauthorized
   */
  postReturnRequestUploadFileReturnRequest = (
    query: PostReturnRequestUploadFileReturnRequestParams,
    data: PostReturnRequestUploadFileReturnRequestPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PostReturnRequestUploadFileReturnRequestData,
      PostReturnRequestUploadFileReturnRequestError
    >({
      path: `/api-frontend/ReturnRequest/UploadFileReturnRequest`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
