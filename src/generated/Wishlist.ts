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
  GetWishlistEmailWishlistData,
  GetWishlistEmailWishlistError,
  GetWishlistWishlistData,
  GetWishlistWishlistError,
  GetWishlistWishlistParams,
  PostWishlistEmailWishlistSendData,
  PostWishlistEmailWishlistSendError,
  PostWishlistUpdateWishlistData,
  PostWishlistUpdateWishlistError,
  PostWishlistUpdateWishlistPayload,
  PutWishlistAddItemsToCartFromWishlistData,
  PutWishlistAddItemsToCartFromWishlistError,
  PutWishlistAddItemsToCartFromWishlistParams,
  PutWishlistAddItemsToCartFromWishlistPayload,
  WishlistEmailAFriendModelDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Wishlist<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Wishlist
   * @name GetWishlistWishlist
   * @request GET:/api-frontend/Wishlist/Wishlist
   * @secure
   * @response `200` `GetWishlistWishlistData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  getWishlistWishlist = (
    query: GetWishlistWishlistParams,
    params: RequestParams = {},
  ) =>
    this.request<GetWishlistWishlistData, GetWishlistWishlistError>({
      path: `/api-frontend/Wishlist/Wishlist`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Wishlist
   * @name PostWishlistUpdateWishlist
   * @request POST:/api-frontend/Wishlist/UpdateWishlist
   * @secure
   * @response `200` `PostWishlistUpdateWishlistData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  postWishlistUpdateWishlist = (
    data: PostWishlistUpdateWishlistPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PostWishlistUpdateWishlistData,
      PostWishlistUpdateWishlistError
    >({
      path: `/api-frontend/Wishlist/UpdateWishlist`,
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
   * @tags Wishlist
   * @name PutWishlistAddItemsToCartFromWishlist
   * @request PUT:/api-frontend/Wishlist/AddItemsToCartFromWishlist
   * @secure
   * @response `200` `PutWishlistAddItemsToCartFromWishlistData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  putWishlistAddItemsToCartFromWishlist = (
    query: PutWishlistAddItemsToCartFromWishlistParams,
    data: PutWishlistAddItemsToCartFromWishlistPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PutWishlistAddItemsToCartFromWishlistData,
      PutWishlistAddItemsToCartFromWishlistError
    >({
      path: `/api-frontend/Wishlist/AddItemsToCartFromWishlist`,
      method: "PUT",
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
   * @tags Wishlist
   * @name GetWishlistEmailWishlist
   * @request GET:/api-frontend/Wishlist/EmailWishlist
   * @secure
   * @response `200` `GetWishlistEmailWishlistData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  getWishlistEmailWishlist = (params: RequestParams = {}) =>
    this.request<GetWishlistEmailWishlistData, GetWishlistEmailWishlistError>({
      path: `/api-frontend/Wishlist/EmailWishlist`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Wishlist
   * @name PostWishlistEmailWishlistSend
   * @request POST:/api-frontend/Wishlist/EmailWishlistSend
   * @secure
   * @response `200` `PostWishlistEmailWishlistSendData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  postWishlistEmailWishlistSend = (
    data: WishlistEmailAFriendModelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      PostWishlistEmailWishlistSendData,
      PostWishlistEmailWishlistSendError
    >({
      path: `/api-frontend/Wishlist/EmailWishlistSend`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
