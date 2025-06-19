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
  ProductAddProductToCompareListDetailData,
  ProductAddProductToCompareListDetailError,
  ProductClearCompareListDeleteData,
  ProductClearCompareListDeleteError,
  ProductCompareProductsListData,
  ProductCompareProductsListError,
  ProductCustomerProductReviewsListData,
  ProductCustomerProductReviewsListError,
  ProductCustomerProductReviewsListParams,
  ProductEmailAFriendModelDto,
  ProductEstimateShippingCreateData,
  ProductEstimateShippingCreateError,
  ProductEstimateShippingModelDtoBaseModelDtoRequest,
  ProductGetProductCombinationsDetailData,
  ProductGetProductCombinationsDetailError,
  ProductGetProductDetailsDetailData,
  ProductGetProductDetailsDetailError,
  ProductGetProductDetailsDetailParams,
  ProductGetRelatedProductsDetailData,
  ProductGetRelatedProductsDetailError,
  ProductGetRelatedProductsDetailParams,
  ProductHomePageProductsListData,
  ProductHomePageProductsListError,
  ProductProductEmailAFriendDetailData,
  ProductProductEmailAFriendDetailError,
  ProductProductEmailAFriendSendCreateData,
  ProductProductEmailAFriendSendCreateError,
  ProductProductReviewsAddCreateData,
  ProductProductReviewsAddCreateError,
  ProductProductReviewsDetailData,
  ProductProductReviewsDetailError,
  ProductRecentlyViewedProductsListData,
  ProductRecentlyViewedProductsListError,
  ProductRemoveProductFromCompareListDetailData,
  ProductRemoveProductFromCompareListDetailError,
  ProductReviewsModelDto,
  ProductSetProductReviewHelpfulnessCreateData,
  ProductSetProductReviewHelpfulnessCreateError,
  ProductSetProductReviewHelpfulnessCreateParams,
  ProductValidateProductReviewAvailabilityDetailData,
  ProductValidateProductReviewAvailabilityDetailError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Product<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Product
   * @name ProductGetProductDetailsDetail
   * @summary Get the product details
   * @request GET:/api-frontend/Product/GetProductDetails/{productId}
   * @secure
   * @response `200` `ProductGetProductDetailsDetailData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  productGetProductDetailsDetail = (
    { productId, ...query }: ProductGetProductDetailsDetailParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ProductGetProductDetailsDetailData,
      ProductGetProductDetailsDetailError
    >({
      path: `/api-frontend/Product/GetProductDetails/${productId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductEstimateShippingCreate
   * @summary Get the estimate shipping
   * @request POST:/api-frontend/Product/EstimateShipping
   * @secure
   * @response `200` `ProductEstimateShippingCreateData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  productEstimateShippingCreate = (
    data: ProductEstimateShippingModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<
      ProductEstimateShippingCreateData,
      ProductEstimateShippingCreateError
    >({
      path: `/api-frontend/Product/EstimateShipping`,
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
   * @tags Product
   * @name ProductGetProductCombinationsDetail
   * @summary Get product combinations
   * @request GET:/api-frontend/Product/GetProductCombinations/{productId}
   * @secure
   * @response `200` `ProductGetProductCombinationsDetailData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  productGetProductCombinationsDetail = (
    productId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      ProductGetProductCombinationsDetailData,
      ProductGetProductCombinationsDetailError
    >({
      path: `/api-frontend/Product/GetProductCombinations/${productId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductGetRelatedProductsDetail
   * @summary Get related products
   * @request GET:/api-frontend/Product/GetRelatedProducts/{productId}
   * @secure
   * @response `200` `ProductGetRelatedProductsDetailData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  productGetRelatedProductsDetail = (
    { productId, ...query }: ProductGetRelatedProductsDetailParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ProductGetRelatedProductsDetailData,
      ProductGetRelatedProductsDetailError
    >({
      path: `/api-frontend/Product/GetRelatedProducts/${productId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductRecentlyViewedProductsList
   * @summary Get recently viewed products
   * @request GET:/api-frontend/Product/RecentlyViewedProducts
   * @secure
   * @response `200` `ProductRecentlyViewedProductsListData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  productRecentlyViewedProductsList = (params: RequestParams = {}) =>
    this.request<
      ProductRecentlyViewedProductsListData,
      ProductRecentlyViewedProductsListError
    >({
      path: `/api-frontend/Product/RecentlyViewedProducts`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductHomePageProductsList
   * @summary Get products on the home page (featured products)
   * @request GET:/api-frontend/Product/HomePageProducts
   * @secure
   * @response `200` `ProductHomePageProductsListData` OK
   * @response `401` `string` Unauthorized
   */
  productHomePageProductsList = (params: RequestParams = {}) =>
    this.request<
      ProductHomePageProductsListData,
      ProductHomePageProductsListError
    >({
      path: `/api-frontend/Product/HomePageProducts`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductValidateProductReviewAvailabilityDetail
   * @summary Validate product review availability for current customer
   * @request GET:/api-frontend/Product/ValidateProductReviewAvailability/{productId}
   * @secure
   * @response `200` `ProductValidateProductReviewAvailabilityDetailData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  productValidateProductReviewAvailabilityDetail = (
    productId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      ProductValidateProductReviewAvailabilityDetailData,
      ProductValidateProductReviewAvailabilityDetailError
    >({
      path: `/api-frontend/Product/ValidateProductReviewAvailability/${productId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductProductReviewsDetail
   * @summary Get product reviews
   * @request GET:/api-frontend/Product/ProductReviews/{productId}
   * @secure
   * @response `200` `ProductProductReviewsDetailData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  productProductReviewsDetail = (
    productId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      ProductProductReviewsDetailData,
      ProductProductReviewsDetailError
    >({
      path: `/api-frontend/Product/ProductReviews/${productId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductProductReviewsAddCreate
   * @summary Add product reviews
   * @request POST:/api-frontend/Product/ProductReviewsAdd/{productId}
   * @secure
   * @response `200` `ProductProductReviewsAddCreateData` OK
   * @response `400` `(string)[]` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  productProductReviewsAddCreate = (
    productId: number,
    data: ProductReviewsModelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      ProductProductReviewsAddCreateData,
      ProductProductReviewsAddCreateError
    >({
      path: `/api-frontend/Product/ProductReviewsAdd/${productId}`,
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
   * @tags Product
   * @name ProductSetProductReviewHelpfulnessCreate
   * @summary Set product review helpfulness
   * @request POST:/api-frontend/Product/SetProductReviewHelpfulness/{productReviewId}
   * @secure
   * @response `200` `ProductSetProductReviewHelpfulnessCreateData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  productSetProductReviewHelpfulnessCreate = (
    {
      productReviewId,
      ...query
    }: ProductSetProductReviewHelpfulnessCreateParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ProductSetProductReviewHelpfulnessCreateData,
      ProductSetProductReviewHelpfulnessCreateError
    >({
      path: `/api-frontend/Product/SetProductReviewHelpfulness/${productReviewId}`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductCustomerProductReviewsList
   * @summary Customer product reviews for current customer
   * @request GET:/api-frontend/Product/CustomerProductReviews
   * @secure
   * @response `200` `ProductCustomerProductReviewsListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  productCustomerProductReviewsList = (
    query: ProductCustomerProductReviewsListParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ProductCustomerProductReviewsListData,
      ProductCustomerProductReviewsListError
    >({
      path: `/api-frontend/Product/CustomerProductReviews`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductProductEmailAFriendDetail
   * @summary ProductEmailAFriend
   * @request GET:/api-frontend/Product/ProductEmailAFriend/{productId}
   * @secure
   * @response `200` `ProductProductEmailAFriendDetailData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  productProductEmailAFriendDetail = (
    productId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      ProductProductEmailAFriendDetailData,
      ProductProductEmailAFriendDetailError
    >({
      path: `/api-frontend/Product/ProductEmailAFriend/${productId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductProductEmailAFriendSendCreate
   * @summary Send the product email a friend
   * @request POST:/api-frontend/Product/ProductEmailAFriendSend
   * @secure
   * @response `200` `ProductProductEmailAFriendSendCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  productProductEmailAFriendSendCreate = (
    data: ProductEmailAFriendModelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      ProductProductEmailAFriendSendCreateData,
      ProductProductEmailAFriendSendCreateError
    >({
      path: `/api-frontend/Product/ProductEmailAFriendSend`,
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
   * @tags Product
   * @name ProductAddProductToCompareListDetail
   * @summary Add product to compare list
   * @request GET:/api-frontend/Product/AddProductToCompareList/{productId}
   * @secure
   * @response `200` `ProductAddProductToCompareListDetailData` OK
   * @response `401` `string` Unauthorized
   */
  productAddProductToCompareListDetail = (
    productId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      ProductAddProductToCompareListDetailData,
      ProductAddProductToCompareListDetailError
    >({
      path: `/api-frontend/Product/AddProductToCompareList/${productId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductRemoveProductFromCompareListDetail
   * @summary Remove product from compare list
   * @request GET:/api-frontend/Product/RemoveProductFromCompareList/{productId}
   * @secure
   * @response `200` `ProductRemoveProductFromCompareListDetailData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  productRemoveProductFromCompareListDetail = (
    productId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      ProductRemoveProductFromCompareListDetailData,
      ProductRemoveProductFromCompareListDetailError
    >({
      path: `/api-frontend/Product/RemoveProductFromCompareList/${productId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductCompareProductsList
   * @summary Compare products
   * @request GET:/api-frontend/Product/CompareProducts
   * @secure
   * @response `200` `ProductCompareProductsListData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  productCompareProductsList = (params: RequestParams = {}) =>
    this.request<
      ProductCompareProductsListData,
      ProductCompareProductsListError
    >({
      path: `/api-frontend/Product/CompareProducts`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name ProductClearCompareListDelete
   * @summary Clear compare products list
   * @request DELETE:/api-frontend/Product/ClearCompareList
   * @secure
   * @response `200` `ProductClearCompareListDeleteData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  productClearCompareListDelete = (params: RequestParams = {}) =>
    this.request<
      ProductClearCompareListDeleteData,
      ProductClearCompareListDeleteError
    >({
      path: `/api-frontend/Product/ClearCompareList`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
