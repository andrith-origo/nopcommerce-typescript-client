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
  CheckoutBillingAddressModelDto,
  CheckoutBillingAddressModelDtoBaseModelDtoRequest,
  CheckoutShippingAddressModelDto,
  CheckoutShippingAddressModelDtoBaseModelDtoRequest,
  DeleteCheckoutDeleteEditBillingAddressData,
  DeleteCheckoutDeleteEditBillingAddressError,
  DeleteCheckoutDeleteEditShippingAddressData,
  DeleteCheckoutDeleteEditShippingAddressError,
  GetCheckoutCompletedData,
  GetCheckoutCompletedError,
  GetCheckoutCompletedParams,
  GetCheckoutConfirmData,
  GetCheckoutConfirmError,
  GetCheckoutGetAddressByIdData,
  GetCheckoutGetAddressByIdError,
  GetCheckoutPaymentInfoData,
  GetCheckoutPaymentInfoError,
  GetCheckoutPaymentMethodData,
  GetCheckoutPaymentMethodError,
  GetCheckoutSelectBillingAddressData,
  GetCheckoutSelectBillingAddressError,
  GetCheckoutSelectBillingAddressParams,
  GetCheckoutSelectShippingAddressData,
  GetCheckoutSelectShippingAddressError,
  GetCheckoutShippingAddressData,
  GetCheckoutShippingAddressError,
  GetCheckoutShippingMethodData,
  GetCheckoutShippingMethodError,
  PostCheckoutBillingAddressData,
  PostCheckoutBillingAddressError,
  PostCheckoutConfirmOrderData,
  PostCheckoutConfirmOrderError,
  PostCheckoutEnterPaymentInfoData,
  PostCheckoutEnterPaymentInfoError,
  PostCheckoutEnterPaymentInfoPayload,
  PostCheckoutNewBillingAddressData,
  PostCheckoutNewBillingAddressError,
  PostCheckoutNewShippingAddressData,
  PostCheckoutNewShippingAddressError,
  PostCheckoutSaveEditBillingAddressData,
  PostCheckoutSaveEditBillingAddressError,
  PostCheckoutSaveEditShippingAddressData,
  PostCheckoutSaveEditShippingAddressError,
  PostCheckoutSelectPaymentMethodData,
  PostCheckoutSelectPaymentMethodError,
  PostCheckoutSelectPaymentMethodParams,
  PostCheckoutSelectShippingMethodData,
  PostCheckoutSelectShippingMethodError,
  PostCheckoutSelectShippingMethodParams,
  PostCheckoutSelectShippingMethodPayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Checkout<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Checkout
   * @name GetCheckoutGetAddressById
   * @summary Get specified Address by addressId
   * @request GET:/api-frontend/Checkout/GetAddressById/{addressId}
   * @secure
   * @response `200` `GetCheckoutGetAddressByIdData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getCheckoutGetAddressById = (addressId: number, params: RequestParams = {}) =>
    this.request<GetCheckoutGetAddressByIdData, GetCheckoutGetAddressByIdError>(
      {
        path: `/api-frontend/Checkout/GetAddressById/${addressId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
    );
  /**
   * No description
   *
   * @tags Checkout
   * @name PostCheckoutBillingAddress
   * @summary Prepare billing address model
   * @request POST:/api-frontend/Checkout/BillingAddress
   * @secure
   * @response `200` `PostCheckoutBillingAddressData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCheckoutBillingAddress = (params: RequestParams = {}) =>
    this.request<
      PostCheckoutBillingAddressData,
      PostCheckoutBillingAddressError
    >({
      path: `/api-frontend/Checkout/BillingAddress`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Checkout
   * @name GetCheckoutSelectBillingAddress
   * @summary Select billing address
   * @request GET:/api-frontend/Checkout/SelectBillingAddress/{addressId}
   * @secure
   * @response `200` `GetCheckoutSelectBillingAddressData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getCheckoutSelectBillingAddress = (
    { addressId, ...query }: GetCheckoutSelectBillingAddressParams,
    params: RequestParams = {},
  ) =>
    this.request<
      GetCheckoutSelectBillingAddressData,
      GetCheckoutSelectBillingAddressError
    >({
      path: `/api-frontend/Checkout/SelectBillingAddress/${addressId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Checkout
   * @name PostCheckoutNewBillingAddress
   * @summary New billing address
   * @request POST:/api-frontend/Checkout/NewBillingAddress
   * @secure
   * @response `200` `PostCheckoutNewBillingAddressData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCheckoutNewBillingAddress = (
    data: CheckoutBillingAddressModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCheckoutNewBillingAddressData,
      PostCheckoutNewBillingAddressError
    >({
      path: `/api-frontend/Checkout/NewBillingAddress`,
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
   * @tags Checkout
   * @name PostCheckoutSaveEditBillingAddress
   * @summary Save edited address
   * @request POST:/api-frontend/Checkout/SaveEditBillingAddress
   * @secure
   * @response `200` `PostCheckoutSaveEditBillingAddressData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCheckoutSaveEditBillingAddress = (
    data: CheckoutBillingAddressModelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCheckoutSaveEditBillingAddressData,
      PostCheckoutSaveEditBillingAddressError
    >({
      path: `/api-frontend/Checkout/SaveEditBillingAddress`,
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
   * @tags Checkout
   * @name DeleteCheckoutDeleteEditBillingAddress
   * @summary Delete edited address
   * @request DELETE:/api-frontend/Checkout/DeleteEditBillingAddress/{addressId}
   * @secure
   * @response `200` `DeleteCheckoutDeleteEditBillingAddressData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  deleteCheckoutDeleteEditBillingAddress = (
    addressId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      DeleteCheckoutDeleteEditBillingAddressData,
      DeleteCheckoutDeleteEditBillingAddressError
    >({
      path: `/api-frontend/Checkout/DeleteEditBillingAddress/${addressId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Checkout
   * @name GetCheckoutShippingAddress
   * @summary Prepare shipping address model
   * @request GET:/api-frontend/Checkout/ShippingAddress
   * @secure
   * @response `200` `GetCheckoutShippingAddressData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getCheckoutShippingAddress = (params: RequestParams = {}) =>
    this.request<
      GetCheckoutShippingAddressData,
      GetCheckoutShippingAddressError
    >({
      path: `/api-frontend/Checkout/ShippingAddress`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Checkout
   * @name GetCheckoutSelectShippingAddress
   * @summary Select shipping address
   * @request GET:/api-frontend/Checkout/SelectShippingAddress/{addressId}
   * @secure
   * @response `200` `GetCheckoutSelectShippingAddressData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getCheckoutSelectShippingAddress = (
    addressId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      GetCheckoutSelectShippingAddressData,
      GetCheckoutSelectShippingAddressError
    >({
      path: `/api-frontend/Checkout/SelectShippingAddress/${addressId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Checkout
   * @name PostCheckoutNewShippingAddress
   * @summary New shipping address
   * @request POST:/api-frontend/Checkout/NewShippingAddress
   * @secure
   * @response `200` `PostCheckoutNewShippingAddressData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCheckoutNewShippingAddress = (
    data: CheckoutShippingAddressModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCheckoutNewShippingAddressData,
      PostCheckoutNewShippingAddressError
    >({
      path: `/api-frontend/Checkout/NewShippingAddress`,
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
   * @tags Checkout
   * @name PostCheckoutSaveEditShippingAddress
   * @summary Save edited address
   * @request POST:/api-frontend/Checkout/SaveEditShippingAddress
   * @secure
   * @response `200` `PostCheckoutSaveEditShippingAddressData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCheckoutSaveEditShippingAddress = (
    data: CheckoutShippingAddressModelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCheckoutSaveEditShippingAddressData,
      PostCheckoutSaveEditShippingAddressError
    >({
      path: `/api-frontend/Checkout/SaveEditShippingAddress`,
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
   * @tags Checkout
   * @name DeleteCheckoutDeleteEditShippingAddress
   * @summary Delete edited address
   * @request DELETE:/api-frontend/Checkout/DeleteEditShippingAddress/{addressId}
   * @secure
   * @response `200` `DeleteCheckoutDeleteEditShippingAddressData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  deleteCheckoutDeleteEditShippingAddress = (
    addressId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      DeleteCheckoutDeleteEditShippingAddressData,
      DeleteCheckoutDeleteEditShippingAddressError
    >({
      path: `/api-frontend/Checkout/DeleteEditShippingAddress/${addressId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Checkout
   * @name GetCheckoutShippingMethod
   * @summary Prepare shipping method model
   * @request GET:/api-frontend/Checkout/ShippingMethod
   * @secure
   * @response `200` `GetCheckoutShippingMethodData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getCheckoutShippingMethod = (params: RequestParams = {}) =>
    this.request<GetCheckoutShippingMethodData, GetCheckoutShippingMethodError>(
      {
        path: `/api-frontend/Checkout/ShippingMethod`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
    );
  /**
   * No description
   *
   * @tags Checkout
   * @name PostCheckoutSelectShippingMethod
   * @summary Select shipping method
   * @request POST:/api-frontend/Checkout/SelectShippingMethod
   * @secure
   * @response `200` `PostCheckoutSelectShippingMethodData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCheckoutSelectShippingMethod = (
    query: PostCheckoutSelectShippingMethodParams,
    data: PostCheckoutSelectShippingMethodPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCheckoutSelectShippingMethodData,
      PostCheckoutSelectShippingMethodError
    >({
      path: `/api-frontend/Checkout/SelectShippingMethod`,
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
   * @tags Checkout
   * @name GetCheckoutPaymentMethod
   * @summary Prepare payment method model
   * @request GET:/api-frontend/Checkout/PaymentMethod
   * @secure
   * @response `200` `GetCheckoutPaymentMethodData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getCheckoutPaymentMethod = (params: RequestParams = {}) =>
    this.request<GetCheckoutPaymentMethodData, GetCheckoutPaymentMethodError>({
      path: `/api-frontend/Checkout/PaymentMethod`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Checkout
   * @name PostCheckoutSelectPaymentMethod
   * @summary Select payment method
   * @request POST:/api-frontend/Checkout/SelectPaymentMethod
   * @secure
   * @response `200` `PostCheckoutSelectPaymentMethodData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCheckoutSelectPaymentMethod = (
    query: PostCheckoutSelectPaymentMethodParams,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCheckoutSelectPaymentMethodData,
      PostCheckoutSelectPaymentMethodError
    >({
      path: `/api-frontend/Checkout/SelectPaymentMethod`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Checkout
   * @name GetCheckoutPaymentInfo
   * @summary Prepare payment info model
   * @request GET:/api-frontend/Checkout/PaymentInfo
   * @secure
   * @response `200` `GetCheckoutPaymentInfoData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getCheckoutPaymentInfo = (params: RequestParams = {}) =>
    this.request<GetCheckoutPaymentInfoData, GetCheckoutPaymentInfoError>({
      path: `/api-frontend/Checkout/PaymentInfo`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Checkout
   * @name PostCheckoutEnterPaymentInfo
   * @summary Enter payment Info
   * @request POST:/api-frontend/Checkout/EnterPaymentInfo
   * @secure
   * @response `200` `PostCheckoutEnterPaymentInfoData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCheckoutEnterPaymentInfo = (
    data: PostCheckoutEnterPaymentInfoPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      PostCheckoutEnterPaymentInfoData,
      PostCheckoutEnterPaymentInfoError
    >({
      path: `/api-frontend/Checkout/EnterPaymentInfo`,
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
   * @tags Checkout
   * @name GetCheckoutConfirm
   * @summary Prepare confirm order model
   * @request GET:/api-frontend/Checkout/Confirm
   * @secure
   * @response `200` `GetCheckoutConfirmData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getCheckoutConfirm = (params: RequestParams = {}) =>
    this.request<GetCheckoutConfirmData, GetCheckoutConfirmError>({
      path: `/api-frontend/Checkout/Confirm`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Checkout
   * @name PostCheckoutConfirmOrder
   * @summary Confirm order
   * @request POST:/api-frontend/Checkout/ConfirmOrder
   * @secure
   * @response `200` `PostCheckoutConfirmOrderData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  postCheckoutConfirmOrder = (params: RequestParams = {}) =>
    this.request<PostCheckoutConfirmOrderData, PostCheckoutConfirmOrderError>({
      path: `/api-frontend/Checkout/ConfirmOrder`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Checkout
   * @name GetCheckoutCompleted
   * @summary Prepare checkout completed model
   * @request GET:/api-frontend/Checkout/Completed
   * @secure
   * @response `200` `GetCheckoutCompletedData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  getCheckoutCompleted = (
    query: GetCheckoutCompletedParams,
    params: RequestParams = {},
  ) =>
    this.request<GetCheckoutCompletedData, GetCheckoutCompletedError>({
      path: `/api-frontend/Checkout/Completed`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
