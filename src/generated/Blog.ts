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
  BlogPagingFilteringModelDto,
  BlogPostModelDto,
  GetBlogGetBlogPostData,
  GetBlogGetBlogPostError,
  GetBlogListRssData,
  GetBlogListRssError,
  PostBlogBlogByMonthData,
  PostBlogBlogByMonthError,
  PostBlogBlogByTagData,
  PostBlogBlogByTagError,
  PostBlogBlogCommentAddData,
  PostBlogBlogCommentAddError,
  PostBlogListData,
  PostBlogListError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Blog<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Blog
   * @name PostBlogList
   * @request POST:/api-frontend/Blog/List
   * @secure
   * @response `200` `PostBlogListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  postBlogList = (
    data: BlogPagingFilteringModelDto,
    params: RequestParams = {},
  ) =>
    this.request<PostBlogListData, PostBlogListError>({
      path: `/api-frontend/Blog/List`,
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
   * @tags Blog
   * @name PostBlogBlogByTag
   * @request POST:/api-frontend/Blog/BlogByTag
   * @secure
   * @response `200` `PostBlogBlogByTagData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  postBlogBlogByTag = (
    data: BlogPagingFilteringModelDto,
    params: RequestParams = {},
  ) =>
    this.request<PostBlogBlogByTagData, PostBlogBlogByTagError>({
      path: `/api-frontend/Blog/BlogByTag`,
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
   * @tags Blog
   * @name PostBlogBlogByMonth
   * @request POST:/api-frontend/Blog/BlogByMonth
   * @secure
   * @response `200` `PostBlogBlogByMonthData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  postBlogBlogByMonth = (
    data: BlogPagingFilteringModelDto,
    params: RequestParams = {},
  ) =>
    this.request<PostBlogBlogByMonthData, PostBlogBlogByMonthError>({
      path: `/api-frontend/Blog/BlogByMonth`,
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
   * @tags Blog
   * @name GetBlogListRss
   * @request GET:/api-frontend/Blog/ListRss/{languageId}
   * @secure
   * @response `200` `GetBlogListRssData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  getBlogListRss = (languageId: number, params: RequestParams = {}) =>
    this.request<GetBlogListRssData, GetBlogListRssError>({
      path: `/api-frontend/Blog/ListRss/${languageId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Blog
   * @name GetBlogGetBlogPost
   * @request GET:/api-frontend/Blog/GetBlogPost/{blogPostId}
   * @secure
   * @response `200` `GetBlogGetBlogPostData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getBlogGetBlogPost = (blogPostId: number, params: RequestParams = {}) =>
    this.request<GetBlogGetBlogPostData, GetBlogGetBlogPostError>({
      path: `/api-frontend/Blog/GetBlogPost/${blogPostId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Blog
   * @name PostBlogBlogCommentAdd
   * @request POST:/api-frontend/Blog/BlogCommentAdd/{blogPostId}
   * @secure
   * @response `200` `PostBlogBlogCommentAddData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postBlogBlogCommentAdd = (
    blogPostId: number,
    data: BlogPostModelDto,
    params: RequestParams = {},
  ) =>
    this.request<PostBlogBlogCommentAddData, PostBlogBlogCommentAddError>({
      path: `/api-frontend/Blog/BlogCommentAdd/${blogPostId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
