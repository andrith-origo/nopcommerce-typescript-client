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
  CatalogProductsCommandDto,
  GetCatalogGetCatalogRootData,
  GetCatalogGetCatalogRootError,
  GetCatalogGetCatalogRootParams,
  GetCatalogGetCatalogSubCategoriesData,
  GetCatalogGetCatalogSubCategoriesError,
  GetCatalogHomePageCategoriesData,
  GetCatalogHomePageCategoriesError,
  GetCatalogManufacturerAllData,
  GetCatalogManufacturerAllError,
  GetCatalogNewProductsData,
  GetCatalogNewProductsError,
  GetCatalogNewProductsRssData,
  GetCatalogNewProductsRssError,
  GetCatalogProductTagsAllData,
  GetCatalogProductTagsAllError,
  GetCatalogSearchTermAutoCompleteData,
  GetCatalogSearchTermAutoCompleteError,
  GetCatalogSearchTermAutoCompleteParams,
  GetCatalogVendorAllData,
  GetCatalogVendorAllError,
  PostCatalogGetCategoryData,
  PostCatalogGetCategoryError,
  PostCatalogGetCategoryProductsData,
  PostCatalogGetCategoryProductsError,
  PostCatalogGetManufacturerData,
  PostCatalogGetManufacturerError,
  PostCatalogGetManufacturerProductsData,
  PostCatalogGetManufacturerProductsError,
  PostCatalogGetProductsByTagData,
  PostCatalogGetProductsByTagError,
  PostCatalogGetTagProductsData,
  PostCatalogGetTagProductsError,
  PostCatalogGetVendorData,
  PostCatalogGetVendorError,
  PostCatalogGetVendorProductsData,
  PostCatalogGetVendorProductsError,
  PostCatalogSearchData,
  PostCatalogSearchError,
  PostCatalogSearchProductsData,
  PostCatalogSearchProductsError,
  PostCatalogVendorReviewsData,
  PostCatalogVendorReviewsError,
  SearchRequest,
  VendorReviewsPagingFilteringModel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Catalog<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Catalog
   * @name PostCatalogGetCategory
   * @summary Get category
   * @request POST:/api-frontend/Catalog/GetCategory/{categoryId}
   * @secure
   * @response `200` `PostCatalogGetCategoryData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCatalogGetCategory = (
    categoryId: number,
    data: CatalogProductsCommandDto,
    params: RequestParams = {},
  ) =>
    this.request<PostCatalogGetCategoryData, PostCatalogGetCategoryError>({
      path: `/api-frontend/Catalog/GetCategory/${categoryId}`,
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
   * @tags Catalog
   * @name PostCatalogGetCategoryProducts
   * @summary Get the category products
   * @request POST:/api-frontend/Catalog/GetCategoryProducts/{categoryId}
   * @secure
   * @response `200` `PostCatalogGetCategoryProductsData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCatalogGetCategoryProducts = (
    categoryId: number,
    data: CatalogProductsCommandDto,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCatalogGetCategoryProductsData,
      PostCatalogGetCategoryProductsError
    >({
      path: `/api-frontend/Catalog/GetCategoryProducts/${categoryId}`,
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
   * @tags Catalog
   * @name GetCatalogGetCatalogRoot
   * @summary Get catalog root (list of categories)
   * @request GET:/api-frontend/Catalog/GetCatalogRoot
   * @secure
   * @response `200` `GetCatalogGetCatalogRootData` OK
   * @response `401` `string` Unauthorized
   */
  getCatalogGetCatalogRoot = (
    query: GetCatalogGetCatalogRootParams,
    params: RequestParams = {},
  ) =>
    this.request<GetCatalogGetCatalogRootData, GetCatalogGetCatalogRootError>({
      path: `/api-frontend/Catalog/GetCatalogRoot`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Catalog
   * @name GetCatalogGetCatalogSubCategories
   * @summary Get catalog sub categories
   * @request GET:/api-frontend/Catalog/GetCatalogSubCategories/{id}
   * @secure
   * @response `200` `GetCatalogGetCatalogSubCategoriesData` OK
   * @response `401` `string` Unauthorized
   */
  getCatalogGetCatalogSubCategories = (
    id: number,
    params: RequestParams = {},
  ) =>
    this.request<
      GetCatalogGetCatalogSubCategoriesData,
      GetCatalogGetCatalogSubCategoriesError
    >({
      path: `/api-frontend/Catalog/GetCatalogSubCategories/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Catalog
   * @name GetCatalogHomePageCategories
   * @summary Get categories on Home page
   * @request GET:/api-frontend/Catalog/HomePageCategories
   * @secure
   * @response `200` `GetCatalogHomePageCategoriesData` OK
   * @response `401` `string` Unauthorized
   */
  getCatalogHomePageCategories = (params: RequestParams = {}) =>
    this.request<
      GetCatalogHomePageCategoriesData,
      GetCatalogHomePageCategoriesError
    >({
      path: `/api-frontend/Catalog/HomePageCategories`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Catalog
   * @name PostCatalogGetManufacturer
   * @summary Get manufacturer
   * @request POST:/api-frontend/Catalog/GetManufacturer/{manufacturerId}
   * @secure
   * @response `200` `PostCatalogGetManufacturerData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCatalogGetManufacturer = (
    manufacturerId: number,
    data: CatalogProductsCommandDto,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCatalogGetManufacturerData,
      PostCatalogGetManufacturerError
    >({
      path: `/api-frontend/Catalog/GetManufacturer/${manufacturerId}`,
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
   * @tags Catalog
   * @name PostCatalogGetManufacturerProducts
   * @summary Get manufacturer products
   * @request POST:/api-frontend/Catalog/GetManufacturerProducts/{manufacturerId}
   * @secure
   * @response `200` `PostCatalogGetManufacturerProductsData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCatalogGetManufacturerProducts = (
    manufacturerId: number,
    data: CatalogProductsCommandDto,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCatalogGetManufacturerProductsData,
      PostCatalogGetManufacturerProductsError
    >({
      path: `/api-frontend/Catalog/GetManufacturerProducts/${manufacturerId}`,
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
   * @tags Catalog
   * @name GetCatalogManufacturerAll
   * @summary Get all manufacturers
   * @request GET:/api-frontend/Catalog/ManufacturerAll
   * @secure
   * @response `200` `GetCatalogManufacturerAllData` OK
   * @response `401` `string` Unauthorized
   */
  getCatalogManufacturerAll = (params: RequestParams = {}) =>
    this.request<GetCatalogManufacturerAllData, GetCatalogManufacturerAllError>(
      {
        path: `/api-frontend/Catalog/ManufacturerAll`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
    );
  /**
   * No description
   *
   * @tags Catalog
   * @name PostCatalogGetVendor
   * @summary Vendor
   * @request POST:/api-frontend/Catalog/GetVendor/{vendorId}
   * @secure
   * @response `200` `PostCatalogGetVendorData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCatalogGetVendor = (
    vendorId: number,
    data: CatalogProductsCommandDto,
    params: RequestParams = {},
  ) =>
    this.request<PostCatalogGetVendorData, PostCatalogGetVendorError>({
      path: `/api-frontend/Catalog/GetVendor/${vendorId}`,
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
   * @tags Catalog
   * @name PostCatalogGetVendorProducts
   * @summary Get vendor products
   * @request POST:/api-frontend/Catalog/GetVendorProducts/{vendorId}
   * @secure
   * @response `200` `PostCatalogGetVendorProductsData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCatalogGetVendorProducts = (
    vendorId: number,
    data: CatalogProductsCommandDto,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCatalogGetVendorProductsData,
      PostCatalogGetVendorProductsError
    >({
      path: `/api-frontend/Catalog/GetVendorProducts/${vendorId}`,
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
   * @tags Catalog
   * @name PostCatalogVendorReviews
   * @summary Get vendor products
   * @request POST:/api-frontend/Catalog/VendorReviews/{vendorId}
   * @secure
   * @response `200` `PostCatalogVendorReviewsData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCatalogVendorReviews = (
    vendorId: number,
    data: VendorReviewsPagingFilteringModel,
    params: RequestParams = {},
  ) =>
    this.request<PostCatalogVendorReviewsData, PostCatalogVendorReviewsError>({
      path: `/api-frontend/Catalog/VendorReviews/${vendorId}`,
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
   * @tags Catalog
   * @name GetCatalogVendorAll
   * @summary Get all vendors
   * @request GET:/api-frontend/Catalog/VendorAll
   * @secure
   * @response `200` `GetCatalogVendorAllData` OK
   * @response `401` `string` Unauthorized
   */
  getCatalogVendorAll = (params: RequestParams = {}) =>
    this.request<GetCatalogVendorAllData, GetCatalogVendorAllError>({
      path: `/api-frontend/Catalog/VendorAll`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Catalog
   * @name PostCatalogGetProductsByTag
   * @summary Get products by tag
   * @request POST:/api-frontend/Catalog/GetProductsByTag/{productTagId}
   * @secure
   * @response `200` `PostCatalogGetProductsByTagData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCatalogGetProductsByTag = (
    productTagId: number,
    data: CatalogProductsCommandDto,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCatalogGetProductsByTagData,
      PostCatalogGetProductsByTagError
    >({
      path: `/api-frontend/Catalog/GetProductsByTag/${productTagId}`,
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
   * @tags Catalog
   * @name PostCatalogGetTagProducts
   * @summary Get tag products
   * @request POST:/api-frontend/Catalog/GetTagProducts/{productTagId}
   * @secure
   * @response `200` `PostCatalogGetTagProductsData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCatalogGetTagProducts = (
    productTagId: number,
    data: CatalogProductsCommandDto,
    params: RequestParams = {},
  ) =>
    this.request<PostCatalogGetTagProductsData, PostCatalogGetTagProductsError>(
      {
        path: `/api-frontend/Catalog/GetTagProducts/${productTagId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * No description
   *
   * @tags Catalog
   * @name GetCatalogProductTagsAll
   * @summary Get all popular product tags
   * @request GET:/api-frontend/Catalog/ProductTagsAll
   * @secure
   * @response `200` `GetCatalogProductTagsAllData` OK
   * @response `401` `string` Unauthorized
   */
  getCatalogProductTagsAll = (params: RequestParams = {}) =>
    this.request<GetCatalogProductTagsAllData, GetCatalogProductTagsAllError>({
      path: `/api-frontend/Catalog/ProductTagsAll`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Catalog
   * @name GetCatalogNewProducts
   * @request GET:/api-frontend/Catalog/NewProducts
   * @secure
   * @response `200` `GetCatalogNewProductsData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getCatalogNewProducts = (
    data: CatalogProductsCommandDto,
    params: RequestParams = {},
  ) =>
    this.request<GetCatalogNewProductsData, GetCatalogNewProductsError>({
      path: `/api-frontend/Catalog/NewProducts`,
      method: "GET",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Catalog
   * @name GetCatalogNewProductsRss
   * @request GET:/api-frontend/Catalog/NewProductsRss
   * @secure
   * @response `200` `GetCatalogNewProductsRssData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  getCatalogNewProductsRss = (params: RequestParams = {}) =>
    this.request<GetCatalogNewProductsRssData, GetCatalogNewProductsRssError>({
      path: `/api-frontend/Catalog/NewProductsRss`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Catalog
   * @name PostCatalogSearch
   * @summary Search
   * @request POST:/api-frontend/Catalog/Search
   * @secure
   * @response `200` `PostCatalogSearchData` OK
   * @response `401` `string` Unauthorized
   */
  postCatalogSearch = (data: SearchRequest, params: RequestParams = {}) =>
    this.request<PostCatalogSearchData, PostCatalogSearchError>({
      path: `/api-frontend/Catalog/Search`,
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
   * @tags Catalog
   * @name GetCatalogSearchTermAutoComplete
   * @summary Search term auto complete
   * @request GET:/api-frontend/Catalog/SearchTermAutoComplete
   * @secure
   * @response `200` `GetCatalogSearchTermAutoCompleteData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getCatalogSearchTermAutoComplete = (
    query: GetCatalogSearchTermAutoCompleteParams,
    params: RequestParams = {},
  ) =>
    this.request<
      GetCatalogSearchTermAutoCompleteData,
      GetCatalogSearchTermAutoCompleteError
    >({
      path: `/api-frontend/Catalog/SearchTermAutoComplete`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Catalog
   * @name PostCatalogSearchProducts
   * @summary Search products
   * @request POST:/api-frontend/Catalog/SearchProducts
   * @secure
   * @response `200` `PostCatalogSearchProductsData` OK
   * @response `401` `string` Unauthorized
   */
  postCatalogSearchProducts = (
    data: SearchRequest,
    params: RequestParams = {},
  ) =>
    this.request<PostCatalogSearchProductsData, PostCatalogSearchProductsError>(
      {
        path: `/api-frontend/Catalog/SearchProducts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
}
