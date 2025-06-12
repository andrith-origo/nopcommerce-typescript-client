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
  EstimateShippingModelDtoBaseModelDtoRequest,
  GetShoppingCartCartData,
  GetShoppingCartCartError,
  GetShoppingCartMiniCartData,
  GetShoppingCartMiniCartError,
  PostShoppingCartAddProductToCartFromCatalogData,
  PostShoppingCartAddProductToCartFromCatalogError,
  PostShoppingCartAddProductToCartFromCatalogParams,
  PostShoppingCartAddProductToCartFromDetailsData,
  PostShoppingCartAddProductToCartFromDetailsError,
  PostShoppingCartAddProductToCartFromDetailsParams,
  PostShoppingCartAddProductToCartFromDetailsPayload,
  PostShoppingCartApplyDiscountCouponData,
  PostShoppingCartApplyDiscountCouponError,
  PostShoppingCartApplyDiscountCouponParams,
  PostShoppingCartApplyDiscountCouponPayload,
  PostShoppingCartApplyGiftCardData,
  PostShoppingCartApplyGiftCardError,
  PostShoppingCartApplyGiftCardParams,
  PostShoppingCartApplyGiftCardPayload,
  PostShoppingCartCheckoutAttributeChangeData,
  PostShoppingCartCheckoutAttributeChangeError,
  PostShoppingCartCheckoutAttributeChangePayload,
  PostShoppingCartGetEstimateShippingData,
  PostShoppingCartGetEstimateShippingError,
  PostShoppingCartRemoveDiscountCouponData,
  PostShoppingCartRemoveDiscountCouponError,
  PostShoppingCartRemoveDiscountCouponPayload,
  PostShoppingCartRemoveGiftCardCodeData,
  PostShoppingCartRemoveGiftCardCodeError,
  PostShoppingCartRemoveGiftCardCodePayload,
  PostShoppingCartSelectShippingOptionData,
  PostShoppingCartSelectShippingOptionError,
  PostShoppingCartSelectShippingOptionParams,
  PostShoppingCartUpdateCartData,
  PostShoppingCartUpdateCartError,
  PostShoppingCartUpdateCartPayload,
  PostShoppingCartUploadFileCheckoutAttributeData,
  PostShoppingCartUploadFileCheckoutAttributeError,
  PostShoppingCartUploadFileProductAttributeData,
  PostShoppingCartUploadFileProductAttributeError,
  PutShoppingCartProductDetailsAttributeChangeData,
  PutShoppingCartProductDetailsAttributeChangeError,
  PutShoppingCartProductDetailsAttributeChangeParams,
  PutShoppingCartProductDetailsAttributeChangePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ShoppingCart<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ShoppingCart
   * @name PostShoppingCartSelectShippingOption
   * @request POST:/api-frontend/ShoppingCart/SelectShippingOption
   * @secure
   * @response `200` `PostShoppingCartSelectShippingOptionData` OK
   * @response `401` `string` Unauthorized
   */
  postShoppingCartSelectShippingOption = (
    query: PostShoppingCartSelectShippingOptionParams,
    data: EstimateShippingModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<
      PostShoppingCartSelectShippingOptionData,
      PostShoppingCartSelectShippingOptionError
    >({
      path: `/api-frontend/ShoppingCart/SelectShippingOption`,
      method: "POST",
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
   * @tags ShoppingCart
   * @name PostShoppingCartAddProductToCartFromCatalog
   * @request POST:/api-frontend/ShoppingCart/AddProductToCartFromCatalog/{productId}
   * @secure
   * @response `200` `PostShoppingCartAddProductToCartFromCatalogData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  postShoppingCartAddProductToCartFromCatalog = (
    { productId, ...query }: PostShoppingCartAddProductToCartFromCatalogParams,
    params: RequestParams = {},
  ) =>
    this.request<
      PostShoppingCartAddProductToCartFromCatalogData,
      PostShoppingCartAddProductToCartFromCatalogError
    >({
      path: `/api-frontend/ShoppingCart/AddProductToCartFromCatalog/${productId}`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ShoppingCart
   * @name PostShoppingCartAddProductToCartFromDetails
   * @request POST:/api-frontend/ShoppingCart/AddProductToCartFromDetails/{productId}
   * @secure
   * @response `200` `PostShoppingCartAddProductToCartFromDetailsData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  postShoppingCartAddProductToCartFromDetails = (
    { productId, ...query }: PostShoppingCartAddProductToCartFromDetailsParams,
    data: PostShoppingCartAddProductToCartFromDetailsPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PostShoppingCartAddProductToCartFromDetailsData,
      PostShoppingCartAddProductToCartFromDetailsError
    >({
      path: `/api-frontend/ShoppingCart/AddProductToCartFromDetails/${productId}`,
      method: "POST",
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
   * @tags ShoppingCart
   * @name PutShoppingCartProductDetailsAttributeChange
   * @request PUT:/api-frontend/ShoppingCart/ProductDetailsAttributeChange/{productId}
   * @secure
   * @response `200` `PutShoppingCartProductDetailsAttributeChangeData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  putShoppingCartProductDetailsAttributeChange = (
    { productId, ...query }: PutShoppingCartProductDetailsAttributeChangeParams,
    data: PutShoppingCartProductDetailsAttributeChangePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PutShoppingCartProductDetailsAttributeChangeData,
      PutShoppingCartProductDetailsAttributeChangeError
    >({
      path: `/api-frontend/ShoppingCart/ProductDetailsAttributeChange/${productId}`,
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
   * @tags ShoppingCart
   * @name PostShoppingCartCheckoutAttributeChange
   * @request POST:/api-frontend/ShoppingCart/CheckoutAttributeChange
   * @secure
   * @response `200` `PostShoppingCartCheckoutAttributeChangeData` OK
   * @response `401` `string` Unauthorized
   */
  postShoppingCartCheckoutAttributeChange = (
    data: PostShoppingCartCheckoutAttributeChangePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PostShoppingCartCheckoutAttributeChangeData,
      PostShoppingCartCheckoutAttributeChangeError
    >({
      path: `/api-frontend/ShoppingCart/CheckoutAttributeChange`,
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
   * @tags ShoppingCart
   * @name PostShoppingCartUploadFileProductAttribute
   * @request POST:/api-frontend/ShoppingCart/UploadFileProductAttribute/{attributeId}
   * @secure
   * @response `200` `PostShoppingCartUploadFileProductAttributeData` OK
   * @response `401` `string` Unauthorized
   */
  postShoppingCartUploadFileProductAttribute = (
    attributeId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      PostShoppingCartUploadFileProductAttributeData,
      PostShoppingCartUploadFileProductAttributeError
    >({
      path: `/api-frontend/ShoppingCart/UploadFileProductAttribute/${attributeId}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ShoppingCart
   * @name PostShoppingCartUploadFileCheckoutAttribute
   * @request POST:/api-frontend/ShoppingCart/UploadFileCheckoutAttribute/{attributeId}
   * @secure
   * @response `200` `PostShoppingCartUploadFileCheckoutAttributeData` OK
   * @response `401` `string` Unauthorized
   */
  postShoppingCartUploadFileCheckoutAttribute = (
    attributeId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      PostShoppingCartUploadFileCheckoutAttributeData,
      PostShoppingCartUploadFileCheckoutAttributeError
    >({
      path: `/api-frontend/ShoppingCart/UploadFileCheckoutAttribute/${attributeId}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ShoppingCart
   * @name GetShoppingCartCart
   * @request GET:/api-frontend/ShoppingCart/Cart
   * @secure
   * @response `200` `GetShoppingCartCartData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  getShoppingCartCart = (params: RequestParams = {}) =>
    this.request<GetShoppingCartCartData, GetShoppingCartCartError>({
      path: `/api-frontend/ShoppingCart/Cart`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ShoppingCart
   * @name GetShoppingCartMiniCart
   * @request GET:/api-frontend/ShoppingCart/MiniCart
   * @secure
   * @response `200` `GetShoppingCartMiniCartData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  getShoppingCartMiniCart = (params: RequestParams = {}) =>
    this.request<GetShoppingCartMiniCartData, GetShoppingCartMiniCartError>({
      path: `/api-frontend/ShoppingCart/MiniCart`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ShoppingCart
   * @name PostShoppingCartUpdateCart
   * @request POST:/api-frontend/ShoppingCart/UpdateCart
   * @secure
   * @response `200` `PostShoppingCartUpdateCartData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  postShoppingCartUpdateCart = (
    data: PostShoppingCartUpdateCartPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PostShoppingCartUpdateCartData,
      PostShoppingCartUpdateCartError
    >({
      path: `/api-frontend/ShoppingCart/UpdateCart`,
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
   * @tags ShoppingCart
   * @name PostShoppingCartApplyDiscountCoupon
   * @request POST:/api-frontend/ShoppingCart/ApplyDiscountCoupon
   * @secure
   * @response `200` `PostShoppingCartApplyDiscountCouponData` OK
   * @response `401` `string` Unauthorized
   */
  postShoppingCartApplyDiscountCoupon = (
    query: PostShoppingCartApplyDiscountCouponParams,
    data: PostShoppingCartApplyDiscountCouponPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PostShoppingCartApplyDiscountCouponData,
      PostShoppingCartApplyDiscountCouponError
    >({
      path: `/api-frontend/ShoppingCart/ApplyDiscountCoupon`,
      method: "POST",
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
   * @tags ShoppingCart
   * @name PostShoppingCartApplyGiftCard
   * @request POST:/api-frontend/ShoppingCart/ApplyGiftCard
   * @secure
   * @response `200` `PostShoppingCartApplyGiftCardData` OK
   * @response `401` `string` Unauthorized
   */
  postShoppingCartApplyGiftCard = (
    query: PostShoppingCartApplyGiftCardParams,
    data: PostShoppingCartApplyGiftCardPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PostShoppingCartApplyGiftCardData,
      PostShoppingCartApplyGiftCardError
    >({
      path: `/api-frontend/ShoppingCart/ApplyGiftCard`,
      method: "POST",
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
   * @tags ShoppingCart
   * @name PostShoppingCartGetEstimateShipping
   * @request POST:/api-frontend/ShoppingCart/GetEstimateShipping
   * @secure
   * @response `200` `PostShoppingCartGetEstimateShippingData` OK
   * @response `401` `string` Unauthorized
   */
  postShoppingCartGetEstimateShipping = (
    data: EstimateShippingModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<
      PostShoppingCartGetEstimateShippingData,
      PostShoppingCartGetEstimateShippingError
    >({
      path: `/api-frontend/ShoppingCart/GetEstimateShipping`,
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
   * @tags ShoppingCart
   * @name PostShoppingCartRemoveDiscountCoupon
   * @request POST:/api-frontend/ShoppingCart/RemoveDiscountCoupon
   * @secure
   * @response `200` `PostShoppingCartRemoveDiscountCouponData` OK
   * @response `401` `string` Unauthorized
   */
  postShoppingCartRemoveDiscountCoupon = (
    data: PostShoppingCartRemoveDiscountCouponPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PostShoppingCartRemoveDiscountCouponData,
      PostShoppingCartRemoveDiscountCouponError
    >({
      path: `/api-frontend/ShoppingCart/RemoveDiscountCoupon`,
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
   * @tags ShoppingCart
   * @name PostShoppingCartRemoveGiftCardCode
   * @request POST:/api-frontend/ShoppingCart/RemoveGiftCardCode
   * @secure
   * @response `200` `PostShoppingCartRemoveGiftCardCodeData` OK
   * @response `401` `string` Unauthorized
   */
  postShoppingCartRemoveGiftCardCode = (
    data: PostShoppingCartRemoveGiftCardCodePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PostShoppingCartRemoveGiftCardCodeData,
      PostShoppingCartRemoveGiftCardCodeError
    >({
      path: `/api-frontend/ShoppingCart/RemoveGiftCardCode`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
