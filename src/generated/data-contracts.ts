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

export enum TaxDisplayType {
  IncludingTax = "IncludingTax",
  ExcludingTax = "ExcludingTax",
}

export enum ShoppingCartType {
  ShoppingCart = "ShoppingCart",
  Wishlist = "Wishlist",
}

export enum ProductType {
  SimpleProduct = "SimpleProduct",
  GroupedProduct = "GroupedProduct",
}

export enum ManageInventoryMethod {
  DontManageStock = "DontManageStock",
  ManageStock = "ManageStock",
  ManageStockByAttributes = "ManageStockByAttributes",
}

export enum GiftCardType {
  Virtual = "Virtual",
  Physical = "Physical",
}

export enum ForumTopicType {
  Normal = "Normal",
  Sticky = "Sticky",
  Announcement = "Announcement",
}

export enum EditorType {
  SimpleTextBox = "SimpleTextBox",
  BBCodeEditor = "BBCodeEditor",
}

export enum AttributeControlType {
  DropdownList = "DropdownList",
  RadioList = "RadioList",
  Checkboxes = "Checkboxes",
  TextBox = "TextBox",
  MultilineTextbox = "MultilineTextbox",
  Datepicker = "Datepicker",
  FileUpload = "FileUpload",
  ColorSquares = "ColorSquares",
  ImageSquares = "ImageSquares",
  ReadonlyCheckboxes = "ReadonlyCheckboxes",
}

export interface AccountActivationModelDto {
  result?: string | null;
  return_url?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface ActiveDiscussionsModelDto {
  forum_topics?: ForumTopicRowModelDto[] | null;
  view_all_link_enabled?: boolean;
  active_discussions_feed_enabled?: boolean;
  /** @format int32 */
  topic_page_size?: number;
  /** @format int32 */
  topic_total_records?: number;
  /** @format int32 */
  topic_page_index?: number;
  /** @format int32 */
  posts_page_size?: number;
  allow_post_voting?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface AddBlogCommentModelDto {
  comment_text?: string | null;
  display_captcha?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface AddNewsCommentModelDto {
  comment_title?: string | null;
  comment_text?: string | null;
  display_captcha?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface AddProductReviewModelDto {
  title?: string | null;
  review_text?: string | null;
  /** @format int32 */
  rating?: number;
  display_captcha?: boolean;
  can_current_customer_leave_review?: boolean;
  successfully_added?: boolean;
  can_add_new_review?: boolean;
  result?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface AddProductReviewReviewTypeMappingModelDto {
  /** @format int32 */
  product_review_id?: number;
  /** @format int32 */
  review_type_id?: number;
  /** @format int32 */
  rating?: number;
  name?: string | null;
  description?: string | null;
  /** @format int32 */
  display_order?: number;
  is_required?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface AddProductToCartResponse {
  errors?: string[] | null;
  success?: boolean;
  message?: string | null;
  model?: MiniShoppingCartModelDto;
}

export interface AddProductToCompareListResponse {
  success?: boolean;
  message?: string | null;
}

export interface AddToCartModelDto {
  /** @format int32 */
  product_id?: number;
  /**
   * qty
   * @format int32
   */
  entered_quantity?: number;
  minimum_quantity_notification?: string | null;
  allowed_quantities?: SelectListItemDto[] | null;
  /** price entered by customers */
  customer_enters_price?: boolean;
  /** @format double */
  customer_entered_price?: number;
  customer_entered_price_range?: string | null;
  disable_buy_button?: boolean;
  disable_wishlist_button?: boolean;
  /** rental */
  is_rental?: boolean;
  /** pre-order */
  available_for_pre_order?: boolean;
  /** @format date-time */
  pre_order_availability_start_date_time_utc?: string | null;
  pre_order_availability_start_date_time_user_time?: string | null;
  /**
   * updating existing shopping cart or wishlist item?
   * @format int32
   */
  updated_shopping_cart_item_id?: number;
  update_shopping_cart_item_type?: ShoppingCartType;
  custom_properties?: Record<string, string | null>;
}

export interface AddressAddResponse {
  model?: CustomerAddressEditModelDto;
  errors?: string[] | null;
}

export interface AddressAttributeModelDto {
  control_id?: string | null;
  name?: string | null;
  is_required?: boolean;
  default_value?: string | null;
  attribute_control_type?: AttributeControlType;
  values?: AddressAttributeValueModelDto[] | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface AddressAttributeValueModelDto {
  name?: string | null;
  is_pre_selected?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface AddressEditResponse {
  model?: CustomerAddressEditModelDto;
  errors?: string[] | null;
}

export interface AddressModelDto {
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  company_enabled?: boolean;
  company_required?: boolean;
  company?: string | null;
  country_enabled?: boolean;
  /** @format int32 */
  country_id?: number | null;
  country_name?: string | null;
  state_province_enabled?: boolean;
  /** @format int32 */
  state_province_id?: number | null;
  state_province_name?: string | null;
  county_enabled?: boolean;
  county_required?: boolean;
  county?: string | null;
  city_enabled?: boolean;
  city_required?: boolean;
  city?: string | null;
  street_address_enabled?: boolean;
  street_address_required?: boolean;
  address1?: string | null;
  street_address2_enabled?: boolean;
  street_address2_required?: boolean;
  address2?: string | null;
  zip_postal_code_enabled?: boolean;
  zip_postal_code_required?: boolean;
  zip_postal_code?: string | null;
  phone_enabled?: boolean;
  phone_required?: boolean;
  phone_number?: string | null;
  fax_enabled?: boolean;
  fax_required?: boolean;
  fax_number?: string | null;
  available_countries?: SelectListItemDto[] | null;
  available_states?: SelectListItemDto[] | null;
  formatted_custom_address_attributes?: string | null;
  custom_address_attributes?: AddressAttributeModelDto[] | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ApplyVendorModelDto {
  name?: string | null;
  email?: string | null;
  description?: string | null;
  vendor_attributes?: VendorAttributeModelDto[] | null;
  display_captcha?: boolean;
  terms_of_service_enabled?: boolean;
  terms_of_service_popup?: boolean;
  disable_form_input?: boolean;
  result?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface ApplyVendorRequest {
  /** @format byte */
  picture_binary?: string | null;
  model?: ApplyVendorModelDto;
  form?: Record<string, string | null>;
}

export interface AssociatedExternalAuthModelDto {
  email?: string | null;
  external_identifier?: string | null;
  auth_method_name?: string | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface AuthenticateCustomerRequest {
  is_guest?: boolean;
  username?: string | null;
  email?: string | null;
  password?: string | null;
}

export interface AuthenticateResponse {
  username?: string | null;
  /** @format int32 */
  customer_id?: number;
  /** @format uuid */
  customer_guid?: string;
  token: string;
}

export interface BackInStockSubscribeModelDto {
  /** @format int32 */
  product_id?: number;
  product_name?: string | null;
  product_se_name?: string | null;
  is_current_customer_registered?: boolean;
  subscription_allowed?: boolean;
  already_subscribed?: boolean;
  /** @format int32 */
  maximum_back_in_stock_subscriptions?: number;
  /** @format int32 */
  current_number_of_back_in_stock_subscriptions?: number;
  custom_properties?: Record<string, string | null>;
}

export interface BackInStockSubscriptionModelDto {
  /** @format int32 */
  product_id?: number;
  product_name?: string | null;
  se_name?: string | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface BaseRouteValuesModelDto {
  /** @format int32 */
  page_number?: number;
}

export interface BillingAddressResponse {
  model?: CheckoutBillingAddressModelDto;
  redirect_to_method?: string | null;
  /** @format int32 */
  id?: number | null;
}

export interface BlogCommentModelDto {
  /** @format int32 */
  customer_id?: number;
  customer_name?: string | null;
  customer_avatar_url?: string | null;
  comment_text?: string | null;
  /** @format date-time */
  created_on?: string;
  allow_viewing_profiles?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface BlogPagingFilteringModelDto {
  month?: string | null;
  tag?: string | null;
  /**
   * The current page number (starts from 1)
   * @format int32
   */
  page_number?: number;
  /**
   * The number of items in each page.
   * @format int32
   */
  page_size?: number;
  /**
   * The total number of items.
   * @format int32
   */
  total_items?: number;
  /**
   * The total number of pages.
   * @format int32
   */
  total_pages?: number;
  /**
   * The index of the first item in the page.
   * @format int32
   */
  first_item?: number;
  /**
   * The index of the last item in the page.
   * @format int32
   */
  last_item?: number;
  /** Whether there are pages before the current page. */
  has_previous_page?: boolean;
  /** Whether there are pages after the current page. */
  has_next_page?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface BlogPostListModelDto {
  /** @format int32 */
  working_language_id?: number;
  paging_filtering_context?: BlogPagingFilteringModelDto;
  blog_posts?: BlogPostModelDto[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface BlogPostModelDto {
  meta_keywords?: string | null;
  meta_description?: string | null;
  meta_title?: string | null;
  se_name?: string | null;
  title?: string | null;
  body?: string | null;
  body_overview?: string | null;
  allow_comments?: boolean;
  prevent_not_registered_users_to_leave_comments?: boolean;
  /** @format int32 */
  number_of_comments?: number;
  /** @format date-time */
  created_on?: string;
  tags?: string[] | null;
  comments?: BlogCommentModelDto[] | null;
  add_new_comment?: AddBlogCommentModelDto;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface BoardsIndexModelDto {
  forum_groups?: ForumGroupModelDto[] | null;
  custom_properties?: Record<string, string | null>;
}

/** Represents a model to get the catalog products */
export interface CatalogProductsCommandDto {
  /** Gets or sets the price ('min-max' format) */
  price?: string | null;
  /** Gets or sets the specification attribute option ids */
  specs?: number[] | null;
  /** Gets or sets the manufacturer ids */
  ms?: number[] | null;
  /**
   * Gets or sets a order by
   * @format int32
   */
  order_by?: number | null;
  /** Gets or sets a product sorting */
  view_mode?: string | null;
  /**
   * The current page index (starts from 0)
   * @format int32
   */
  page_index?: number;
  /**
   * The current page number (starts from 1)
   * @format int32
   */
  page_number?: number;
  /**
   * The number of items in each page.
   * @format int32
   */
  page_size?: number;
  /**
   * The total number of items.
   * @format int32
   */
  total_items?: number;
  /**
   * The total number of pages.
   * @format int32
   */
  total_pages?: number;
  /**
   * The index of the first item in the page.
   * @format int32
   */
  first_item?: number;
  /**
   * The index of the last item in the page.
   * @format int32
   */
  last_item?: number;
  /** Whether there are pages before the current page. */
  has_previous_page?: boolean;
  /** Whether there are pages after the current page. */
  has_next_page?: boolean;
  custom_properties?: Record<string, string | null>;
}

/** Represents a catalog products model */
export interface CatalogProductsModelDto {
  /** Get or set a value indicating whether use standart or AJAX products loading (applicable to 'paging', 'filtering', 'view modes') in catalog */
  use_ajax_loading?: boolean;
  /** Gets or sets the warning message */
  warning_message?: string | null;
  /** Gets or sets the message if there are no products to return */
  no_result_message?: string | null;
  /** Represents a products price range filter model */
  price_range_filter?: PriceRangeFilterModelDto;
  /** Represents a specification filter model */
  specification_filter?: SpecificationFilterModelDto;
  /** Represents a manufacturer filter model */
  manufacturer_filter?: ManufacturerFilterModelDto;
  /** Gets or sets a value indicating whether product sorting is allowed */
  allow_product_sorting?: boolean;
  /** Gets or sets available sort options */
  available_sort_options?: SelectListItemDto[] | null;
  /** Gets or sets a value indicating whether customers are allowed to change view mode */
  allow_product_view_mode_changing?: boolean;
  /** Gets or sets available view mode options */
  available_view_modes?: SelectListItemDto[] | null;
  /** Gets or sets a value indicating whether customers are allowed to select page size */
  allow_customers_to_select_page_size?: boolean;
  /** Gets or sets available page size options */
  page_size_options?: SelectListItemDto[] | null;
  /**
   * Gets or sets a order by
   * @format int32
   */
  order_by?: number | null;
  /** Gets or sets a product sorting */
  view_mode?: string | null;
  /** Gets or sets the products */
  products?: ProductOverviewModelDto[] | null;
  /**
   * The current page index (starts from 0)
   * @format int32
   */
  page_index?: number;
  /**
   * The current page number (starts from 1)
   * @format int32
   */
  page_number?: number;
  /**
   * The number of items in each page.
   * @format int32
   */
  page_size?: number;
  /**
   * The total number of items.
   * @format int32
   */
  total_items?: number;
  /**
   * The total number of pages.
   * @format int32
   */
  total_pages?: number;
  /**
   * The index of the first item in the page.
   * @format int32
   */
  first_item?: number;
  /**
   * The index of the last item in the page.
   * @format int32
   */
  last_item?: number;
  /** Whether there are pages before the current page. */
  has_previous_page?: boolean;
  /** Whether there are pages after the current page. */
  has_next_page?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface CategoryModelDto {
  name?: string | null;
  description?: string | null;
  meta_keywords?: string | null;
  meta_description?: string | null;
  meta_title?: string | null;
  se_name?: string | null;
  picture_model?: PictureModelDto;
  display_category_breadcrumb?: boolean;
  category_breadcrumb?: CategoryModelDto[] | null;
  sub_categories?: SubCategoryModelDto[] | null;
  featured_products?: ProductOverviewModelDto[] | null;
  /** Represents a catalog products model */
  catalog_products_model?: CatalogProductsModelDto;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface CategoryResponse {
  template_view_path?: string | null;
  category_model_dto?: CategoryModelDto;
}

export interface CategorySimpleModelDto {
  name?: string | null;
  se_name?: string | null;
  /** @format int32 */
  number_of_products?: number | null;
  include_in_top_menu?: boolean;
  sub_categories?: CategorySimpleModelDto[] | null;
  have_sub_categories?: boolean;
  route?: string | null;
  picture_model?: PictureModelDto;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ChangePasswordModelDto {
  old_password?: string | null;
  new_password?: string | null;
  confirm_new_password?: string | null;
  password_must_be_changed?: boolean;
  password_expired?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface CheckGiftCardBalanceModelDto {
  result?: string | null;
  message?: string | null;
  gift_card_code?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface CheckUsernameAvailabilityResponse {
  available?: boolean;
  text?: string | null;
}

export interface CheckoutAttributeChangeResponse {
  order_totals_model?: OrderTotalsModelDto;
  formatted_attributes?: string | null;
  enabled_attribute_ids?: number[] | null;
  disabled_attribute_ids?: number[] | null;
}

export interface CheckoutAttributeModelDto {
  name?: string | null;
  default_value?: string | null;
  text_prompt?: string | null;
  is_required?: boolean;
  /** @format int32 */
  selected_day?: number | null;
  /** @format int32 */
  selected_month?: number | null;
  /** @format int32 */
  selected_year?: number | null;
  allowed_file_extensions?: string[] | null;
  attribute_control_type?: AttributeControlType;
  values?: CheckoutAttributeValueModelDto[] | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface CheckoutAttributeValueModelDto {
  name?: string | null;
  color_squares_rgb?: string | null;
  price_adjustment?: string | null;
  is_pre_selected?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface CheckoutBillingAddressModelDto {
  existing_addresses?: AddressModelDto[] | null;
  invalid_existing_addresses?: AddressModelDto[] | null;
  billing_new_address?: AddressModelDto;
  ship_to_same_address?: boolean;
  ship_to_same_address_allowed?: boolean;
  /** Used on one-page checkout page */
  new_address_preselected?: boolean;
  eu_vat_enabled?: boolean;
  eu_vat_enabled_for_guests?: boolean;
  vat_number?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface CheckoutBillingAddressModelDtoBaseModelDtoRequest {
  model?: CheckoutBillingAddressModelDto;
  form?: Record<string, string | null>;
}

export interface CheckoutCompletedModelDto {
  /** @format int32 */
  order_id?: number;
  custom_order_number?: string | null;
  one_page_checkout_enabled?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface CheckoutConfirmModelDto {
  terms_of_service_on_order_confirm_page?: boolean;
  terms_of_service_popup?: boolean;
  min_order_total_warning?: string | null;
  shopping_cart?: ShoppingCartModelDto;
  warnings?: string[] | null;
  order_totals?: OrderTotalsModelDto;
  custom_properties?: Record<string, string | null>;
}

export interface CheckoutPaymentInfoModelDto {
  /** Used on one-page checkout page */
  display_order_totals?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface CheckoutPaymentMethodModelDto {
  payment_methods?: PaymentMethodModelDto[] | null;
  display_reward_points?: boolean;
  /** @format int32 */
  reward_points_balance?: number;
  /** @format int32 */
  reward_points_to_use?: number;
  reward_points_to_use_amount?: string | null;
  reward_points_enough_to_pay_for_order?: boolean;
  use_reward_points?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface CheckoutPickupPointModelDto {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  provider_system_name?: string | null;
  address?: string | null;
  city?: string | null;
  county?: string | null;
  state_name?: string | null;
  country_name?: string | null;
  zip_postal_code?: string | null;
  /** @format double */
  latitude?: number | null;
  /** @format double */
  longitude?: number | null;
  pickup_fee?: string | null;
  opening_hours?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface CheckoutPickupPointsModelDto {
  warnings?: string[] | null;
  pickup_points?: CheckoutPickupPointModelDto[] | null;
  allow_pickup_in_store?: boolean;
  pickup_in_store?: boolean;
  pickup_in_store_only?: boolean;
  display_pickup_points_on_map?: boolean;
  google_maps_api_key?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface CheckoutRedirectResponse {
  redirect_to_method?: string | null;
  /** @format int32 */
  id?: number | null;
}

export interface CheckoutShippingAddressModelDto {
  existing_addresses?: AddressModelDto[] | null;
  invalid_existing_addresses?: AddressModelDto[] | null;
  shipping_new_address?: AddressModelDto;
  new_address_preselected?: boolean;
  /** @format int32 */
  selected_billing_address?: number;
  display_pickup_in_store?: boolean;
  pickup_points_model?: CheckoutPickupPointsModelDto;
  custom_properties?: Record<string, string | null>;
}

export interface CheckoutShippingAddressModelDtoBaseModelDtoRequest {
  model?: CheckoutShippingAddressModelDto;
  form?: Record<string, string | null>;
}

export interface CheckoutShippingMethodModelDto {
  shipping_methods?: ShippingMethodModelDto[] | null;
  notify_customer_about_shipping_from_multiple_locations?: boolean;
  warnings?: string[] | null;
  display_pickup_in_store?: boolean;
  pickup_points_model?: CheckoutPickupPointsModelDto;
  custom_properties?: Record<string, string | null>;
}

export interface CompareProductsModelDto {
  products?: ProductOverviewModelDto[] | null;
  include_short_description_in_compare_products?: boolean;
  include_full_description_in_compare_products?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ConfirmOrderResponse {
  model?: CheckoutConfirmModelDto;
  redirect_to_method?: string | null;
  /** @format int32 */
  id?: number | null;
}

export interface ContactUsModelDto {
  email?: string | null;
  subject?: string | null;
  subject_enabled?: boolean;
  enquiry?: string | null;
  full_name?: string | null;
  successfully_sent?: boolean;
  result?: string | null;
  display_captcha?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface ContactVendorModelDto {
  /** @format int32 */
  vendor_id?: number;
  vendor_name?: string | null;
  email?: string | null;
  subject?: string | null;
  subject_enabled?: boolean;
  enquiry?: string | null;
  full_name?: string | null;
  successfully_sent?: boolean;
  result?: string | null;
  display_captcha?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface CurrencyModelDto {
  name?: string | null;
  currency_symbol?: string | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface CurrencySelectorModelDto {
  available_currencies?: CurrencyModelDto[] | null;
  /** @format int32 */
  current_currency_id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface CustomerAddressEditModelDto {
  address?: AddressModelDto;
  custom_properties?: Record<string, string | null>;
}

export interface CustomerAddressEditModelDtoBaseModelDtoRequest {
  model?: CustomerAddressEditModelDto;
  form?: Record<string, string | null>;
}

export interface CustomerAddressListModelDto {
  addresses?: AddressModelDto[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface CustomerAttributeModelDto {
  name?: string | null;
  is_required?: boolean;
  /** Default value */
  default_value?: string | null;
  attribute_control_type?: AttributeControlType;
  values?: CustomerAttributeValueModelDto[] | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface CustomerAttributeValueModelDto {
  name?: string | null;
  is_pre_selected?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface CustomerAvatarModelDto {
  avatar_url?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface CustomerBackInStockSubscriptionsModelDto {
  subscriptions?: BackInStockSubscriptionModelDto[] | null;
  pager_model?: PagerModelDto;
  custom_properties?: Record<string, string | null>;
}

export interface CustomerDownloadableProductsModelDto {
  items?: DownloadableProductsModelDto[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface CustomerForumSubscriptionsModelDto {
  forum_subscriptions?: ForumSubscriptionModelDto[] | null;
  pager_model?: PagerModelDto;
  custom_properties?: Record<string, string | null>;
}

export interface CustomerInfoModelDto {
  email?: string | null;
  email_to_revalidate?: string | null;
  check_username_availability_enabled?: boolean;
  allow_users_to_change_usernames?: boolean;
  usernames_enabled?: boolean;
  username?: string | null;
  gender_enabled?: boolean;
  gender?: string | null;
  first_name_enabled?: boolean;
  first_name?: string | null;
  first_name_required?: boolean;
  last_name_enabled?: boolean;
  last_name?: string | null;
  last_name_required?: boolean;
  date_of_birth_enabled?: boolean;
  /** @format int32 */
  date_of_birth_day?: number | null;
  /** @format int32 */
  date_of_birth_month?: number | null;
  /** @format int32 */
  date_of_birth_year?: number | null;
  date_of_birth_required?: boolean;
  company_enabled?: boolean;
  company_required?: boolean;
  company?: string | null;
  street_address_enabled?: boolean;
  street_address_required?: boolean;
  street_address?: string | null;
  street_address2_enabled?: boolean;
  street_address2_required?: boolean;
  street_address2?: string | null;
  zip_postal_code_enabled?: boolean;
  zip_postal_code_required?: boolean;
  zip_postal_code?: string | null;
  city_enabled?: boolean;
  city_required?: boolean;
  city?: string | null;
  county_enabled?: boolean;
  county_required?: boolean;
  county?: string | null;
  country_enabled?: boolean;
  country_required?: boolean;
  /** @format int32 */
  country_id?: number;
  available_countries?: SelectListItemDto[] | null;
  state_province_enabled?: boolean;
  state_province_required?: boolean;
  /** @format int32 */
  state_province_id?: number;
  available_states?: SelectListItemDto[] | null;
  phone_enabled?: boolean;
  phone_required?: boolean;
  phone?: string | null;
  fax_enabled?: boolean;
  fax_required?: boolean;
  fax?: string | null;
  newsletter_enabled?: boolean;
  newsletter?: boolean;
  signature_enabled?: boolean;
  signature?: string | null;
  time_zone_id?: string | null;
  allow_customers_to_set_time_zone?: boolean;
  available_time_zones?: SelectListItemDto[] | null;
  vat_number?: string | null;
  vat_number_status_note?: string | null;
  display_vat_number?: boolean;
  vat_number_required?: boolean;
  associated_external_auth_records?: AssociatedExternalAuthModelDto[] | null;
  /** @format int32 */
  number_of_external_authentication_providers?: number;
  allow_customers_to_remove_associations?: boolean;
  customer_attributes?: CustomerAttributeModelDto[] | null;
  gdpr_consents?: GdprConsentModelDto[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface CustomerInfoModelDtoBaseModelDtoRequest {
  model?: CustomerInfoModelDto;
  form?: Record<string, string | null>;
}

export interface CustomerOrderDetailsModelDto {
  custom_order_number?: string | null;
  order_total?: string | null;
  is_return_request_allowed?: boolean;
  /** @format int32 */
  order_status_enum?: number;
  order_status?: string | null;
  payment_status?: string | null;
  shipping_status?: string | null;
  /** @format date-time */
  created_on?: string;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface CustomerOrderListModelDto {
  orders?: CustomerOrderDetailsModelDto[] | null;
  recurring_orders?: RecurringOrderModelDto[] | null;
  recurring_payment_errors?: string[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface CustomerProductReviewModelDto {
  /** @format int32 */
  product_id?: number;
  product_name?: string | null;
  product_se_name?: string | null;
  title?: string | null;
  review_text?: string | null;
  reply_text?: string | null;
  /** @format int32 */
  rating?: number;
  written_on_str?: string | null;
  approval_status?: string | null;
  additional_product_review_list?:
    | ProductReviewReviewTypeMappingModelDto[]
    | null;
  custom_properties?: Record<string, string | null>;
}

export interface CustomerProductReviewsModelDto {
  product_reviews?: CustomerProductReviewModelDto[] | null;
  pager_model?: PagerModelDto;
  custom_properties?: Record<string, string | null>;
}

export interface CustomerReturnRequestsModelDto {
  items?: ReturnRequestModelDto[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface CustomerRewardPointsModelDto {
  reward_points?: RewardPointsHistoryModelDto[] | null;
  pager_model?: PagerModelDto;
  /** @format int32 */
  reward_points_balance?: number;
  reward_points_amount?: string | null;
  /** @format int32 */
  minimum_reward_points_balance?: number;
  minimum_reward_points_amount?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface DiscountBoxModelDto {
  applied_discounts_with_codes?: DiscountInfoModelDto[] | null;
  display?: boolean;
  messages?: string[] | null;
  is_applied?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface DiscountInfoModelDto {
  coupon_code?: string | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface DownloadResponse {
  /** File name with extension */
  file_name?: string | null;
  /** The URL to redirect */
  redirect_to_url?: string | null;
  /** The file content UTF8 encode */
  download_binary?: string | null;
}

export interface DownloadableProductsModelDto {
  /** @format uuid */
  order_item_guid?: string;
  /** @format int32 */
  order_id?: number;
  custom_order_number?: string | null;
  /** @format int32 */
  product_id?: number;
  product_name?: string | null;
  product_se_name?: string | null;
  product_attributes?: string | null;
  /** @format int32 */
  download_id?: number;
  /** @format int32 */
  license_id?: number;
  /** @format date-time */
  created_on?: string;
  custom_properties?: Record<string, string | null>;
}

export interface EditForumPostModelDto {
  /** @format int32 */
  forum_topic_id?: number;
  is_edit?: boolean;
  text?: string | null;
  forum_editor?: EditorType;
  forum_name?: string | null;
  forum_topic_subject?: string | null;
  forum_topic_se_name?: string | null;
  is_customer_allowed_to_subscribe?: boolean;
  subscribed?: boolean;
  display_captcha?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface EditForumTopicModelDto {
  is_edit?: boolean;
  /** @format int32 */
  forum_id?: number;
  forum_name?: string | null;
  forum_se_name?: string | null;
  /** @format int32 */
  topic_type_id?: number;
  forum_editor?: EditorType;
  subject?: string | null;
  text?: string | null;
  is_customer_allowed_to_set_topic_priority?: boolean;
  topic_priorities?: SelectListItemDto[] | null;
  is_customer_allowed_to_subscribe?: boolean;
  subscribed?: boolean;
  display_captcha?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface EmailRevalidationModelDto {
  result?: string | null;
  return_url?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface EstimateShippingModelDto {
  /** @format int32 */
  request_delay?: number;
  enabled?: boolean;
  /** @format int32 */
  country_id?: number | null;
  /** @format int32 */
  state_province_id?: number | null;
  zip_postal_code?: string | null;
  use_city?: boolean;
  city?: string | null;
  available_countries?: SelectListItemDto[] | null;
  available_states?: SelectListItemDto[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface EstimateShippingModelDtoBaseModelDtoRequest {
  model?: EstimateShippingModelDto;
  form?: Record<string, string | null>;
}

export interface EstimateShippingResultModelDto {
  shipping_options?: ShippingOptionModelDto[] | null;
  success?: boolean;
  errors?: string[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface ExternalPriceAndStockResponse {
  products?: ExternalProductInfo[] | null;
}

export interface ExternalProductInfo {
  stocks?: ExternalStock[] | null;
  sku?: string | null;
  /** @format double */
  list_price_with_tax?: number | null;
  /** @format double */
  list_price?: number | null;
  /** @format double */
  discount_price_with_tax?: number | null;
  /** @format double */
  discount_price?: number | null;
}

export interface ExternalStock {
  id?: string | null;
  name?: string | null;
  /** @format int32 */
  quantity?: number;
}

export interface ForumGroupModelDto {
  name?: string | null;
  se_name?: string | null;
  forums?: ForumRowModelDto[] | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ForumPageModelDto {
  name?: string | null;
  se_name?: string | null;
  description?: string | null;
  watch_forum_text?: string | null;
  forum_topics?: ForumTopicRowModelDto[] | null;
  /** @format int32 */
  topic_page_size?: number;
  /** @format int32 */
  topic_total_records?: number;
  /** @format int32 */
  topic_page_index?: number;
  is_customer_allowed_to_subscribe?: boolean;
  forum_feeds_enabled?: boolean;
  /** @format int32 */
  posts_page_size?: number;
  allow_post_voting?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ForumPostModelDto {
  /** @format int32 */
  forum_topic_id?: number;
  forum_topic_se_name?: string | null;
  formatted_text?: string | null;
  is_current_customer_allowed_to_edit_post?: boolean;
  is_current_customer_allowed_to_delete_post?: boolean;
  /** @format int32 */
  customer_id?: number;
  allow_viewing_profiles?: boolean;
  customer_avatar_url?: string | null;
  customer_name?: string | null;
  is_customer_forum_moderator?: boolean;
  post_created_on_str?: string | null;
  show_customers_post_count?: boolean;
  /** @format int32 */
  forum_post_count?: number;
  show_customers_join_date?: boolean;
  /** @format date-time */
  customer_join_date?: string;
  show_customers_location?: boolean;
  customer_location?: string | null;
  allow_private_messages?: boolean;
  signatures_enabled?: boolean;
  formatted_signature?: string | null;
  /** @format int32 */
  current_topic_page?: number;
  allow_post_voting?: boolean;
  /** @format int32 */
  vote_count?: number;
  vote_is_up?: boolean | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ForumRowModelDto {
  name?: string | null;
  se_name?: string | null;
  description?: string | null;
  /** @format int32 */
  num_topics?: number;
  /** @format int32 */
  num_posts?: number;
  /** @format int32 */
  last_post_id?: number;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ForumSubscriptionModelDto {
  /** @format int32 */
  forum_id?: number;
  /** @format int32 */
  forum_topic_id?: number;
  topic_subscription?: boolean;
  title?: string | null;
  slug?: string | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ForumTopicPageModelDto {
  subject?: string | null;
  se_name?: string | null;
  watch_topic_text?: string | null;
  is_customer_allowed_to_edit_topic?: boolean;
  is_customer_allowed_to_delete_topic?: boolean;
  is_customer_allowed_to_move_topic?: boolean;
  is_customer_allowed_to_subscribe?: boolean;
  forum_post_models?: ForumPostModelDto[] | null;
  /** @format int32 */
  posts_page_index?: number;
  /** @format int32 */
  posts_page_size?: number;
  /** @format int32 */
  posts_total_records?: number;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ForumTopicRowModelDto {
  subject?: string | null;
  se_name?: string | null;
  /** @format int32 */
  last_post_id?: number;
  /** @format int32 */
  num_posts?: number;
  /** @format int32 */
  views?: number;
  /** @format int32 */
  votes?: number;
  /** @format int32 */
  num_replies?: number;
  forum_topic_type?: ForumTopicType;
  /** @format int32 */
  customer_id?: number;
  allow_viewing_profiles?: boolean;
  customer_name?: string | null;
  /** @format int32 */
  total_post_pages?: number;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ForumWatchResponse {
  subscribed?: boolean;
  text?: string | null;
  error?: boolean;
}

export interface GdprConsentModelDto {
  message?: string | null;
  is_required?: boolean;
  required_message?: string | null;
  accepted?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface GdprToolsModelDto {
  result?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface GetCategoryProductsResponse {
  template_view_path?: string | null;
  /** Represents a catalog products model */
  catalog_products_model?: CatalogProductsModelDto;
}

export interface GetManufacturerProductsResponse {
  template_view_path?: string | null;
  /** Represents a catalog products model */
  catalog_products_model?: CatalogProductsModelDto;
}

export interface GetTagProductsResponse {
  template_view_path?: string | null;
  /** Represents a catalog products model */
  catalog_products_model?: CatalogProductsModelDto;
}

export interface GetVendorProductsResponse {
  template_view_path?: string | null;
  /** Represents a catalog products model */
  catalog_products_model?: CatalogProductsModelDto;
}

export interface GiftCardBoxModelDto {
  display?: boolean;
  message?: string | null;
  is_applied?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface GiftCardDto {
  coupon_code?: string | null;
  amount?: string | null;
  remaining?: string | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface GiftCardModelDto {
  is_gift_card?: boolean;
  recipient_name?: string | null;
  recipient_email?: string | null;
  sender_name?: string | null;
  sender_email?: string | null;
  message?: string | null;
  gift_card_type?: GiftCardType;
  custom_properties?: Record<string, string | null>;
}

export interface InfoRequest {
  /** @format byte */
  picture_binary?: string | null;
  model?: VendorInfoModelDto;
  form?: Record<string, string | null>;
}

export interface InfoResponse {
  model?: CustomerInfoModelDto;
  errors?: string[] | null;
}

export interface KlokurAuthenticateCustomerRequest {
  token?: string | null;
  is_guest?: boolean;
  username?: string | null;
  email?: string | null;
  password?: string | null;
}

export interface LanguageModelDto {
  name?: string | null;
  flag_image_file_name?: string | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface LanguageSelectorModelDto {
  available_languages?: LanguageModelDto[] | null;
  /** @format int32 */
  current_language_id?: number;
  use_images?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface LoginCustomerRequest {
  username?: string | null;
  email?: string | null;
  password?: string | null;
}

export interface ManufacturerBriefInfoModelDto {
  name?: string | null;
  se_name?: string | null;
  is_active?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

/** Represents a manufacturer filter model */
export interface ManufacturerFilterModelDto {
  /** Gets or sets a value indicating whether filtering is enabled */
  enabled?: boolean;
  /** Gets or sets the filtrable manufacturers */
  manufacturers?: SelectListItemDto[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface ManufacturerModelDto {
  name?: string | null;
  description?: string | null;
  meta_keywords?: string | null;
  meta_description?: string | null;
  meta_title?: string | null;
  se_name?: string | null;
  picture_model?: PictureModelDto;
  featured_products?: ProductOverviewModelDto[] | null;
  /** Represents a catalog products model */
  catalog_products_model?: CatalogProductsModelDto;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ManufacturerResponse {
  template_view_path?: string | null;
  manufacturer_model?: ManufacturerModelDto;
}

export interface MiniShoppingCartItemModelDto {
  /** @format int32 */
  product_id?: number;
  product_name?: string | null;
  product_se_name?: string | null;
  /** @format int32 */
  quantity?: number;
  unit_price?: string | null;
  /** @format double */
  unit_price_value?: number;
  attribute_info?: string | null;
  picture?: PictureModelDto;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface MiniShoppingCartModelDto {
  items?: MiniShoppingCartItemModelDto[] | null;
  /** @format int32 */
  total_products?: number;
  sub_total?: string | null;
  /** @format double */
  sub_total_value?: number;
  display_shopping_cart_button?: boolean;
  display_checkout_button?: boolean;
  current_customer_is_guest?: boolean;
  anonymous_checkout_allowed?: boolean;
  show_product_images?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface NewProductsModelDto {
  /** Represents a catalog products model */
  catalog_products_model?: CatalogProductsModelDto;
  custom_properties?: Record<string, string | null>;
}

export interface NewsCommentModelDto {
  /** @format int32 */
  customer_id?: number;
  customer_name?: string | null;
  customer_avatar_url?: string | null;
  comment_title?: string | null;
  comment_text?: string | null;
  /** @format date-time */
  created_on?: string;
  allow_viewing_profiles?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface NewsItemListModelDto {
  /** @format int32 */
  working_language_id?: number;
  paging_filtering_context?: NewsPagingFilteringModel;
  news_items?: NewsItemModelDto[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface NewsItemModelDto {
  meta_keywords?: string | null;
  meta_description?: string | null;
  meta_title?: string | null;
  se_name?: string | null;
  title?: string | null;
  short?: string | null;
  full?: string | null;
  allow_comments?: boolean;
  prevent_not_registered_users_to_leave_comments?: boolean;
  /** @format int32 */
  number_of_comments?: number;
  /** @format date-time */
  created_on?: string;
  comments?: NewsCommentModelDto[] | null;
  add_new_comment?: AddNewsCommentModelDto;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface NewsPagingFilteringModel {
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int32 */
  TotalItems?: number;
  /** @format int32 */
  TotalPages?: number;
  /** @format int32 */
  FirstItem?: number;
  /** @format int32 */
  LastItem?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  CustomProperties?: Record<string, string | null>;
}

export interface NewsPagingFilteringModelDto {
  /**
   * The current page index (starts from 0)
   * @format int32
   */
  page_index?: number;
  /**
   * The current page number (starts from 1)
   * @format int32
   */
  page_number?: number;
  /**
   * The number of items in each page.
   * @format int32
   */
  page_size?: number;
  /**
   * The total number of items.
   * @format int32
   */
  total_items?: number;
  /**
   * The total number of pages.
   * @format int32
   */
  total_pages?: number;
  /**
   * The index of the first item in the page.
   * @format int32
   */
  first_item?: number;
  /**
   * The index of the last item in the page.
   * @format int32
   */
  last_item?: number;
  /** Whether there are pages before the current page. */
  has_previous_page?: boolean;
  /** Whether there are pages after the current page. */
  has_next_page?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface OrderDetailsGiftCardDto {
  coupon_code?: string | null;
  amount?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface OrderDetailsModelDto {
  print_mode?: boolean;
  pdf_invoice_disabled?: boolean;
  custom_order_number?: string | null;
  /** @format date-time */
  created_on?: string;
  order_status?: string | null;
  is_re_order_allowed?: boolean;
  is_return_request_allowed?: boolean;
  is_shippable?: boolean;
  pickup_in_store?: boolean;
  pickup_address?: AddressModelDto;
  shipping_status?: string | null;
  shipping_address?: AddressModelDto;
  shipping_method?: string | null;
  shipments?: ShipmentBriefModelDto[] | null;
  billing_address?: AddressModelDto;
  vat_number?: string | null;
  payment_method?: string | null;
  payment_method_status?: string | null;
  can_re_post_process_payment?: boolean;
  custom_values?: Record<string, any>;
  order_subtotal?: string | null;
  /** @format double */
  order_subtotal_value?: number;
  order_sub_total_discount?: string | null;
  /** @format double */
  order_sub_total_discount_value?: number;
  order_shipping?: string | null;
  /** @format double */
  order_shipping_value?: number;
  payment_method_additional_fee?: string | null;
  /** @format double */
  payment_method_additional_fee_value?: number;
  checkout_attribute_info?: string | null;
  prices_include_tax?: boolean;
  display_tax_shipping_info?: boolean;
  tax?: string | null;
  tax_rates?: OrderDetailsTaxRateDto[] | null;
  display_tax?: boolean;
  display_tax_rates?: boolean;
  order_total_discount?: string | null;
  /** @format double */
  order_total_discount_value?: number;
  /** @format int32 */
  redeemed_reward_points?: number;
  redeemed_reward_points_amount?: string | null;
  order_total?: string | null;
  /** @format double */
  order_total_value?: number;
  gift_cards?: OrderDetailsGiftCardDto[] | null;
  show_sku?: boolean;
  items?: OrderItemModelDto[] | null;
  order_notes?: OrderNoteDto[] | null;
  show_vendor_name?: boolean;
  show_product_thumbnail?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface OrderDetailsTaxRateDto {
  rate?: string | null;
  value?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface OrderItemModelDto {
  /** @format uuid */
  order_item_guid?: string;
  sku?: string | null;
  /** @format int32 */
  product_id?: number;
  product_name?: string | null;
  product_se_name?: string | null;
  unit_price?: string | null;
  /** @format double */
  unit_price_value?: number;
  sub_total?: string | null;
  /** @format double */
  sub_total_value?: number;
  /** @format int32 */
  quantity?: number;
  picture?: PictureModelDto;
  attribute_info?: string | null;
  rental_info?: string | null;
  vendor_name?: string | null;
  /** @format int32 */
  download_id?: number;
  /** @format int32 */
  license_id?: number;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface OrderNoteDto {
  has_download?: boolean;
  note?: string | null;
  /** @format date-time */
  created_on?: string;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface OrderReviewDataModelDto {
  display?: boolean;
  billing_address?: AddressModelDto;
  is_shippable?: boolean;
  shipping_address?: AddressModelDto;
  selected_pickup_in_store?: boolean;
  pickup_address?: AddressModelDto;
  shipping_method?: string | null;
  payment_method?: string | null;
  custom_values?: Record<string, any>;
  custom_properties?: Record<string, string | null>;
}

export interface OrderTotalsModelDto {
  is_editable?: boolean;
  sub_total?: string | null;
  sub_total_discount?: string | null;
  shipping?: string | null;
  requires_shipping?: boolean;
  selected_shipping_method?: string | null;
  hide_shipping_total?: boolean;
  payment_method_additional_fee?: string | null;
  tax?: string | null;
  tax_rates?: TaxRateDto[] | null;
  display_tax?: boolean;
  display_tax_rates?: boolean;
  gift_cards?: GiftCardDto[] | null;
  order_total_discount?: string | null;
  /** @format int32 */
  redeemed_reward_points?: number;
  redeemed_reward_points_amount?: string | null;
  /** @format int32 */
  will_earn_reward_points?: number;
  order_total?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface PagerModelDto {
  /**
   * Gets the current page index
   * @format int32
   */
  current_page?: number;
  /**
   * Gets or sets a count of individual pages to be displayed
   * @format int32
   */
  individual_pages_displayed_count?: number;
  /**
   * Gets the current page index
   * @format int32
   */
  page_index?: number;
  /**
   * Gets or sets a page size
   * @format int32
   */
  page_size?: number;
  /** Gets or sets a value indicating whether to show "first" */
  show_first?: boolean;
  /** Gets or sets a value indicating whether to show "individual pages" */
  show_individual_pages?: boolean;
  /** Gets or sets a value indicating whether to show "last" */
  show_last?: boolean;
  /** Gets or sets a value indicating whether to show "next" */
  show_next?: boolean;
  /** Gets or sets a value indicating whether to show pager items */
  show_pager_items?: boolean;
  /** Gets or sets a value indicating whether to show "previous" */
  show_previous?: boolean;
  /** Gets or sets a value indicating whether to show "total summary" */
  show_total_summary?: boolean;
  /**
   * Gets a total pages count
   * @format int32
   */
  total_pages?: number;
  /**
   * Gets or sets a total records count
   * @format int32
   */
  total_records?: number;
  route_values?: BaseRouteValuesModelDto;
}

export interface PasswordRecoveryConfirmModelDto {
  new_password?: string | null;
  confirm_new_password?: string | null;
  disable_password_changing?: boolean;
  result?: string | null;
  return_url?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface PasswordRecoveryModelDto {
  email?: string | null;
  result?: string | null;
  display_captcha?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface PaymentMethodModelDto {
  payment_method_system_name?: string | null;
  name?: string | null;
  description?: string | null;
  fee?: string | null;
  selected?: boolean;
  logo_url?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface PaymentMethodResponse {
  model?: CheckoutPaymentMethodModelDto;
  redirect_to_method?: string | null;
  /** @format int32 */
  id?: number | null;
}

export interface PictureModelDto {
  image_url?: string | null;
  thumb_image_url?: string | null;
  full_size_image_url?: string | null;
  title?: string | null;
  alternate_text?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface PollAnswerModelDto {
  name?: string | null;
  /** @format int32 */
  number_of_votes?: number;
  /** @format double */
  percent_of_total_votes?: number;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface PollModelDto {
  name?: string | null;
  already_voted?: boolean;
  /** @format int32 */
  total_votes?: number;
  answers?: PollAnswerModelDto[] | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface PopularProductTagsModelDto {
  /** @format int32 */
  total_tags?: number;
  tags?: ProductTagModelDto[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface PostVoteResponse {
  error?: string | null;
  /** @format int32 */
  vote_count?: number;
  is_up?: boolean;
}

/** Represents a products price range filter model */
export interface PriceRangeFilterModelDto {
  /** Gets or sets a value indicating whether filtering is enabled */
  enabled?: boolean;
  /** Represents a price range model */
  selected_price_range?: PriceRangeModelDto;
  /** Represents a price range model */
  available_price_range?: PriceRangeModelDto;
  custom_properties?: Record<string, string | null>;
}

/** Represents a price range model */
export interface PriceRangeModelDto {
  /**
   * Gets or sets the "from" price
   * @format double
   */
  from?: number | null;
  /**
   * Gets or sets the "to" price
   * @format double
   */
  to?: number | null;
  custom_properties?: Record<string, string | null>;
}

export interface PrivateMessageIndexModelDto {
  /** @format int32 */
  inbox_page?: number;
  /** @format int32 */
  sent_items_page?: number;
  sent_items_tab_selected?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface PrivateMessageModelDto {
  /** @format int32 */
  from_customer_id?: number;
  customer_from_name?: string | null;
  allow_viewing_from_profile?: boolean;
  /** @format int32 */
  to_customer_id?: number;
  customer_to_name?: string | null;
  allow_viewing_to_profile?: boolean;
  subject?: string | null;
  message?: string | null;
  /** @format date-time */
  created_on?: string;
  is_read?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ProblemDetails {
  Type?: string | null;
  Title?: string | null;
  /** @format int32 */
  Status?: number | null;
  Detail?: string | null;
  Instance?: string | null;
  [key: string]: any;
}

export interface ProductAttributeModelDto {
  /** Gets or sets the value IDs of the attribute */
  value_ids?: number[] | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ProductAttributeValueModelDto {
  name?: string | null;
  color_squares_rgb?: string | null;
  image_squares_picture_model?: PictureModelDto;
  price_adjustment?: string | null;
  price_adjustment_use_percentage?: boolean;
  /** @format double */
  price_adjustment_value?: number;
  is_pre_selected?: boolean;
  /** @format int32 */
  picture_id?: number;
  customer_enters_qty?: boolean;
  /** @format int32 */
  quantity?: number;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ProductBreadcrumbModelDto {
  enabled?: boolean;
  /** @format int32 */
  product_id?: number;
  product_name?: string | null;
  product_se_name?: string | null;
  category_breadcrumb?: CategorySimpleModelDto[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface ProductCombinationModelDto {
  /** Gets or sets the attributes */
  attributes?: ProductAttributeModelDto[] | null;
  /** Gets or sets a value indicating whether to the combination have stock */
  in_stock?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface ProductDetailsAttributeChangeResponse {
  /** @format int32 */
  product_id?: number;
  gtin?: string | null;
  mpn?: string | null;
  sku?: string | null;
  price?: string | null;
  base_price_pangv?: string | null;
  stock_availability?: string | null;
  enabledattributemappingids?: number[] | null;
  disabledattributemappingids?: number[] | null;
  picture_ids?: number[] | null;
  picture_full_size_url?: string | null;
  picture_default_size_url?: string | null;
  is_free_shipping?: boolean;
  message?: string[] | null;
}

export interface ProductDetailsAttributeModelDto {
  /** @format int32 */
  product_id?: number;
  /** @format int32 */
  product_attribute_id?: number;
  name?: string | null;
  description?: string | null;
  text_prompt?: string | null;
  is_required?: boolean;
  /** Default value for textboxes */
  default_value?: string | null;
  /**
   * Selected day value for datepicker
   * @format int32
   */
  selected_day?: number | null;
  /**
   * Selected month value for datepicker
   * @format int32
   */
  selected_month?: number | null;
  /**
   * Selected year value for datepicker
   * @format int32
   */
  selected_year?: number | null;
  /** A value indicating whether this attribute depends on some other attribute */
  has_condition?: boolean;
  /** Allowed file extensions for customer uploaded files */
  allowed_file_extensions?: string[] | null;
  attribute_control_type?: AttributeControlType;
  values?: ProductAttributeValueModelDto[] | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ProductDetailsModelDto {
  default_picture_zoom_enabled?: boolean;
  default_picture_model?: PictureModelDto;
  picture_models?: PictureModelDto[] | null;
  video_models?: VideoModelDto[] | null;
  name?: string | null;
  short_description?: string | null;
  full_description?: string | null;
  meta_keywords?: string | null;
  meta_description?: string | null;
  meta_title?: string | null;
  se_name?: string | null;
  visible_individually?: boolean;
  product_type?: ProductType;
  show_sku?: boolean;
  sku?: string | null;
  show_manufacturer_part_number?: boolean;
  manufacturer_part_number?: string | null;
  show_gtin?: boolean;
  gtin?: string | null;
  show_vendor?: boolean;
  vendor_model?: VendorBriefInfoModelDto;
  has_sample_download?: boolean;
  has_user_agreement?: boolean;
  user_agreement_text?: string | null;
  /** @format int32 */
  sample_download_id?: number;
  gift_card?: GiftCardModelDto;
  is_ship_enabled?: boolean;
  is_free_shipping?: boolean;
  free_shipping_notification_enabled?: boolean;
  delivery_date?: string | null;
  is_rental?: boolean;
  /** @format date-time */
  rental_start_date?: string | null;
  /** @format date-time */
  rental_end_date?: string | null;
  /** @format date-time */
  available_end_date?: string | null;
  manage_inventory_method?: ManageInventoryMethod;
  stock_availability?: string | null;
  display_back_in_stock_subscription?: boolean;
  email_a_friend_enabled?: boolean;
  compare_products_enabled?: boolean;
  page_share_code?: string | null;
  product_price?: ProductPriceModelDto;
  add_to_cart?: AddToCartModelDto;
  breadcrumb?: ProductBreadcrumbModelDto;
  product_tags?: ProductTagModelDto[] | null;
  product_attributes?: ProductDetailsAttributeModelDto[] | null;
  product_specification_model?: ProductSpecificationModelDto;
  product_manufacturers?: ManufacturerBriefInfoModelDto[] | null;
  product_review_overview?: ProductReviewOverviewModelDto;
  product_estimate_shipping?: ProductEstimateShippingModelDto;
  tier_prices?: TierPriceModelDto[] | null;
  /** a list of associated products. For example, "Grouped" products could have several child "simple" products */
  associated_products?: ProductDetailsModelDto[] | null;
  display_discontinued_message?: boolean;
  current_store_name?: string | null;
  in_stock?: boolean;
  allow_adding_only_existing_attribute_combinations?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ProductDetailsResponse {
  /** The product template view path */
  product_template_view_path?: string | null;
  product_details_model?: ProductDetailsModelDto;
}

export interface ProductEmailAFriendModelDto {
  /** @format int32 */
  product_id?: number;
  product_name?: string | null;
  product_se_name?: string | null;
  friend_email?: string | null;
  your_email_address?: string | null;
  personal_message?: string | null;
  successfully_sent?: boolean;
  result?: string | null;
  display_captcha?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface ProductEstimateShippingModelDto {
  /** @format int32 */
  product_id?: number;
  /** @format int32 */
  request_delay?: number;
  enabled?: boolean;
  /** @format int32 */
  country_id?: number | null;
  /** @format int32 */
  state_province_id?: number | null;
  zip_postal_code?: string | null;
  use_city?: boolean;
  city?: string | null;
  available_countries?: SelectListItemDto[] | null;
  available_states?: SelectListItemDto[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface ProductEstimateShippingModelDtoBaseModelDtoRequest {
  model?: ProductEstimateShippingModelDto;
  form?: Record<string, string | null>;
}

export interface ProductOverviewModelDto {
  name?: string | null;
  short_description?: string | null;
  full_description?: string | null;
  se_name?: string | null;
  sku?: string | null;
  product_type?: ProductType;
  mark_as_new?: boolean;
  product_price?: ProductPriceModelDto;
  picture_models?: PictureModelDto[] | null;
  product_specification_model?: ProductSpecificationModelDto;
  review_overview_model?: ProductReviewOverviewModelDto;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ProductPriceModelDto {
  old_price?: string | null;
  /** @format double */
  old_price_value?: number | null;
  price?: string | null;
  /** @format double */
  price_value?: number | null;
  /** PAngV baseprice (used in Germany) */
  base_price_p_ang_v?: string | null;
  /** @format double */
  base_price_p_ang_v_value?: number | null;
  disable_buy_button?: boolean;
  disable_wishlist_button?: boolean;
  disable_add_to_compare_list_button?: boolean;
  available_for_pre_order?: boolean;
  /** @format date-time */
  pre_order_availability_start_date_time_utc?: string | null;
  is_rental?: boolean;
  force_redirection_after_adding_to_cart?: boolean;
  /** A value indicating whether we should display tax/shipping info (used in Germany) */
  display_tax_shipping_info?: boolean;
  /** The currency (in 3-letter ISO 4217 format) of the offer price */
  currency_code?: string | null;
  price_with_discount?: string | null;
  /** @format double */
  price_with_discount_value?: number | null;
  customer_enters_price?: boolean;
  call_for_price?: boolean;
  /** @format int32 */
  product_id?: number;
  hide_prices?: boolean;
  rental_price?: string | null;
  /** @format double */
  rental_price_value?: number | null;
  custom_properties?: Record<string, string | null>;
}

export interface ProductReviewHelpfulnessModelDto {
  /** @format int32 */
  product_review_id?: number;
  /** @format int32 */
  helpful_yes_total?: number;
  /** @format int32 */
  helpful_no_total?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ProductReviewModelDto {
  /** @format int32 */
  customer_id?: number;
  customer_avatar_url?: string | null;
  customer_name?: string | null;
  allow_viewing_profiles?: boolean;
  title?: string | null;
  review_text?: string | null;
  reply_text?: string | null;
  /** @format int32 */
  rating?: number;
  written_on_str?: string | null;
  helpfulness?: ProductReviewHelpfulnessModelDto;
  additional_product_review_list?:
    | ProductReviewReviewTypeMappingModelDto[]
    | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ProductReviewOverviewModelDto {
  /** @format int32 */
  product_id?: number;
  /** @format int32 */
  rating_sum?: number;
  /** @format int32 */
  total_reviews?: number;
  allow_customer_reviews?: boolean;
  can_add_new_review?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface ProductReviewReviewTypeMappingModelDto {
  /** @format int32 */
  product_review_id?: number;
  /** @format int32 */
  review_type_id?: number;
  /** @format int32 */
  rating?: number;
  name?: string | null;
  visible_to_all_customers?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ProductReviewsModelDto {
  /** @format int32 */
  product_id?: number;
  product_name?: string | null;
  product_se_name?: string | null;
  items?: ProductReviewModelDto[] | null;
  add_product_review?: AddProductReviewModelDto;
  review_type_list?: ReviewTypeModelDto[] | null;
  add_additional_product_review_list?:
    | AddProductReviewReviewTypeMappingModelDto[]
    | null;
  custom_properties?: Record<string, string | null>;
}

export interface ProductSpecificationAttributeGroupModelDto {
  /** Gets or sets the specification attribute group name */
  name?: string | null;
  /** Gets or sets the specification attribute group attributes */
  attributes?: ProductSpecificationAttributeModelDto[] | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ProductSpecificationAttributeModelDto {
  /** Gets or sets the name */
  name?: string | null;
  /** Gets or sets the values */
  values?: ProductSpecificationAttributeValueModelDto[] | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ProductSpecificationAttributeValueModelDto {
  /**
   * Gets or sets the attribute type id
   * @format int32
   */
  attribute_type_id?: number;
  /** Gets or sets the value raw. This value is already HTML encoded */
  value_raw?: string | null;
  /** Gets or sets the option color (if specified). Used to display color squares */
  color_squares_rgb?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface ProductSpecificationModelDto {
  /** Gets or sets the grouped specification attribute models */
  groups?: ProductSpecificationAttributeGroupModelDto[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface ProductTagModelDto {
  name?: string | null;
  se_name?: string | null;
  /** @format int32 */
  product_count?: number;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ProductsByTagModelDto {
  tag_name?: string | null;
  tag_se_name?: string | null;
  /** Represents a catalog products model */
  catalog_products_model?: CatalogProductsModelDto;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ProfileIndexModelDto {
  /** @format int32 */
  customer_profile_id?: number;
  profile_title?: string | null;
  /** @format int32 */
  posts_page?: number;
  paging_posts?: boolean;
  forums_enabled?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface RecurringOrderModelDto {
  start_date?: string | null;
  cycle_info?: string | null;
  next_payment?: string | null;
  /** @format int32 */
  total_cycles?: number;
  /** @format int32 */
  cycles_remaining?: number;
  /** @format int32 */
  initial_order_id?: number;
  can_retry_last_payment?: boolean;
  initial_order_number?: string | null;
  can_cancel?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface RegisterModelDto {
  email?: string | null;
  entering_email_twice?: boolean;
  confirm_email?: string | null;
  usernames_enabled?: boolean;
  username?: string | null;
  check_username_availability_enabled?: boolean;
  password?: string | null;
  confirm_password?: string | null;
  gender_enabled?: boolean;
  gender?: string | null;
  first_name_enabled?: boolean;
  first_name?: string | null;
  first_name_required?: boolean;
  last_name_enabled?: boolean;
  last_name?: string | null;
  last_name_required?: boolean;
  date_of_birth_enabled?: boolean;
  /** @format int32 */
  date_of_birth_day?: number | null;
  /** @format int32 */
  date_of_birth_month?: number | null;
  /** @format int32 */
  date_of_birth_year?: number | null;
  date_of_birth_required?: boolean;
  company_enabled?: boolean;
  company_required?: boolean;
  company?: string | null;
  street_address_enabled?: boolean;
  street_address_required?: boolean;
  street_address?: string | null;
  street_address2_enabled?: boolean;
  street_address2_required?: boolean;
  street_address2?: string | null;
  zip_postal_code_enabled?: boolean;
  zip_postal_code_required?: boolean;
  zip_postal_code?: string | null;
  city_enabled?: boolean;
  city_required?: boolean;
  city?: string | null;
  county_enabled?: boolean;
  county_required?: boolean;
  county?: string | null;
  country_enabled?: boolean;
  country_required?: boolean;
  /** @format int32 */
  country_id?: number;
  available_countries?: SelectListItemDto[] | null;
  state_province_enabled?: boolean;
  state_province_required?: boolean;
  /** @format int32 */
  state_province_id?: number;
  available_states?: SelectListItemDto[] | null;
  phone_enabled?: boolean;
  phone_required?: boolean;
  phone?: string | null;
  fax_enabled?: boolean;
  fax_required?: boolean;
  fax?: string | null;
  newsletter_enabled?: boolean;
  newsletter?: boolean;
  accept_privacy_policy_enabled?: boolean;
  accept_privacy_policy_popup?: boolean;
  time_zone_id?: string | null;
  allow_customers_to_set_time_zone?: boolean;
  available_time_zones?: SelectListItemDto[] | null;
  vat_number?: string | null;
  display_vat_number?: boolean;
  vat_number_required?: boolean;
  honeypot_enabled?: boolean;
  display_captcha?: boolean;
  customer_attributes?: CustomerAttributeModelDto[] | null;
  gdpr_consents?: GdprConsentModelDto[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface RegisterModelDtoBaseModelDtoRequest {
  model?: RegisterModelDto;
  form?: Record<string, string | null>;
}

export interface RegisterResultModelDto {
  result?: string | null;
  return_url?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface ReturnRequestActionModelDto {
  name?: string | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ReturnRequestModelDto {
  custom_number?: string | null;
  return_request_status?: string | null;
  /** @format int32 */
  product_id?: number;
  product_name?: string | null;
  product_se_name?: string | null;
  /** @format int32 */
  quantity?: number;
  return_reason?: string | null;
  return_action?: string | null;
  comments?: string | null;
  /** @format uuid */
  uploaded_file_guid?: string;
  /** @format date-time */
  created_on?: string;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ReturnRequestOrderItemModelDto {
  /** @format int32 */
  product_id?: number;
  product_name?: string | null;
  product_se_name?: string | null;
  attribute_info?: string | null;
  unit_price?: string | null;
  /** @format int32 */
  quantity?: number;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ReturnRequestReasonModelDto {
  name?: string | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ReviewTypeModelDto {
  name?: string | null;
  description?: string | null;
  /** @format int32 */
  display_order?: number;
  is_required?: boolean;
  visible_to_all_customers?: boolean;
  /** @format double */
  average_rating?: number;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface RewardPointsHistoryModelDto {
  /** @format int32 */
  points?: number;
  points_balance?: string | null;
  message?: string | null;
  /** @format date-time */
  created_on?: string;
  /** @format date-time */
  end_date?: string | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface RobotsTextFileResponse {
  robots_file_content?: string | null;
  mime_type?: string | null;
}

export interface SearchBoardsModelDto {
  show_advanced_search?: boolean;
  search_terms?: string | null;
  /** @format int32 */
  forum_id?: number | null;
  /** @format int32 */
  within?: number | null;
  /** @format int32 */
  limit_days?: number | null;
  forum_topics?: ForumTopicRowModelDto[] | null;
  /** @format int32 */
  topic_page_size?: number;
  /** @format int32 */
  topic_total_records?: number;
  /** @format int32 */
  topic_page_index?: number;
  limit_list?: SelectListItemDto[] | null;
  forum_list?: SelectListItemDto[] | null;
  within_list?: SelectListItemDto[] | null;
  /** @format int32 */
  forum_id_selected?: number;
  /** @format int32 */
  within_selected?: number;
  /** @format int32 */
  limit_days_selected?: number;
  search_results_visible?: boolean;
  no_results_visisble?: boolean;
  error?: string | null;
  /** @format int32 */
  posts_page_size?: number;
  allow_post_voting?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface SearchModelDto {
  /** Query string */
  q?: string | null;
  /**
   * Category ID
   * @format int32
   */
  cid?: number;
  isc?: boolean;
  /**
   * Manufacturer ID
   * @format int32
   */
  mid?: number;
  /**
   * Vendor ID
   * @format int32
   */
  vid?: number;
  /** A value indicating whether to search in descriptions */
  sid?: boolean;
  /** A value indicating whether "advanced search" is enabled */
  advs?: boolean;
  /** A value indicating whether "allow search by vendor" is enabled */
  asv?: boolean;
  /** Represents a catalog products model */
  catalog_products_model?: CatalogProductsModelDto;
  available_categories?: SelectListItemDto[] | null;
  available_manufacturers?: SelectListItemDto[] | null;
  available_vendors?: SelectListItemDto[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface SearchProductsResponse {
  template_view_path?: string | null;
  /** Represents a catalog products model */
  catalog_products_model?: CatalogProductsModelDto;
}

export interface SearchRequest {
  model?: SearchModelDto;
  /** Represents a model to get the catalog products */
  command?: CatalogProductsCommandDto;
}

export interface SearchTermAutoCompleteResponse {
  label?: string | null;
  /** @format int32 */
  product_id?: number;
  producturl?: string | null;
  productpictureurl?: string | null;
  showlinktoresultsearch?: boolean;
}

export interface SelectListGroupDto {
  disabled?: boolean;
  name?: string | null;
}

export interface SelectListItemDto {
  disabled?: boolean;
  group?: SelectListGroupDto;
  selected?: boolean;
  text?: string | null;
  value?: string | null;
}

export interface SelectShippingOptionResponse {
  success?: boolean;
  model?: OrderTotalsModelDto;
  errors?: string[] | null;
}

export interface SendPrivateMessageModelDto {
  /** @format int32 */
  to_customer_id?: number;
  customer_to_name?: string | null;
  allow_viewing_to_profile?: boolean;
  /** @format int32 */
  reply_to_message_id?: number;
  subject?: string | null;
  message?: string | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface SetProductReviewHelpfulnessResponse {
  result?: string | null;
  /** @format int32 */
  total_yes?: number;
  /** @format int32 */
  total_no?: number;
}

export interface ShipmentBriefModelDto {
  tracking_number?: string | null;
  /** @format date-time */
  shipped_date?: string | null;
  /** @format date-time */
  ready_for_pickup_date?: string | null;
  /** @format date-time */
  delivery_date?: string | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ShipmentDetailsModelDto {
  tracking_number?: string | null;
  tracking_number_url?: string | null;
  /** @format date-time */
  shipped_date?: string | null;
  /** @format date-time */
  ready_for_pickup_date?: string | null;
  /** @format date-time */
  delivery_date?: string | null;
  shipment_status_events?: ShipmentStatusEventModelDto[] | null;
  show_sku?: boolean;
  items?: ShipmentItemModelDto[] | null;
  order?: OrderDetailsModelDto;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ShipmentItemModelDto {
  sku?: string | null;
  /** @format int32 */
  product_id?: number;
  product_name?: string | null;
  product_se_name?: string | null;
  attribute_info?: string | null;
  rental_info?: string | null;
  /** @format int32 */
  quantity_ordered?: number;
  /** @format int32 */
  quantity_shipped?: number;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ShipmentStatusEventModelDto {
  status?: string | null;
  event_name?: string | null;
  location?: string | null;
  country?: string | null;
  /** @format date-time */
  date?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface ShippingAddressResponse {
  model?: CheckoutShippingAddressModelDto;
  redirect_to_method?: string | null;
  /** @format int32 */
  id?: number | null;
}

export interface ShippingMethodModelDto {
  shipping_rate_computation_method_system_name?: string | null;
  name?: string | null;
  description?: string | null;
  fee?: string | null;
  /** @format double */
  rate?: number;
  /** @format int32 */
  display_order?: number;
  selected?: boolean;
  /** Represents a shipping option */
  shipping_option?: ShippingOptionDto;
  custom_properties?: Record<string, string | null>;
}

export interface ShippingMethodResponse {
  model?: CheckoutShippingMethodModelDto;
  redirect_to_method?: string | null;
  /** @format int32 */
  id?: number | null;
}

/** Represents a shipping option */
export interface ShippingOptionDto {
  /** Gets or sets the system name of shipping rate computation method */
  shipping_rate_computation_method_system_name?: string | null;
  /**
   * Gets or sets a shipping rate (without discounts, additional shipping charges, etc)
   * @format double
   */
  rate?: number;
  /** Gets or sets a shipping option name */
  name?: string | null;
  /** Gets or sets a shipping option description */
  description?: string | null;
  /**
   * Gets or sets a transit days
   * @format int32
   */
  transit_days?: number | null;
  /** Gets or sets a value indicating if it's pickup in store shipping option */
  is_pickup_in_store?: boolean;
  /**
   * Gets or sets a display order
   * @format int32
   */
  display_order?: number | null;
}

export interface ShippingOptionModelDto {
  name?: string | null;
  shipping_rate_computation_method_system_name?: string | null;
  description?: string | null;
  price?: string | null;
  /** @format double */
  rate?: number;
  delivery_date_format?: string | null;
  /** @format int32 */
  display_order?: number;
  selected?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface ShoppingCartItemModelDto {
  sku?: string | null;
  vendor_name?: string | null;
  picture?: PictureModelDto;
  /** @format int32 */
  product_id?: number;
  product_name?: string | null;
  product_se_name?: string | null;
  unit_price?: string | null;
  /** @format double */
  unit_price_value?: number;
  sub_total?: string | null;
  /** @format double */
  sub_total_value?: number;
  discount?: string | null;
  /** @format double */
  discount_value?: number;
  /** @format int32 */
  maximum_discounted_qty?: number | null;
  /** @format int32 */
  quantity?: number;
  allowed_quantities?: SelectListItemDto[] | null;
  attribute_info?: string | null;
  recurring_info?: string | null;
  rental_info?: string | null;
  allow_item_editing?: boolean;
  disable_removal?: boolean;
  warnings?: string[] | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface ShoppingCartModelDto {
  one_page_checkout_enabled?: boolean;
  show_sku?: boolean;
  show_product_images?: boolean;
  is_editable?: boolean;
  items?: ShoppingCartItemModelDto[] | null;
  checkout_attributes?: CheckoutAttributeModelDto[] | null;
  warnings?: string[] | null;
  min_order_subtotal_warning?: string | null;
  display_tax_shipping_info?: boolean;
  terms_of_service_on_shopping_cart_page?: boolean;
  terms_of_service_on_order_confirm_page?: boolean;
  terms_of_service_popup?: boolean;
  discount_box?: DiscountBoxModelDto;
  gift_card_box?: GiftCardBoxModelDto;
  order_review_data?: OrderReviewDataModelDto;
  hide_checkout_button?: boolean;
  show_vendor_name?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface SitemapItemModelDto {
  group_title?: string | null;
  url?: string | null;
  name?: string | null;
}

export interface SitemapModelDto {
  items?: SitemapItemModelDto[] | null;
  page_model?: SitemapPageModelDto;
  custom_properties?: Record<string, string | null>;
}

export interface SitemapPageModelDto {
  /**
   * The current page index (starts from 0)
   * @format int32
   */
  page_index?: number;
  /**
   * The current page number (starts from 1)
   * @format int32
   */
  page_number?: number;
  /**
   * The number of items in each page.
   * @format int32
   */
  page_size?: number;
  /**
   * The total number of items.
   * @format int32
   */
  total_items?: number;
  /**
   * The total number of pages.
   * @format int32
   */
  total_pages?: number;
  /**
   * The index of the first item in the page.
   * @format int32
   */
  first_item?: number;
  /**
   * The index of the last item in the page.
   * @format int32
   */
  last_item?: number;
  /** Whether there are pages before the current page. */
  has_previous_page?: boolean;
  /** Whether there are pages after the current page. */
  has_next_page?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface SitemapXmlResponse {
  site_map_xml?: string | null;
  mime_type?: string | null;
}

export interface SliderDataDto {
  products?: SliderProductDto[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface SliderProductDto {
  picture?: PictureModelDto;
  /** @format int32 */
  product_id?: number;
  custom_properties?: Record<string, string | null>;
}

/** Represents a specification attribute filter model */
export interface SpecificationAttributeFilterModelDto {
  /** Gets or sets the specification attribute name */
  name?: string | null;
  /** Gets or sets the values */
  values?: SpecificationAttributeValueFilterModelDto[] | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

/** Represents a specification attribute value filter model */
export interface SpecificationAttributeValueFilterModelDto {
  /** Gets or sets the specification attribute option name */
  name?: string | null;
  /** Gets or sets the specification attribute option color (RGB) */
  color_squares_rgb?: string | null;
  /** Gets or sets the value indicating whether the value is selected */
  selected?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

/** Represents a specification filter model */
export interface SpecificationFilterModelDto {
  /** Gets or sets a value indicating whether filtering is enabled */
  enabled?: boolean;
  /** Gets or sets the filtrable specification attributes */
  attributes?: SpecificationAttributeFilterModelDto[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface StateProvinceModelDto {
  name?: string | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface SubCategoryModelDto {
  name?: string | null;
  se_name?: string | null;
  description?: string | null;
  picture_model?: PictureModelDto;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface SubmitReturnRequestModelDto {
  /** @format int32 */
  order_id?: number;
  custom_order_number?: string | null;
  items?: ReturnRequestOrderItemModelDto[] | null;
  /** @format int32 */
  return_request_reason_id?: number;
  available_return_reasons?: ReturnRequestReasonModelDto[] | null;
  /** @format int32 */
  return_request_action_id?: number;
  available_return_actions?: ReturnRequestActionModelDto[] | null;
  comments?: string | null;
  allow_files?: boolean;
  /** @format uuid */
  uploaded_file_guid?: string;
  result?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface SubmitReturnRequestModelDtoBaseModelDtoRequest {
  model?: SubmitReturnRequestModelDto;
  form?: Record<string, string | null>;
}

export interface SubscriptionActivationModelDto {
  result?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface TaxRateDto {
  rate?: string | null;
  value?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface TaxTypeSelectorModelDto {
  current_tax_type?: TaxDisplayType;
  custom_properties?: Record<string, string | null>;
}

export interface TierPriceModelDto {
  price?: string | null;
  /** @format double */
  price_value?: number;
  /** @format int32 */
  quantity?: number;
  custom_properties?: Record<string, string | null>;
}

export interface TopicModelDto {
  /** Gets or sets the name */
  system_name?: string | null;
  /** Gets or sets the value indicating whether this topic should be included in sitemap */
  include_in_sitemap?: boolean;
  /** Gets or sets the value indicating whether this topic is password protected */
  is_password_protected?: boolean;
  /** Gets or sets the title */
  title?: string | null;
  /** Gets or sets the body */
  body?: string | null;
  /**
   * Gets or sets a value of used topic template identifier
   * @format int32
   */
  topic_template_id?: number;
  /** Gets or sets the meta keywords */
  meta_keywords?: string | null;
  /** Gets or sets the meta description */
  meta_description?: string | null;
  /** Gets or sets the meta title */
  meta_title?: string | null;
  /** Gets or sets the SeName */
  se_name?: string | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface TopicMoveModelDto {
  /** @format int32 */
  forum_selected?: number;
  topic_se_name?: string | null;
  forum_list?: SelectListItemDto[] | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface TopicWatchResponse {
  subscribed?: boolean;
  text?: string | null;
  error?: boolean;
}

export interface UploadFileCheckoutAttributeResponse {
  success?: boolean;
  message?: string | null;
  download_url?: string | null;
  download_guid?: string | null;
}

export interface UploadFileProductAttributeResponse {
  success?: boolean;
  message?: string | null;
  download_url?: string | null;
  download_guid?: string | null;
}

export interface UploadFileResponse {
  success?: boolean;
  message?: string | null;
  download_url?: string | null;
  /** @format uuid */
  download_guid?: string;
}

/** Represents an URL record */
export interface UrlRecordDto {
  /**
   * Gets or sets the entity identifier
   * @format int32
   */
  entity_id?: number;
  /** Gets or sets the entity name */
  entity_name?: string | null;
  /** Gets or sets the slug */
  slug?: string | null;
  /** Gets or sets the value indicating whether the record is active */
  is_active?: boolean;
  /**
   * Gets or sets the language identifier
   * @format int32
   */
  language_id?: number;
  /** @format int32 */
  id?: number;
}

export interface UserAgreementModelDto {
  /** @format uuid */
  order_item_guid?: string;
  user_agreement_text?: string | null;
  custom_properties?: Record<string, string | null>;
}

export interface VendorAttributeModelDto {
  name?: string | null;
  is_required?: boolean;
  default_value?: string | null;
  /** @format int32 */
  attribute_control_type?: number;
  values?: VendorAttributeValueModelDto[] | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface VendorAttributeValueModelDto {
  name?: string | null;
  is_pre_selected?: boolean;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface VendorBriefInfoModelDto {
  name?: string | null;
  se_name?: string | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface VendorInfoModelDto {
  name?: string | null;
  email?: string | null;
  description?: string | null;
  picture_url?: string | null;
  vendor_attributes?: VendorAttributeModelDto[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface VendorModelDto {
  name?: string | null;
  description?: string | null;
  meta_keywords?: string | null;
  meta_description?: string | null;
  meta_title?: string | null;
  se_name?: string | null;
  allow_customers_to_contact_vendors?: boolean;
  /** @format int32 */
  pm_customer_id?: number | null;
  picture_model?: PictureModelDto;
  /** Represents a catalog products model */
  catalog_products_model?: CatalogProductsModelDto;
  product_reviews?: VendorProductReviewsListModelDto;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export interface VendorProductReviewModelDto {
  /** @format int32 */
  customer_id?: number;
  customer_avatar_url?: string | null;
  customer_name?: string | null;
  product_se_name?: string | null;
  product_name?: string | null;
  title?: string | null;
  review_text?: string | null;
  reply_text?: string | null;
  /** @format int32 */
  rating?: number;
  /** @format int32 */
  helpful_yes_total?: number;
  /** @format int32 */
  helpful_no_total?: number;
  /** @format date-time */
  created_on_utc?: string;
  helpfulness?: ProductReviewHelpfulnessModelDto;
  allow_viewing_profiles?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface VendorProductReviewsListModelDto {
  /** @format int32 */
  vendor_id?: number;
  vendor_name?: string | null;
  vendor_url?: string | null;
  paging_filtering_context?: VendorReviewsPagingFilteringModelDto;
  reviews?: VendorProductReviewModelDto[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface VendorReviewsPagingFilteringModel {
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int32 */
  TotalItems?: number;
  /** @format int32 */
  TotalPages?: number;
  /** @format int32 */
  FirstItem?: number;
  /** @format int32 */
  LastItem?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  CustomProperties?: Record<string, string | null>;
}

export interface VendorReviewsPagingFilteringModelDto {
  /**
   * The current page index (starts from 0)
   * @format int32
   */
  page_index?: number;
  /**
   * The current page number (starts from 1)
   * @format int32
   */
  page_number?: number;
  /**
   * The number of items in each page.
   * @format int32
   */
  page_size?: number;
  /**
   * The total number of items.
   * @format int32
   */
  total_items?: number;
  /**
   * The total number of pages.
   * @format int32
   */
  total_pages?: number;
  /**
   * The index of the first item in the page.
   * @format int32
   */
  first_item?: number;
  /**
   * The index of the last item in the page.
   * @format int32
   */
  last_item?: number;
  /** Whether there are pages before the current page. */
  has_previous_page?: boolean;
  /** Whether there are pages after the current page. */
  has_next_page?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface VideoModelDto {
  video_url?: string | null;
  allow?: string | null;
  /** @format int32 */
  width?: number;
  /** @format int32 */
  height?: number;
  custom_properties?: Record<string, string | null>;
}

export interface WishlistEmailAFriendModelDto {
  friend_email?: string | null;
  your_email_address?: string | null;
  personal_message?: string | null;
  successfully_sent?: boolean;
  result?: string | null;
  display_captcha?: boolean;
  custom_properties?: Record<string, string | null>;
}

export interface WishlistModelDto {
  /** @format uuid */
  customer_guid?: string;
  customer_fullname?: string | null;
  email_wishlist_enabled?: boolean;
  show_sku?: boolean;
  show_product_images?: boolean;
  is_editable?: boolean;
  display_add_to_cart?: boolean;
  display_tax_shipping_info?: boolean;
  items?: WishlistShoppingCartItemModelDto[] | null;
  warnings?: string[] | null;
  custom_properties?: Record<string, string | null>;
}

export interface WishlistShoppingCartItemModelDto {
  sku?: string | null;
  picture?: PictureModelDto;
  /** @format int32 */
  product_id?: number;
  product_name?: string | null;
  product_se_name?: string | null;
  unit_price?: string | null;
  /** @format double */
  unit_price_value?: number;
  sub_total?: string | null;
  /** @format double */
  sub_total_value?: number;
  discount?: string | null;
  /** @format double */
  discount_value?: number;
  /** @format int32 */
  maximum_discounted_qty?: number | null;
  /** @format int32 */
  quantity?: number;
  allowed_quantities?: SelectListItemDto[] | null;
  attribute_info?: string | null;
  recurring_info?: string | null;
  rental_info?: string | null;
  allow_item_editing?: boolean;
  warnings?: string[] | null;
  /** @format int32 */
  id?: number;
  custom_properties?: Record<string, string | null>;
}

export type AuthenticateGetTokenCreateData = AuthenticateResponse;

export type AuthenticateGetTokenCreateError = string;

export type AuthenticateGetApiVersionListData = string;

export type BackInStockSubscriptionSubscribePopupDetailData =
  BackInStockSubscribeModelDto;

export type BackInStockSubscriptionSubscribePopupDetailError = string;

export type BackInStockSubscriptionSubscribeCreateData = string;

export type BackInStockSubscriptionSubscribeCreateError = string;

export interface BackInStockSubscriptionCustomerSubscriptionsListParams {
  /**
   * Page number
   * @format int32
   */
  pageNumber?: number;
}

export type BackInStockSubscriptionCustomerSubscriptionsListData =
  CustomerBackInStockSubscriptionsModelDto;

export type BackInStockSubscriptionCustomerSubscriptionsListError = string;

export type BackInStockSubscriptionCustomerSubscriptionsCreatePayload = Record<
  string,
  string
>;

export type BackInStockSubscriptionCustomerSubscriptionsCreateData =
  CustomerBackInStockSubscriptionsModelDto;

export type BackInStockSubscriptionCustomerSubscriptionsCreateError = string;

export type BlogListCreateData = BlogPostListModelDto;

export type BlogListCreateError = string;

export type BlogBlogByTagCreateData = BlogPostListModelDto;

export type BlogBlogByTagCreateError = string;

export type BlogBlogByMonthCreateData = BlogPostListModelDto;

export type BlogBlogByMonthCreateError = string;

export type BlogListRssDetailData = string;

export type BlogListRssDetailError = string;

export type BlogGetBlogPostDetailData = BlogPostModelDto;

export type BlogGetBlogPostDetailError = string;

export type BlogBlogCommentAddCreateData = any;

export type BlogBlogCommentAddCreateError = string;

export type BoardsIndexListData = BoardsIndexModelDto;

export type BoardsIndexListError = string;

export interface BoardsActiveDiscussionsListParams {
  /**
   * Forum identifier
   * @format int32
   * @default 0
   */
  forumId?: number;
  /**
   * Number of forum topics page
   * @format int32
   * @default 1
   */
  pageNumber?: number;
}

export type BoardsActiveDiscussionsListData = ActiveDiscussionsModelDto;

export type BoardsActiveDiscussionsListError = string;

export interface BoardsActiveDiscussionsRssListParams {
  /**
   * Forum identifier
   * @format int32
   * @default 0
   */
  forumId?: number;
}

export type BoardsActiveDiscussionsRssListData = string;

export type BoardsActiveDiscussionsRssListError = string;

export type BoardsForumGroupDetailData = ForumGroupModelDto;

export type BoardsForumGroupDetailError = string;

export interface BoardsForumDetailParams {
  /**
   * Number of forum page
   * @format int32
   * @default 1
   */
  pageNumber?: number;
  /**
   * Forum identifier
   * @format int32
   */
  id: number;
}

export type BoardsForumDetailData = ForumPageModelDto;

export type BoardsForumDetailError = string;

export type BoardsForumRssDetailData = string;

export type BoardsForumRssDetailError = string;

export type BoardsForumWatchDetailData = ForumWatchResponse;

export type BoardsForumWatchDetailError = string;

export interface BoardsTopicDetailParams {
  /**
   * Number of topic page
   * @format int32
   * @default 1
   */
  pageNumber?: number;
  /**
   * Topic identifier
   * @format int32
   */
  id: number;
}

export type BoardsTopicDetailData = ForumTopicPageModelDto;

export type BoardsTopicDetailError = string;

export type BoardsTopicWatchDetailData = TopicWatchResponse;

export type BoardsTopicWatchDetailError = string;

export type BoardsTopicMoveDetailData = TopicMoveModelDto;

export type BoardsTopicMoveDetailError = string;

export type BoardsTopicDeleteDeleteData = string;

export type BoardsTopicDeleteDeleteError = string;

export type BoardsTopicCreateDetailData = EditForumTopicModelDto;

export type BoardsTopicCreateDetailError = string;

export type BoardsTopicCreateCreateData = EditForumTopicModelDto;

export type BoardsTopicCreateCreateError = string;

export type BoardsTopicEditDetailData = EditForumTopicModelDto;

export type BoardsTopicEditDetailError = string;

export type BoardsTopicEditCreateData = EditForumTopicModelDto;

export type BoardsTopicEditCreateError = string;

export type BoardsPostDeleteDeleteData = EditForumTopicModelDto;

export type BoardsPostDeleteDeleteError = string;

export interface BoardsPostCreateDetailParams {
  /**
   * Identifier of the quoted post; pass 0 to load the empty text
   * @format int32
   */
  quoteId?: number;
  /**
   * Forum topic identifier
   * @format int32
   */
  id: number;
  quote: string;
}

export type BoardsPostCreateDetailData = EditForumPostModelDto;

export type BoardsPostCreateDetailError = string;

export type BoardsPostCreateCreateData = EditForumPostModelDto;

export type BoardsPostCreateCreateError = string;

export type BoardsPostEditDetailData = EditForumPostModelDto;

export type BoardsPostEditDetailError = string;

export type BoardsPostEditCreateData = EditForumPostModelDto;

export type BoardsPostEditCreateError = string;

export interface BoardsSearchDetailParams {
  /** Search terms */
  searchTerms: string;
  /** Whether to use the advanced search */
  advs?: boolean;
  /** String representation of int value of ForumSearchType */
  within: string;
  /** Limit by the last number days; 0 to load all topics */
  limitDays: string;
  /**
   * Number of items page
   * @format int32
   */
  page: number;
  /** Forum identifier */
  forumId: string;
}

export type BoardsSearchDetailData = SearchBoardsModelDto;

export type BoardsSearchDetailError = string;

export interface BoardsCustomerForumSubscriptionsListParams {
  /**
   * Number of items page; pass null to load the first page
   * @format int32
   */
  pageNumber?: number;
}

export type BoardsCustomerForumSubscriptionsListData =
  CustomerForumSubscriptionsModelDto;

export type BoardsCustomerForumSubscriptionsListError = string;

export type BoardsCustomerForumSubscriptionsCreatePayload = Record<
  string,
  string
>;

export type BoardsCustomerForumSubscriptionsCreateData =
  CustomerForumSubscriptionsModelDto;

export type BoardsCustomerForumSubscriptionsCreateError = string;

export interface BoardsPostVoteDetailParams {
  /** Is up */
  isUp: boolean;
  /**
   * Post identifier
   * @format int32
   */
  postId: number;
}

export type BoardsPostVoteDetailData = PostVoteResponse;

export type BoardsPostVoteDetailError = string;

export type CatalogGetCategoryCreateData = CategoryResponse;

export type CatalogGetCategoryCreateError = string;

export type CatalogGetCategoryProductsCreateData = GetCategoryProductsResponse;

export type CatalogGetCategoryProductsCreateError = string;

export interface CatalogGetCatalogRootListParams {
  /** @default false */
  loadImage?: boolean;
}

export type CatalogGetCatalogRootListData = CategorySimpleModelDto[];

export type CatalogGetCatalogRootListError = string;

export type CatalogGetCatalogSubCategoriesDetailData = CategorySimpleModelDto[];

export type CatalogGetCatalogSubCategoriesDetailError = string;

export type CatalogHomePageCategoriesListData = CategorySimpleModelDto[];

export type CatalogHomePageCategoriesListError = string;

export type CatalogGetManufacturerCreateData = ManufacturerResponse;

export type CatalogGetManufacturerCreateError = string;

export type CatalogGetManufacturerProductsCreateData =
  GetManufacturerProductsResponse;

export type CatalogGetManufacturerProductsCreateError = string;

export type CatalogManufacturerAllListData = ManufacturerModelDto[];

export type CatalogManufacturerAllListError = string;

export type CatalogGetVendorCreateData = VendorModelDto;

export type CatalogGetVendorCreateError = string;

export type CatalogGetVendorProductsCreateData = GetVendorProductsResponse;

export type CatalogGetVendorProductsCreateError = string;

export type CatalogVendorReviewsCreateData = VendorProductReviewsListModelDto;

export type CatalogVendorReviewsCreateError = string;

export type CatalogVendorAllListData = VendorModelDto[];

export type CatalogVendorAllListError = string;

export type CatalogGetProductsByTagCreateData = ProductsByTagModelDto;

export type CatalogGetProductsByTagCreateError = string;

export type CatalogGetTagProductsCreateData = GetTagProductsResponse;

export type CatalogGetTagProductsCreateError = string;

export type CatalogProductTagsAllListData = PopularProductTagsModelDto;

export type CatalogProductTagsAllListError = string;

export type CatalogNewProductsListData = NewProductsModelDto;

export type CatalogNewProductsListError = string;

export type CatalogNewProductsRssListData = string;

export type CatalogNewProductsRssListError = string;

export type CatalogSearchCreateData = SearchModelDto;

export type CatalogSearchCreateError = string;

export interface CatalogSearchTermAutoCompleteListParams {
  term: string;
  /** @format int32 */
  categoryId: number;
}

export type CatalogSearchTermAutoCompleteListData =
  SearchTermAutoCompleteResponse[];

export type CatalogSearchTermAutoCompleteListError = string;

export type CatalogSearchProductsCreateData = SearchProductsResponse;

export type CatalogSearchProductsCreateError = string;

export type CheckoutGetAddressByIdDetailData = AddressModelDto;

export type CheckoutGetAddressByIdDetailError = string;

export type CheckoutBillingAddressCreateData = BillingAddressResponse;

export type CheckoutBillingAddressCreateError = string;

export interface CheckoutSelectBillingAddressDetailParams {
  /**
   * A value indicating "Ship to the same address" option is enabled
   * @default false
   */
  shipToSameAddress?: boolean;
  /**
   * Address identifier
   * @format int32
   */
  addressId: number;
}

export type CheckoutSelectBillingAddressDetailData = BillingAddressResponse;

export type CheckoutSelectBillingAddressDetailError = string;

export type CheckoutNewBillingAddressCreateData = BillingAddressResponse;

export type CheckoutNewBillingAddressCreateError = string;

export type CheckoutSaveEditBillingAddressCreateData = BillingAddressResponse;

export type CheckoutSaveEditBillingAddressCreateError = string;

export type CheckoutDeleteEditBillingAddressDeleteData = BillingAddressResponse;

export type CheckoutDeleteEditBillingAddressDeleteError = string;

export type CheckoutShippingAddressListData = ShippingAddressResponse;

export type CheckoutShippingAddressListError = string;

export type CheckoutSelectShippingAddressDetailData = ShippingAddressResponse;

export type CheckoutSelectShippingAddressDetailError = string;

export type CheckoutNewShippingAddressCreateData = ShippingAddressResponse;

export type CheckoutNewShippingAddressCreateError = string;

export type CheckoutSaveEditShippingAddressCreateData = ShippingAddressResponse;

export type CheckoutSaveEditShippingAddressCreateError = string;

export type CheckoutDeleteEditShippingAddressDeleteData =
  ShippingAddressResponse;

export type CheckoutDeleteEditShippingAddressDeleteError = string;

export type CheckoutShippingMethodListData = ShippingMethodResponse;

export type CheckoutShippingMethodListError = string;

export type CheckoutSelectShippingMethodCreatePayload = Record<string, string>;

export interface CheckoutSelectShippingMethodCreateParams {
  shippingOption: string;
}

export type CheckoutSelectShippingMethodCreateData = CheckoutRedirectResponse;

export type CheckoutSelectShippingMethodCreateError = string;

export type CheckoutPaymentMethodListData = PaymentMethodResponse;

export type CheckoutPaymentMethodListError = string;

export interface CheckoutSelectPaymentMethodCreateParams {
  paymentMethod: string;
  /** @default false */
  useRewardPoints?: boolean;
}

export type CheckoutSelectPaymentMethodCreateData = CheckoutRedirectResponse;

export type CheckoutSelectPaymentMethodCreateError = string;

export type CheckoutPaymentInfoListData = CheckoutPaymentInfoModelDto;

export type CheckoutPaymentInfoListError = string;

export type CheckoutEnterPaymentInfoCreatePayload = Record<string, string>;

export type CheckoutEnterPaymentInfoCreateData = CheckoutRedirectResponse;

export type CheckoutEnterPaymentInfoCreateError = string;

export type CheckoutConfirmListData = CheckoutConfirmModelDto;

export type CheckoutConfirmListError = string;

export type CheckoutConfirmOrderCreateData = ConfirmOrderResponse;

export type CheckoutConfirmOrderCreateError = string;

export interface CheckoutCompletedListParams {
  /** @format int32 */
  orderId?: number;
}

export type CheckoutCompletedListData = CheckoutCompletedModelDto;

export type CheckoutCompletedListError = string;

export type CommonGetLanguageSelectorListData = LanguageSelectorModelDto;

export type CommonGetLanguageSelectorListError = string;

export type CommonSetLanguageCreateData = any;

export type CommonSetLanguageCreateError = string;

export type CommonGetCurrencySelectorListData = CurrencySelectorModelDto;

export type CommonGetCurrencySelectorListError = string;

export type CommonSetCurrencyCreateData = any;

export type CommonSetCurrencyCreateError = string;

export type CommonGetTaxSelectorListData = TaxTypeSelectorModelDto;

export type CommonGetTaxSelectorListError = string;

export interface CommonSetTaxTypeCreateParams {
  customerTaxType: TaxDisplayType;
}

export type CommonSetTaxTypeCreateData = any;

export type CommonSetTaxTypeCreateError = string;

export type CommonContactUsListData = ContactUsModelDto;

export type CommonContactUsListError = string;

export type CommonContactUsSendCreateData = ContactUsModelDto;

export type CommonContactUsSendCreateError = string;

export type CommonContactVendorDetailData = ContactVendorModelDto;

export type CommonContactVendorDetailError = string;

export type CommonContactVendorSendCreateData = ContactVendorModelDto;

export type CommonContactVendorSendCreateError = string;

export type CommonSitemapCreateData = SitemapModelDto;

export type CommonSitemapCreateError = string;

export type CommonSitemapXmlDetailData = SitemapXmlResponse;

export type CommonSitemapXmlDetailError = string;

export interface CommonSetStoreThemeListParams {
  /** Theme name */
  themeName: string;
}

export type CommonSetStoreThemeListError = string;

export type CommonEuCookieLawAcceptListData = boolean;

export type CommonEuCookieLawAcceptListError = string;

export type CommonRobotsTextFileListData = RobotsTextFileResponse;

export type CommonRobotsTextFileListError = string;

export interface CountryGetStatesByCountryIdDetailParams {
  addSelectStateItem: boolean;
  /** @format int32 */
  countryId: number;
}

export type CountryGetStatesByCountryIdDetailData = StateProvinceModelDto[];

export type CountryGetStatesByCountryIdDetailError = string;

export type CustomerLoginCreateData = boolean;

export type CustomerLoginCreateError = string;

export type CustomerLogoutListData = any;

export type CustomerLogoutListError = string;

export type CustomerPasswordRecoveryListData = PasswordRecoveryModelDto;

export type CustomerPasswordRecoveryListError = string;

export type CustomerPasswordRecoverySendCreateData = PasswordRecoveryModelDto;

export type CustomerPasswordRecoverySendCreateError = string;

export interface CustomerPasswordRecoveryConfirmCreateParams {
  token: string;
  email: string;
  /** @format uuid */
  customerGuid: string;
}

export type CustomerPasswordRecoveryConfirmCreateData =
  PasswordRecoveryConfirmModelDto;

export type CustomerPasswordRecoveryConfirmCreateError = string;

export interface CustomerPasswordRecoveryConfirmPostCreateParams {
  token: string;
  email: string;
  /** @format uuid */
  customerGuid: string;
}

export type CustomerPasswordRecoveryConfirmPostCreateData =
  PasswordRecoveryConfirmModelDto;

export type CustomerPasswordRecoveryConfirmPostCreateError = string;

export type CustomerRegisterListData = RegisterModelDto;

export type CustomerRegisterListError = string;

export type CustomerRegisterCreateData = RegisterModelDto;

export type CustomerRegisterCreateError = string[] | string;

export interface CustomerRegisterResultCreateParams {
  returnUrl: string;
  /** @format int32 */
  resultId: number;
}

export type CustomerRegisterResultCreateData = RegisterResultModelDto;

export type CustomerRegisterResultCreateError = string;

export interface CustomerCheckUsernameAvailabilityListParams {
  /** Username */
  username: string;
}

export type CustomerCheckUsernameAvailabilityListData =
  CheckUsernameAvailabilityResponse;

export type CustomerCheckUsernameAvailabilityListError = string;

export interface CustomerAccountActivationCreateParams {
  token: string;
  email: string;
  /** @format uuid */
  customerGuid: string;
}

export type CustomerAccountActivationCreateData = AccountActivationModelDto;

export type CustomerAccountActivationCreateError = string;

export type CustomerInfoListData = CustomerInfoModelDto;

export type CustomerInfoListError = string;

export type CustomerInfoCreateData = InfoResponse;

export type CustomerInfoCreateError = string;

export type CustomerRemoveExternalAssociationDeleteData = string;

export type CustomerRemoveExternalAssociationDeleteError = string;

export interface CustomerEmailRevalidationCreateParams {
  token: string;
  email: string;
  /** @format uuid */
  customerGuid: string;
}

export type CustomerEmailRevalidationCreateData = EmailRevalidationModelDto;

export type CustomerEmailRevalidationCreateError = string;

export type CustomerAddressesListData = CustomerAddressListModelDto;

export type CustomerAddressesListError = string;

export type CustomerAddressDeleteDeleteData = string;

export type CustomerAddressDeleteDeleteError = string;

export type CustomerAddressAddListData = CustomerAddressEditModelDto;

export type CustomerAddressAddListError = string;

export type CustomerAddressAddCreateData = AddressAddResponse;

export type CustomerAddressAddCreateError = string;

export type CustomerAddressEditDetailData = CustomerAddressEditModelDto;

export type CustomerAddressEditDetailError = string;

export type CustomerAddressEditUpdateData = AddressEditResponse;

export type CustomerAddressEditUpdateError = string;

export type CustomerDownloadableProductsListData =
  CustomerDownloadableProductsModelDto;

export type CustomerDownloadableProductsListError = string;

export interface CustomerUserAgreementListParams {
  /**
   * Order item guid identifier
   * @format uuid
   */
  orderItemId: string;
}

export type CustomerUserAgreementListData = UserAgreementModelDto;

export type CustomerUserAgreementListError = string;

export type CustomerChangePasswordListData = ChangePasswordModelDto;

export type CustomerChangePasswordListError = string;

export type CustomerChangePasswordCreateData = ChangePasswordModelDto;

export type CustomerChangePasswordCreateError = string[] | string;

export type CustomerAvatarListData = CustomerAvatarModelDto;

export type CustomerAvatarListError = string;

export interface CustomerUploadAvatarCreatePayload {
  /** @format binary */
  fileBinary?: File;
}

export interface CustomerUploadAvatarCreateParams {
  fileName: string;
  contentType: string;
}

export type CustomerUploadAvatarCreateData = CustomerAvatarModelDto;

export type CustomerUploadAvatarCreateError = string;

export type CustomerRemoveAvatarDeleteData = any;

export type CustomerRemoveAvatarDeleteError = string;

export type CustomerGdprToolsListData = GdprToolsModelDto;

export type CustomerGdprToolsListError = string;

export type CustomerGdprToolsExportListData = DownloadResponse;

export type CustomerGdprToolsExportListError = string;

export type CustomerGdprToolsDeleteDeleteData = GdprToolsModelDto;

export type CustomerGdprToolsDeleteDeleteError = string;

export type CustomerCheckGiftCardBalanceListData = CheckGiftCardBalanceModelDto;

export type CustomerCheckGiftCardBalanceListError = string;

export type CustomerCheckBalanceCreateData = CheckGiftCardBalanceModelDto;

export type CustomerCheckBalanceCreateError = string;

export type DownloadWebPdfInvoiceDetailError = string;

export type DownloadPdfInvoiceDetailData = DownloadResponse;

export type DownloadPdfInvoiceDetailError = string;

export type DownloadWebSampleDetailError = string;

export type DownloadSampleDetailData = DownloadResponse;

export type DownloadSampleDetailError = string;

export interface DownloadGetDownloadListParams {
  /**
   * Order item GUID
   * @format uuid
   */
  orderItemGuid: string;
  /**
   * Is agree
   * @default false
   */
  agree?: boolean;
}

export type DownloadGetDownloadListData = DownloadResponse;

export type DownloadGetDownloadListError = string;

export interface DownloadWebDownloadListParams {
  /**
   * Order item GUID
   * @format uuid
   */
  orderItemGuid: string;
  /**
   * Is agree
   * @default false
   */
  agree?: boolean;
}

export type DownloadWebDownloadListError = string;

export interface DownloadGetLicenseListParams {
  /**
   * Order item GUID
   * @format uuid
   */
  orderItemGuid: string;
}

export type DownloadGetLicenseListError = string;

export interface DownloadGetFileUploadListParams {
  /**
   * Download GUID
   * @format uuid
   */
  downloadGuid: string;
}

export type DownloadGetFileUploadListError = string;

export type DownloadGetOrderNoteFileDetailError = string;

export type ErpProductBaseCreatePayload = string[];

export type ErpProductBaseCreateData = ExternalPriceAndStockResponse;

export type ErpProductBaseCreateError = string;

export type ErpGetApiVersionListData = string;

export type KlokurAuthenticateExchangeTokenFromKeycloakCreateData =
  AuthenticateResponse;

export type KlokurAuthenticateExchangeTokenFromKeycloakCreateError = string;

export type KlokurAuthenticateGetApiVersionListData = string;

export type NewsListCreateData = NewsItemListModelDto;

export type NewsListCreateError = string;

export type NewsListRssDetailData = string;

export type NewsListRssDetailError = string;

export type NewsGetNewsItemDetailData = NewsItemModelDto;

export type NewsGetNewsItemDetailError = string;

export type NewsNewsCommentAddCreateData = any;

export type NewsNewsCommentAddCreateError = string;

export interface NewsletterSubscribeNewsletterListParams {
  email: string;
  subscribe: boolean;
}

export type NewsletterSubscribeNewsletterListData = string;

export type NewsletterSubscribeNewsletterListError = string;

export interface NewsletterSubscriptionActivationListParams {
  /** @format uuid */
  token: string;
  active: boolean;
}

export type NewsletterSubscriptionActivationListData =
  SubscriptionActivationModelDto;

export type NewsletterSubscriptionActivationListError = string;

export type NopMobileAppSettingsListData = Record<string, string>;

export type NopMobileAppSettingsListError = string;

export type NopMobileAppSliderDataListData = SliderDataDto;

export type NopMobileAppSliderDataListError = string;

export type OrderCustomerOrdersListData = CustomerOrderListModelDto;

export type OrderCustomerOrdersListError = string;

export type OrderCancelRecurringPaymentCreatePayload = Record<string, string>;

export type OrderCancelRecurringPaymentCreateData = CustomerOrderListModelDto;

export type OrderCancelRecurringPaymentCreateError = ProblemDetails | string;

export type OrderRetryLastRecurringPaymentCreatePayload = Record<
  string,
  string
>;

export type OrderRetryLastRecurringPaymentCreateData =
  CustomerOrderListModelDto;

export type OrderRetryLastRecurringPaymentCreateError = ProblemDetails | string;

export interface OrderCustomerRewardPointsListParams {
  /** @format int32 */
  pageNumber?: number;
}

export type OrderCustomerRewardPointsListData = CustomerRewardPointsModelDto;

export type OrderCustomerRewardPointsListError = ProblemDetails | string;

export type OrderDetailsDetailData = OrderDetailsModelDto;

export type OrderDetailsDetailError = string;

export type OrderReOrderDetailData = any;

export type OrderReOrderDetailError = string;

export type OrderRePostPaymentDetailData = any;

export type OrderRePostPaymentDetailError = string;

export type OrderShipmentDetailsDetailData = ShipmentDetailsModelDto;

export type OrderShipmentDetailsDetailError = string;

export type PollVoteDetailData = PollModelDto;

export type PollVoteDetailError = string;

export interface PrivateMessagesIndexListParams {
  tab: string;
  /** @format int32 */
  pageNumber?: number;
}

export type PrivateMessagesIndexListData = PrivateMessageIndexModelDto;

export type PrivateMessagesIndexListError = ProblemDetails | string;

export type PrivateMessagesDeleteInboxPmCreatePayload = Record<string, string>;

export type PrivateMessagesDeleteInboxPmCreateData = any;

export type PrivateMessagesDeleteInboxPmCreateError = string;

export type PrivateMessagesMarkUnreadCreatePayload = Record<string, string>;

export type PrivateMessagesMarkUnreadCreateData = any;

export type PrivateMessagesMarkUnreadCreateError = string;

export type PrivateMessagesDeleteSentPmCreatePayload = Record<string, string>;

export type PrivateMessagesDeleteSentPmCreateData = any;

export type PrivateMessagesDeleteSentPmCreateError = string;

export interface PrivateMessagesSendPmDetailParams {
  /** @format int32 */
  replyToMessageId?: number;
  /** @format int32 */
  toCustomerId: number;
}

export type PrivateMessagesSendPmDetailData = SendPrivateMessageModelDto;

export type PrivateMessagesSendPmDetailError = string;

export type PrivateMessagesSendPmCreateData = SendPrivateMessageModelDto;

export type PrivateMessagesSendPmCreateError = string;

export type PrivateMessagesViewPmDetailData = PrivateMessageModelDto;

export type PrivateMessagesViewPmDetailError = ProblemDetails | string;

export type PrivateMessagesDeletePmDeleteData = any;

export type PrivateMessagesDeletePmDeleteError = ProblemDetails | string;

export interface ProductGetProductDetailsDetailParams {
  /**
   * @format int32
   * @default 0
   */
  updateCartItemId?: number;
  /** @format int32 */
  productId: number;
}

export type ProductGetProductDetailsDetailData = ProductDetailsResponse;

export type ProductGetProductDetailsDetailError = string;

export type ProductEstimateShippingCreateData = EstimateShippingResultModelDto;

export type ProductEstimateShippingCreateError = string;

export type ProductGetProductCombinationsDetailData =
  ProductCombinationModelDto[];

export type ProductGetProductCombinationsDetailError = string;

export interface ProductGetRelatedProductsDetailParams {
  /** @format int32 */
  productThumbPictureSize?: number;
  /**
   * Product identifier
   * @format int32
   */
  productId: number;
}

export type ProductGetRelatedProductsDetailData = ProductOverviewModelDto[];

export type ProductGetRelatedProductsDetailError = string;

export type ProductRecentlyViewedProductsListData = ProductOverviewModelDto[];

export type ProductRecentlyViewedProductsListError = string;

export type ProductHomePageProductsListData = ProductOverviewModelDto[];

export type ProductHomePageProductsListError = string;

export type ProductValidateProductReviewAvailabilityDetailData = string[];

export type ProductValidateProductReviewAvailabilityDetailError = string;

export type ProductProductReviewsDetailData = ProductReviewsModelDto;

export type ProductProductReviewsDetailError = string;

export type ProductProductReviewsAddCreateData = ProductReviewsModelDto;

export type ProductProductReviewsAddCreateError = string[] | string;

export interface ProductSetProductReviewHelpfulnessCreateParams {
  /** Indicator if the review was helpful */
  helpfulness: boolean;
  /**
   * Product review identifier
   * @format int32
   */
  productReviewId: number;
}

export type ProductSetProductReviewHelpfulnessCreateData =
  SetProductReviewHelpfulnessResponse;

export type ProductSetProductReviewHelpfulnessCreateError = string;

export interface ProductCustomerProductReviewsListParams {
  /**
   * Page number
   * @format int32
   */
  pageNumber?: number;
}

export type ProductCustomerProductReviewsListData =
  CustomerProductReviewsModelDto;

export type ProductCustomerProductReviewsListError = string;

export type ProductProductEmailAFriendDetailData = ProductEmailAFriendModelDto;

export type ProductProductEmailAFriendDetailError = string;

export type ProductProductEmailAFriendSendCreateData =
  ProductEmailAFriendModelDto;

export type ProductProductEmailAFriendSendCreateError = string;

export type ProductAddProductToCompareListDetailData =
  AddProductToCompareListResponse;

export type ProductAddProductToCompareListDetailError = string;

export type ProductRemoveProductFromCompareListDetailData = any;

export type ProductRemoveProductFromCompareListDetailError = string;

export type ProductCompareProductsListData = CompareProductsModelDto;

export type ProductCompareProductsListError = string;

export type ProductClearCompareListDeleteData = any;

export type ProductClearCompareListDeleteError = string;

export interface ProfileIndexListParams {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  pageNumber?: number;
}

export type ProfileIndexListData = ProfileIndexModelDto;

export type ProfileIndexListError = ProblemDetails | string;

export type ReturnRequestCustomerReturnRequestsListData =
  CustomerReturnRequestsModelDto;

export type ReturnRequestCustomerReturnRequestsListError = string;

export type ReturnRequestReturnRequestDetailData = SubmitReturnRequestModelDto;

export type ReturnRequestReturnRequestDetailError = string;

export type ReturnRequestReturnRequestSubmitCreateData =
  SubmitReturnRequestModelDto;

export type ReturnRequestReturnRequestSubmitCreateError = string;

/** @format byte */
export type ReturnRequestUploadFileReturnRequestCreatePayload = string;

export interface ReturnRequestUploadFileReturnRequestCreateParams {
  fileName: string;
  contentType: string;
}

export type ReturnRequestUploadFileReturnRequestCreateData = UploadFileResponse;

export type ReturnRequestUploadFileReturnRequestCreateError = string;

export interface ScheduleTaskRunTaskListParams {
  /** Task type */
  taskType: string;
}

export type ScheduleTaskRunTaskListData = any;

export type ScheduleTaskRunTaskListError = string;

export interface ShoppingCartSelectShippingOptionCreateParams {
  name: string;
}

export type ShoppingCartSelectShippingOptionCreateData =
  SelectShippingOptionResponse;

export type ShoppingCartSelectShippingOptionCreateError = string;

export interface ShoppingCartAddProductToCartFromCatalogCreateParams {
  shoppingCartType: ShoppingCartType;
  /** @format int32 */
  quantity: number;
  /** @format int32 */
  productId: number;
}

export type ShoppingCartAddProductToCartFromCatalogCreateData =
  AddProductToCartResponse;

export type ShoppingCartAddProductToCartFromCatalogCreateError = string;

export type ShoppingCartAddProductToCartFromDetailsCreatePayload = Record<
  string,
  string
>;

export interface ShoppingCartAddProductToCartFromDetailsCreateParams {
  shoppingCartType: ShoppingCartType;
  /** @format int32 */
  productId: number;
}

export type ShoppingCartAddProductToCartFromDetailsCreateData =
  AddProductToCartResponse;

export type ShoppingCartAddProductToCartFromDetailsCreateError = string;

export type ShoppingCartProductDetailsAttributeChangeUpdatePayload = Record<
  string,
  string
>;

export interface ShoppingCartProductDetailsAttributeChangeUpdateParams {
  validateAttributeConditions: boolean;
  loadPicture: boolean;
  /** @format int32 */
  productId: number;
}

export type ShoppingCartProductDetailsAttributeChangeUpdateData =
  ProductDetailsAttributeChangeResponse;

export type ShoppingCartProductDetailsAttributeChangeUpdateError = string;

export type ShoppingCartCheckoutAttributeChangeCreatePayload = Record<
  string,
  string
>;

export type ShoppingCartCheckoutAttributeChangeCreateData =
  CheckoutAttributeChangeResponse;

export type ShoppingCartCheckoutAttributeChangeCreateError = string;

export type ShoppingCartUploadFileProductAttributeCreateData =
  UploadFileProductAttributeResponse;

export type ShoppingCartUploadFileProductAttributeCreateError = string;

export type ShoppingCartUploadFileCheckoutAttributeCreateData =
  UploadFileCheckoutAttributeResponse;

export type ShoppingCartUploadFileCheckoutAttributeCreateError = string;

export type ShoppingCartCartListData = ShoppingCartModelDto;

export type ShoppingCartCartListError = ProblemDetails | string;

export type ShoppingCartMiniCartListData = MiniShoppingCartModelDto;

export type ShoppingCartMiniCartListError = ProblemDetails | string;

export type ShoppingCartUpdateCartCreatePayload = Record<string, string>;

export type ShoppingCartUpdateCartCreateData = ShoppingCartModelDto;

export type ShoppingCartUpdateCartCreateError = ProblemDetails | string;

export type ShoppingCartApplyDiscountCouponCreatePayload = Record<
  string,
  string
>;

export interface ShoppingCartApplyDiscountCouponCreateParams {
  discountCouponCode: string;
}

export type ShoppingCartApplyDiscountCouponCreateData = ShoppingCartModelDto;

export type ShoppingCartApplyDiscountCouponCreateError = string;

export type ShoppingCartApplyGiftCardCreatePayload = Record<string, string>;

export interface ShoppingCartApplyGiftCardCreateParams {
  giftCardCouponCode: string;
}

export type ShoppingCartApplyGiftCardCreateData = ShoppingCartModelDto;

export type ShoppingCartApplyGiftCardCreateError = string;

export type ShoppingCartGetEstimateShippingCreateData =
  EstimateShippingResultModelDto;

export type ShoppingCartGetEstimateShippingCreateError = string;

export type ShoppingCartRemoveDiscountCouponCreatePayload = Record<
  string,
  string
>;

export type ShoppingCartRemoveDiscountCouponCreateData = ShoppingCartModelDto;

export type ShoppingCartRemoveDiscountCouponCreateError = string;

export type ShoppingCartRemoveGiftCardCodeCreatePayload = Record<
  string,
  string
>;

export type ShoppingCartRemoveGiftCardCodeCreateData = ShoppingCartModelDto;

export type ShoppingCartRemoveGiftCardCodeCreateError = string;

export type TopicGetTopicDetailsDetailData = TopicModelDto;

export type TopicGetTopicDetailsDetailError = ProblemDetails | string;

export type TopicGetTopicDetailsBySystemNameDetailData = TopicModelDto;

export type TopicGetTopicDetailsBySystemNameDetailError =
  | ProblemDetails
  | string;

export interface UrlRecordGetBySlugListParams {
  /** Slug */
  slug: string;
}

export type UrlRecordGetBySlugListData = UrlRecordDto;

export type UrlRecordGetBySlugListError = string;

export type VendorApplyVendorListData = ApplyVendorModelDto;

export type VendorApplyVendorListError = ProblemDetails | string;

export interface VendorApplyVendorSubmitCreateParams {
  contentType: string;
}

export type VendorApplyVendorSubmitCreateData = ApplyVendorModelDto;

export type VendorApplyVendorSubmitCreateError = string;

export type VendorInfoListData = VendorInfoModelDto;

export type VendorInfoListError = ProblemDetails | string;

export interface VendorInfoCreateParams {
  contentType: string;
}

export type VendorInfoCreateData = VendorInfoModelDto;

export type VendorInfoCreateError = string[] | string;

export type VendorRemovePictureDeleteData = any;

export type VendorRemovePictureDeleteError = ProblemDetails | string;

export interface WishlistWishlistListParams {
  /** @format uuid */
  customerGuid?: string;
}

export type WishlistWishlistListData = WishlistModelDto;

export type WishlistWishlistListError = ProblemDetails | string;

export type WishlistUpdateWishlistCreatePayload = Record<string, string>;

export type WishlistUpdateWishlistCreateData = WishlistModelDto;

export type WishlistUpdateWishlistCreateError = string;

export type WishlistAddItemsToCartFromWishlistUpdatePayload = Record<
  string,
  string
>;

export interface WishlistAddItemsToCartFromWishlistUpdateParams {
  /** @format uuid */
  customerGuid?: string;
}

export type WishlistAddItemsToCartFromWishlistUpdateData = WishlistModelDto;

export type WishlistAddItemsToCartFromWishlistUpdateError =
  | ProblemDetails
  | string;

export type WishlistEmailWishlistListData = WishlistEmailAFriendModelDto;

export type WishlistEmailWishlistListError = ProblemDetails | string;

export type WishlistEmailWishlistSendCreateData = WishlistEmailAFriendModelDto;

export type WishlistEmailWishlistSendCreateError = ProblemDetails | string;
