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
  CheckoutBillingAddressCreateData,
  CheckoutBillingAddressCreateError,
  CheckoutBillingAddressModelDto,
  CheckoutBillingAddressModelDtoBaseModelDtoRequest,
  CheckoutCompletedListData,
  CheckoutCompletedListError,
  CheckoutCompletedListParams,
  CheckoutConfirmListData,
  CheckoutConfirmListError,
  CheckoutConfirmOrderCreateData,
  CheckoutConfirmOrderCreateError,
  CheckoutDeleteEditBillingAddressDeleteData,
  CheckoutDeleteEditBillingAddressDeleteError,
  CheckoutDeleteEditShippingAddressDeleteData,
  CheckoutDeleteEditShippingAddressDeleteError,
  CheckoutEnterPaymentInfoCreateData,
  CheckoutEnterPaymentInfoCreateError,
  CheckoutEnterPaymentInfoCreatePayload,
  CheckoutGetAddressByIdDetailData,
  CheckoutGetAddressByIdDetailError,
  CheckoutNewBillingAddressCreateData,
  CheckoutNewBillingAddressCreateError,
  CheckoutNewShippingAddressCreateData,
  CheckoutNewShippingAddressCreateError,
  CheckoutPaymentInfoListData,
  CheckoutPaymentInfoListError,
  CheckoutPaymentMethodListData,
  CheckoutPaymentMethodListError,
  CheckoutSaveEditBillingAddressCreateData,
  CheckoutSaveEditBillingAddressCreateError,
  CheckoutSaveEditShippingAddressCreateData,
  CheckoutSaveEditShippingAddressCreateError,
  CheckoutSelectBillingAddressDetailData,
  CheckoutSelectBillingAddressDetailError,
  CheckoutSelectBillingAddressDetailParams,
  CheckoutSelectPaymentMethodCreateData,
  CheckoutSelectPaymentMethodCreateError,
  CheckoutSelectPaymentMethodCreateParams,
  CheckoutSelectShippingAddressDetailData,
  CheckoutSelectShippingAddressDetailError,
  CheckoutSelectShippingMethodCreateData,
  CheckoutSelectShippingMethodCreateError,
  CheckoutSelectShippingMethodCreateParams,
  CheckoutSelectShippingMethodCreatePayload,
  CheckoutShippingAddressListData,
  CheckoutShippingAddressListError,
  CheckoutShippingAddressModelDto,
  CheckoutShippingAddressModelDtoBaseModelDtoRequest,
  CheckoutShippingMethodListData,
  CheckoutShippingMethodListError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Checkout<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Checkout
   * @name CheckoutGetAddressByIdDetail
   * @summary Get specified Address by addressId
   * @request GET:/api-frontend/Checkout/GetAddressById/{addressId}
   * @secure
   * @response `200` `CheckoutGetAddressByIdDetailData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  checkoutGetAddressByIdDetail = (
    addressId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      CheckoutGetAddressByIdDetailData,
      CheckoutGetAddressByIdDetailError
    >({
      path: `/api-frontend/Checkout/GetAddressById/${addressId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Checkout
   * @name CheckoutBillingAddressCreate
   * @summary Prepare billing address model
   * @request POST:/api-frontend/Checkout/BillingAddress
   * @secure
   * @response `200` `CheckoutBillingAddressCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  checkoutBillingAddressCreate = (params: RequestParams = {}) =>
    this.request<
      CheckoutBillingAddressCreateData,
      CheckoutBillingAddressCreateError
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
   * @name CheckoutSelectBillingAddressDetail
   * @summary Select billing address
   * @request GET:/api-frontend/Checkout/SelectBillingAddress/{addressId}
   * @secure
   * @response `200` `CheckoutSelectBillingAddressDetailData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  checkoutSelectBillingAddressDetail = (
    { addressId, ...query }: CheckoutSelectBillingAddressDetailParams,
    params: RequestParams = {},
  ) =>
    this.request<
      CheckoutSelectBillingAddressDetailData,
      CheckoutSelectBillingAddressDetailError
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
   * @name CheckoutNewBillingAddressCreate
   * @summary New billing address
   * @request POST:/api-frontend/Checkout/NewBillingAddress
   * @secure
   * @response `200` `CheckoutNewBillingAddressCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  checkoutNewBillingAddressCreate = (
    data: CheckoutBillingAddressModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<
      CheckoutNewBillingAddressCreateData,
      CheckoutNewBillingAddressCreateError
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
   * @name CheckoutSaveEditBillingAddressCreate
   * @summary Save edited address
   * @request POST:/api-frontend/Checkout/SaveEditBillingAddress
   * @secure
   * @response `200` `CheckoutSaveEditBillingAddressCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  checkoutSaveEditBillingAddressCreate = (
    data: CheckoutBillingAddressModelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CheckoutSaveEditBillingAddressCreateData,
      CheckoutSaveEditBillingAddressCreateError
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
   * @name CheckoutDeleteEditBillingAddressDelete
   * @summary Delete edited address
   * @request DELETE:/api-frontend/Checkout/DeleteEditBillingAddress/{addressId}
   * @secure
   * @response `200` `CheckoutDeleteEditBillingAddressDeleteData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  checkoutDeleteEditBillingAddressDelete = (
    addressId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      CheckoutDeleteEditBillingAddressDeleteData,
      CheckoutDeleteEditBillingAddressDeleteError
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
   * @name CheckoutShippingAddressList
   * @summary Prepare shipping address model
   * @request GET:/api-frontend/Checkout/ShippingAddress
   * @secure
   * @response `200` `CheckoutShippingAddressListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  checkoutShippingAddressList = (params: RequestParams = {}) =>
    this.request<
      CheckoutShippingAddressListData,
      CheckoutShippingAddressListError
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
   * @name CheckoutSelectShippingAddressDetail
   * @summary Select shipping address
   * @request GET:/api-frontend/Checkout/SelectShippingAddress/{addressId}
   * @secure
   * @response `200` `CheckoutSelectShippingAddressDetailData` OK
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  checkoutSelectShippingAddressDetail = (
    addressId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      CheckoutSelectShippingAddressDetailData,
      CheckoutSelectShippingAddressDetailError
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
   * @name CheckoutNewShippingAddressCreate
   * @summary New shipping address
   * @request POST:/api-frontend/Checkout/NewShippingAddress
   * @secure
   * @response `200` `CheckoutNewShippingAddressCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  checkoutNewShippingAddressCreate = (
    data: CheckoutShippingAddressModelDtoBaseModelDtoRequest,
    params: RequestParams = {},
  ) =>
    this.request<
      CheckoutNewShippingAddressCreateData,
      CheckoutNewShippingAddressCreateError
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
   * @name CheckoutSaveEditShippingAddressCreate
   * @summary Save edited address
   * @request POST:/api-frontend/Checkout/SaveEditShippingAddress
   * @secure
   * @response `200` `CheckoutSaveEditShippingAddressCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  checkoutSaveEditShippingAddressCreate = (
    data: CheckoutShippingAddressModelDto,
    params: RequestParams = {},
  ) =>
    this.request<
      CheckoutSaveEditShippingAddressCreateData,
      CheckoutSaveEditShippingAddressCreateError
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
   * @name CheckoutDeleteEditShippingAddressDelete
   * @summary Delete edited address
   * @request DELETE:/api-frontend/Checkout/DeleteEditShippingAddress/{addressId}
   * @secure
   * @response `200` `CheckoutDeleteEditShippingAddressDeleteData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   */
  checkoutDeleteEditShippingAddressDelete = (
    addressId: number,
    params: RequestParams = {},
  ) =>
    this.request<
      CheckoutDeleteEditShippingAddressDeleteData,
      CheckoutDeleteEditShippingAddressDeleteError
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
   * @name CheckoutShippingMethodList
   * @summary Prepare shipping method model
   * @request GET:/api-frontend/Checkout/ShippingMethod
   * @secure
   * @response `200` `CheckoutShippingMethodListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  checkoutShippingMethodList = (params: RequestParams = {}) =>
    this.request<
      CheckoutShippingMethodListData,
      CheckoutShippingMethodListError
    >({
      path: `/api-frontend/Checkout/ShippingMethod`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Checkout
   * @name CheckoutSelectShippingMethodCreate
   * @summary Select shipping method
   * @request POST:/api-frontend/Checkout/SelectShippingMethod
   * @secure
   * @response `200` `CheckoutSelectShippingMethodCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  checkoutSelectShippingMethodCreate = (
    query: CheckoutSelectShippingMethodCreateParams,
    data: CheckoutSelectShippingMethodCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      CheckoutSelectShippingMethodCreateData,
      CheckoutSelectShippingMethodCreateError
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
   * @name CheckoutPaymentMethodList
   * @summary Prepare payment method model
   * @request GET:/api-frontend/Checkout/PaymentMethod
   * @secure
   * @response `200` `CheckoutPaymentMethodListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  checkoutPaymentMethodList = (params: RequestParams = {}) =>
    this.request<CheckoutPaymentMethodListData, CheckoutPaymentMethodListError>(
      {
        path: `/api-frontend/Checkout/PaymentMethod`,
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
   * @name CheckoutSelectPaymentMethodCreate
   * @summary Select payment method
   * @request POST:/api-frontend/Checkout/SelectPaymentMethod
   * @secure
   * @response `200` `CheckoutSelectPaymentMethodCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  checkoutSelectPaymentMethodCreate = (
    query: CheckoutSelectPaymentMethodCreateParams,
    params: RequestParams = {},
  ) =>
    this.request<
      CheckoutSelectPaymentMethodCreateData,
      CheckoutSelectPaymentMethodCreateError
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
   * @name CheckoutPaymentInfoList
   * @summary Prepare payment info model
   * @request GET:/api-frontend/Checkout/PaymentInfo
   * @secure
   * @response `200` `CheckoutPaymentInfoListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  checkoutPaymentInfoList = (params: RequestParams = {}) =>
    this.request<CheckoutPaymentInfoListData, CheckoutPaymentInfoListError>({
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
   * @name CheckoutEnterPaymentInfoCreate
   * @summary Enter payment Info
   * @request POST:/api-frontend/Checkout/EnterPaymentInfo
   * @secure
   * @response `200` `CheckoutEnterPaymentInfoCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  checkoutEnterPaymentInfoCreate = (
    data: CheckoutEnterPaymentInfoCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      CheckoutEnterPaymentInfoCreateData,
      CheckoutEnterPaymentInfoCreateError
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
   * @name CheckoutConfirmList
   * @summary Prepare confirm order model
   * @request GET:/api-frontend/Checkout/Confirm
   * @secure
   * @response `200` `CheckoutConfirmListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  checkoutConfirmList = (params: RequestParams = {}) =>
    this.request<CheckoutConfirmListData, CheckoutConfirmListError>({
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
   * @name CheckoutConfirmOrderCreate
   * @summary Confirm order
   * @request POST:/api-frontend/Checkout/ConfirmOrder
   * @secure
   * @response `200` `CheckoutConfirmOrderCreateData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  checkoutConfirmOrderCreate = (params: RequestParams = {}) =>
    this.request<
      CheckoutConfirmOrderCreateData,
      CheckoutConfirmOrderCreateError
    >({
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
   * @name CheckoutCompletedList
   * @summary Prepare checkout completed model
   * @request GET:/api-frontend/Checkout/Completed
   * @secure
   * @response `200` `CheckoutCompletedListData` OK
   * @response `400` `string` Bad Request
   * @response `401` `string` Unauthorized
   * @response `404` `string` Not Found
   */
  checkoutCompletedList = (
    query: CheckoutCompletedListParams,
    params: RequestParams = {},
  ) =>
    this.request<CheckoutCompletedListData, CheckoutCompletedListError>({
      path: `/api-frontend/Checkout/Completed`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
