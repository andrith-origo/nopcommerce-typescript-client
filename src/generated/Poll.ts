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

import { PollVoteDetailData, PollVoteDetailError } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Poll<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Poll
   * @name PollVoteDetail
   * @request GET:/api-frontend/Poll/Vote/{pollAnswerId}
   * @secure
   * @response `200` `PollVoteDetailData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  pollVoteDetail = (pollAnswerId: number, params: RequestParams = {}) =>
    this.request<PollVoteDetailData, PollVoteDetailError>({
      path: `/api-frontend/Poll/Vote/${pollAnswerId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
