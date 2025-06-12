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
  GetScheduleTaskRunTaskData,
  GetScheduleTaskRunTaskError,
  GetScheduleTaskRunTaskParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class ScheduleTask<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ScheduleTask
   * @name GetScheduleTaskRunTask
   * @summary Run task
   * @request GET:/api-frontend/ScheduleTask/RunTask
   * @secure
   * @response `200` `GetScheduleTaskRunTaskData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getScheduleTaskRunTask = (
    query: GetScheduleTaskRunTaskParams,
    params: RequestParams = {},
  ) =>
    this.request<GetScheduleTaskRunTaskData, GetScheduleTaskRunTaskError>({
      path: `/api-frontend/ScheduleTask/RunTask`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
