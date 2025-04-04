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
  ScheduleTaskRunTaskListData,
  ScheduleTaskRunTaskListError,
  ScheduleTaskRunTaskListParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class ScheduleTask<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ScheduleTask
   * @name ScheduleTaskRunTaskList
   * @summary Run task
   * @request GET:/api-frontend/ScheduleTask/RunTask
   * @secure
   * @response `200` `ScheduleTaskRunTaskListData` Success
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  scheduleTaskRunTaskList = (query: ScheduleTaskRunTaskListParams, params: RequestParams = {}) =>
    this.request<ScheduleTaskRunTaskListData, ScheduleTaskRunTaskListError>({
      path: `/api-frontend/ScheduleTask/RunTask`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
