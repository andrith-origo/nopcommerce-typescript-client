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
  GetNewsletterSubscribeNewsletterData,
  GetNewsletterSubscribeNewsletterError,
  GetNewsletterSubscribeNewsletterParams,
  GetNewsletterSubscriptionActivationData,
  GetNewsletterSubscriptionActivationError,
  GetNewsletterSubscriptionActivationParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Newsletter<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Newsletter
   * @name GetNewsletterSubscribeNewsletter
   * @request GET:/api-frontend/Newsletter/SubscribeNewsletter
   * @secure
   * @response `200` `GetNewsletterSubscribeNewsletterData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  getNewsletterSubscribeNewsletter = (
    query: GetNewsletterSubscribeNewsletterParams,
    params: RequestParams = {},
  ) =>
    this.request<
      GetNewsletterSubscribeNewsletterData,
      GetNewsletterSubscribeNewsletterError
    >({
      path: `/api-frontend/Newsletter/SubscribeNewsletter`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Newsletter
   * @name GetNewsletterSubscriptionActivation
   * @request GET:/api-frontend/Newsletter/SubscriptionActivation
   * @secure
   * @response `200` `GetNewsletterSubscriptionActivationData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getNewsletterSubscriptionActivation = (
    query: GetNewsletterSubscriptionActivationParams,
    params: RequestParams = {},
  ) =>
    this.request<
      GetNewsletterSubscriptionActivationData,
      GetNewsletterSubscriptionActivationError
    >({
      path: `/api-frontend/Newsletter/SubscriptionActivation`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
