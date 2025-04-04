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
  PrivateMessagesDeleteInboxPmCreateData,
  PrivateMessagesDeleteInboxPmCreateError,
  PrivateMessagesDeleteInboxPmCreatePayload,
  PrivateMessagesDeletePmDeleteData,
  PrivateMessagesDeletePmDeleteError,
  PrivateMessagesDeleteSentPmCreateData,
  PrivateMessagesDeleteSentPmCreateError,
  PrivateMessagesDeleteSentPmCreatePayload,
  PrivateMessagesIndexListData,
  PrivateMessagesIndexListError,
  PrivateMessagesIndexListParams,
  PrivateMessagesMarkUnreadCreateData,
  PrivateMessagesMarkUnreadCreateError,
  PrivateMessagesMarkUnreadCreatePayload,
  PrivateMessagesSendPmCreateData,
  PrivateMessagesSendPmCreateError,
  PrivateMessagesSendPmDetailData,
  PrivateMessagesSendPmDetailError,
  PrivateMessagesSendPmDetailParams,
  PrivateMessagesViewPmDetailData,
  PrivateMessagesViewPmDetailError,
  SendPrivateMessageModelDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PrivateMessages<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags PrivateMessages
   * @name PrivateMessagesIndexList
   * @request GET:/api-frontend/PrivateMessages/Index
   * @secure
   * @response `200` `PrivateMessagesIndexListData` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  privateMessagesIndexList = (query: PrivateMessagesIndexListParams, params: RequestParams = {}) =>
    this.request<PrivateMessagesIndexListData, PrivateMessagesIndexListError>({
      path: `/api-frontend/PrivateMessages/Index`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PrivateMessages
   * @name PrivateMessagesDeleteInboxPmCreate
   * @request POST:/api-frontend/PrivateMessages/DeleteInboxPM
   * @secure
   * @response `200` `PrivateMessagesDeleteInboxPmCreateData` Success
   * @response `401` `string` Unauthorized
   */
  privateMessagesDeleteInboxPmCreate = (data: PrivateMessagesDeleteInboxPmCreatePayload, params: RequestParams = {}) =>
    this.request<PrivateMessagesDeleteInboxPmCreateData, PrivateMessagesDeleteInboxPmCreateError>({
      path: `/api-frontend/PrivateMessages/DeleteInboxPM`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags PrivateMessages
   * @name PrivateMessagesMarkUnreadCreate
   * @request POST:/api-frontend/PrivateMessages/MarkUnread
   * @secure
   * @response `200` `PrivateMessagesMarkUnreadCreateData` Success
   * @response `401` `string` Unauthorized
   */
  privateMessagesMarkUnreadCreate = (data: PrivateMessagesMarkUnreadCreatePayload, params: RequestParams = {}) =>
    this.request<PrivateMessagesMarkUnreadCreateData, PrivateMessagesMarkUnreadCreateError>({
      path: `/api-frontend/PrivateMessages/MarkUnread`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags PrivateMessages
   * @name PrivateMessagesDeleteSentPmCreate
   * @request POST:/api-frontend/PrivateMessages/DeleteSentPM
   * @secure
   * @response `200` `PrivateMessagesDeleteSentPmCreateData` Success
   * @response `401` `string` Unauthorized
   */
  privateMessagesDeleteSentPmCreate = (data: PrivateMessagesDeleteSentPmCreatePayload, params: RequestParams = {}) =>
    this.request<PrivateMessagesDeleteSentPmCreateData, PrivateMessagesDeleteSentPmCreateError>({
      path: `/api-frontend/PrivateMessages/DeleteSentPM`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags PrivateMessages
   * @name PrivateMessagesSendPmDetail
   * @request GET:/api-frontend/PrivateMessages/SendPM/{toCustomerId}
   * @secure
   * @response `200` `PrivateMessagesSendPmDetailData` Success
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  privateMessagesSendPmDetail = (
    { toCustomerId, ...query }: PrivateMessagesSendPmDetailParams,
    params: RequestParams = {},
  ) =>
    this.request<PrivateMessagesSendPmDetailData, PrivateMessagesSendPmDetailError>({
      path: `/api-frontend/PrivateMessages/SendPM/${toCustomerId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PrivateMessages
   * @name PrivateMessagesSendPmCreate
   * @request POST:/api-frontend/PrivateMessages/SendPM
   * @secure
   * @response `200` `PrivateMessagesSendPmCreateData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  privateMessagesSendPmCreate = (data: SendPrivateMessageModelDto, params: RequestParams = {}) =>
    this.request<PrivateMessagesSendPmCreateData, PrivateMessagesSendPmCreateError>({
      path: `/api-frontend/PrivateMessages/SendPM`,
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
   * @tags PrivateMessages
   * @name PrivateMessagesViewPmDetail
   * @request GET:/api-frontend/PrivateMessages/ViewPM/{privateMessageId}
   * @secure
   * @response `200` `PrivateMessagesViewPmDetailData` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  privateMessagesViewPmDetail = (privateMessageId: number, params: RequestParams = {}) =>
    this.request<PrivateMessagesViewPmDetailData, PrivateMessagesViewPmDetailError>({
      path: `/api-frontend/PrivateMessages/ViewPM/${privateMessageId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PrivateMessages
   * @name PrivateMessagesDeletePmDelete
   * @request DELETE:/api-frontend/PrivateMessages/DeletePM/{privateMessageId}
   * @secure
   * @response `200` `PrivateMessagesDeletePmDeleteData` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  privateMessagesDeletePmDelete = (privateMessageId: number, params: RequestParams = {}) =>
    this.request<PrivateMessagesDeletePmDeleteData, PrivateMessagesDeletePmDeleteError>({
      path: `/api-frontend/PrivateMessages/DeletePM/${privateMessageId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
