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
  WishlistAddItemsToCartFromWishlistUpdateData,
  WishlistAddItemsToCartFromWishlistUpdateError,
  WishlistAddItemsToCartFromWishlistUpdateParams,
  WishlistAddItemsToCartFromWishlistUpdatePayload,
  WishlistEmailAFriendModelDto,
  WishlistEmailWishlistListData,
  WishlistEmailWishlistListError,
  WishlistEmailWishlistSendCreateData,
  WishlistEmailWishlistSendCreateError,
  WishlistUpdateWishlistCreateData,
  WishlistUpdateWishlistCreateError,
  WishlistUpdateWishlistCreatePayload,
  WishlistWishlistListData,
  WishlistWishlistListError,
  WishlistWishlistListParams,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Wishlist<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Wishlist
   * @name WishlistWishlistList
   * @request GET:/api-frontend/Wishlist/Wishlist
   * @secure
   * @response `200` `WishlistWishlistListData` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  wishlistWishlistList = (query: WishlistWishlistListParams, params: RequestParams = {}) =>
    this.request<WishlistWishlistListData, WishlistWishlistListError>({
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
   * @name WishlistUpdateWishlistCreate
   * @request POST:/api-frontend/Wishlist/UpdateWishlist
   * @secure
   * @response `200` `WishlistUpdateWishlistCreateData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  wishlistUpdateWishlistCreate = (data: WishlistUpdateWishlistCreatePayload, params: RequestParams = {}) =>
    this.request<WishlistUpdateWishlistCreateData, WishlistUpdateWishlistCreateError>({
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
   * @name WishlistAddItemsToCartFromWishlistUpdate
   * @request PUT:/api-frontend/Wishlist/AddItemsToCartFromWishlist
   * @secure
   * @response `200` `WishlistAddItemsToCartFromWishlistUpdateData` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  wishlistAddItemsToCartFromWishlistUpdate = (
    query: WishlistAddItemsToCartFromWishlistUpdateParams,
    data: WishlistAddItemsToCartFromWishlistUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<WishlistAddItemsToCartFromWishlistUpdateData, WishlistAddItemsToCartFromWishlistUpdateError>({
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
   * @name WishlistEmailWishlistList
   * @request GET:/api-frontend/Wishlist/EmailWishlist
   * @secure
   * @response `200` `WishlistEmailWishlistListData` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  wishlistEmailWishlistList = (params: RequestParams = {}) =>
    this.request<WishlistEmailWishlistListData, WishlistEmailWishlistListError>({
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
   * @name WishlistEmailWishlistSendCreate
   * @request POST:/api-frontend/Wishlist/EmailWishlistSend
   * @secure
   * @response `200` `WishlistEmailWishlistSendCreateData` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  wishlistEmailWishlistSendCreate = (data: WishlistEmailAFriendModelDto, params: RequestParams = {}) =>
    this.request<WishlistEmailWishlistSendCreateData, WishlistEmailWishlistSendCreateError>({
      path: `/api-frontend/Wishlist/EmailWishlistSend`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
