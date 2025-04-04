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
  OrderCancelRecurringPaymentCreateData,
  OrderCancelRecurringPaymentCreateError,
  OrderCancelRecurringPaymentCreatePayload,
  OrderCustomerOrdersListData,
  OrderCustomerOrdersListError,
  OrderCustomerRewardPointsListData,
  OrderCustomerRewardPointsListError,
  OrderCustomerRewardPointsListParams,
  OrderDetailsDetailData,
  OrderDetailsDetailError,
  OrderReOrderDetailData,
  OrderReOrderDetailError,
  OrderRePostPaymentDetailData,
  OrderRePostPaymentDetailError,
  OrderRetryLastRecurringPaymentCreateData,
  OrderRetryLastRecurringPaymentCreateError,
  OrderRetryLastRecurringPaymentCreatePayload,
  OrderShipmentDetailsDetailData,
  OrderShipmentDetailsDetailError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Order<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Order
   * @name OrderCustomerOrdersList
   * @request GET:/api-frontend/Order/CustomerOrders
   * @secure
   * @response `200` `OrderCustomerOrdersListData` Success
   * @response `401` `string` Unauthorized
   */
  orderCustomerOrdersList = (params: RequestParams = {}) =>
    this.request<OrderCustomerOrdersListData, OrderCustomerOrdersListError>({
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
   * @name OrderCancelRecurringPaymentCreate
   * @request POST:/api-frontend/Order/CancelRecurringPayment
   * @secure
   * @response `200` `OrderCancelRecurringPaymentCreateData` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  orderCancelRecurringPaymentCreate = (data: OrderCancelRecurringPaymentCreatePayload, params: RequestParams = {}) =>
    this.request<OrderCancelRecurringPaymentCreateData, OrderCancelRecurringPaymentCreateError>({
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
   * @name OrderRetryLastRecurringPaymentCreate
   * @request POST:/api-frontend/Order/RetryLastRecurringPayment
   * @secure
   * @response `200` `OrderRetryLastRecurringPaymentCreateData` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  orderRetryLastRecurringPaymentCreate = (
    data: OrderRetryLastRecurringPaymentCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<OrderRetryLastRecurringPaymentCreateData, OrderRetryLastRecurringPaymentCreateError>({
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
   * @name OrderCustomerRewardPointsList
   * @request GET:/api-frontend/Order/CustomerRewardPoints
   * @secure
   * @response `200` `OrderCustomerRewardPointsListData` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  orderCustomerRewardPointsList = (query: OrderCustomerRewardPointsListParams, params: RequestParams = {}) =>
    this.request<OrderCustomerRewardPointsListData, OrderCustomerRewardPointsListError>({
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
   * @name OrderDetailsDetail
   * @request GET:/api-frontend/Order/Details/{orderId}
   * @secure
   * @response `200` `OrderDetailsDetailData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  orderDetailsDetail = (orderId: number, params: RequestParams = {}) =>
    this.request<OrderDetailsDetailData, OrderDetailsDetailError>({
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
   * @name OrderReOrderDetail
   * @request GET:/api-frontend/Order/ReOrder/{orderId}
   * @secure
   * @response `200` `OrderReOrderDetailData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  orderReOrderDetail = (orderId: number, params: RequestParams = {}) =>
    this.request<OrderReOrderDetailData, OrderReOrderDetailError>({
      path: `/api-frontend/Order/ReOrder/${orderId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderRePostPaymentDetail
   * @request GET:/api-frontend/Order/RePostPayment/{orderId}
   * @secure
   * @response `200` `OrderRePostPaymentDetailData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  orderRePostPaymentDetail = (orderId: number, params: RequestParams = {}) =>
    this.request<OrderRePostPaymentDetailData, OrderRePostPaymentDetailError>({
      path: `/api-frontend/Order/RePostPayment/${orderId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Order
   * @name OrderShipmentDetailsDetail
   * @request GET:/api-frontend/Order/ShipmentDetails/{shipmentId}
   * @secure
   * @response `200` `OrderShipmentDetailsDetailData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  orderShipmentDetailsDetail = (shipmentId: number, params: RequestParams = {}) =>
    this.request<OrderShipmentDetailsDetailData, OrderShipmentDetailsDetailError>({
      path: `/api-frontend/Order/ShipmentDetails/${shipmentId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
