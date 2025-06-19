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
  ShoppingCartAddProductToCartFromCatalogCreateData,
  ShoppingCartAddProductToCartFromCatalogCreateError,
  ShoppingCartAddProductToCartFromCatalogCreateParams,
  ShoppingCartAddProductToCartFromDetailsCreateData,
  ShoppingCartAddProductToCartFromDetailsCreateError,
  ShoppingCartAddProductToCartFromDetailsCreateParams,
  ShoppingCartAddProductToCartFromDetailsCreatePayload,
  ShoppingCartApplyDiscountCouponCreateData,
  ShoppingCartApplyDiscountCouponCreateError,
  ShoppingCartApplyDiscountCouponCreateParams,
  ShoppingCartApplyDiscountCouponCreatePayload,
  ShoppingCartApplyGiftCardCreateData,
  ShoppingCartApplyGiftCardCreateError,
  ShoppingCartApplyGiftCardCreateParams,
  ShoppingCartApplyGiftCardCreatePayload,
  ShoppingCartCartListData,
  ShoppingCartCartListError,
  ShoppingCartCheckoutAttributeChangeCreateData,
  ShoppingCartCheckoutAttributeChangeCreateError,
  ShoppingCartCheckoutAttributeChangeCreatePayload,
  ShoppingCartGetEstimateShippingCreateData,
  ShoppingCartGetEstimateShippingCreateError,
  ShoppingCartMiniCartListData,
  ShoppingCartMiniCartListError,
  ShoppingCartProductDetailsAttributeChangeUpdateData,
  ShoppingCartProductDetailsAttributeChangeUpdateError,
  ShoppingCartProductDetailsAttributeChangeUpdateParams,
  ShoppingCartProductDetailsAttributeChangeUpdatePayload,
  ShoppingCartRemoveDiscountCouponCreateData,
  ShoppingCartRemoveDiscountCouponCreateError,
  ShoppingCartRemoveDiscountCouponCreatePayload,
  ShoppingCartRemoveGiftCardCodeCreateData,
  ShoppingCartRemoveGiftCardCodeCreateError,
  ShoppingCartRemoveGiftCardCodeCreatePayload,
  ShoppingCartSelectShippingOptionCreateData,
  ShoppingCartSelectShippingOptionCreateError,
  ShoppingCartSelectShippingOptionCreateParams,
  ShoppingCartUpdateCartCreateData,
  ShoppingCartUpdateCartCreateError,
  ShoppingCartUpdateCartCreatePayload,
  ShoppingCartUploadFileCheckoutAttributeCreateData,
  ShoppingCartUploadFileCheckoutAttributeCreateError,
  ShoppingCartUploadFileProductAttributeCreateData,
  ShoppingCartUploadFileProductAttributeCreateError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ShoppingCart<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ShoppingCart
   * @name ShoppingCartSelectShippingOptionCreate
   * @request POST:/api-frontend/ShoppingCart/SelectShippingOption
   * @secure
   * @response `200` `ShoppingCartSelectShippingOptionCreateData` OK
   * @response `401` `string` Unauthorized
   */
  shoppingCartSelectShippingOptionCreate = (
    query: ShoppingCartSelectShippingOptionCreateParams,
    data: EstimateShippingModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<
      ShoppingCartSelectShippingOptionCreateData,
      ShoppingCartSelectShippingOptionCreateError
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
   * @name ShoppingCartAddProductToCartFromCatalogCreate
   * @request POST:/api-frontend/ShoppingCart/AddProductToCartFromCatalog/{productId}
   * @secure
   * @response `200` `ShoppingCartAddProductToCartFromCatalogCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  shoppingCartAddProductToCartFromCatalogCreate = (
    {
      productId,
      ...query
    }: ShoppingCartAddProductToCartFromCatalogCreateParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ShoppingCartAddProductToCartFromCatalogCreateData,
      ShoppingCartAddProductToCartFromCatalogCreateError
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
   * @name ShoppingCartAddProductToCartFromDetailsCreate
   * @request POST:/api-frontend/ShoppingCart/AddProductToCartFromDetails/{productId}
   * @secure
   * @response `200` `ShoppingCartAddProductToCartFromDetailsCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  shoppingCartAddProductToCartFromDetailsCreate = (
    {
      productId,
      ...query
    }: ShoppingCartAddProductToCartFromDetailsCreateParams,
    data: ShoppingCartAddProductToCartFromDetailsCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      ShoppingCartAddProductToCartFromDetailsCreateData,
      ShoppingCartAddProductToCartFromDetailsCreateError
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
   * @name ShoppingCartProductDetailsAttributeChangeUpdate
   * @request PUT:/api-frontend/ShoppingCart/ProductDetailsAttributeChange/{productId}
   * @secure
   * @response `200` `ShoppingCartProductDetailsAttributeChangeUpdateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  shoppingCartProductDetailsAttributeChangeUpdate = (
    {
      productId,
      ...query
    }: ShoppingCartProductDetailsAttributeChangeUpdateParams,
    data: ShoppingCartProductDetailsAttributeChangeUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      ShoppingCartProductDetailsAttributeChangeUpdateData,
      ShoppingCartProductDetailsAttributeChangeUpdateError
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
   * @name ShoppingCartCheckoutAttributeChangeCreate
   * @request POST:/api-frontend/ShoppingCart/CheckoutAttributeChange
   * @secure
   * @response `200` `ShoppingCartCheckoutAttributeChangeCreateData` OK
   * @response `401` `string` Unauthorized
   */
  shoppingCartCheckoutAttributeChangeCreate = (
    data: ShoppingCartCheckoutAttributeChangeCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      ShoppingCartCheckoutAttributeChangeCreateData,
      ShoppingCartCheckoutAttributeChangeCreateError
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
   * @name ShoppingCartUploadFileProductAttributeCreate
   * @request POST:/api-frontend/ShoppingCart/UploadFileProductAttribute/{attributeId}
   * @secure
   * @response `200` `ShoppingCartUploadFileProductAttributeCreateData` OK
   * @response `401` `string` Unauthorized
   */
  shoppingCartUploadFileProductAttributeCreate = (
    attributeId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      ShoppingCartUploadFileProductAttributeCreateData,
      ShoppingCartUploadFileProductAttributeCreateError
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
   * @name ShoppingCartUploadFileCheckoutAttributeCreate
   * @request POST:/api-frontend/ShoppingCart/UploadFileCheckoutAttribute/{attributeId}
   * @secure
   * @response `200` `ShoppingCartUploadFileCheckoutAttributeCreateData` OK
   * @response `401` `string` Unauthorized
   */
  shoppingCartUploadFileCheckoutAttributeCreate = (
    attributeId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      ShoppingCartUploadFileCheckoutAttributeCreateData,
      ShoppingCartUploadFileCheckoutAttributeCreateError
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
   * @name ShoppingCartCartList
   * @request GET:/api-frontend/ShoppingCart/Cart
   * @secure
   * @response `200` `ShoppingCartCartListData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  shoppingCartCartList = (params: RequestParams = {}) =>
    this.request<ShoppingCartCartListData, ShoppingCartCartListError>({
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
   * @name ShoppingCartMiniCartList
   * @request GET:/api-frontend/ShoppingCart/MiniCart
   * @secure
   * @response `200` `ShoppingCartMiniCartListData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  shoppingCartMiniCartList = (params: RequestParams = {}) =>
    this.request<ShoppingCartMiniCartListData, ShoppingCartMiniCartListError>({
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
   * @name ShoppingCartUpdateCartCreate
   * @request POST:/api-frontend/ShoppingCart/UpdateCart
   * @secure
   * @response `200` `ShoppingCartUpdateCartCreateData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  shoppingCartUpdateCartCreate = (
    data: ShoppingCartUpdateCartCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      ShoppingCartUpdateCartCreateData,
      ShoppingCartUpdateCartCreateError
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
   * @name ShoppingCartApplyDiscountCouponCreate
   * @request POST:/api-frontend/ShoppingCart/ApplyDiscountCoupon
   * @secure
   * @response `200` `ShoppingCartApplyDiscountCouponCreateData` OK
   * @response `401` `string` Unauthorized
   */
  shoppingCartApplyDiscountCouponCreate = (
    query: ShoppingCartApplyDiscountCouponCreateParams,
    data: ShoppingCartApplyDiscountCouponCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      ShoppingCartApplyDiscountCouponCreateData,
      ShoppingCartApplyDiscountCouponCreateError
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
   * @name ShoppingCartApplyGiftCardCreate
   * @request POST:/api-frontend/ShoppingCart/ApplyGiftCard
   * @secure
   * @response `200` `ShoppingCartApplyGiftCardCreateData` OK
   * @response `401` `string` Unauthorized
   */
  shoppingCartApplyGiftCardCreate = (
    query: ShoppingCartApplyGiftCardCreateParams,
    data: ShoppingCartApplyGiftCardCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      ShoppingCartApplyGiftCardCreateData,
      ShoppingCartApplyGiftCardCreateError
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
   * @name ShoppingCartGetEstimateShippingCreate
   * @request POST:/api-frontend/ShoppingCart/GetEstimateShipping
   * @secure
   * @response `200` `ShoppingCartGetEstimateShippingCreateData` OK
   * @response `401` `string` Unauthorized
   */
  shoppingCartGetEstimateShippingCreate = (
    data: EstimateShippingModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<
      ShoppingCartGetEstimateShippingCreateData,
      ShoppingCartGetEstimateShippingCreateError
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
   * @name ShoppingCartRemoveDiscountCouponCreate
   * @request POST:/api-frontend/ShoppingCart/RemoveDiscountCoupon
   * @secure
   * @response `200` `ShoppingCartRemoveDiscountCouponCreateData` OK
   * @response `401` `string` Unauthorized
   */
  shoppingCartRemoveDiscountCouponCreate = (
    data: ShoppingCartRemoveDiscountCouponCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      ShoppingCartRemoveDiscountCouponCreateData,
      ShoppingCartRemoveDiscountCouponCreateError
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
   * @name ShoppingCartRemoveGiftCardCodeCreate
   * @request POST:/api-frontend/ShoppingCart/RemoveGiftCardCode
   * @secure
   * @response `200` `ShoppingCartRemoveGiftCardCodeCreateData` OK
   * @response `401` `string` Unauthorized
   */
  shoppingCartRemoveGiftCardCodeCreate = (
    data: ShoppingCartRemoveGiftCardCodeCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      ShoppingCartRemoveGiftCardCodeCreateData,
      ShoppingCartRemoveGiftCardCodeCreateError
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
