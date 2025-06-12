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
  GetBackInStockSubscriptionCustomerSubscriptionsData,
  GetBackInStockSubscriptionCustomerSubscriptionsError,
  GetBackInStockSubscriptionCustomerSubscriptionsParams,
  GetBackInStockSubscriptionSubscribePopupData,
  GetBackInStockSubscriptionSubscribePopupError,
  PostBackInStockSubscriptionCustomerSubscriptionsData,
  PostBackInStockSubscriptionCustomerSubscriptionsError,
  PostBackInStockSubscriptionCustomerSubscriptionsPayload,
  PostBackInStockSubscriptionSubscribeData,
  PostBackInStockSubscriptionSubscribeError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class BackInStockSubscription<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags BackInStockSubscription
   * @name GetBackInStockSubscriptionSubscribePopup
   * @summary Product details page > back in stock subscribe
   * @request GET:/api-frontend/BackInStockSubscription/SubscribePopup/{productId}
   * @secure
   * @response `200` `GetBackInStockSubscriptionSubscribePopupData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getBackInStockSubscriptionSubscribePopup = (
    productId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      GetBackInStockSubscriptionSubscribePopupData,
      GetBackInStockSubscriptionSubscribePopupError
    >({
      path: `/api-frontend/BackInStockSubscription/SubscribePopup/${productId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BackInStockSubscription
   * @name PostBackInStockSubscriptionSubscribe
   * @summary Back in stock subscribe
   * @request POST:/api-frontend/BackInStockSubscription/Subscribe/{productId}
   * @secure
   * @response `200` `PostBackInStockSubscriptionSubscribeData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postBackInStockSubscriptionSubscribe = (
    productId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      PostBackInStockSubscriptionSubscribeData,
      PostBackInStockSubscriptionSubscribeError
    >({
      path: `/api-frontend/BackInStockSubscription/Subscribe/${productId}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BackInStockSubscription
   * @name GetBackInStockSubscriptionCustomerSubscriptions
   * @summary My account / Back in stock subscriptions
   * @request GET:/api-frontend/BackInStockSubscription/CustomerSubscriptions
   * @secure
   * @response `200` `GetBackInStockSubscriptionCustomerSubscriptionsData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  getBackInStockSubscriptionCustomerSubscriptions = (
    query: GetBackInStockSubscriptionCustomerSubscriptionsParams,
    params: RequestParams = {},
  ) =>
    this.request<
      GetBackInStockSubscriptionCustomerSubscriptionsData,
      GetBackInStockSubscriptionCustomerSubscriptionsError
    >({
      path: `/api-frontend/BackInStockSubscription/CustomerSubscriptions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BackInStockSubscription
   * @name PostBackInStockSubscriptionCustomerSubscriptions
   * @request POST:/api-frontend/BackInStockSubscription/CustomerSubscriptions
   * @secure
   * @response `200` `PostBackInStockSubscriptionCustomerSubscriptionsData` OK
   * @response `401` `string` Unauthorized
   */
  postBackInStockSubscriptionCustomerSubscriptions = (
    data: PostBackInStockSubscriptionCustomerSubscriptionsPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PostBackInStockSubscriptionCustomerSubscriptionsData,
      PostBackInStockSubscriptionCustomerSubscriptionsError
    >({
      path: `/api-frontend/BackInStockSubscription/CustomerSubscriptions`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
