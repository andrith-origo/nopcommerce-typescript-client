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
  NewsletterSubscribeNewsletterListData,
  NewsletterSubscribeNewsletterListError,
  NewsletterSubscribeNewsletterListParams,
  NewsletterSubscriptionActivationListData,
  NewsletterSubscriptionActivationListError,
  NewsletterSubscriptionActivationListParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Newsletter<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Newsletter
   * @name NewsletterSubscribeNewsletterList
   * @request GET:/api-frontend/Newsletter/SubscribeNewsletter
   * @secure
   * @response `200` `NewsletterSubscribeNewsletterListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  newsletterSubscribeNewsletterList = (
    query: NewsletterSubscribeNewsletterListParams,
    params: RequestParams = {},
  ) =>
    this.request<
      NewsletterSubscribeNewsletterListData,
      NewsletterSubscribeNewsletterListError
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
   * @name NewsletterSubscriptionActivationList
   * @request GET:/api-frontend/Newsletter/SubscriptionActivation
   * @secure
   * @response `200` `NewsletterSubscriptionActivationListData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  newsletterSubscriptionActivationList = (
    query: NewsletterSubscriptionActivationListParams,
    params: RequestParams = {},
  ) =>
    this.request<
      NewsletterSubscriptionActivationListData,
      NewsletterSubscriptionActivationListError
    >({
      path: `/api-frontend/Newsletter/SubscriptionActivation`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
