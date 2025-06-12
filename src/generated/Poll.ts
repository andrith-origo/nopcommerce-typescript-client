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

import { GetPollVoteData, GetPollVoteError } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Poll<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Poll
   * @name GetPollVote
   * @request GET:/api-frontend/Poll/Vote/{pollAnswerId}
   * @secure
   * @response `200` `GetPollVoteData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getPollVote = (pollAnswerId: number, params: RequestParams = {}) =>
    this.request<GetPollVoteData, GetPollVoteError>({
      path: `/api-frontend/Poll/Vote/${pollAnswerId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
