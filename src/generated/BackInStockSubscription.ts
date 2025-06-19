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
  BackInStockSubscriptionCustomerSubscriptionsCreateData,
  BackInStockSubscriptionCustomerSubscriptionsCreateError,
  BackInStockSubscriptionCustomerSubscriptionsCreatePayload,
  BackInStockSubscriptionCustomerSubscriptionsListData,
  BackInStockSubscriptionCustomerSubscriptionsListError,
  BackInStockSubscriptionCustomerSubscriptionsListParams,
  BackInStockSubscriptionSubscribeCreateData,
  BackInStockSubscriptionSubscribeCreateError,
  BackInStockSubscriptionSubscribePopupDetailData,
  BackInStockSubscriptionSubscribePopupDetailError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class BackInStockSubscription<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags BackInStockSubscription
   * @name BackInStockSubscriptionSubscribePopupDetail
   * @summary Product details page > back in stock subscribe
   * @request GET:/api-frontend/BackInStockSubscription/SubscribePopup/{productId}
   * @secure
   * @response `200` `BackInStockSubscriptionSubscribePopupDetailData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  backInStockSubscriptionSubscribePopupDetail = (
    productId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      BackInStockSubscriptionSubscribePopupDetailData,
      BackInStockSubscriptionSubscribePopupDetailError
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
   * @name BackInStockSubscriptionSubscribeCreate
   * @summary Back in stock subscribe
   * @request POST:/api-frontend/BackInStockSubscription/Subscribe/{productId}
   * @secure
   * @response `200` `BackInStockSubscriptionSubscribeCreateData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  backInStockSubscriptionSubscribeCreate = (
    productId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      BackInStockSubscriptionSubscribeCreateData,
      BackInStockSubscriptionSubscribeCreateError
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
   * @name BackInStockSubscriptionCustomerSubscriptionsList
   * @summary My account / Back in stock subscriptions
   * @request GET:/api-frontend/BackInStockSubscription/CustomerSubscriptions
   * @secure
   * @response `200` `BackInStockSubscriptionCustomerSubscriptionsListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  backInStockSubscriptionCustomerSubscriptionsList = (
    query: BackInStockSubscriptionCustomerSubscriptionsListParams,
    params: RequestParams = {},
  ) =>
    this.request<
      BackInStockSubscriptionCustomerSubscriptionsListData,
      BackInStockSubscriptionCustomerSubscriptionsListError
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
   * @name BackInStockSubscriptionCustomerSubscriptionsCreate
   * @request POST:/api-frontend/BackInStockSubscription/CustomerSubscriptions
   * @secure
   * @response `200` `BackInStockSubscriptionCustomerSubscriptionsCreateData` OK
   * @response `401` `string` Unauthorized
   */
  backInStockSubscriptionCustomerSubscriptionsCreate = (
    data: BackInStockSubscriptionCustomerSubscriptionsCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      BackInStockSubscriptionCustomerSubscriptionsCreateData,
      BackInStockSubscriptionCustomerSubscriptionsCreateError
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
