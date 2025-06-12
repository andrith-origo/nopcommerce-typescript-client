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
  ContactUsModelDto,
  ContactVendorModelDto,
  GetCommonContactUsData,
  GetCommonContactUsError,
  GetCommonContactVendorData,
  GetCommonContactVendorError,
  GetCommonEuCookieLawAcceptData,
  GetCommonEuCookieLawAcceptError,
  GetCommonGetCurrencySelectorData,
  GetCommonGetCurrencySelectorError,
  GetCommonGetLanguageSelectorData,
  GetCommonGetLanguageSelectorError,
  GetCommonGetTaxSelectorData,
  GetCommonGetTaxSelectorError,
  GetCommonRobotsTextFileData,
  GetCommonRobotsTextFileError,
  GetCommonSetStoreThemeError,
  GetCommonSetStoreThemeParams,
  GetCommonSitemapXmlData,
  GetCommonSitemapXmlError,
  PostCommonContactUsSendData,
  PostCommonContactUsSendError,
  PostCommonContactVendorSendData,
  PostCommonContactVendorSendError,
  PostCommonSetCurrencyData,
  PostCommonSetCurrencyError,
  PostCommonSetLanguageData,
  PostCommonSetLanguageError,
  PostCommonSetTaxTypeData,
  PostCommonSetTaxTypeError,
  PostCommonSetTaxTypeParams,
  PostCommonSitemapData,
  PostCommonSitemapError,
  SitemapPageModelDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Common<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Common
   * @name GetCommonGetLanguageSelector
   * @summary Get language selector
   * @request GET:/api-frontend/Common/GetLanguageSelector
   * @secure
   * @response `200` `GetCommonGetLanguageSelectorData` OK
   * @response `401` `string` Unauthorized
   */
  getCommonGetLanguageSelector = (params: RequestParams = {}) =>
    this.request<
      GetCommonGetLanguageSelectorData,
      GetCommonGetLanguageSelectorError
    >({
      path: `/api-frontend/Common/GetLanguageSelector`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Common
   * @name PostCommonSetLanguage
   * @summary Set language
   * @request POST:/api-frontend/Common/SetLanguage/{langId}
   * @secure
   * @response `200` `PostCommonSetLanguageData` OK
   * @response `401` `string` Unauthorized
   */
  postCommonSetLanguage = (langId: number, params: RequestParams = {}) =>
    this.request<PostCommonSetLanguageData, PostCommonSetLanguageError>({
      path: `/api-frontend/Common/SetLanguage/${langId}`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Common
   * @name GetCommonGetCurrencySelector
   * @summary Get currency selector
   * @request GET:/api-frontend/Common/GetCurrencySelector
   * @secure
   * @response `200` `GetCommonGetCurrencySelectorData` OK
   * @response `401` `string` Unauthorized
   */
  getCommonGetCurrencySelector = (params: RequestParams = {}) =>
    this.request<
      GetCommonGetCurrencySelectorData,
      GetCommonGetCurrencySelectorError
    >({
      path: `/api-frontend/Common/GetCurrencySelector`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Common
   * @name PostCommonSetCurrency
   * @summary Set currency
   * @request POST:/api-frontend/Common/SetCurrency/{customerCurrencyId}
   * @secure
   * @response `200` `PostCommonSetCurrencyData` OK
   * @response `401` `string` Unauthorized
   */
  postCommonSetCurrency = (
    customerCurrencyId: number,
    params: RequestParams = {},
  ) =>
    this.request<PostCommonSetCurrencyData, PostCommonSetCurrencyError>({
      path: `/api-frontend/Common/SetCurrency/${customerCurrencyId}`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Common
   * @name GetCommonGetTaxSelector
   * @summary Get tax selector
   * @request GET:/api-frontend/Common/GetTaxSelector
   * @secure
   * @response `200` `GetCommonGetTaxSelectorData` OK
   * @response `401` `string` Unauthorized
   */
  getCommonGetTaxSelector = (params: RequestParams = {}) =>
    this.request<GetCommonGetTaxSelectorData, GetCommonGetTaxSelectorError>({
      path: `/api-frontend/Common/GetTaxSelector`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Common
   * @name PostCommonSetTaxType
   * @summary Set tax type
   * @request POST:/api-frontend/Common/SetTaxType
   * @secure
   * @response `200` `PostCommonSetTaxTypeData` OK
   * @response `401` `string` Unauthorized
   */
  postCommonSetTaxType = (
    query: PostCommonSetTaxTypeParams,
    params: RequestParams = {},
  ) =>
    this.request<PostCommonSetTaxTypeData, PostCommonSetTaxTypeError>({
      path: `/api-frontend/Common/SetTaxType`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Common
   * @name GetCommonContactUs
   * @summary Contact us page
   * @request GET:/api-frontend/Common/ContactUs
   * @secure
   * @response `200` `GetCommonContactUsData` OK
   * @response `401` `string` Unauthorized
   */
  getCommonContactUs = (params: RequestParams = {}) =>
    this.request<GetCommonContactUsData, GetCommonContactUsError>({
      path: `/api-frontend/Common/ContactUs`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Common
   * @name PostCommonContactUsSend
   * @summary Contact us send
   * @request POST:/api-frontend/Common/ContactUsSend
   * @secure
   * @response `200` `PostCommonContactUsSendData` OK
   * @response `401` `string` Unauthorized
   */
  postCommonContactUsSend = (
    data: ContactUsModelDto,
    params: RequestParams = {},
  ) =>
    this.request<PostCommonContactUsSendData, PostCommonContactUsSendError>({
      path: `/api-frontend/Common/ContactUsSend`,
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
   * @tags Common
   * @name GetCommonContactVendor
   * @summary contact vendor page
   * @request GET:/api-frontend/Common/ContactVendor/{vendorId}
   * @secure
   * @response `200` `GetCommonContactVendorData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getCommonContactVendor = (vendorId: number, params: RequestParams = {}) =>
    this.request<GetCommonContactVendorData, GetCommonContactVendorError>({
      path: `/api-frontend/Common/ContactVendor/${vendorId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Common
   * @name PostCommonContactVendorSend
   * @summary Contact vendor vend
   * @request POST:/api-frontend/Common/ContactVendorSend
   * @secure
   * @response `200` `PostCommonContactVendorSendData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCommonContactVendorSend = (
    data: ContactVendorModelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCommonContactVendorSendData,
      PostCommonContactVendorSendError
    >({
      path: `/api-frontend/Common/ContactVendorSend`,
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
   * @tags Common
   * @name PostCommonSitemap
   * @summary sitemap page
   * @request POST:/api-frontend/Common/Sitemap
   * @secure
   * @response `200` `PostCommonSitemapData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCommonSitemap = (data: SitemapPageModelDto, params: RequestParams = {}) =>
    this.request<PostCommonSitemapData, PostCommonSitemapError>({
      path: `/api-frontend/Common/Sitemap`,
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
   * @tags Common
   * @name GetCommonSitemapXml
   * @summary SEO sitemap page
   * @request GET:/api-frontend/Common/SitemapXml/{id}
   * @secure
   * @response `200` `GetCommonSitemapXmlData` OK
   * @response `401` `string` Unauthorized
   */
  getCommonSitemapXml = (id: number, params: RequestParams = {}) =>
    this.request<GetCommonSitemapXmlData, GetCommonSitemapXmlError>({
      path: `/api-frontend/Common/SitemapXml/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Common
   * @name GetCommonSetStoreTheme
   * @summary Set store theme
   * @request GET:/api-frontend/Common/SetStoreTheme
   * @secure
   * @response `401` `string` Unauthorized
   */
  getCommonSetStoreTheme = (
    query: GetCommonSetStoreThemeParams,
    params: RequestParams = {},
  ) =>
    this.request<any, GetCommonSetStoreThemeError>({
      path: `/api-frontend/Common/SetStoreTheme`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Common
   * @name GetCommonEuCookieLawAccept
   * @summary Eu cookie law accept
   * @request GET:/api-frontend/Common/EuCookieLawAccept
   * @secure
   * @response `200` `GetCommonEuCookieLawAcceptData` OK
   * @response `401` `string` Unauthorized
   */
  getCommonEuCookieLawAccept = (params: RequestParams = {}) =>
    this.request<
      GetCommonEuCookieLawAcceptData,
      GetCommonEuCookieLawAcceptError
    >({
      path: `/api-frontend/Common/EuCookieLawAccept`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Common
   * @name GetCommonRobotsTextFile
   * @summary robots.txt file
   * @request GET:/api-frontend/Common/RobotsTextFile
   * @secure
   * @response `200` `GetCommonRobotsTextFileData` OK
   * @response `401` `string` Unauthorized
   */
  getCommonRobotsTextFile = (params: RequestParams = {}) =>
    this.request<GetCommonRobotsTextFileData, GetCommonRobotsTextFileError>({
      path: `/api-frontend/Common/RobotsTextFile`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
