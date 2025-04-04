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
  BlogBlogByMonthCreateData,
  BlogBlogByMonthCreateError,
  BlogBlogByTagCreateData,
  BlogBlogByTagCreateError,
  BlogBlogCommentAddCreateData,
  BlogBlogCommentAddCreateError,
  BlogGetBlogPostDetailData,
  BlogGetBlogPostDetailError,
  BlogListCreateData,
  BlogListCreateError,
  BlogListRssDetailData,
  BlogListRssDetailError,
  BlogPagingFilteringModelDto,
  BlogPostModelDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Blog<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Blog
   * @name BlogListCreate
   * @request POST:/api-frontend/Blog/List
   * @secure
   * @response `200` `BlogListCreateData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  blogListCreate = (data: BlogPagingFilteringModelDto, params: RequestParams = {}) =>
    this.request<BlogListCreateData, BlogListCreateError>({
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
   * @name BlogBlogByTagCreate
   * @request POST:/api-frontend/Blog/BlogByTag
   * @secure
   * @response `200` `BlogBlogByTagCreateData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  blogBlogByTagCreate = (data: BlogPagingFilteringModelDto, params: RequestParams = {}) =>
    this.request<BlogBlogByTagCreateData, BlogBlogByTagCreateError>({
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
   * @name BlogBlogByMonthCreate
   * @request POST:/api-frontend/Blog/BlogByMonth
   * @secure
   * @response `200` `BlogBlogByMonthCreateData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  blogBlogByMonthCreate = (data: BlogPagingFilteringModelDto, params: RequestParams = {}) =>
    this.request<BlogBlogByMonthCreateData, BlogBlogByMonthCreateError>({
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
   * @name BlogListRssDetail
   * @request GET:/api-frontend/Blog/ListRss/{languageId}
   * @secure
   * @response `200` `BlogListRssDetailData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  blogListRssDetail = (languageId: number, params: RequestParams = {}) =>
    this.request<BlogListRssDetailData, BlogListRssDetailError>({
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
   * @name BlogGetBlogPostDetail
   * @request GET:/api-frontend/Blog/GetBlogPost/{blogPostId}
   * @secure
   * @response `200` `BlogGetBlogPostDetailData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  blogGetBlogPostDetail = (blogPostId: number, params: RequestParams = {}) =>
    this.request<BlogGetBlogPostDetailData, BlogGetBlogPostDetailError>({
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
   * @name BlogBlogCommentAddCreate
   * @request POST:/api-frontend/Blog/BlogCommentAdd/{blogPostId}
   * @secure
   * @response `200` `BlogBlogCommentAddCreateData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  blogBlogCommentAddCreate = (blogPostId: number, data: BlogPostModelDto, params: RequestParams = {}) =>
    this.request<BlogBlogCommentAddCreateData, BlogBlogCommentAddCreateError>({
      path: `/api-frontend/Blog/BlogCommentAdd/${blogPostId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
