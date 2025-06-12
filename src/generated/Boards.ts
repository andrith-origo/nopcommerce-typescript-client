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
  DeleteBoardsPostDeleteData,
  DeleteBoardsPostDeleteError,
  DeleteBoardsTopicDeleteData,
  DeleteBoardsTopicDeleteError,
  EditForumPostModelDto,
  EditForumTopicModelDto,
  GetBoardsActiveDiscussionsData,
  GetBoardsActiveDiscussionsError,
  GetBoardsActiveDiscussionsParams,
  GetBoardsActiveDiscussionsRssData,
  GetBoardsActiveDiscussionsRssError,
  GetBoardsActiveDiscussionsRssParams,
  GetBoardsCustomerForumSubscriptionsData,
  GetBoardsCustomerForumSubscriptionsError,
  GetBoardsCustomerForumSubscriptionsParams,
  GetBoardsForumData,
  GetBoardsForumError,
  GetBoardsForumGroupData,
  GetBoardsForumGroupError,
  GetBoardsForumParams,
  GetBoardsForumRssData,
  GetBoardsForumRssError,
  GetBoardsForumWatchData,
  GetBoardsForumWatchError,
  GetBoardsIndexData,
  GetBoardsIndexError,
  GetBoardsPostCreateData,
  GetBoardsPostCreateError,
  GetBoardsPostCreateParams,
  GetBoardsPostEditData,
  GetBoardsPostEditError,
  GetBoardsPostVoteData,
  GetBoardsPostVoteError,
  GetBoardsPostVoteParams,
  GetBoardsSearchData,
  GetBoardsSearchError,
  GetBoardsSearchParams,
  GetBoardsTopicCreateData,
  GetBoardsTopicCreateError,
  GetBoardsTopicData,
  GetBoardsTopicEditData,
  GetBoardsTopicEditError,
  GetBoardsTopicError,
  GetBoardsTopicMoveData,
  GetBoardsTopicMoveError,
  GetBoardsTopicParams,
  GetBoardsTopicWatchData,
  GetBoardsTopicWatchError,
  PostBoardsCustomerForumSubscriptionsData,
  PostBoardsCustomerForumSubscriptionsError,
  PostBoardsCustomerForumSubscriptionsPayload,
  PostBoardsPostCreateData,
  PostBoardsPostCreateError,
  PostBoardsPostEditData,
  PostBoardsPostEditError,
  PostBoardsTopicCreateData,
  PostBoardsTopicCreateError,
  PostBoardsTopicEditData,
  PostBoardsTopicEditError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Boards<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Boards
   * @name GetBoardsIndex
   * @summary Index
   * @request GET:/api-frontend/Boards/Index
   * @secure
   * @response `200` `GetBoardsIndexData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getBoardsIndex = (params: RequestParams = {}) =>
    this.request<GetBoardsIndexData, GetBoardsIndexError>({
      path: `/api-frontend/Boards/Index`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Boards
   * @name GetBoardsActiveDiscussions
   * @summary Active discussions
   * @request GET:/api-frontend/Boards/ActiveDiscussions
   * @secure
   * @response `200` `GetBoardsActiveDiscussionsData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getBoardsActiveDiscussions = (
    query: GetBoardsActiveDiscussionsParams,
    params: RequestParams = {},
  ) =>
    this.request<
      GetBoardsActiveDiscussionsData,
      GetBoardsActiveDiscussionsError
    >({
      path: `/api-frontend/Boards/ActiveDiscussions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Boards
   * @name GetBoardsActiveDiscussionsRss
   * @summary Active discussions RSS
   * @request GET:/api-frontend/Boards/ActiveDiscussionsRss
   * @secure
   * @response `200` `GetBoardsActiveDiscussionsRssData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getBoardsActiveDiscussionsRss = (
    query: GetBoardsActiveDiscussionsRssParams,
    params: RequestParams = {},
  ) =>
    this.request<
      GetBoardsActiveDiscussionsRssData,
      GetBoardsActiveDiscussionsRssError
    >({
      path: `/api-frontend/Boards/ActiveDiscussionsRss`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Boards
   * @name GetBoardsForumGroup
   * @summary Gets a forum group
   * @request GET:/api-frontend/Boards/ForumGroup/{id}
   * @secure
   * @response `200` `GetBoardsForumGroupData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getBoardsForumGroup = (id: number, params: RequestParams = {}) =>
    this.request<GetBoardsForumGroupData, GetBoardsForumGroupError>({
      path: `/api-frontend/Boards/ForumGroup/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Boards
   * @name GetBoardsForum
   * @summary Get forum page
   * @request GET:/api-frontend/Boards/Forum/{id}
   * @secure
   * @response `200` `GetBoardsForumData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getBoardsForum = (
    { id, ...query }: GetBoardsForumParams,
    params: RequestParams = {},
  ) =>
    this.request<GetBoardsForumData, GetBoardsForumError>({
      path: `/api-frontend/Boards/Forum/${id}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Boards
   * @name GetBoardsForumRss
   * @summary Forum RSS
   * @request GET:/api-frontend/Boards/ForumRss/{id}
   * @secure
   * @response `200` `GetBoardsForumRssData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getBoardsForumRss = (id: number, params: RequestParams = {}) =>
    this.request<GetBoardsForumRssData, GetBoardsForumRssError>({
      path: `/api-frontend/Boards/ForumRss/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Boards
   * @name GetBoardsForumWatch
   * @summary Forum watch
   * @request GET:/api-frontend/Boards/ForumWatch/{id}
   * @secure
   * @response `200` `GetBoardsForumWatchData` OK
   * @response `401` `string` Unauthorized
   */
  getBoardsForumWatch = (id: number, params: RequestParams = {}) =>
    this.request<GetBoardsForumWatchData, GetBoardsForumWatchError>({
      path: `/api-frontend/Boards/ForumWatch/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Boards
   * @name GetBoardsTopic
   * @summary Get topic page
   * @request GET:/api-frontend/Boards/Topic/{id}
   * @secure
   * @response `200` `GetBoardsTopicData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getBoardsTopic = (
    { id, ...query }: GetBoardsTopicParams,
    params: RequestParams = {},
  ) =>
    this.request<GetBoardsTopicData, GetBoardsTopicError>({
      path: `/api-frontend/Boards/Topic/${id}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Boards
   * @name GetBoardsTopicWatch
   * @summary Topic watch
   * @request GET:/api-frontend/Boards/TopicWatch/{id}
   * @secure
   * @response `200` `GetBoardsTopicWatchData` OK
   * @response `401` `string` Unauthorized
   */
  getBoardsTopicWatch = (id: number, params: RequestParams = {}) =>
    this.request<GetBoardsTopicWatchData, GetBoardsTopicWatchError>({
      path: `/api-frontend/Boards/TopicWatch/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Boards
   * @name GetBoardsTopicMove
   * @summary Get topic move model
   * @request GET:/api-frontend/Boards/TopicMove/{id}
   * @secure
   * @response `200` `GetBoardsTopicMoveData` OK
   * @response `401` `string` Unauthorized
   * @response `403` `string` Forbidden
   * @response `404` `string` Not Found
   */
  getBoardsTopicMove = (id: number, params: RequestParams = {}) =>
    this.request<GetBoardsTopicMoveData, GetBoardsTopicMoveError>({
      path: `/api-frontend/Boards/TopicMove/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Boards
   * @name DeleteBoardsTopicDelete
   * @summary Topic delete
   * @request DELETE:/api-frontend/Boards/TopicDelete/{id}
   * @secure
   * @response `200` `DeleteBoardsTopicDeleteData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  deleteBoardsTopicDelete = (id: number, params: RequestParams = {}) =>
    this.request<DeleteBoardsTopicDeleteData, DeleteBoardsTopicDeleteError>({
      path: `/api-frontend/Boards/TopicDelete/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Boards
   * @name GetBoardsTopicCreate
   * @summary Prepare the forum topic create model
   * @request GET:/api-frontend/Boards/TopicCreate/{id}
   * @secure
   * @response `200` `GetBoardsTopicCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getBoardsTopicCreate = (id: number, params: RequestParams = {}) =>
    this.request<GetBoardsTopicCreateData, GetBoardsTopicCreateError>({
      path: `/api-frontend/Boards/TopicCreate/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Boards
   * @name PostBoardsTopicCreate
   * @summary Topic create
   * @request POST:/api-frontend/Boards/TopicCreate
   * @secure
   * @response `200` `PostBoardsTopicCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postBoardsTopicCreate = (
    data: EditForumTopicModelDto,
    params: RequestParams = {},
  ) =>
    this.request<PostBoardsTopicCreateData, PostBoardsTopicCreateError>({
      path: `/api-frontend/Boards/TopicCreate`,
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
   * @tags Boards
   * @name GetBoardsTopicEdit
   * @summary Edit the forum topic
   * @request GET:/api-frontend/Boards/TopicEdit/{id}
   * @secure
   * @response `200` `GetBoardsTopicEditData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getBoardsTopicEdit = (id: number, params: RequestParams = {}) =>
    this.request<GetBoardsTopicEditData, GetBoardsTopicEditError>({
      path: `/api-frontend/Boards/TopicEdit/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Boards
   * @name PostBoardsTopicEdit
   * @summary Edit the forum topic
   * @request POST:/api-frontend/Boards/TopicEdit
   * @secure
   * @response `200` `PostBoardsTopicEditData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postBoardsTopicEdit = (
    data: EditForumTopicModelDto,
    params: RequestParams = {},
  ) =>
    this.request<PostBoardsTopicEditData, PostBoardsTopicEditError>({
      path: `/api-frontend/Boards/TopicEdit`,
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
   * @tags Boards
   * @name DeleteBoardsPostDelete
   * @summary Delete the forum post
   * @request DELETE:/api-frontend/Boards/PostDelete/{id}
   * @secure
   * @response `200` `DeleteBoardsPostDeleteData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  deleteBoardsPostDelete = (id: number, params: RequestParams = {}) =>
    this.request<DeleteBoardsPostDeleteData, DeleteBoardsPostDeleteError>({
      path: `/api-frontend/Boards/PostDelete/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Boards
   * @name GetBoardsPostCreate
   * @summary Prepare forum post model
   * @request GET:/api-frontend/Boards/PostCreate/{id}/{quote}
   * @secure
   * @response `200` `GetBoardsPostCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getBoardsPostCreate = (
    { id, quote, ...query }: GetBoardsPostCreateParams,
    params: RequestParams = {},
  ) =>
    this.request<GetBoardsPostCreateData, GetBoardsPostCreateError>({
      path: `/api-frontend/Boards/PostCreate/${id}/${quote}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Boards
   * @name PostBoardsPostCreate
   * @summary Create forum post
   * @request POST:/api-frontend/Boards/PostCreate
   * @secure
   * @response `200` `PostBoardsPostCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postBoardsPostCreate = (
    data: EditForumPostModelDto,
    params: RequestParams = {},
  ) =>
    this.request<PostBoardsPostCreateData, PostBoardsPostCreateError>({
      path: `/api-frontend/Boards/PostCreate`,
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
   * @tags Boards
   * @name GetBoardsPostEdit
   * @summary Prepare the forum post edit model
   * @request GET:/api-frontend/Boards/PostEdit/{id}
   * @secure
   * @response `200` `GetBoardsPostEditData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getBoardsPostEdit = (id: number, params: RequestParams = {}) =>
    this.request<GetBoardsPostEditData, GetBoardsPostEditError>({
      path: `/api-frontend/Boards/PostEdit/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Boards
   * @name PostBoardsPostEdit
   * @summary Edit forum post
   * @request POST:/api-frontend/Boards/PostEdit
   * @secure
   * @response `200` `PostBoardsPostEditData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postBoardsPostEdit = (
    data: EditForumPostModelDto,
    params: RequestParams = {},
  ) =>
    this.request<PostBoardsPostEditData, PostBoardsPostEditError>({
      path: `/api-frontend/Boards/PostEdit`,
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
   * @tags Boards
   * @name GetBoardsSearch
   * @summary Search terms in forum post
   * @request GET:/api-frontend/Boards/Search/{forumId}
   * @secure
   * @response `200` `GetBoardsSearchData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getBoardsSearch = (
    { forumId, ...query }: GetBoardsSearchParams,
    params: RequestParams = {},
  ) =>
    this.request<GetBoardsSearchData, GetBoardsSearchError>({
      path: `/api-frontend/Boards/Search/${forumId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Boards
   * @name GetBoardsCustomerForumSubscriptions
   * @summary Prepare the customer forum subscriptions model
   * @request GET:/api-frontend/Boards/CustomerForumSubscriptions
   * @secure
   * @response `200` `GetBoardsCustomerForumSubscriptionsData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getBoardsCustomerForumSubscriptions = (
    query: GetBoardsCustomerForumSubscriptionsParams,
    params: RequestParams = {},
  ) =>
    this.request<
      GetBoardsCustomerForumSubscriptionsData,
      GetBoardsCustomerForumSubscriptionsError
    >({
      path: `/api-frontend/Boards/CustomerForumSubscriptions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Boards
   * @name PostBoardsCustomerForumSubscriptions
   * @summary Customer forum subscriptions POST
   * @request POST:/api-frontend/Boards/CustomerForumSubscriptions
   * @secure
   * @response `200` `PostBoardsCustomerForumSubscriptionsData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postBoardsCustomerForumSubscriptions = (
    data: PostBoardsCustomerForumSubscriptionsPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PostBoardsCustomerForumSubscriptionsData,
      PostBoardsCustomerForumSubscriptionsError
    >({
      path: `/api-frontend/Boards/CustomerForumSubscriptions`,
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
   * @tags Boards
   * @name GetBoardsPostVote
   * @summary POst vote
   * @request GET:/api-frontend/Boards/PostVote/{postId}
   * @secure
   * @response `200` `GetBoardsPostVoteData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getBoardsPostVote = (
    { postId, ...query }: GetBoardsPostVoteParams,
    params: RequestParams = {},
  ) =>
    this.request<GetBoardsPostVoteData, GetBoardsPostVoteError>({
      path: `/api-frontend/Boards/PostVote/${postId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
