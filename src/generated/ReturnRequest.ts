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
  ReturnRequestCustomerReturnRequestsListData,
  ReturnRequestCustomerReturnRequestsListError,
  ReturnRequestReturnRequestDetailData,
  ReturnRequestReturnRequestDetailError,
  ReturnRequestReturnRequestSubmitCreateData,
  ReturnRequestReturnRequestSubmitCreateError,
  ReturnRequestUploadFileReturnRequestCreateData,
  ReturnRequestUploadFileReturnRequestCreateError,
  ReturnRequestUploadFileReturnRequestCreateParams,
  ReturnRequestUploadFileReturnRequestCreatePayload,
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
   * @name ReturnRequestCustomerReturnRequestsList
   * @request GET:/api-frontend/ReturnRequest/CustomerReturnRequests
   * @secure
   * @response `200` `ReturnRequestCustomerReturnRequestsListData` OK
   * @response `401` `string` Unauthorized
   */
  returnRequestCustomerReturnRequestsList = (params: RequestParams = {}) =>
    this.request<
      ReturnRequestCustomerReturnRequestsListData,
      ReturnRequestCustomerReturnRequestsListError
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
   * @name ReturnRequestReturnRequestDetail
   * @request GET:/api-frontend/ReturnRequest/ReturnRequest/{orderId}
   * @secure
   * @response `200` `ReturnRequestReturnRequestDetailData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  returnRequestReturnRequestDetail = (
    orderId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      ReturnRequestReturnRequestDetailData,
      ReturnRequestReturnRequestDetailError
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
   * @name ReturnRequestReturnRequestSubmitCreate
   * @request POST:/api-frontend/ReturnRequest/ReturnRequestSubmit/{orderId}
   * @secure
   * @response `200` `ReturnRequestReturnRequestSubmitCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  returnRequestReturnRequestSubmitCreate = (
    orderId: number,
    data: SubmitReturnRequestModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<
      ReturnRequestReturnRequestSubmitCreateData,
      ReturnRequestReturnRequestSubmitCreateError
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
   * @name ReturnRequestUploadFileReturnRequestCreate
   * @request POST:/api-frontend/ReturnRequest/UploadFileReturnRequest
   * @secure
   * @response `200` `ReturnRequestUploadFileReturnRequestCreateData` OK
   * @response `401` `string` Unauthorized
   */
  returnRequestUploadFileReturnRequestCreate = (
    query: ReturnRequestUploadFileReturnRequestCreateParams,
    data: ReturnRequestUploadFileReturnRequestCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      ReturnRequestUploadFileReturnRequestCreateData,
      ReturnRequestUploadFileReturnRequestCreateError
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
