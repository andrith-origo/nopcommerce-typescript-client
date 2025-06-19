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
  CatalogGetCatalogRootListData,
  CatalogGetCatalogRootListError,
  CatalogGetCatalogRootListParams,
  CatalogGetCatalogSubCategoriesDetailData,
  CatalogGetCatalogSubCategoriesDetailError,
  CatalogGetCategoryCreateData,
  CatalogGetCategoryCreateError,
  CatalogGetCategoryProductsCreateData,
  CatalogGetCategoryProductsCreateError,
  CatalogGetManufacturerCreateData,
  CatalogGetManufacturerCreateError,
  CatalogGetManufacturerProductsCreateData,
  CatalogGetManufacturerProductsCreateError,
  CatalogGetProductsByTagCreateData,
  CatalogGetProductsByTagCreateError,
  CatalogGetTagProductsCreateData,
  CatalogGetTagProductsCreateError,
  CatalogGetVendorCreateData,
  CatalogGetVendorCreateError,
  CatalogGetVendorProductsCreateData,
  CatalogGetVendorProductsCreateError,
  CatalogHomePageCategoriesListData,
  CatalogHomePageCategoriesListError,
  CatalogManufacturerAllListData,
  CatalogManufacturerAllListError,
  CatalogNewProductsListData,
  CatalogNewProductsListError,
  CatalogNewProductsRssListData,
  CatalogNewProductsRssListError,
  CatalogProductTagsAllListData,
  CatalogProductTagsAllListError,
  CatalogProductsCommandDto,
  CatalogSearchCreateData,
  CatalogSearchCreateError,
  CatalogSearchProductsCreateData,
  CatalogSearchProductsCreateError,
  CatalogSearchTermAutoCompleteListData,
  CatalogSearchTermAutoCompleteListError,
  CatalogSearchTermAutoCompleteListParams,
  CatalogVendorAllListData,
  CatalogVendorAllListError,
  CatalogVendorReviewsCreateData,
  CatalogVendorReviewsCreateError,
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
   * @name CatalogGetCategoryCreate
   * @summary Get category
   * @request POST:/api-frontend/Catalog/GetCategory/{categoryId}
   * @secure
   * @response `200` `CatalogGetCategoryCreateData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  catalogGetCategoryCreate = (
    categoryId: number,
    data: CatalogProductsCommandDto,
    params: RequestParams = {},
  ) =>
    this.request<CatalogGetCategoryCreateData, CatalogGetCategoryCreateError>({
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
   * @name CatalogGetCategoryProductsCreate
   * @summary Get the category products
   * @request POST:/api-frontend/Catalog/GetCategoryProducts/{categoryId}
   * @secure
   * @response `200` `CatalogGetCategoryProductsCreateData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  catalogGetCategoryProductsCreate = (
    categoryId: number,
    data: CatalogProductsCommandDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CatalogGetCategoryProductsCreateData,
      CatalogGetCategoryProductsCreateError
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
   * @name CatalogGetCatalogRootList
   * @summary Get catalog root (list of categories)
   * @request GET:/api-frontend/Catalog/GetCatalogRoot
   * @secure
   * @response `200` `CatalogGetCatalogRootListData` OK
   * @response `401` `string` Unauthorized
   */
  catalogGetCatalogRootList = (
    query: CatalogGetCatalogRootListParams,
    params: RequestParams = {},
  ) =>
    this.request<CatalogGetCatalogRootListData, CatalogGetCatalogRootListError>(
      {
        path: `/api-frontend/Catalog/GetCatalogRoot`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
    );
  /**
   * No description
   *
   * @tags Catalog
   * @name CatalogGetCatalogSubCategoriesDetail
   * @summary Get catalog sub categories
   * @request GET:/api-frontend/Catalog/GetCatalogSubCategories/{id}
   * @secure
   * @response `200` `CatalogGetCatalogSubCategoriesDetailData` OK
   * @response `401` `string` Unauthorized
   */
  catalogGetCatalogSubCategoriesDetail = (
    id: number,
    params: RequestParams = {},
  ) =>
    this.request<
      CatalogGetCatalogSubCategoriesDetailData,
      CatalogGetCatalogSubCategoriesDetailError
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
   * @name CatalogHomePageCategoriesList
   * @summary Get categories on Home page
   * @request GET:/api-frontend/Catalog/HomePageCategories
   * @secure
   * @response `200` `CatalogHomePageCategoriesListData` OK
   * @response `401` `string` Unauthorized
   */
  catalogHomePageCategoriesList = (params: RequestParams = {}) =>
    this.request<
      CatalogHomePageCategoriesListData,
      CatalogHomePageCategoriesListError
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
   * @name CatalogGetManufacturerCreate
   * @summary Get manufacturer
   * @request POST:/api-frontend/Catalog/GetManufacturer/{manufacturerId}
   * @secure
   * @response `200` `CatalogGetManufacturerCreateData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  catalogGetManufacturerCreate = (
    manufacturerId: number,
    data: CatalogProductsCommandDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CatalogGetManufacturerCreateData,
      CatalogGetManufacturerCreateError
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
   * @name CatalogGetManufacturerProductsCreate
   * @summary Get manufacturer products
   * @request POST:/api-frontend/Catalog/GetManufacturerProducts/{manufacturerId}
   * @secure
   * @response `200` `CatalogGetManufacturerProductsCreateData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  catalogGetManufacturerProductsCreate = (
    manufacturerId: number,
    data: CatalogProductsCommandDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CatalogGetManufacturerProductsCreateData,
      CatalogGetManufacturerProductsCreateError
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
   * @name CatalogManufacturerAllList
   * @summary Get all manufacturers
   * @request GET:/api-frontend/Catalog/ManufacturerAll
   * @secure
   * @response `200` `CatalogManufacturerAllListData` OK
   * @response `401` `string` Unauthorized
   */
  catalogManufacturerAllList = (params: RequestParams = {}) =>
    this.request<
      CatalogManufacturerAllListData,
      CatalogManufacturerAllListError
    >({
      path: `/api-frontend/Catalog/ManufacturerAll`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Catalog
   * @name CatalogGetVendorCreate
   * @summary Vendor
   * @request POST:/api-frontend/Catalog/GetVendor/{vendorId}
   * @secure
   * @response `200` `CatalogGetVendorCreateData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  catalogGetVendorCreate = (
    vendorId: number,
    data: CatalogProductsCommandDto,
    params: RequestParams = {},
  ) =>
    this.request<CatalogGetVendorCreateData, CatalogGetVendorCreateError>({
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
   * @name CatalogGetVendorProductsCreate
   * @summary Get vendor products
   * @request POST:/api-frontend/Catalog/GetVendorProducts/{vendorId}
   * @secure
   * @response `200` `CatalogGetVendorProductsCreateData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  catalogGetVendorProductsCreate = (
    vendorId: number,
    data: CatalogProductsCommandDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CatalogGetVendorProductsCreateData,
      CatalogGetVendorProductsCreateError
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
   * @name CatalogVendorReviewsCreate
   * @summary Get vendor products
   * @request POST:/api-frontend/Catalog/VendorReviews/{vendorId}
   * @secure
   * @response `200` `CatalogVendorReviewsCreateData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  catalogVendorReviewsCreate = (
    vendorId: number,
    data: VendorReviewsPagingFilteringModel,
    params: RequestParams = {},
  ) =>
    this.request<
      CatalogVendorReviewsCreateData,
      CatalogVendorReviewsCreateError
    >({
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
   * @name CatalogVendorAllList
   * @summary Get all vendors
   * @request GET:/api-frontend/Catalog/VendorAll
   * @secure
   * @response `200` `CatalogVendorAllListData` OK
   * @response `401` `string` Unauthorized
   */
  catalogVendorAllList = (params: RequestParams = {}) =>
    this.request<CatalogVendorAllListData, CatalogVendorAllListError>({
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
   * @name CatalogGetProductsByTagCreate
   * @summary Get products by tag
   * @request POST:/api-frontend/Catalog/GetProductsByTag/{productTagId}
   * @secure
   * @response `200` `CatalogGetProductsByTagCreateData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  catalogGetProductsByTagCreate = (
    productTagId: number,
    data: CatalogProductsCommandDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CatalogGetProductsByTagCreateData,
      CatalogGetProductsByTagCreateError
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
   * @name CatalogGetTagProductsCreate
   * @summary Get tag products
   * @request POST:/api-frontend/Catalog/GetTagProducts/{productTagId}
   * @secure
   * @response `200` `CatalogGetTagProductsCreateData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  catalogGetTagProductsCreate = (
    productTagId: number,
    data: CatalogProductsCommandDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CatalogGetTagProductsCreateData,
      CatalogGetTagProductsCreateError
    >({
      path: `/api-frontend/Catalog/GetTagProducts/${productTagId}`,
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
   * @name CatalogProductTagsAllList
   * @summary Get all popular product tags
   * @request GET:/api-frontend/Catalog/ProductTagsAll
   * @secure
   * @response `200` `CatalogProductTagsAllListData` OK
   * @response `401` `string` Unauthorized
   */
  catalogProductTagsAllList = (params: RequestParams = {}) =>
    this.request<CatalogProductTagsAllListData, CatalogProductTagsAllListError>(
      {
        path: `/api-frontend/Catalog/ProductTagsAll`,
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
   * @name CatalogNewProductsList
   * @request GET:/api-frontend/Catalog/NewProducts
   * @secure
   * @response `200` `CatalogNewProductsListData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  catalogNewProductsList = (
    data: CatalogProductsCommandDto,
    params: RequestParams = {},
  ) =>
    this.request<CatalogNewProductsListData, CatalogNewProductsListError>({
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
   * @name CatalogNewProductsRssList
   * @request GET:/api-frontend/Catalog/NewProductsRss
   * @secure
   * @response `200` `CatalogNewProductsRssListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  catalogNewProductsRssList = (params: RequestParams = {}) =>
    this.request<CatalogNewProductsRssListData, CatalogNewProductsRssListError>(
      {
        path: `/api-frontend/Catalog/NewProductsRss`,
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
   * @name CatalogSearchCreate
   * @summary Search
   * @request POST:/api-frontend/Catalog/Search
   * @secure
   * @response `200` `CatalogSearchCreateData` OK
   * @response `401` `string` Unauthorized
   */
  catalogSearchCreate = (data: SearchRequest, params: RequestParams = {}) =>
    this.request<CatalogSearchCreateData, CatalogSearchCreateError>({
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
   * @name CatalogSearchTermAutoCompleteList
   * @summary Search term auto complete
   * @request GET:/api-frontend/Catalog/SearchTermAutoComplete
   * @secure
   * @response `200` `CatalogSearchTermAutoCompleteListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  catalogSearchTermAutoCompleteList = (
    query: CatalogSearchTermAutoCompleteListParams,
    params: RequestParams = {},
  ) =>
    this.request<
      CatalogSearchTermAutoCompleteListData,
      CatalogSearchTermAutoCompleteListError
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
   * @name CatalogSearchProductsCreate
   * @summary Search products
   * @request POST:/api-frontend/Catalog/SearchProducts
   * @secure
   * @response `200` `CatalogSearchProductsCreateData` OK
   * @response `401` `string` Unauthorized
   */
  catalogSearchProductsCreate = (
    data: SearchRequest,
    params: RequestParams = {},
  ) =>
    this.request<
      CatalogSearchProductsCreateData,
      CatalogSearchProductsCreateError
    >({
      path: `/api-frontend/Catalog/SearchProducts`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
