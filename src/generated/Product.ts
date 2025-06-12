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
  DeleteProductClearCompareListData,
  DeleteProductClearCompareListError,
  GetProductAddProductToCompareListData,
  GetProductAddProductToCompareListError,
  GetProductCompareProductsData,
  GetProductCompareProductsError,
  GetProductCustomerProductReviewsData,
  GetProductCustomerProductReviewsError,
  GetProductCustomerProductReviewsParams,
  GetProductGetProductCombinationsData,
  GetProductGetProductCombinationsError,
  GetProductGetProductDetailsData,
  GetProductGetProductDetailsError,
  GetProductGetProductDetailsParams,
  GetProductGetRelatedProductsData,
  GetProductGetRelatedProductsError,
  GetProductGetRelatedProductsParams,
  GetProductHomePageProductsData,
  GetProductHomePageProductsError,
  GetProductProductEmailAFriendData,
  GetProductProductEmailAFriendError,
  GetProductProductReviewsData,
  GetProductProductReviewsError,
  GetProductRecentlyViewedProductsData,
  GetProductRecentlyViewedProductsError,
  GetProductRemoveProductFromCompareListData,
  GetProductRemoveProductFromCompareListError,
  GetProductValidateProductReviewAvailabilityData,
  GetProductValidateProductReviewAvailabilityError,
  PostProductEstimateShippingData,
  PostProductEstimateShippingError,
  PostProductProductEmailAFriendSendData,
  PostProductProductEmailAFriendSendError,
  PostProductProductReviewsAddData,
  PostProductProductReviewsAddError,
  PostProductSetProductReviewHelpfulnessData,
  PostProductSetProductReviewHelpfulnessError,
  PostProductSetProductReviewHelpfulnessParams,
  ProductEmailAFriendModelDto,
  ProductEstimateShippingModelDtoBaseModelDtoRequest,
  ProductReviewsModelDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Product<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Product
   * @name GetProductGetProductDetails
   * @summary Get the product details
   * @request GET:/api-frontend/Product/GetProductDetails/{productId}
   * @secure
   * @response `200` `GetProductGetProductDetailsData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getProductGetProductDetails = (
    { productId, ...query }: GetProductGetProductDetailsParams,
    params: RequestParams = {},
  ) =>
    this.request<
      GetProductGetProductDetailsData,
      GetProductGetProductDetailsError
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
   * @name PostProductEstimateShipping
   * @summary Get the estimate shipping
   * @request POST:/api-frontend/Product/EstimateShipping
   * @secure
   * @response `200` `PostProductEstimateShippingData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postProductEstimateShipping = (
    data: ProductEstimateShippingModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<
      PostProductEstimateShippingData,
      PostProductEstimateShippingError
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
   * @name GetProductGetProductCombinations
   * @summary Get product combinations
   * @request GET:/api-frontend/Product/GetProductCombinations/{productId}
   * @secure
   * @response `200` `GetProductGetProductCombinationsData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getProductGetProductCombinations = (
    productId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      GetProductGetProductCombinationsData,
      GetProductGetProductCombinationsError
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
   * @name GetProductGetRelatedProducts
   * @summary Get related products
   * @request GET:/api-frontend/Product/GetRelatedProducts/{productId}
   * @secure
   * @response `200` `GetProductGetRelatedProductsData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getProductGetRelatedProducts = (
    { productId, ...query }: GetProductGetRelatedProductsParams,
    params: RequestParams = {},
  ) =>
    this.request<
      GetProductGetRelatedProductsData,
      GetProductGetRelatedProductsError
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
   * @name GetProductRecentlyViewedProducts
   * @summary Get recently viewed products
   * @request GET:/api-frontend/Product/RecentlyViewedProducts
   * @secure
   * @response `200` `GetProductRecentlyViewedProductsData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getProductRecentlyViewedProducts = (params: RequestParams = {}) =>
    this.request<
      GetProductRecentlyViewedProductsData,
      GetProductRecentlyViewedProductsError
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
   * @name GetProductHomePageProducts
   * @summary Get products on the home page (featured products)
   * @request GET:/api-frontend/Product/HomePageProducts
   * @secure
   * @response `200` `GetProductHomePageProductsData` OK
   * @response `401` `string` Unauthorized
   */
  getProductHomePageProducts = (params: RequestParams = {}) =>
    this.request<
      GetProductHomePageProductsData,
      GetProductHomePageProductsError
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
   * @name GetProductValidateProductReviewAvailability
   * @summary Validate product review availability for current customer
   * @request GET:/api-frontend/Product/ValidateProductReviewAvailability/{productId}
   * @secure
   * @response `200` `GetProductValidateProductReviewAvailabilityData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getProductValidateProductReviewAvailability = (
    productId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      GetProductValidateProductReviewAvailabilityData,
      GetProductValidateProductReviewAvailabilityError
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
   * @name GetProductProductReviews
   * @summary Get product reviews
   * @request GET:/api-frontend/Product/ProductReviews/{productId}
   * @secure
   * @response `200` `GetProductProductReviewsData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getProductProductReviews = (productId: number, params: RequestParams = {}) =>
    this.request<GetProductProductReviewsData, GetProductProductReviewsError>({
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
   * @name PostProductProductReviewsAdd
   * @summary Add product reviews
   * @request POST:/api-frontend/Product/ProductReviewsAdd/{productId}
   * @secure
   * @response `200` `PostProductProductReviewsAddData` OK
   * @response `400` `(string)[]` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postProductProductReviewsAdd = (
    productId: number,
    data: ProductReviewsModelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      PostProductProductReviewsAddData,
      PostProductProductReviewsAddError
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
   * @name PostProductSetProductReviewHelpfulness
   * @summary Set product review helpfulness
   * @request POST:/api-frontend/Product/SetProductReviewHelpfulness/{productReviewId}
   * @secure
   * @response `200` `PostProductSetProductReviewHelpfulnessData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postProductSetProductReviewHelpfulness = (
    { productReviewId, ...query }: PostProductSetProductReviewHelpfulnessParams,
    params: RequestParams = {},
  ) =>
    this.request<
      PostProductSetProductReviewHelpfulnessData,
      PostProductSetProductReviewHelpfulnessError
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
   * @name GetProductCustomerProductReviews
   * @summary Customer product reviews for current customer
   * @request GET:/api-frontend/Product/CustomerProductReviews
   * @secure
   * @response `200` `GetProductCustomerProductReviewsData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getProductCustomerProductReviews = (
    query: GetProductCustomerProductReviewsParams,
    params: RequestParams = {},
  ) =>
    this.request<
      GetProductCustomerProductReviewsData,
      GetProductCustomerProductReviewsError
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
   * @name GetProductProductEmailAFriend
   * @summary ProductEmailAFriend
   * @request GET:/api-frontend/Product/ProductEmailAFriend/{productId}
   * @secure
   * @response `200` `GetProductProductEmailAFriendData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getProductProductEmailAFriend = (
    productId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      GetProductProductEmailAFriendData,
      GetProductProductEmailAFriendError
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
   * @name PostProductProductEmailAFriendSend
   * @summary Send the product email a friend
   * @request POST:/api-frontend/Product/ProductEmailAFriendSend
   * @secure
   * @response `200` `PostProductProductEmailAFriendSendData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postProductProductEmailAFriendSend = (
    data: ProductEmailAFriendModelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      PostProductProductEmailAFriendSendData,
      PostProductProductEmailAFriendSendError
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
   * @name GetProductAddProductToCompareList
   * @summary Add product to compare list
   * @request GET:/api-frontend/Product/AddProductToCompareList/{productId}
   * @secure
   * @response `200` `GetProductAddProductToCompareListData` OK
   * @response `401` `string` Unauthorized
   */
  getProductAddProductToCompareList = (
    productId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      GetProductAddProductToCompareListData,
      GetProductAddProductToCompareListError
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
   * @name GetProductRemoveProductFromCompareList
   * @summary Remove product from compare list
   * @request GET:/api-frontend/Product/RemoveProductFromCompareList/{productId}
   * @secure
   * @response `200` `GetProductRemoveProductFromCompareListData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getProductRemoveProductFromCompareList = (
    productId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      GetProductRemoveProductFromCompareListData,
      GetProductRemoveProductFromCompareListError
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
   * @name GetProductCompareProducts
   * @summary Compare products
   * @request GET:/api-frontend/Product/CompareProducts
   * @secure
   * @response `200` `GetProductCompareProductsData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getProductCompareProducts = (params: RequestParams = {}) =>
    this.request<GetProductCompareProductsData, GetProductCompareProductsError>(
      {
        path: `/api-frontend/Product/CompareProducts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
    );
  /**
   * No description
   *
   * @tags Product
   * @name DeleteProductClearCompareList
   * @summary Clear compare products list
   * @request DELETE:/api-frontend/Product/ClearCompareList
   * @secure
   * @response `200` `DeleteProductClearCompareListData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  deleteProductClearCompareList = (params: RequestParams = {}) =>
    this.request<
      DeleteProductClearCompareListData,
      DeleteProductClearCompareListError
    >({
      path: `/api-frontend/Product/ClearCompareList`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
