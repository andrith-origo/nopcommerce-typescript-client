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
  BoardsActiveDiscussionsListData,
  BoardsActiveDiscussionsListError,
  BoardsActiveDiscussionsListParams,
  BoardsActiveDiscussionsRssListData,
  BoardsActiveDiscussionsRssListError,
  BoardsActiveDiscussionsRssListParams,
  BoardsCustomerForumSubscriptionsCreateData,
  BoardsCustomerForumSubscriptionsCreateError,
  BoardsCustomerForumSubscriptionsCreatePayload,
  BoardsCustomerForumSubscriptionsListData,
  BoardsCustomerForumSubscriptionsListError,
  BoardsCustomerForumSubscriptionsListParams,
  BoardsForumDetailData,
  BoardsForumDetailError,
  BoardsForumDetailParams,
  BoardsForumGroupDetailData,
  BoardsForumGroupDetailError,
  BoardsForumRssDetailData,
  BoardsForumRssDetailError,
  BoardsForumWatchDetailData,
  BoardsForumWatchDetailError,
  BoardsIndexListData,
  BoardsIndexListError,
  BoardsPostCreateCreateData,
  BoardsPostCreateCreateError,
  BoardsPostCreateDetailData,
  BoardsPostCreateDetailError,
  BoardsPostCreateDetailParams,
  BoardsPostDeleteDeleteData,
  BoardsPostDeleteDeleteError,
  BoardsPostEditCreateData,
  BoardsPostEditCreateError,
  BoardsPostEditDetailData,
  BoardsPostEditDetailError,
  BoardsPostVoteDetailData,
  BoardsPostVoteDetailError,
  BoardsPostVoteDetailParams,
  BoardsSearchDetailData,
  BoardsSearchDetailError,
  BoardsSearchDetailParams,
  BoardsTopicCreateCreateData,
  BoardsTopicCreateCreateError,
  BoardsTopicCreateDetailData,
  BoardsTopicCreateDetailError,
  BoardsTopicDeleteDeleteData,
  BoardsTopicDeleteDeleteError,
  BoardsTopicDetailData,
  BoardsTopicDetailError,
  BoardsTopicDetailParams,
  BoardsTopicEditCreateData,
  BoardsTopicEditCreateError,
  BoardsTopicEditDetailData,
  BoardsTopicEditDetailError,
  BoardsTopicMoveDetailData,
  BoardsTopicMoveDetailError,
  BoardsTopicWatchDetailData,
  BoardsTopicWatchDetailError,
  EditForumPostModelDto,
  EditForumTopicModelDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Boards<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Boards
   * @name BoardsIndexList
   * @summary Index
   * @request GET:/api-frontend/Boards/Index
   * @secure
   * @response `200` `BoardsIndexListData` Success
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsIndexList = (params: RequestParams = {}) =>
    this.request<BoardsIndexListData, BoardsIndexListError>({
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
   * @name BoardsActiveDiscussionsList
   * @summary Active discussions
   * @request GET:/api-frontend/Boards/ActiveDiscussions
   * @secure
   * @response `200` `BoardsActiveDiscussionsListData` Success
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsActiveDiscussionsList = (query: BoardsActiveDiscussionsListParams, params: RequestParams = {}) =>
    this.request<BoardsActiveDiscussionsListData, BoardsActiveDiscussionsListError>({
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
   * @name BoardsActiveDiscussionsRssList
   * @summary Active discussions RSS
   * @request GET:/api-frontend/Boards/ActiveDiscussionsRss
   * @secure
   * @response `200` `BoardsActiveDiscussionsRssListData` Success
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsActiveDiscussionsRssList = (query: BoardsActiveDiscussionsRssListParams, params: RequestParams = {}) =>
    this.request<BoardsActiveDiscussionsRssListData, BoardsActiveDiscussionsRssListError>({
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
   * @name BoardsForumGroupDetail
   * @summary Gets a forum group
   * @request GET:/api-frontend/Boards/ForumGroup/{id}
   * @secure
   * @response `200` `BoardsForumGroupDetailData` Success
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsForumGroupDetail = (id: number, params: RequestParams = {}) =>
    this.request<BoardsForumGroupDetailData, BoardsForumGroupDetailError>({
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
   * @name BoardsForumDetail
   * @summary Get forum page
   * @request GET:/api-frontend/Boards/Forum/{id}
   * @secure
   * @response `200` `BoardsForumDetailData` Success
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsForumDetail = ({ id, ...query }: BoardsForumDetailParams, params: RequestParams = {}) =>
    this.request<BoardsForumDetailData, BoardsForumDetailError>({
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
   * @name BoardsForumRssDetail
   * @summary Forum RSS
   * @request GET:/api-frontend/Boards/ForumRss/{id}
   * @secure
   * @response `200` `BoardsForumRssDetailData` Success
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsForumRssDetail = (id: number, params: RequestParams = {}) =>
    this.request<BoardsForumRssDetailData, BoardsForumRssDetailError>({
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
   * @name BoardsForumWatchDetail
   * @summary Forum watch
   * @request GET:/api-frontend/Boards/ForumWatch/{id}
   * @secure
   * @response `200` `BoardsForumWatchDetailData` Success
   * @response `401` `string` Unauthorized
   */
  boardsForumWatchDetail = (id: number, params: RequestParams = {}) =>
    this.request<BoardsForumWatchDetailData, BoardsForumWatchDetailError>({
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
   * @name BoardsTopicDetail
   * @summary Get topic page
   * @request GET:/api-frontend/Boards/Topic/{id}
   * @secure
   * @response `200` `BoardsTopicDetailData` Success
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsTopicDetail = ({ id, ...query }: BoardsTopicDetailParams, params: RequestParams = {}) =>
    this.request<BoardsTopicDetailData, BoardsTopicDetailError>({
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
   * @name BoardsTopicWatchDetail
   * @summary Topic watch
   * @request GET:/api-frontend/Boards/TopicWatch/{id}
   * @secure
   * @response `200` `BoardsTopicWatchDetailData` Success
   * @response `401` `string` Unauthorized
   */
  boardsTopicWatchDetail = (id: number, params: RequestParams = {}) =>
    this.request<BoardsTopicWatchDetailData, BoardsTopicWatchDetailError>({
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
   * @name BoardsTopicMoveDetail
   * @summary Get topic move model
   * @request GET:/api-frontend/Boards/TopicMove/{id}
   * @secure
   * @response `200` `BoardsTopicMoveDetailData` Success
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsTopicMoveDetail = (id: number, params: RequestParams = {}) =>
    this.request<BoardsTopicMoveDetailData, BoardsTopicMoveDetailError>({
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
   * @name BoardsTopicDeleteDelete
   * @summary Topic delete
   * @request DELETE:/api-frontend/Boards/TopicDelete/{id}
   * @secure
   * @response `200` `BoardsTopicDeleteDeleteData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsTopicDeleteDelete = (id: number, params: RequestParams = {}) =>
    this.request<BoardsTopicDeleteDeleteData, BoardsTopicDeleteDeleteError>({
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
   * @name BoardsTopicCreateDetail
   * @summary Prepare the forum topic create model
   * @request GET:/api-frontend/Boards/TopicCreate/{id}
   * @secure
   * @response `200` `BoardsTopicCreateDetailData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsTopicCreateDetail = (id: number, params: RequestParams = {}) =>
    this.request<BoardsTopicCreateDetailData, BoardsTopicCreateDetailError>({
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
   * @name BoardsTopicCreateCreate
   * @summary Topic create
   * @request POST:/api-frontend/Boards/TopicCreate
   * @secure
   * @response `200` `BoardsTopicCreateCreateData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsTopicCreateCreate = (data: EditForumTopicModelDto, params: RequestParams = {}) =>
    this.request<BoardsTopicCreateCreateData, BoardsTopicCreateCreateError>({
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
   * @name BoardsTopicEditDetail
   * @summary Edit the forum topic
   * @request GET:/api-frontend/Boards/TopicEdit/{id}
   * @secure
   * @response `200` `BoardsTopicEditDetailData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsTopicEditDetail = (id: number, params: RequestParams = {}) =>
    this.request<BoardsTopicEditDetailData, BoardsTopicEditDetailError>({
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
   * @name BoardsTopicEditCreate
   * @summary Edit the forum topic
   * @request POST:/api-frontend/Boards/TopicEdit
   * @secure
   * @response `200` `BoardsTopicEditCreateData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsTopicEditCreate = (data: EditForumTopicModelDto, params: RequestParams = {}) =>
    this.request<BoardsTopicEditCreateData, BoardsTopicEditCreateError>({
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
   * @name BoardsPostDeleteDelete
   * @summary Delete the forum post
   * @request DELETE:/api-frontend/Boards/PostDelete/{id}
   * @secure
   * @response `200` `BoardsPostDeleteDeleteData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsPostDeleteDelete = (id: number, params: RequestParams = {}) =>
    this.request<BoardsPostDeleteDeleteData, BoardsPostDeleteDeleteError>({
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
   * @name BoardsPostCreateDetail
   * @summary Prepare forum post model
   * @request GET:/api-frontend/Boards/PostCreate/{id}/{quote}
   * @secure
   * @response `200` `BoardsPostCreateDetailData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsPostCreateDetail = ({ id, quote, ...query }: BoardsPostCreateDetailParams, params: RequestParams = {}) =>
    this.request<BoardsPostCreateDetailData, BoardsPostCreateDetailError>({
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
   * @name BoardsPostCreateCreate
   * @summary Create forum post
   * @request POST:/api-frontend/Boards/PostCreate
   * @secure
   * @response `200` `BoardsPostCreateCreateData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsPostCreateCreate = (data: EditForumPostModelDto, params: RequestParams = {}) =>
    this.request<BoardsPostCreateCreateData, BoardsPostCreateCreateError>({
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
   * @name BoardsPostEditDetail
   * @summary Prepare the forum post edit model
   * @request GET:/api-frontend/Boards/PostEdit/{id}
   * @secure
   * @response `200` `BoardsPostEditDetailData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsPostEditDetail = (id: number, params: RequestParams = {}) =>
    this.request<BoardsPostEditDetailData, BoardsPostEditDetailError>({
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
   * @name BoardsPostEditCreate
   * @summary Edit forum post
   * @request POST:/api-frontend/Boards/PostEdit
   * @secure
   * @response `200` `BoardsPostEditCreateData` Success
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsPostEditCreate = (data: EditForumPostModelDto, params: RequestParams = {}) =>
    this.request<BoardsPostEditCreateData, BoardsPostEditCreateError>({
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
   * @name BoardsSearchDetail
   * @summary Search terms in forum post
   * @request GET:/api-frontend/Boards/Search/{forumId}
   * @secure
   * @response `200` `BoardsSearchDetailData` Success
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsSearchDetail = ({ forumId, ...query }: BoardsSearchDetailParams, params: RequestParams = {}) =>
    this.request<BoardsSearchDetailData, BoardsSearchDetailError>({
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
   * @name BoardsCustomerForumSubscriptionsList
   * @summary Prepare the customer forum subscriptions model
   * @request GET:/api-frontend/Boards/CustomerForumSubscriptions
   * @secure
   * @response `200` `BoardsCustomerForumSubscriptionsListData` Success
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsCustomerForumSubscriptionsList = (
    query: BoardsCustomerForumSubscriptionsListParams,
    params: RequestParams = {},
  ) =>
    this.request<BoardsCustomerForumSubscriptionsListData, BoardsCustomerForumSubscriptionsListError>({
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
   * @name BoardsCustomerForumSubscriptionsCreate
   * @summary Customer forum subscriptions POST
   * @request POST:/api-frontend/Boards/CustomerForumSubscriptions
   * @secure
   * @response `200` `BoardsCustomerForumSubscriptionsCreateData` Success
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsCustomerForumSubscriptionsCreate = (
    data: BoardsCustomerForumSubscriptionsCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<BoardsCustomerForumSubscriptionsCreateData, BoardsCustomerForumSubscriptionsCreateError>({
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
   * @name BoardsPostVoteDetail
   * @summary POst vote
   * @request GET:/api-frontend/Boards/PostVote/{postId}
   * @secure
   * @response `200` `BoardsPostVoteDetailData` Success
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  boardsPostVoteDetail = ({ postId, ...query }: BoardsPostVoteDetailParams, params: RequestParams = {}) =>
    this.request<BoardsPostVoteDetailData, BoardsPostVoteDetailError>({
      path: `/api-frontend/Boards/PostVote/${postId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
