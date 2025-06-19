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
  CommonContactUsListData,
  CommonContactUsListError,
  CommonContactUsSendCreateData,
  CommonContactUsSendCreateError,
  CommonContactVendorDetailData,
  CommonContactVendorDetailError,
  CommonContactVendorSendCreateData,
  CommonContactVendorSendCreateError,
  CommonEuCookieLawAcceptListData,
  CommonEuCookieLawAcceptListError,
  CommonGetCurrencySelectorListData,
  CommonGetCurrencySelectorListError,
  CommonGetLanguageSelectorListData,
  CommonGetLanguageSelectorListError,
  CommonGetTaxSelectorListData,
  CommonGetTaxSelectorListError,
  CommonRobotsTextFileListData,
  CommonRobotsTextFileListError,
  CommonSetCurrencyCreateData,
  CommonSetCurrencyCreateError,
  CommonSetLanguageCreateData,
  CommonSetLanguageCreateError,
  CommonSetStoreThemeListError,
  CommonSetStoreThemeListParams,
  CommonSetTaxTypeCreateData,
  CommonSetTaxTypeCreateError,
  CommonSetTaxTypeCreateParams,
  CommonSitemapCreateData,
  CommonSitemapCreateError,
  CommonSitemapXmlDetailData,
  CommonSitemapXmlDetailError,
  ContactUsModelDto,
  ContactVendorModelDto,
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
   * @name CommonGetLanguageSelectorList
   * @summary Get language selector
   * @request GET:/api-frontend/Common/GetLanguageSelector
   * @secure
   * @response `200` `CommonGetLanguageSelectorListData` OK
   * @response `401` `string` Unauthorized
   */
  commonGetLanguageSelectorList = (params: RequestParams = {}) =>
    this.request<
      CommonGetLanguageSelectorListData,
      CommonGetLanguageSelectorListError
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
   * @name CommonSetLanguageCreate
   * @summary Set language
   * @request POST:/api-frontend/Common/SetLanguage/{langId}
   * @secure
   * @response `200` `CommonSetLanguageCreateData` OK
   * @response `401` `string` Unauthorized
   */
  commonSetLanguageCreate = (langId: number, params: RequestParams = {}) =>
    this.request<CommonSetLanguageCreateData, CommonSetLanguageCreateError>({
      path: `/api-frontend/Common/SetLanguage/${langId}`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Common
   * @name CommonGetCurrencySelectorList
   * @summary Get currency selector
   * @request GET:/api-frontend/Common/GetCurrencySelector
   * @secure
   * @response `200` `CommonGetCurrencySelectorListData` OK
   * @response `401` `string` Unauthorized
   */
  commonGetCurrencySelectorList = (params: RequestParams = {}) =>
    this.request<
      CommonGetCurrencySelectorListData,
      CommonGetCurrencySelectorListError
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
   * @name CommonSetCurrencyCreate
   * @summary Set currency
   * @request POST:/api-frontend/Common/SetCurrency/{customerCurrencyId}
   * @secure
   * @response `200` `CommonSetCurrencyCreateData` OK
   * @response `401` `string` Unauthorized
   */
  commonSetCurrencyCreate = (
    customerCurrencyId: number,
    params: RequestParams = {},
  ) =>
    this.request<CommonSetCurrencyCreateData, CommonSetCurrencyCreateError>({
      path: `/api-frontend/Common/SetCurrency/${customerCurrencyId}`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Common
   * @name CommonGetTaxSelectorList
   * @summary Get tax selector
   * @request GET:/api-frontend/Common/GetTaxSelector
   * @secure
   * @response `200` `CommonGetTaxSelectorListData` OK
   * @response `401` `string` Unauthorized
   */
  commonGetTaxSelectorList = (params: RequestParams = {}) =>
    this.request<CommonGetTaxSelectorListData, CommonGetTaxSelectorListError>({
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
   * @name CommonSetTaxTypeCreate
   * @summary Set tax type
   * @request POST:/api-frontend/Common/SetTaxType
   * @secure
   * @response `200` `CommonSetTaxTypeCreateData` OK
   * @response `401` `string` Unauthorized
   */
  commonSetTaxTypeCreate = (
    query: CommonSetTaxTypeCreateParams,
    params: RequestParams = {},
  ) =>
    this.request<CommonSetTaxTypeCreateData, CommonSetTaxTypeCreateError>({
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
   * @name CommonContactUsList
   * @summary Contact us page
   * @request GET:/api-frontend/Common/ContactUs
   * @secure
   * @response `200` `CommonContactUsListData` OK
   * @response `401` `string` Unauthorized
   */
  commonContactUsList = (params: RequestParams = {}) =>
    this.request<CommonContactUsListData, CommonContactUsListError>({
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
   * @name CommonContactUsSendCreate
   * @summary Contact us send
   * @request POST:/api-frontend/Common/ContactUsSend
   * @secure
   * @response `200` `CommonContactUsSendCreateData` OK
   * @response `401` `string` Unauthorized
   */
  commonContactUsSendCreate = (
    data: ContactUsModelDto,
    params: RequestParams = {},
  ) =>
    this.request<CommonContactUsSendCreateData, CommonContactUsSendCreateError>(
      {
        path: `/api-frontend/Common/ContactUsSend`,
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
   * @tags Common
   * @name CommonContactVendorDetail
   * @summary contact vendor page
   * @request GET:/api-frontend/Common/ContactVendor/{vendorId}
   * @secure
   * @response `200` `CommonContactVendorDetailData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  commonContactVendorDetail = (vendorId: number, params: RequestParams = {}) =>
    this.request<CommonContactVendorDetailData, CommonContactVendorDetailError>(
      {
        path: `/api-frontend/Common/ContactVendor/${vendorId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
    );
  /**
   * No description
   *
   * @tags Common
   * @name CommonContactVendorSendCreate
   * @summary Contact vendor vend
   * @request POST:/api-frontend/Common/ContactVendorSend
   * @secure
   * @response `200` `CommonContactVendorSendCreateData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  commonContactVendorSendCreate = (
    data: ContactVendorModelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CommonContactVendorSendCreateData,
      CommonContactVendorSendCreateError
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
   * @name CommonSitemapCreate
   * @summary sitemap page
   * @request POST:/api-frontend/Common/Sitemap
   * @secure
   * @response `200` `CommonSitemapCreateData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  commonSitemapCreate = (
    data: SitemapPageModelDto,
    params: RequestParams = {},
  ) =>
    this.request<CommonSitemapCreateData, CommonSitemapCreateError>({
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
   * @name CommonSitemapXmlDetail
   * @summary SEO sitemap page
   * @request GET:/api-frontend/Common/SitemapXml/{id}
   * @secure
   * @response `200` `CommonSitemapXmlDetailData` OK
   * @response `401` `string` Unauthorized
   */
  commonSitemapXmlDetail = (id: number, params: RequestParams = {}) =>
    this.request<CommonSitemapXmlDetailData, CommonSitemapXmlDetailError>({
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
   * @name CommonSetStoreThemeList
   * @summary Set store theme
   * @request GET:/api-frontend/Common/SetStoreTheme
   * @secure
   * @response `401` `string` Unauthorized
   */
  commonSetStoreThemeList = (
    query: CommonSetStoreThemeListParams,
    params: RequestParams = {},
  ) =>
    this.request<any, CommonSetStoreThemeListError>({
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
   * @name CommonEuCookieLawAcceptList
   * @summary Eu cookie law accept
   * @request GET:/api-frontend/Common/EuCookieLawAccept
   * @secure
   * @response `200` `CommonEuCookieLawAcceptListData` OK
   * @response `401` `string` Unauthorized
   */
  commonEuCookieLawAcceptList = (params: RequestParams = {}) =>
    this.request<
      CommonEuCookieLawAcceptListData,
      CommonEuCookieLawAcceptListError
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
   * @name CommonRobotsTextFileList
   * @summary robots.txt file
   * @request GET:/api-frontend/Common/RobotsTextFile
   * @secure
   * @response `200` `CommonRobotsTextFileListData` OK
   * @response `401` `string` Unauthorized
   */
  commonRobotsTextFileList = (params: RequestParams = {}) =>
    this.request<CommonRobotsTextFileListData, CommonRobotsTextFileListError>({
      path: `/api-frontend/Common/RobotsTextFile`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
