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
  DeletePrivateMessagesDeletePmData,
  DeletePrivateMessagesDeletePmError,
  GetPrivateMessagesIndexData,
  GetPrivateMessagesIndexError,
  GetPrivateMessagesIndexParams,
  GetPrivateMessagesSendPmData,
  GetPrivateMessagesSendPmError,
  GetPrivateMessagesSendPmParams,
  GetPrivateMessagesViewPmData,
  GetPrivateMessagesViewPmError,
  PostPrivateMessagesDeleteInboxPmData,
  PostPrivateMessagesDeleteInboxPmError,
  PostPrivateMessagesDeleteInboxPmPayload,
  PostPrivateMessagesDeleteSentPmData,
  PostPrivateMessagesDeleteSentPmError,
  PostPrivateMessagesDeleteSentPmPayload,
  PostPrivateMessagesMarkUnreadData,
  PostPrivateMessagesMarkUnreadError,
  PostPrivateMessagesMarkUnreadPayload,
  PostPrivateMessagesSendPmData,
  PostPrivateMessagesSendPmError,
  SendPrivateMessageModelDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PrivateMessages<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags PrivateMessages
   * @name GetPrivateMessagesIndex
   * @request GET:/api-frontend/PrivateMessages/Index
   * @secure
   * @response `200` `GetPrivateMessagesIndexData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  getPrivateMessagesIndex = (
    query: GetPrivateMessagesIndexParams,
    params: RequestParams = {},
  ) =>
    this.request<GetPrivateMessagesIndexData, GetPrivateMessagesIndexError>({
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
   * @name PostPrivateMessagesDeleteInboxPm
   * @request POST:/api-frontend/PrivateMessages/DeleteInboxPM
   * @secure
   * @response `200` `PostPrivateMessagesDeleteInboxPmData` OK
   * @response `401` `string` Unauthorized
   */
  postPrivateMessagesDeleteInboxPm = (
    data: PostPrivateMessagesDeleteInboxPmPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PostPrivateMessagesDeleteInboxPmData,
      PostPrivateMessagesDeleteInboxPmError
    >({
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
   * @name PostPrivateMessagesMarkUnread
   * @request POST:/api-frontend/PrivateMessages/MarkUnread
   * @secure
   * @response `200` `PostPrivateMessagesMarkUnreadData` OK
   * @response `401` `string` Unauthorized
   */
  postPrivateMessagesMarkUnread = (
    data: PostPrivateMessagesMarkUnreadPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PostPrivateMessagesMarkUnreadData,
      PostPrivateMessagesMarkUnreadError
    >({
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
   * @name PostPrivateMessagesDeleteSentPm
   * @request POST:/api-frontend/PrivateMessages/DeleteSentPM
   * @secure
   * @response `200` `PostPrivateMessagesDeleteSentPmData` OK
   * @response `401` `string` Unauthorized
   */
  postPrivateMessagesDeleteSentPm = (
    data: PostPrivateMessagesDeleteSentPmPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PostPrivateMessagesDeleteSentPmData,
      PostPrivateMessagesDeleteSentPmError
    >({
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
   * @name GetPrivateMessagesSendPm
   * @request GET:/api-frontend/PrivateMessages/SendPM/{toCustomerId}
   * @secure
   * @response `200` `GetPrivateMessagesSendPmData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getPrivateMessagesSendPm = (
    { toCustomerId, ...query }: GetPrivateMessagesSendPmParams,
    params: RequestParams = {},
  ) =>
    this.request<GetPrivateMessagesSendPmData, GetPrivateMessagesSendPmError>({
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
   * @name PostPrivateMessagesSendPm
   * @request POST:/api-frontend/PrivateMessages/SendPM
   * @secure
   * @response `200` `PostPrivateMessagesSendPmData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postPrivateMessagesSendPm = (
    data: SendPrivateMessageModelDto,
    params: RequestParams = {},
  ) =>
    this.request<PostPrivateMessagesSendPmData, PostPrivateMessagesSendPmError>(
      {
        path: `/api-frontend/PrivateMessages/SendPM`,
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
   * @tags PrivateMessages
   * @name GetPrivateMessagesViewPm
   * @request GET:/api-frontend/PrivateMessages/ViewPM/{privateMessageId}
   * @secure
   * @response `200` `GetPrivateMessagesViewPmData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getPrivateMessagesViewPm = (
    privateMessageId: number,
    params: RequestParams = {},
  ) =>
    this.request<GetPrivateMessagesViewPmData, GetPrivateMessagesViewPmError>({
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
   * @name DeletePrivateMessagesDeletePm
   * @request DELETE:/api-frontend/PrivateMessages/DeletePM/{privateMessageId}
   * @secure
   * @response `200` `DeletePrivateMessagesDeletePmData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   */
  deletePrivateMessagesDeletePm = (
    privateMessageId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      DeletePrivateMessagesDeletePmData,
      DeletePrivateMessagesDeletePmError
    >({
      path: `/api-frontend/PrivateMessages/DeletePM/${privateMessageId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
