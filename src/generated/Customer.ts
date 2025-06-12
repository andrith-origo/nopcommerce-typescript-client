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
  ChangePasswordModelDto,
  CheckGiftCardBalanceModelDto,
  CustomerAddressEditModelDtoBaseModelDtoRequest,
  CustomerInfoModelDtoBaseModelDtoRequest,
  DeleteCustomerAddressDeleteData,
  DeleteCustomerAddressDeleteError,
  DeleteCustomerGdprToolsDeleteData,
  DeleteCustomerGdprToolsDeleteError,
  DeleteCustomerRemoveAvatarData,
  DeleteCustomerRemoveAvatarError,
  DeleteCustomerRemoveExternalAssociationData,
  DeleteCustomerRemoveExternalAssociationError,
  GetCustomerAddressAddData,
  GetCustomerAddressAddError,
  GetCustomerAddressEditData,
  GetCustomerAddressEditError,
  GetCustomerAddressesData,
  GetCustomerAddressesError,
  GetCustomerAvatarData,
  GetCustomerAvatarError,
  GetCustomerChangePasswordData,
  GetCustomerChangePasswordError,
  GetCustomerCheckGiftCardBalanceData,
  GetCustomerCheckGiftCardBalanceError,
  GetCustomerCheckUsernameAvailabilityData,
  GetCustomerCheckUsernameAvailabilityError,
  GetCustomerCheckUsernameAvailabilityParams,
  GetCustomerDownloadableProductsData,
  GetCustomerDownloadableProductsError,
  GetCustomerGdprToolsData,
  GetCustomerGdprToolsError,
  GetCustomerGdprToolsExportData,
  GetCustomerGdprToolsExportError,
  GetCustomerInfoData,
  GetCustomerInfoError,
  GetCustomerLogoutData,
  GetCustomerLogoutError,
  GetCustomerPasswordRecoveryData,
  GetCustomerPasswordRecoveryError,
  GetCustomerRegisterData,
  GetCustomerRegisterError,
  GetCustomerUserAgreementData,
  GetCustomerUserAgreementError,
  GetCustomerUserAgreementParams,
  LoginCustomerRequest,
  PasswordRecoveryConfirmModelDto,
  PasswordRecoveryModelDto,
  PostCustomerAccountActivationData,
  PostCustomerAccountActivationError,
  PostCustomerAccountActivationParams,
  PostCustomerAddressAddData,
  PostCustomerAddressAddError,
  PostCustomerChangePasswordData,
  PostCustomerChangePasswordError,
  PostCustomerCheckBalanceData,
  PostCustomerCheckBalanceError,
  PostCustomerEmailRevalidationData,
  PostCustomerEmailRevalidationError,
  PostCustomerEmailRevalidationParams,
  PostCustomerInfoData,
  PostCustomerInfoError,
  PostCustomerLoginData,
  PostCustomerLoginError,
  PostCustomerPasswordRecoveryConfirmData,
  PostCustomerPasswordRecoveryConfirmError,
  PostCustomerPasswordRecoveryConfirmParams,
  PostCustomerPasswordRecoveryConfirmPostData,
  PostCustomerPasswordRecoveryConfirmPostError,
  PostCustomerPasswordRecoveryConfirmPostParams,
  PostCustomerPasswordRecoverySendData,
  PostCustomerPasswordRecoverySendError,
  PostCustomerRegisterData,
  PostCustomerRegisterError,
  PostCustomerRegisterResultData,
  PostCustomerRegisterResultError,
  PostCustomerRegisterResultParams,
  PostCustomerUploadAvatarData,
  PostCustomerUploadAvatarError,
  PostCustomerUploadAvatarParams,
  PostCustomerUploadAvatarPayload,
  PutCustomerAddressEditData,
  PutCustomerAddressEditError,
  RegisterModelDtoBaseModelDtoRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Customer<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Customer
   * @name PostCustomerLogin
   * @summary Login
   * @request POST:/api-frontend/Customer/Login
   * @secure
   * @response `200` `PostCustomerLoginData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  postCustomerLogin = (
    data: LoginCustomerRequest,
    params: RequestParams = {},
  ) =>
    this.request<PostCustomerLoginData, PostCustomerLoginError>({
      path: `/api-frontend/Customer/Login`,
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
   * @tags Customer
   * @name GetCustomerLogout
   * @summary Logout
   * @request GET:/api-frontend/Customer/Logout
   * @secure
   * @response `200` `GetCustomerLogoutData` OK
   * @response `401` `string` Unauthorized
   */
  getCustomerLogout = (params: RequestParams = {}) =>
    this.request<GetCustomerLogoutData, GetCustomerLogoutError>({
      path: `/api-frontend/Customer/Logout`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name GetCustomerPasswordRecovery
   * @summary Prepare the password recovery model
   * @request GET:/api-frontend/Customer/PasswordRecovery
   * @secure
   * @response `200` `GetCustomerPasswordRecoveryData` OK
   * @response `401` `string` Unauthorized
   */
  getCustomerPasswordRecovery = (params: RequestParams = {}) =>
    this.request<
      GetCustomerPasswordRecoveryData,
      GetCustomerPasswordRecoveryError
    >({
      path: `/api-frontend/Customer/PasswordRecovery`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name PostCustomerPasswordRecoverySend
   * @summary Password recovery send
   * @request POST:/api-frontend/Customer/PasswordRecoverySend
   * @secure
   * @response `200` `PostCustomerPasswordRecoverySendData` OK
   * @response `401` `string` Unauthorized
   */
  postCustomerPasswordRecoverySend = (
    data: PasswordRecoveryModelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCustomerPasswordRecoverySendData,
      PostCustomerPasswordRecoverySendError
    >({
      path: `/api-frontend/Customer/PasswordRecoverySend`,
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
   * @tags Customer
   * @name PostCustomerPasswordRecoveryConfirm
   * @summary Password recovery confirm
   * @request POST:/api-frontend/Customer/PasswordRecoveryConfirm
   * @secure
   * @response `200` `PostCustomerPasswordRecoveryConfirmData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCustomerPasswordRecoveryConfirm = (
    query: PostCustomerPasswordRecoveryConfirmParams,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCustomerPasswordRecoveryConfirmData,
      PostCustomerPasswordRecoveryConfirmError
    >({
      path: `/api-frontend/Customer/PasswordRecoveryConfirm`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name PostCustomerPasswordRecoveryConfirmPost
   * @summary Password recovery confirm post
   * @request POST:/api-frontend/Customer/PasswordRecoveryConfirmPOST
   * @secure
   * @response `200` `PostCustomerPasswordRecoveryConfirmPostData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCustomerPasswordRecoveryConfirmPost = (
    query: PostCustomerPasswordRecoveryConfirmPostParams,
    data: PasswordRecoveryConfirmModelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCustomerPasswordRecoveryConfirmPostData,
      PostCustomerPasswordRecoveryConfirmPostError
    >({
      path: `/api-frontend/Customer/PasswordRecoveryConfirmPOST`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name GetCustomerRegister
   * @summary Prepare the customer register model
   * @request GET:/api-frontend/Customer/Register
   * @secure
   * @response `200` `GetCustomerRegisterData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getCustomerRegister = (params: RequestParams = {}) =>
    this.request<GetCustomerRegisterData, GetCustomerRegisterError>({
      path: `/api-frontend/Customer/Register`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name PostCustomerRegister
   * @summary Register
   * @request POST:/api-frontend/Customer/Register
   * @secure
   * @response `200` `PostCustomerRegisterData` OK
   * @response `400` `(string)[]` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCustomerRegister = (
    data: RegisterModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<PostCustomerRegisterData, PostCustomerRegisterError>({
      path: `/api-frontend/Customer/Register`,
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
   * @tags Customer
   * @name PostCustomerRegisterResult
   * @summary Prepare the register result model
   * @request POST:/api-frontend/Customer/RegisterResult/{resultId}
   * @secure
   * @response `200` `PostCustomerRegisterResultData` OK
   * @response `401` `string` Unauthorized
   */
  postCustomerRegisterResult = (
    { resultId, ...query }: PostCustomerRegisterResultParams,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCustomerRegisterResultData,
      PostCustomerRegisterResultError
    >({
      path: `/api-frontend/Customer/RegisterResult/${resultId}`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name GetCustomerCheckUsernameAvailability
   * @summary Check Username availability
   * @request GET:/api-frontend/Customer/CheckUsernameAvailability
   * @secure
   * @response `200` `GetCustomerCheckUsernameAvailabilityData` OK
   * @response `401` `string` Unauthorized
   */
  getCustomerCheckUsernameAvailability = (
    query: GetCustomerCheckUsernameAvailabilityParams,
    params: RequestParams = {},
  ) =>
    this.request<
      GetCustomerCheckUsernameAvailabilityData,
      GetCustomerCheckUsernameAvailabilityError
    >({
      path: `/api-frontend/Customer/CheckUsernameAvailability`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name PostCustomerAccountActivation
   * @summary Account activation
   * @request POST:/api-frontend/Customer/AccountActivation
   * @secure
   * @response `200` `PostCustomerAccountActivationData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCustomerAccountActivation = (
    query: PostCustomerAccountActivationParams,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCustomerAccountActivationData,
      PostCustomerAccountActivationError
    >({
      path: `/api-frontend/Customer/AccountActivation`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name GetCustomerInfo
   * @summary Prepare the customer info model
   * @request GET:/api-frontend/Customer/Info
   * @secure
   * @response `200` `GetCustomerInfoData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  getCustomerInfo = (params: RequestParams = {}) =>
    this.request<GetCustomerInfoData, GetCustomerInfoError>({
      path: `/api-frontend/Customer/Info`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name PostCustomerInfo
   * @summary Customer info
   * @request POST:/api-frontend/Customer/Info
   * @secure
   * @response `200` `PostCustomerInfoData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  postCustomerInfo = (
    data: CustomerInfoModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<PostCustomerInfoData, PostCustomerInfoError>({
      path: `/api-frontend/Customer/Info`,
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
   * @tags Customer
   * @name DeleteCustomerRemoveExternalAssociation
   * @summary Delete the external authentication record
   * @request DELETE:/api-frontend/Customer/RemoveExternalAssociation/{id}
   * @secure
   * @response `200` `DeleteCustomerRemoveExternalAssociationData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  deleteCustomerRemoveExternalAssociation = (
    id: number,
    params: RequestParams = {},
  ) =>
    this.request<
      DeleteCustomerRemoveExternalAssociationData,
      DeleteCustomerRemoveExternalAssociationError
    >({
      path: `/api-frontend/Customer/RemoveExternalAssociation/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name PostCustomerEmailRevalidation
   * @summary Email revalidation
   * @request POST:/api-frontend/Customer/EmailRevalidation
   * @secure
   * @response `200` `PostCustomerEmailRevalidationData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCustomerEmailRevalidation = (
    query: PostCustomerEmailRevalidationParams,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCustomerEmailRevalidationData,
      PostCustomerEmailRevalidationError
    >({
      path: `/api-frontend/Customer/EmailRevalidation`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name GetCustomerAddresses
   * @summary Prepare the customer address list model
   * @request GET:/api-frontend/Customer/Addresses
   * @secure
   * @response `200` `GetCustomerAddressesData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  getCustomerAddresses = (params: RequestParams = {}) =>
    this.request<GetCustomerAddressesData, GetCustomerAddressesError>({
      path: `/api-frontend/Customer/Addresses`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name DeleteCustomerAddressDelete
   * @summary Address delete
   * @request DELETE:/api-frontend/Customer/AddressDelete/{addressId}
   * @secure
   * @response `200` `DeleteCustomerAddressDeleteData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  deleteCustomerAddressDelete = (
    addressId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      DeleteCustomerAddressDeleteData,
      DeleteCustomerAddressDeleteError
    >({
      path: `/api-frontend/Customer/AddressDelete/${addressId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name GetCustomerAddressAdd
   * @summary Prepare address model
   * @request GET:/api-frontend/Customer/AddressAdd
   * @secure
   * @response `200` `GetCustomerAddressAddData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  getCustomerAddressAdd = (params: RequestParams = {}) =>
    this.request<GetCustomerAddressAddData, GetCustomerAddressAddError>({
      path: `/api-frontend/Customer/AddressAdd`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name PostCustomerAddressAdd
   * @summary Address add
   * @request POST:/api-frontend/Customer/AddressAdd
   * @secure
   * @response `200` `PostCustomerAddressAddData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  postCustomerAddressAdd = (
    data: CustomerAddressEditModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<PostCustomerAddressAddData, PostCustomerAddressAddError>({
      path: `/api-frontend/Customer/AddressAdd`,
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
   * @tags Customer
   * @name GetCustomerAddressEdit
   * @summary Prepare address model
   * @request GET:/api-frontend/Customer/AddressEdit/{addressId}
   * @secure
   * @response `200` `GetCustomerAddressEditData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getCustomerAddressEdit = (addressId: number, params: RequestParams = {}) =>
    this.request<GetCustomerAddressEditData, GetCustomerAddressEditError>({
      path: `/api-frontend/Customer/AddressEdit/${addressId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name PutCustomerAddressEdit
   * @summary Update address
   * @request PUT:/api-frontend/Customer/AddressEdit
   * @secure
   * @response `200` `PutCustomerAddressEditData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  putCustomerAddressEdit = (
    data: CustomerAddressEditModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<PutCustomerAddressEditData, PutCustomerAddressEditError>({
      path: `/api-frontend/Customer/AddressEdit`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name GetCustomerDownloadableProducts
   * @summary Prepare the customer downloadable products model
   * @request GET:/api-frontend/Customer/DownloadableProducts
   * @secure
   * @response `200` `GetCustomerDownloadableProductsData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getCustomerDownloadableProducts = (params: RequestParams = {}) =>
    this.request<
      GetCustomerDownloadableProductsData,
      GetCustomerDownloadableProductsError
    >({
      path: `/api-frontend/Customer/DownloadableProducts`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name GetCustomerUserAgreement
   * @summary Prepare the user agreement model
   * @request GET:/api-frontend/Customer/UserAgreement
   * @secure
   * @response `200` `GetCustomerUserAgreementData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getCustomerUserAgreement = (
    query: GetCustomerUserAgreementParams,
    params: RequestParams = {},
  ) =>
    this.request<GetCustomerUserAgreementData, GetCustomerUserAgreementError>({
      path: `/api-frontend/Customer/UserAgreement`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name GetCustomerChangePassword
   * @summary Prepare the change password model
   * @request GET:/api-frontend/Customer/ChangePassword
   * @secure
   * @response `200` `GetCustomerChangePasswordData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  getCustomerChangePassword = (params: RequestParams = {}) =>
    this.request<GetCustomerChangePasswordData, GetCustomerChangePasswordError>(
      {
        path: `/api-frontend/Customer/ChangePassword`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
    );
  /**
   * No description
   *
   * @tags Customer
   * @name PostCustomerChangePassword
   * @summary Change password
   * @request POST:/api-frontend/Customer/ChangePassword
   * @secure
   * @response `200` `PostCustomerChangePasswordData` OK
   * @response `400` `(string)[]` Bad Request
   * @response `401` `string` Unauthorized
   */
  postCustomerChangePassword = (
    data: ChangePasswordModelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCustomerChangePasswordData,
      PostCustomerChangePasswordError
    >({
      path: `/api-frontend/Customer/ChangePassword`,
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
   * @tags Customer
   * @name GetCustomerAvatar
   * @summary Prepare the customer avatar model
   * @request GET:/api-frontend/Customer/Avatar
   * @secure
   * @response `200` `GetCustomerAvatarData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  getCustomerAvatar = (params: RequestParams = {}) =>
    this.request<GetCustomerAvatarData, GetCustomerAvatarError>({
      path: `/api-frontend/Customer/Avatar`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name PostCustomerUploadAvatar
   * @summary Upload avatar
   * @request POST:/api-frontend/Customer/UploadAvatar
   * @secure
   * @response `200` `PostCustomerUploadAvatarData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  postCustomerUploadAvatar = (
    query: PostCustomerUploadAvatarParams,
    data: PostCustomerUploadAvatarPayload,
    params: RequestParams = {},
  ) =>
    this.request<PostCustomerUploadAvatarData, PostCustomerUploadAvatarError>({
      path: `/api-frontend/Customer/UploadAvatar`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name DeleteCustomerRemoveAvatar
   * @summary Remove avatar
   * @request DELETE:/api-frontend/Customer/RemoveAvatar
   * @secure
   * @response `200` `DeleteCustomerRemoveAvatarData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  deleteCustomerRemoveAvatar = (params: RequestParams = {}) =>
    this.request<
      DeleteCustomerRemoveAvatarData,
      DeleteCustomerRemoveAvatarError
    >({
      path: `/api-frontend/Customer/RemoveAvatar`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name GetCustomerGdprTools
   * @summary Prepare the GDPR tools model
   * @request GET:/api-frontend/Customer/GdprTools
   * @secure
   * @response `200` `GetCustomerGdprToolsData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getCustomerGdprTools = (params: RequestParams = {}) =>
    this.request<GetCustomerGdprToolsData, GetCustomerGdprToolsError>({
      path: `/api-frontend/Customer/GdprTools`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name GetCustomerGdprToolsExport
   * @summary Export customer info (GDPR request) to XLSX
   * @request GET:/api-frontend/Customer/GdprToolsExport
   * @secure
   * @response `200` `GetCustomerGdprToolsExportData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getCustomerGdprToolsExport = (params: RequestParams = {}) =>
    this.request<
      GetCustomerGdprToolsExportData,
      GetCustomerGdprToolsExportError
    >({
      path: `/api-frontend/Customer/GdprToolsExport`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name DeleteCustomerGdprToolsDelete
   * @summary Gdpr tools delete
   * @request DELETE:/api-frontend/Customer/GdprToolsDelete
   * @secure
   * @response `200` `DeleteCustomerGdprToolsDeleteData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  deleteCustomerGdprToolsDelete = (params: RequestParams = {}) =>
    this.request<
      DeleteCustomerGdprToolsDeleteData,
      DeleteCustomerGdprToolsDeleteError
    >({
      path: `/api-frontend/Customer/GdprToolsDelete`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name GetCustomerCheckGiftCardBalance
   * @summary Prepare the check gift card balance madel
   * @request GET:/api-frontend/Customer/CheckGiftCardBalance
   * @secure
   * @response `200` `GetCustomerCheckGiftCardBalanceData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getCustomerCheckGiftCardBalance = (params: RequestParams = {}) =>
    this.request<
      GetCustomerCheckGiftCardBalanceData,
      GetCustomerCheckGiftCardBalanceError
    >({
      path: `/api-frontend/Customer/CheckGiftCardBalance`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name PostCustomerCheckBalance
   * @summary Check GiftCard balance
   * @request POST:/api-frontend/Customer/CheckBalance
   * @secure
   * @response `200` `PostCustomerCheckBalanceData` OK
   * @response `401` `string` Unauthorized
   */
  postCustomerCheckBalance = (
    data: CheckGiftCardBalanceModelDto,
    params: RequestParams = {},
  ) =>
    this.request<PostCustomerCheckBalanceData, PostCustomerCheckBalanceError>({
      path: `/api-frontend/Customer/CheckBalance`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
