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
  GetNewsGetNewsItemData,
  GetNewsGetNewsItemError,
  GetNewsListRssData,
  GetNewsListRssError,
  NewsItemModelDto,
  NewsPagingFilteringModelDto,
  PostNewsListData,
  PostNewsListError,
  PostNewsNewsCommentAddData,
  PostNewsNewsCommentAddError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class News<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags News
   * @name PostNewsList
   * @request POST:/api-frontend/News/List
   * @secure
   * @response `200` `PostNewsListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  postNewsList = (
    data: NewsPagingFilteringModelDto,
    params: RequestParams = {},
  ) =>
    this.request<PostNewsListData, PostNewsListError>({
      path: `/api-frontend/News/List`,
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
   * @tags News
   * @name GetNewsListRss
   * @request GET:/api-frontend/News/ListRss/{languageId}
   * @secure
   * @response `200` `GetNewsListRssData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  getNewsListRss = (languageId: number, params: RequestParams = {}) =>
    this.request<GetNewsListRssData, GetNewsListRssError>({
      path: `/api-frontend/News/ListRss/${languageId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags News
   * @name GetNewsGetNewsItem
   * @request GET:/api-frontend/News/GetNewsItem/{newsItemId}
   * @secure
   * @response `200` `GetNewsGetNewsItemData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getNewsGetNewsItem = (newsItemId: number, params: RequestParams = {}) =>
    this.request<GetNewsGetNewsItemData, GetNewsGetNewsItemError>({
      path: `/api-frontend/News/GetNewsItem/${newsItemId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags News
   * @name PostNewsNewsCommentAdd
   * @request POST:/api-frontend/News/NewsCommentAdd/{newsItemId}
   * @secure
   * @response `200` `PostNewsNewsCommentAddData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postNewsNewsCommentAdd = (
    newsItemId: number,
    data: NewsItemModelDto,
    params: RequestParams = {},
  ) =>
    this.request<PostNewsNewsCommentAddData, PostNewsNewsCommentAddError>({
      path: `/api-frontend/News/NewsCommentAdd/${newsItemId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
