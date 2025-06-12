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
  GetOrderCustomerOrdersData,
  GetOrderCustomerOrdersError,
  GetOrderCustomerRewardPointsData,
  GetOrderCustomerRewardPointsError,
  GetOrderCustomerRewardPointsParams,
  GetOrderDetailsData,
  GetOrderDetailsError,
  GetOrderReOrderData,
  GetOrderReOrderError,
  GetOrderRePostPaymentData,
  GetOrderRePostPaymentError,
  GetOrderShipmentDetailsData,
  GetOrderShipmentDetailsError,
  PostOrderCancelRecurringPaymentData,
  PostOrderCancelRecurringPaymentError,
  PostOrderCancelRecurringPaymentPayload,
  PostOrderRetryLastRecurringPaymentData,
  PostOrderRetryLastRecurringPaymentError,
  PostOrderRetryLastRecurringPaymentPayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Order<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Order
   * @name GetOrderCustomerOrders
   * @request GET:/api-frontend/Order/CustomerOrders
   * @secure
   * @response `200` `GetOrderCustomerOrdersData` OK
   * @response `401` `string` Unauthorized
   */
  getOrderCustomerOrders = (params: RequestParams = {}) =>
    this.request<GetOrderCustomerOrdersData, GetOrderCustomerOrdersError>({
      path: `/api-frontend/Order/CustomerOrders`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name PostOrderCancelRecurringPayment
   * @request POST:/api-frontend/Order/CancelRecurringPayment
   * @secure
   * @response `200` `PostOrderCancelRecurringPaymentData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  postOrderCancelRecurringPayment = (
    data: PostOrderCancelRecurringPaymentPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PostOrderCancelRecurringPaymentData,
      PostOrderCancelRecurringPaymentError
    >({
      path: `/api-frontend/Order/CancelRecurringPayment`,
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
   * @tags Order
   * @name PostOrderRetryLastRecurringPayment
   * @request POST:/api-frontend/Order/RetryLastRecurringPayment
   * @secure
   * @response `200` `PostOrderRetryLastRecurringPaymentData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  postOrderRetryLastRecurringPayment = (
    data: PostOrderRetryLastRecurringPaymentPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PostOrderRetryLastRecurringPaymentData,
      PostOrderRetryLastRecurringPaymentError
    >({
      path: `/api-frontend/Order/RetryLastRecurringPayment`,
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
   * @tags Order
   * @name GetOrderCustomerRewardPoints
   * @request GET:/api-frontend/Order/CustomerRewardPoints
   * @secure
   * @response `200` `GetOrderCustomerRewardPointsData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  getOrderCustomerRewardPoints = (
    query: GetOrderCustomerRewardPointsParams,
    params: RequestParams = {},
  ) =>
    this.request<
      GetOrderCustomerRewardPointsData,
      GetOrderCustomerRewardPointsError
    >({
      path: `/api-frontend/Order/CustomerRewardPoints`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name GetOrderDetails
   * @request GET:/api-frontend/Order/Details/{orderId}
   * @secure
   * @response `200` `GetOrderDetailsData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getOrderDetails = (orderId: number, params: RequestParams = {}) =>
    this.request<GetOrderDetailsData, GetOrderDetailsError>({
      path: `/api-frontend/Order/Details/${orderId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name GetOrderReOrder
   * @request GET:/api-frontend/Order/ReOrder/{orderId}
   * @secure
   * @response `200` `GetOrderReOrderData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getOrderReOrder = (orderId: number, params: RequestParams = {}) =>
    this.request<GetOrderReOrderData, GetOrderReOrderError>({
      path: `/api-frontend/Order/ReOrder/${orderId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name GetOrderRePostPayment
   * @request GET:/api-frontend/Order/RePostPayment/{orderId}
   * @secure
   * @response `200` `GetOrderRePostPaymentData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getOrderRePostPayment = (orderId: number, params: RequestParams = {}) =>
    this.request<GetOrderRePostPaymentData, GetOrderRePostPaymentError>({
      path: `/api-frontend/Order/RePostPayment/${orderId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name GetOrderShipmentDetails
   * @request GET:/api-frontend/Order/ShipmentDetails/{shipmentId}
   * @secure
   * @response `200` `GetOrderShipmentDetailsData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getOrderShipmentDetails = (shipmentId: number, params: RequestParams = {}) =>
    this.request<GetOrderShipmentDetailsData, GetOrderShipmentDetailsError>({
      path: `/api-frontend/Order/ShipmentDetails/${shipmentId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
