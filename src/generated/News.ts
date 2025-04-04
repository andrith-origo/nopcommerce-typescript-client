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
  NewsGetNewsItemDetailData,
  NewsGetNewsItemDetailError,
  NewsItemModelDto,
  NewsListCreateData,
  NewsListCreateError,
  NewsListRssDetailData,
  NewsListRssDetailError,
  NewsNewsCommentAddCreateData,
  NewsNewsCommentAddCreateError,
  NewsPagingFilteringModelDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class News<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags News
   * @name NewsListCreate
   * @request POST:/api-frontend/News/List
   * @secure
   * @response `200` `NewsListCreateData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  newsListCreate = (data: NewsPagingFilteringModelDto, params: RequestParams = {}) =>
    this.request<NewsListCreateData, NewsListCreateError>({
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
   * @name NewsListRssDetail
   * @request GET:/api-frontend/News/ListRss/{languageId}
   * @secure
   * @response `200` `NewsListRssDetailData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  newsListRssDetail = (languageId: number, params: RequestParams = {}) =>
    this.request<NewsListRssDetailData, NewsListRssDetailError>({
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
   * @name NewsGetNewsItemDetail
   * @request GET:/api-frontend/News/GetNewsItem/{newsItemId}
   * @secure
   * @response `200` `NewsGetNewsItemDetailData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  newsGetNewsItemDetail = (newsItemId: number, params: RequestParams = {}) =>
    this.request<NewsGetNewsItemDetailData, NewsGetNewsItemDetailError>({
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
   * @name NewsNewsCommentAddCreate
   * @request POST:/api-frontend/News/NewsCommentAdd/{newsItemId}
   * @secure
   * @response `200` `NewsNewsCommentAddCreateData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  newsNewsCommentAddCreate = (newsItemId: number, data: NewsItemModelDto, params: RequestParams = {}) =>
    this.request<NewsNewsCommentAddCreateData, NewsNewsCommentAddCreateError>({
      path: `/api-frontend/News/NewsCommentAdd/${newsItemId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
