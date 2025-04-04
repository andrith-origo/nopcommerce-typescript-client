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
  DownloadGetDownloadListData,
  DownloadGetDownloadListError,
  DownloadGetDownloadListParams,
  DownloadGetFileUploadListError,
  DownloadGetFileUploadListParams,
  DownloadGetLicenseListError,
  DownloadGetLicenseListParams,
  DownloadGetOrderNoteFileDetailError,
  DownloadPdfInvoiceDetailData,
  DownloadPdfInvoiceDetailError,
  DownloadSampleDetailData,
  DownloadSampleDetailError,
  DownloadWebDownloadListError,
  DownloadWebDownloadListParams,
  DownloadWebPdfInvoiceDetailError,
  DownloadWebSampleDetailError,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Download<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Download
   * @name DownloadWebPdfInvoiceDetail
   * @request GET:/api-frontend/Download/WebPdfInvoice/{orderId}
   * @secure
   * @response `302` `void` Redirect
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  downloadWebPdfInvoiceDetail = (orderId: number, params: RequestParams = {}) =>
    this.request<any, DownloadWebPdfInvoiceDetailError>({
      path: `/api-frontend/Download/WebPdfInvoice/${orderId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Download
   * @name DownloadPdfInvoiceDetail
   * @request GET:/api-frontend/Download/PdfInvoice/{orderId}
   * @secure
   * @response `200` `DownloadPdfInvoiceDetailData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  downloadPdfInvoiceDetail = (orderId: number, params: RequestParams = {}) =>
    this.request<DownloadPdfInvoiceDetailData, DownloadPdfInvoiceDetailError>({
      path: `/api-frontend/Download/PdfInvoice/${orderId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Download
   * @name DownloadWebSampleDetail
   * @summary Sample
   * @request GET:/api-frontend/Download/WebSample/{productId}
   * @secure
   * @response `302` `void` Redirect
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  downloadWebSampleDetail = (productId: number, params: RequestParams = {}) =>
    this.request<any, DownloadWebSampleDetailError>({
      path: `/api-frontend/Download/WebSample/${productId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Download
   * @name DownloadSampleDetail
   * @summary Sample
   * @request GET:/api-frontend/Download/Sample/{productId}
   * @secure
   * @response `200` `DownloadSampleDetailData` Success
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  downloadSampleDetail = (productId: number, params: RequestParams = {}) =>
    this.request<DownloadSampleDetailData, DownloadSampleDetailError>({
      path: `/api-frontend/Download/Sample/${productId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Download
   * @name DownloadGetDownloadList
   * @summary Get download
   * @request GET:/api-frontend/Download/GetDownload
   * @secure
   * @response `200` `DownloadGetDownloadListData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  downloadGetDownloadList = (query: DownloadGetDownloadListParams, params: RequestParams = {}) =>
    this.request<DownloadGetDownloadListData, DownloadGetDownloadListError>({
      path: `/api-frontend/Download/GetDownload`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Download
   * @name DownloadWebDownloadList
   * @summary Get download
   * @request GET:/api-frontend/Download/WebDownload
   * @secure
   * @response `302` `void` Redirect
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  downloadWebDownloadList = (query: DownloadWebDownloadListParams, params: RequestParams = {}) =>
    this.request<any, DownloadWebDownloadListError>({
      path: `/api-frontend/Download/WebDownload`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Download
   * @name DownloadGetLicenseList
   * @summary Get license
   * @request GET:/api-frontend/Download/GetLicense
   * @secure
   * @response `302` `void` Redirect
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  downloadGetLicenseList = (query: DownloadGetLicenseListParams, params: RequestParams = {}) =>
    this.request<any, DownloadGetLicenseListError>({
      path: `/api-frontend/Download/GetLicense`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Download
   * @name DownloadGetFileUploadList
   * @summary Get file upload
   * @request GET:/api-frontend/Download/GetFileUpload
   * @secure
   * @response `302` `void` Redirect
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  downloadGetFileUploadList = (query: DownloadGetFileUploadListParams, params: RequestParams = {}) =>
    this.request<any, DownloadGetFileUploadListError>({
      path: `/api-frontend/Download/GetFileUpload`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Download
   * @name DownloadGetOrderNoteFileDetail
   * @summary Get order note file
   * @request GET:/api-frontend/Download/GetOrderNoteFile/{orderNoteId}
   * @secure
   * @response `302` `void` Redirect
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  downloadGetOrderNoteFileDetail = (orderNoteId: number, params: RequestParams = {}) =>
    this.request<any, DownloadGetOrderNoteFileDetailError>({
      path: `/api-frontend/Download/GetOrderNoteFile/${orderNoteId}`,
      method: "GET",
      secure: true,
      ...params,
    });
}
