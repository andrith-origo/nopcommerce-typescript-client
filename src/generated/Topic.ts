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
  TopicGetTopicDetailsBySystemNameDetailData,
  TopicGetTopicDetailsBySystemNameDetailError,
  TopicGetTopicDetailsDetailData,
  TopicGetTopicDetailsDetailError,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Topic<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Topic
   * @name TopicGetTopicDetailsDetail
   * @summary Gets a topic details
   * @request GET:/api-frontend/Topic/GetTopicDetails/{id}
   * @secure
   * @response `200` `TopicGetTopicDetailsDetailData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  topicGetTopicDetailsDetail = (id: number, params: RequestParams = {}) =>
    this.request<
      TopicGetTopicDetailsDetailData,
      TopicGetTopicDetailsDetailError
    >({
      path: `/api-frontend/Topic/GetTopicDetails/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Topic
   * @name TopicGetTopicDetailsBySystemNameDetail
   * @summary Gets a topic details by system name
   * @request GET:/api-frontend/Topic/GetTopicDetailsBySystemName/{systemName}
   * @secure
   * @response `200` `TopicGetTopicDetailsBySystemNameDetailData` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  topicGetTopicDetailsBySystemNameDetail = (
    systemName: string,
    params: RequestParams = {},
  ) =>
    this.request<
      TopicGetTopicDetailsBySystemNameDetailData,
      TopicGetTopicDetailsBySystemNameDetailError
    >({
      path: `/api-frontend/Topic/GetTopicDetailsBySystemName/${systemName}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
