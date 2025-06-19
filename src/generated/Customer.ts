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
  CustomerAccountActivationCreateData,
  CustomerAccountActivationCreateError,
  CustomerAccountActivationCreateParams,
  CustomerAddressAddCreateData,
  CustomerAddressAddCreateError,
  CustomerAddressAddListData,
  CustomerAddressAddListError,
  CustomerAddressDeleteDeleteData,
  CustomerAddressDeleteDeleteError,
  CustomerAddressEditDetailData,
  CustomerAddressEditDetailError,
  CustomerAddressEditModelDtoBaseModelDtoRequest,
  CustomerAddressEditUpdateData,
  CustomerAddressEditUpdateError,
  CustomerAddressesListData,
  CustomerAddressesListError,
  CustomerAvatarListData,
  CustomerAvatarListError,
  CustomerChangePasswordCreateData,
  CustomerChangePasswordCreateError,
  CustomerChangePasswordListData,
  CustomerChangePasswordListError,
  CustomerCheckBalanceCreateData,
  CustomerCheckBalanceCreateError,
  CustomerCheckGiftCardBalanceListData,
  CustomerCheckGiftCardBalanceListError,
  CustomerCheckUsernameAvailabilityListData,
  CustomerCheckUsernameAvailabilityListError,
  CustomerCheckUsernameAvailabilityListParams,
  CustomerDownloadableProductsListData,
  CustomerDownloadableProductsListError,
  CustomerEmailRevalidationCreateData,
  CustomerEmailRevalidationCreateError,
  CustomerEmailRevalidationCreateParams,
  CustomerGdprToolsDeleteDeleteData,
  CustomerGdprToolsDeleteDeleteError,
  CustomerGdprToolsExportListData,
  CustomerGdprToolsExportListError,
  CustomerGdprToolsListData,
  CustomerGdprToolsListError,
  CustomerInfoCreateData,
  CustomerInfoCreateError,
  CustomerInfoListData,
  CustomerInfoListError,
  CustomerInfoModelDtoBaseModelDtoRequest,
  CustomerLoginCreateData,
  CustomerLoginCreateError,
  CustomerLogoutListData,
  CustomerLogoutListError,
  CustomerPasswordRecoveryConfirmCreateData,
  CustomerPasswordRecoveryConfirmCreateError,
  CustomerPasswordRecoveryConfirmCreateParams,
  CustomerPasswordRecoveryConfirmPostCreateData,
  CustomerPasswordRecoveryConfirmPostCreateError,
  CustomerPasswordRecoveryConfirmPostCreateParams,
  CustomerPasswordRecoveryListData,
  CustomerPasswordRecoveryListError,
  CustomerPasswordRecoverySendCreateData,
  CustomerPasswordRecoverySendCreateError,
  CustomerRegisterCreateData,
  CustomerRegisterCreateError,
  CustomerRegisterListData,
  CustomerRegisterListError,
  CustomerRegisterResultCreateData,
  CustomerRegisterResultCreateError,
  CustomerRegisterResultCreateParams,
  CustomerRemoveAvatarDeleteData,
  CustomerRemoveAvatarDeleteError,
  CustomerRemoveExternalAssociationDeleteData,
  CustomerRemoveExternalAssociationDeleteError,
  CustomerUploadAvatarCreateData,
  CustomerUploadAvatarCreateError,
  CustomerUploadAvatarCreateParams,
  CustomerUploadAvatarCreatePayload,
  CustomerUserAgreementListData,
  CustomerUserAgreementListError,
  CustomerUserAgreementListParams,
  LoginCustomerRequest,
  PasswordRecoveryConfirmModelDto,
  PasswordRecoveryModelDto,
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
   * @name CustomerLoginCreate
   * @summary Login
   * @request POST:/api-frontend/Customer/Login
   * @secure
   * @response `200` `CustomerLoginCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  customerLoginCreate = (
    data: LoginCustomerRequest,
    params: RequestParams = {},
  ) =>
    this.request<CustomerLoginCreateData, CustomerLoginCreateError>({
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
   * @name CustomerLogoutList
   * @summary Logout
   * @request GET:/api-frontend/Customer/Logout
   * @secure
   * @response `200` `CustomerLogoutListData` OK
   * @response `401` `string` Unauthorized
   */
  customerLogoutList = (params: RequestParams = {}) =>
    this.request<CustomerLogoutListData, CustomerLogoutListError>({
      path: `/api-frontend/Customer/Logout`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name CustomerPasswordRecoveryList
   * @summary Prepare the password recovery model
   * @request GET:/api-frontend/Customer/PasswordRecovery
   * @secure
   * @response `200` `CustomerPasswordRecoveryListData` OK
   * @response `401` `string` Unauthorized
   */
  customerPasswordRecoveryList = (params: RequestParams = {}) =>
    this.request<
      CustomerPasswordRecoveryListData,
      CustomerPasswordRecoveryListError
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
   * @name CustomerPasswordRecoverySendCreate
   * @summary Password recovery send
   * @request POST:/api-frontend/Customer/PasswordRecoverySend
   * @secure
   * @response `200` `CustomerPasswordRecoverySendCreateData` OK
   * @response `401` `string` Unauthorized
   */
  customerPasswordRecoverySendCreate = (
    data: PasswordRecoveryModelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CustomerPasswordRecoverySendCreateData,
      CustomerPasswordRecoverySendCreateError
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
   * @name CustomerPasswordRecoveryConfirmCreate
   * @summary Password recovery confirm
   * @request POST:/api-frontend/Customer/PasswordRecoveryConfirm
   * @secure
   * @response `200` `CustomerPasswordRecoveryConfirmCreateData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  customerPasswordRecoveryConfirmCreate = (
    query: CustomerPasswordRecoveryConfirmCreateParams,
    params: RequestParams = {},
  ) =>
    this.request<
      CustomerPasswordRecoveryConfirmCreateData,
      CustomerPasswordRecoveryConfirmCreateError
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
   * @name CustomerPasswordRecoveryConfirmPostCreate
   * @summary Password recovery confirm post
   * @request POST:/api-frontend/Customer/PasswordRecoveryConfirmPOST
   * @secure
   * @response `200` `CustomerPasswordRecoveryConfirmPostCreateData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  customerPasswordRecoveryConfirmPostCreate = (
    query: CustomerPasswordRecoveryConfirmPostCreateParams,
    data: PasswordRecoveryConfirmModelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CustomerPasswordRecoveryConfirmPostCreateData,
      CustomerPasswordRecoveryConfirmPostCreateError
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
   * @name CustomerRegisterList
   * @summary Prepare the customer register model
   * @request GET:/api-frontend/Customer/Register
   * @secure
   * @response `200` `CustomerRegisterListData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  customerRegisterList = (params: RequestParams = {}) =>
    this.request<CustomerRegisterListData, CustomerRegisterListError>({
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
   * @name CustomerRegisterCreate
   * @summary Register
   * @request POST:/api-frontend/Customer/Register
   * @secure
   * @response `200` `CustomerRegisterCreateData` OK
   * @response `400` `(string)[]` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  customerRegisterCreate = (
    data: RegisterModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<CustomerRegisterCreateData, CustomerRegisterCreateError>({
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
   * @name CustomerRegisterResultCreate
   * @summary Prepare the register result model
   * @request POST:/api-frontend/Customer/RegisterResult/{resultId}
   * @secure
   * @response `200` `CustomerRegisterResultCreateData` OK
   * @response `401` `string` Unauthorized
   */
  customerRegisterResultCreate = (
    { resultId, ...query }: CustomerRegisterResultCreateParams,
    params: RequestParams = {},
  ) =>
    this.request<
      CustomerRegisterResultCreateData,
      CustomerRegisterResultCreateError
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
   * @name CustomerCheckUsernameAvailabilityList
   * @summary Check Username availability
   * @request GET:/api-frontend/Customer/CheckUsernameAvailability
   * @secure
   * @response `200` `CustomerCheckUsernameAvailabilityListData` OK
   * @response `401` `string` Unauthorized
   */
  customerCheckUsernameAvailabilityList = (
    query: CustomerCheckUsernameAvailabilityListParams,
    params: RequestParams = {},
  ) =>
    this.request<
      CustomerCheckUsernameAvailabilityListData,
      CustomerCheckUsernameAvailabilityListError
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
   * @name CustomerAccountActivationCreate
   * @summary Account activation
   * @request POST:/api-frontend/Customer/AccountActivation
   * @secure
   * @response `200` `CustomerAccountActivationCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  customerAccountActivationCreate = (
    query: CustomerAccountActivationCreateParams,
    params: RequestParams = {},
  ) =>
    this.request<
      CustomerAccountActivationCreateData,
      CustomerAccountActivationCreateError
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
   * @name CustomerInfoList
   * @summary Prepare the customer info model
   * @request GET:/api-frontend/Customer/Info
   * @secure
   * @response `200` `CustomerInfoListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  customerInfoList = (params: RequestParams = {}) =>
    this.request<CustomerInfoListData, CustomerInfoListError>({
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
   * @name CustomerInfoCreate
   * @summary Customer info
   * @request POST:/api-frontend/Customer/Info
   * @secure
   * @response `200` `CustomerInfoCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  customerInfoCreate = (
    data: CustomerInfoModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<CustomerInfoCreateData, CustomerInfoCreateError>({
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
   * @name CustomerRemoveExternalAssociationDelete
   * @summary Delete the external authentication record
   * @request DELETE:/api-frontend/Customer/RemoveExternalAssociation/{id}
   * @secure
   * @response `200` `CustomerRemoveExternalAssociationDeleteData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  customerRemoveExternalAssociationDelete = (
    id: number,
    params: RequestParams = {},
  ) =>
    this.request<
      CustomerRemoveExternalAssociationDeleteData,
      CustomerRemoveExternalAssociationDeleteError
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
   * @name CustomerEmailRevalidationCreate
   * @summary Email revalidation
   * @request POST:/api-frontend/Customer/EmailRevalidation
   * @secure
   * @response `200` `CustomerEmailRevalidationCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  customerEmailRevalidationCreate = (
    query: CustomerEmailRevalidationCreateParams,
    params: RequestParams = {},
  ) =>
    this.request<
      CustomerEmailRevalidationCreateData,
      CustomerEmailRevalidationCreateError
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
   * @name CustomerAddressesList
   * @summary Prepare the customer address list model
   * @request GET:/api-frontend/Customer/Addresses
   * @secure
   * @response `200` `CustomerAddressesListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  customerAddressesList = (params: RequestParams = {}) =>
    this.request<CustomerAddressesListData, CustomerAddressesListError>({
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
   * @name CustomerAddressDeleteDelete
   * @summary Address delete
   * @request DELETE:/api-frontend/Customer/AddressDelete/{addressId}
   * @secure
   * @response `200` `CustomerAddressDeleteDeleteData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  customerAddressDeleteDelete = (
    addressId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      CustomerAddressDeleteDeleteData,
      CustomerAddressDeleteDeleteError
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
   * @name CustomerAddressAddList
   * @summary Prepare address model
   * @request GET:/api-frontend/Customer/AddressAdd
   * @secure
   * @response `200` `CustomerAddressAddListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  customerAddressAddList = (params: RequestParams = {}) =>
    this.request<CustomerAddressAddListData, CustomerAddressAddListError>({
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
   * @name CustomerAddressAddCreate
   * @summary Address add
   * @request POST:/api-frontend/Customer/AddressAdd
   * @secure
   * @response `200` `CustomerAddressAddCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  customerAddressAddCreate = (
    data: CustomerAddressEditModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<CustomerAddressAddCreateData, CustomerAddressAddCreateError>({
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
   * @name CustomerAddressEditDetail
   * @summary Prepare address model
   * @request GET:/api-frontend/Customer/AddressEdit/{addressId}
   * @secure
   * @response `200` `CustomerAddressEditDetailData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  customerAddressEditDetail = (addressId: number, params: RequestParams = {}) =>
    this.request<CustomerAddressEditDetailData, CustomerAddressEditDetailError>(
      {
        path: `/api-frontend/Customer/AddressEdit/${addressId}`,
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
   * @name CustomerAddressEditUpdate
   * @summary Update address
   * @request PUT:/api-frontend/Customer/AddressEdit
   * @secure
   * @response `200` `CustomerAddressEditUpdateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  customerAddressEditUpdate = (
    data: CustomerAddressEditModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<CustomerAddressEditUpdateData, CustomerAddressEditUpdateError>(
      {
        path: `/api-frontend/Customer/AddressEdit`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * No description
   *
   * @tags Customer
   * @name CustomerDownloadableProductsList
   * @summary Prepare the customer downloadable products model
   * @request GET:/api-frontend/Customer/DownloadableProducts
   * @secure
   * @response `200` `CustomerDownloadableProductsListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  customerDownloadableProductsList = (params: RequestParams = {}) =>
    this.request<
      CustomerDownloadableProductsListData,
      CustomerDownloadableProductsListError
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
   * @name CustomerUserAgreementList
   * @summary Prepare the user agreement model
   * @request GET:/api-frontend/Customer/UserAgreement
   * @secure
   * @response `200` `CustomerUserAgreementListData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  customerUserAgreementList = (
    query: CustomerUserAgreementListParams,
    params: RequestParams = {},
  ) =>
    this.request<CustomerUserAgreementListData, CustomerUserAgreementListError>(
      {
        path: `/api-frontend/Customer/UserAgreement`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
    );
  /**
   * No description
   *
   * @tags Customer
   * @name CustomerChangePasswordList
   * @summary Prepare the change password model
   * @request GET:/api-frontend/Customer/ChangePassword
   * @secure
   * @response `200` `CustomerChangePasswordListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  customerChangePasswordList = (params: RequestParams = {}) =>
    this.request<
      CustomerChangePasswordListData,
      CustomerChangePasswordListError
    >({
      path: `/api-frontend/Customer/ChangePassword`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Customer
   * @name CustomerChangePasswordCreate
   * @summary Change password
   * @request POST:/api-frontend/Customer/ChangePassword
   * @secure
   * @response `200` `CustomerChangePasswordCreateData` OK
   * @response `400` `(string)[]` Bad Request
   * @response `401` `string` Unauthorized
   */
  customerChangePasswordCreate = (
    data: ChangePasswordModelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CustomerChangePasswordCreateData,
      CustomerChangePasswordCreateError
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
   * @name CustomerAvatarList
   * @summary Prepare the customer avatar model
   * @request GET:/api-frontend/Customer/Avatar
   * @secure
   * @response `200` `CustomerAvatarListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  customerAvatarList = (params: RequestParams = {}) =>
    this.request<CustomerAvatarListData, CustomerAvatarListError>({
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
   * @name CustomerUploadAvatarCreate
   * @summary Upload avatar
   * @request POST:/api-frontend/Customer/UploadAvatar
   * @secure
   * @response `200` `CustomerUploadAvatarCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  customerUploadAvatarCreate = (
    query: CustomerUploadAvatarCreateParams,
    data: CustomerUploadAvatarCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      CustomerUploadAvatarCreateData,
      CustomerUploadAvatarCreateError
    >({
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
   * @name CustomerRemoveAvatarDelete
   * @summary Remove avatar
   * @request DELETE:/api-frontend/Customer/RemoveAvatar
   * @secure
   * @response `200` `CustomerRemoveAvatarDeleteData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  customerRemoveAvatarDelete = (params: RequestParams = {}) =>
    this.request<
      CustomerRemoveAvatarDeleteData,
      CustomerRemoveAvatarDeleteError
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
   * @name CustomerGdprToolsList
   * @summary Prepare the GDPR tools model
   * @request GET:/api-frontend/Customer/GdprTools
   * @secure
   * @response `200` `CustomerGdprToolsListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  customerGdprToolsList = (params: RequestParams = {}) =>
    this.request<CustomerGdprToolsListData, CustomerGdprToolsListError>({
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
   * @name CustomerGdprToolsExportList
   * @summary Export customer info (GDPR request) to XLSX
   * @request GET:/api-frontend/Customer/GdprToolsExport
   * @secure
   * @response `200` `CustomerGdprToolsExportListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  customerGdprToolsExportList = (params: RequestParams = {}) =>
    this.request<
      CustomerGdprToolsExportListData,
      CustomerGdprToolsExportListError
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
   * @name CustomerGdprToolsDeleteDelete
   * @summary Gdpr tools delete
   * @request DELETE:/api-frontend/Customer/GdprToolsDelete
   * @secure
   * @response `200` `CustomerGdprToolsDeleteDeleteData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  customerGdprToolsDeleteDelete = (params: RequestParams = {}) =>
    this.request<
      CustomerGdprToolsDeleteDeleteData,
      CustomerGdprToolsDeleteDeleteError
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
   * @name CustomerCheckGiftCardBalanceList
   * @summary Prepare the check gift card balance madel
   * @request GET:/api-frontend/Customer/CheckGiftCardBalance
   * @secure
   * @response `200` `CustomerCheckGiftCardBalanceListData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  customerCheckGiftCardBalanceList = (params: RequestParams = {}) =>
    this.request<
      CustomerCheckGiftCardBalanceListData,
      CustomerCheckGiftCardBalanceListError
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
   * @name CustomerCheckBalanceCreate
   * @summary Check GiftCard balance
   * @request POST:/api-frontend/Customer/CheckBalance
   * @secure
   * @response `200` `CustomerCheckBalanceCreateData` OK
   * @response `401` `string` Unauthorized
   */
  customerCheckBalanceCreate = (
    data: CheckGiftCardBalanceModelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CustomerCheckBalanceCreateData,
      CustomerCheckBalanceCreateError
    >({
      path: `/api-frontend/Customer/CheckBalance`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
