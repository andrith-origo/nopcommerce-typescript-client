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
  GetDownloadGetDownloadData,
  GetDownloadGetDownloadError,
  GetDownloadGetDownloadParams,
  GetDownloadGetFileUploadError,
  GetDownloadGetFileUploadParams,
  GetDownloadGetLicenseError,
  GetDownloadGetLicenseParams,
  GetDownloadGetOrderNoteFileError,
  GetDownloadPdfInvoiceData,
  GetDownloadPdfInvoiceError,
  GetDownloadSampleData,
  GetDownloadSampleError,
  GetDownloadWebDownloadError,
  GetDownloadWebDownloadParams,
  GetDownloadWebPdfInvoiceError,
  GetDownloadWebSampleError,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Download<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Download
   * @name GetDownloadWebPdfInvoice
   * @request GET:/api-frontend/Download/WebPdfInvoice/{orderId}
   * @secure
   * @response `302` `void` Found
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getDownloadWebPdfInvoice = (orderId: number, params: RequestParams = {}) =>
    this.request<any, GetDownloadWebPdfInvoiceError>({
      path: `/api-frontend/Download/WebPdfInvoice/${orderId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Download
   * @name GetDownloadPdfInvoice
   * @request GET:/api-frontend/Download/PdfInvoice/{orderId}
   * @secure
   * @response `200` `GetDownloadPdfInvoiceData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getDownloadPdfInvoice = (orderId: number, params: RequestParams = {}) =>
    this.request<GetDownloadPdfInvoiceData, GetDownloadPdfInvoiceError>({
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
   * @name GetDownloadWebSample
   * @summary Sample
   * @request GET:/api-frontend/Download/WebSample/{productId}
   * @secure
   * @response `302` `void` Found
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getDownloadWebSample = (productId: number, params: RequestParams = {}) =>
    this.request<any, GetDownloadWebSampleError>({
      path: `/api-frontend/Download/WebSample/${productId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Download
   * @name GetDownloadSample
   * @summary Sample
   * @request GET:/api-frontend/Download/Sample/{productId}
   * @secure
   * @response `200` `GetDownloadSampleData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getDownloadSample = (productId: number, params: RequestParams = {}) =>
    this.request<GetDownloadSampleData, GetDownloadSampleError>({
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
   * @name GetDownloadGetDownload
   * @summary Get download
   * @request GET:/api-frontend/Download/GetDownload
   * @secure
   * @response `200` `GetDownloadGetDownloadData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getDownloadGetDownload = (
    query: GetDownloadGetDownloadParams,
    params: RequestParams = {},
  ) =>
    this.request<GetDownloadGetDownloadData, GetDownloadGetDownloadError>({
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
   * @name GetDownloadWebDownload
   * @summary Get download
   * @request GET:/api-frontend/Download/WebDownload
   * @secure
   * @response `302` `void` Found
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getDownloadWebDownload = (
    query: GetDownloadWebDownloadParams,
    params: RequestParams = {},
  ) =>
    this.request<any, GetDownloadWebDownloadError>({
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
   * @name GetDownloadGetLicense
   * @summary Get license
   * @request GET:/api-frontend/Download/GetLicense
   * @secure
   * @response `302` `void` Found
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getDownloadGetLicense = (
    query: GetDownloadGetLicenseParams,
    params: RequestParams = {},
  ) =>
    this.request<any, GetDownloadGetLicenseError>({
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
   * @name GetDownloadGetFileUpload
   * @summary Get file upload
   * @request GET:/api-frontend/Download/GetFileUpload
   * @secure
   * @response `302` `void` Found
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getDownloadGetFileUpload = (
    query: GetDownloadGetFileUploadParams,
    params: RequestParams = {},
  ) =>
    this.request<any, GetDownloadGetFileUploadError>({
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
   * @name GetDownloadGetOrderNoteFile
   * @summary Get order note file
   * @request GET:/api-frontend/Download/GetOrderNoteFile/{orderNoteId}
   * @secure
   * @response `302` `void` Found
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getDownloadGetOrderNoteFile = (
    orderNoteId: number,
    params: RequestParams = {},
  ) =>
    this.request<any, GetDownloadGetOrderNoteFileError>({
      path: `/api-frontend/Download/GetOrderNoteFile/${orderNoteId}`,
      method: "GET",
      secure: true,
      ...params,
    });
}
