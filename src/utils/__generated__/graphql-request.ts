/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  bytea: any;
  citext: any;
  date: any;
  jsonb: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type SendEmailInput = {
  templateAlias: Scalars['String'];
  templateModel: TemplateModel;
  to: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type TemplateModel = {
  firstName?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid'];
  options?: Maybe<Scalars['jsonb']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.provider_requests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Streaming cursor of the table "authProviderRequests" */
export type AuthProviderRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviderRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviderRequests_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

export type AuthProviderRequests_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviderRequests_Bool_Exp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.providers */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authProviders" */
export type AuthProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviders_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id'
}

export type AuthProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviders_Bool_Exp;
};

/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes = {
  __typename?: 'authRefreshTokenTypes';
  comment?: Maybe<Scalars['String']>;
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** aggregated selection of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate = {
  __typename?: 'authRefreshTokenTypes_aggregate';
  aggregate?: Maybe<AuthRefreshTokenTypes_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokenTypes>;
};

/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_Fields = {
  __typename?: 'authRefreshTokenTypes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokenTypes_Max_Fields>;
  min?: Maybe<AuthRefreshTokenTypes_Min_Fields>;
};


/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.refresh_token_types". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokenTypes_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Constraint {
  /** unique or primary key constraint on columns "value" */
  RefreshTokenTypesPkey = 'refresh_token_types_pkey'
}

export enum AuthRefreshTokenTypes_Enum {
  /** Personal access token */
  Pat = 'pat',
  /** Regular refresh token */
  Regular = 'regular'
}

/** Boolean expression to compare columns of type "authRefreshTokenTypes_enum". All fields are combined with logical 'AND'. */
export type AuthRefreshTokenTypes_Enum_Comparison_Exp = {
  _eq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  _in?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  _nin?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
};

/** input type for inserting data into table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type AuthRefreshTokenTypes_Max_Fields = {
  __typename?: 'authRefreshTokenTypes_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRefreshTokenTypes_Min_Fields = {
  __typename?: 'authRefreshTokenTypes_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Mutation_Response = {
  __typename?: 'authRefreshTokenTypes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokenTypes>;
};

/** on_conflict condition type for table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_On_Conflict = {
  constraint: AuthRefreshTokenTypes_Constraint;
  update_columns?: Array<AuthRefreshTokenTypes_Update_Column>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_token_types". */
export type AuthRefreshTokenTypes_Order_By = {
  comment?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_token_types */
export type AuthRefreshTokenTypes_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authRefreshTokenTypes" */
export type AuthRefreshTokenTypes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokenTypes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokenTypes_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type AuthRefreshTokenTypes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokenTypes_Bool_Exp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  metadata?: Maybe<Scalars['jsonb']>;
  refreshTokenHash?: Maybe<Scalars['String']>;
  type: AuthRefreshTokenTypes_Enum;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};


/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokensMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp_Count>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  refreshTokenHash?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthRefreshTokens_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthRefreshTokens_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthRefreshTokens_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  refreshTokenHash?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  refreshTokenHash?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  refreshTokenHash?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  refreshTokenHash?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  refreshTokenHash?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type AuthRefreshTokens_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokens_Bool_Exp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']>;
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.roles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authRoles" */
export type AuthRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRoles_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role'
}

export type AuthRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRoles_Bool_Exp;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String'];
  providerUserId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

export type AuthUserProviders_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp_Count>;
};

export type AuthUserProviders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthUserProviders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<AuthProviders_Bool_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_user_id", "provider_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "user_id", "provider_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<AuthProviders_Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_providers */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authUserProviders" */
export type AuthUserProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserProviders_Stream_Cursor_Value_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type AuthUserProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserProviders_Bool_Exp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

export type AuthUserRoles_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp_Count>;
};

export type AuthUserRoles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthUserRoles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<AuthRoles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_roles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authUserRoles" */
export type AuthUserRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserRoles_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type AuthUserRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserRoles_Bool_Exp;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserSecurityKeys = {
  __typename?: 'authUserSecurityKeys';
  counter: Scalars['bigint'];
  credentialId: Scalars['String'];
  credentialPublicKey?: Maybe<Scalars['bytea']>;
  id: Scalars['uuid'];
  nickname?: Maybe<Scalars['String']>;
  transports: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate = {
  __typename?: 'authUserSecurityKeys_aggregate';
  aggregate?: Maybe<AuthUserSecurityKeys_Aggregate_Fields>;
  nodes: Array<AuthUserSecurityKeys>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp_Count>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Fields = {
  __typename?: 'authUserSecurityKeys_aggregate_fields';
  avg?: Maybe<AuthUserSecurityKeys_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AuthUserSecurityKeys_Max_Fields>;
  min?: Maybe<AuthUserSecurityKeys_Min_Fields>;
  stddev?: Maybe<AuthUserSecurityKeys_Stddev_Fields>;
  stddev_pop?: Maybe<AuthUserSecurityKeys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuthUserSecurityKeys_Stddev_Samp_Fields>;
  sum?: Maybe<AuthUserSecurityKeys_Sum_Fields>;
  var_pop?: Maybe<AuthUserSecurityKeys_Var_Pop_Fields>;
  var_samp?: Maybe<AuthUserSecurityKeys_Var_Samp_Fields>;
  variance?: Maybe<AuthUserSecurityKeys_Variance_Fields>;
};


/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Order_By = {
  avg?: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserSecurityKeys_Max_Order_By>;
  min?: InputMaybe<AuthUserSecurityKeys_Min_Order_By>;
  stddev?: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>;
  var_pop?: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>;
  variance?: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Arr_Rel_Insert_Input = {
  data: Array<AuthUserSecurityKeys_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};

/** aggregate avg on columns */
export type AuthUserSecurityKeys_Avg_Fields = {
  __typename?: 'authUserSecurityKeys_avg_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Avg_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type AuthUserSecurityKeys_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  _not?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  counter?: InputMaybe<Bigint_Comparison_Exp>;
  credentialId?: InputMaybe<String_Comparison_Exp>;
  credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  transports?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Constraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserSecurityKeyCredentialIdKey = 'user_security_key_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserSecurityKeysPkey = 'user_security_keys_pkey'
}

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Inc_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Insert_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserSecurityKeys_Max_Fields = {
  __typename?: 'authUserSecurityKeys_max_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Max_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserSecurityKeys_Min_Fields = {
  __typename?: 'authUserSecurityKeys_min_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Min_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Mutation_Response = {
  __typename?: 'authUserSecurityKeys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserSecurityKeys>;
};

/** on_conflict condition type for table "auth.user_security_keys" */
export type AuthUserSecurityKeys_On_Conflict = {
  constraint: AuthUserSecurityKeys_Constraint;
  update_columns?: Array<AuthUserSecurityKeys_Update_Column>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
export type AuthUserSecurityKeys_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  credentialPublicKey?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_security_keys */
export type AuthUserSecurityKeys_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Set_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type AuthUserSecurityKeys_Stddev_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuthUserSecurityKeys_Stddev_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuthUserSecurityKeys_Stddev_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
export type AuthUserSecurityKeys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserSecurityKeys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserSecurityKeys_Stream_Cursor_Value_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type AuthUserSecurityKeys_Sum_Fields = {
  __typename?: 'authUserSecurityKeys_sum_fields';
  counter?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Sum_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** update columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Update_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

export type AuthUserSecurityKeys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserSecurityKeys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AuthUserSecurityKeys_Var_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_var_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuthUserSecurityKeys_Var_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_var_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AuthUserSecurityKeys_Variance_Fields = {
  __typename?: 'authUserSecurityKeys_variance_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Variance_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  downloadExpiration: Scalars['Int'];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate;
  id: Scalars['String'];
  maxUploadFileSize: Scalars['Int'];
  minUploadFileSize: Scalars['Int'];
  presignedUrlsEnabled: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<Buckets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Buckets_Max_Fields>;
  min?: Maybe<Buckets_Min_Fields>;
  stddev?: Maybe<Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Buckets_Sum_Fields>;
  var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  variance?: Maybe<Buckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not?: InputMaybe<Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
  files?: InputMaybe<Files_Bool_Exp>;
  files_aggregate?: InputMaybe<Files_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns?: Array<Buckets_Update_Column>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  downloadExpiration?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  maxUploadFileSize?: InputMaybe<Order_By>;
  minUploadFileSize?: InputMaybe<Order_By>;
  presignedUrlsEnabled?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "buckets" */
export type Buckets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Buckets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Buckets_Stream_Cursor_Value_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
};

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Buckets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Buckets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Buckets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Buckets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']>;
  _gt?: InputMaybe<Scalars['bytea']>;
  _gte?: InputMaybe<Scalars['bytea']>;
  _in?: InputMaybe<Array<Scalars['bytea']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bytea']>;
  _lte?: InputMaybe<Scalars['bytea']>;
  _neq?: InputMaybe<Scalars['bytea']>;
  _nin?: InputMaybe<Array<Scalars['bytea']>>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  id: Scalars['uuid'];
  isAllQuestions: Scalars['Boolean'];
  name: Scalars['String'];
  nextItemId?: Maybe<Scalars['uuid']>;
  prevItemId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  questions: Array<CategoryQuestions>;
  /** An aggregate relationship */
  questions_aggregate: CategoryQuestions_Aggregate;
  resourceId?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
};


/** columns and relationships of "categories" */
export type CategoriesQuestionsArgs = {
  distinct_on?: InputMaybe<Array<CategoryQuestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CategoryQuestions_Order_By>>;
  where?: InputMaybe<CategoryQuestions_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CategoryQuestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CategoryQuestions_Order_By>>;
  where?: InputMaybe<CategoryQuestions_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

export type Categories_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Categories_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Categories_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Categories_Aggregate_Bool_Exp_Count>;
};

export type Categories_Aggregate_Bool_Exp_Bool_And = {
  arguments: Categories_Select_Column_Categories_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Categories_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Categories_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Categories_Select_Column_Categories_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Categories_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Categories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Categories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "categories" */
export type Categories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Categories_Max_Order_By>;
  min?: InputMaybe<Categories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "categories" */
export type Categories_Arr_Rel_Insert_Input = {
  data: Array<Categories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAllQuestions?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nextItemId?: InputMaybe<Uuid_Comparison_Exp>;
  prevItemId?: InputMaybe<Uuid_Comparison_Exp>;
  questions?: InputMaybe<CategoryQuestions_Bool_Exp>;
  questions_aggregate?: InputMaybe<CategoryQuestions_Aggregate_Bool_Exp>;
  resourceId?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuestionCategoryPkey = 'question_category_pkey'
}

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  isAllQuestions?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  nextItemId?: InputMaybe<Scalars['uuid']>;
  prevItemId?: InputMaybe<Scalars['uuid']>;
  questions?: InputMaybe<CategoryQuestions_Arr_Rel_Insert_Input>;
  resourceId?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  nextItemId?: Maybe<Scalars['uuid']>;
  prevItemId?: Maybe<Scalars['uuid']>;
  resourceId?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "categories" */
export type Categories_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nextItemId?: InputMaybe<Order_By>;
  prevItemId?: InputMaybe<Order_By>;
  resourceId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  nextItemId?: Maybe<Scalars['uuid']>;
  prevItemId?: Maybe<Scalars['uuid']>;
  resourceId?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "categories" */
export type Categories_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nextItemId?: InputMaybe<Order_By>;
  prevItemId?: InputMaybe<Order_By>;
  resourceId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  id?: InputMaybe<Order_By>;
  isAllQuestions?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nextItemId?: InputMaybe<Order_By>;
  prevItemId?: InputMaybe<Order_By>;
  questions_aggregate?: InputMaybe<CategoryQuestions_Aggregate_Order_By>;
  resourceId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsAllQuestions = 'isAllQuestions',
  /** column name */
  Name = 'name',
  /** column name */
  NextItemId = 'nextItemId',
  /** column name */
  PrevItemId = 'prevItemId',
  /** column name */
  ResourceId = 'resourceId',
  /** column name */
  Type = 'type'
}

/** select "categories_aggregate_bool_exp_bool_and_arguments_columns" columns of table "categories" */
export enum Categories_Select_Column_Categories_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsAllQuestions = 'isAllQuestions'
}

/** select "categories_aggregate_bool_exp_bool_or_arguments_columns" columns of table "categories" */
export enum Categories_Select_Column_Categories_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsAllQuestions = 'isAllQuestions'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  isAllQuestions?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  nextItemId?: InputMaybe<Scalars['uuid']>;
  prevItemId?: InputMaybe<Scalars['uuid']>;
  resourceId?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  isAllQuestions?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  nextItemId?: InputMaybe<Scalars['uuid']>;
  prevItemId?: InputMaybe<Scalars['uuid']>;
  resourceId?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsAllQuestions = 'isAllQuestions',
  /** column name */
  Name = 'name',
  /** column name */
  NextItemId = 'nextItemId',
  /** column name */
  PrevItemId = 'prevItemId',
  /** column name */
  ResourceId = 'resourceId',
  /** column name */
  Type = 'type'
}

export type Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Categories_Bool_Exp;
};

/** columns and relationships of "category_questions" */
export type CategoryQuestions = {
  __typename?: 'categoryQuestions';
  /** An object relationship */
  category: Categories;
  categoryId: Scalars['uuid'];
  nextItemId?: Maybe<Scalars['uuid']>;
  prevItemId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  question: Questions;
  questionId: Scalars['uuid'];
};

/** aggregated selection of "category_questions" */
export type CategoryQuestions_Aggregate = {
  __typename?: 'categoryQuestions_aggregate';
  aggregate?: Maybe<CategoryQuestions_Aggregate_Fields>;
  nodes: Array<CategoryQuestions>;
};

export type CategoryQuestions_Aggregate_Bool_Exp = {
  count?: InputMaybe<CategoryQuestions_Aggregate_Bool_Exp_Count>;
};

export type CategoryQuestions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<CategoryQuestions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<CategoryQuestions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "category_questions" */
export type CategoryQuestions_Aggregate_Fields = {
  __typename?: 'categoryQuestions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CategoryQuestions_Max_Fields>;
  min?: Maybe<CategoryQuestions_Min_Fields>;
};


/** aggregate fields of "category_questions" */
export type CategoryQuestions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<CategoryQuestions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "category_questions" */
export type CategoryQuestions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<CategoryQuestions_Max_Order_By>;
  min?: InputMaybe<CategoryQuestions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "category_questions" */
export type CategoryQuestions_Arr_Rel_Insert_Input = {
  data: Array<CategoryQuestions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<CategoryQuestions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "category_questions". All fields are combined with a logical 'AND'. */
export type CategoryQuestions_Bool_Exp = {
  _and?: InputMaybe<Array<CategoryQuestions_Bool_Exp>>;
  _not?: InputMaybe<CategoryQuestions_Bool_Exp>;
  _or?: InputMaybe<Array<CategoryQuestions_Bool_Exp>>;
  category?: InputMaybe<Categories_Bool_Exp>;
  categoryId?: InputMaybe<Uuid_Comparison_Exp>;
  nextItemId?: InputMaybe<Uuid_Comparison_Exp>;
  prevItemId?: InputMaybe<Uuid_Comparison_Exp>;
  question?: InputMaybe<Questions_Bool_Exp>;
  questionId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "category_questions" */
export enum CategoryQuestions_Constraint {
  /** unique or primary key constraint on columns "question_id", "category_id" */
  CategoryQuestionsPkey = 'category_questions_pkey'
}

/** input type for inserting data into table "category_questions" */
export type CategoryQuestions_Insert_Input = {
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  categoryId?: InputMaybe<Scalars['uuid']>;
  nextItemId?: InputMaybe<Scalars['uuid']>;
  prevItemId?: InputMaybe<Scalars['uuid']>;
  question?: InputMaybe<Questions_Obj_Rel_Insert_Input>;
  questionId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type CategoryQuestions_Max_Fields = {
  __typename?: 'categoryQuestions_max_fields';
  categoryId?: Maybe<Scalars['uuid']>;
  nextItemId?: Maybe<Scalars['uuid']>;
  prevItemId?: Maybe<Scalars['uuid']>;
  questionId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "category_questions" */
export type CategoryQuestions_Max_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  nextItemId?: InputMaybe<Order_By>;
  prevItemId?: InputMaybe<Order_By>;
  questionId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type CategoryQuestions_Min_Fields = {
  __typename?: 'categoryQuestions_min_fields';
  categoryId?: Maybe<Scalars['uuid']>;
  nextItemId?: Maybe<Scalars['uuid']>;
  prevItemId?: Maybe<Scalars['uuid']>;
  questionId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "category_questions" */
export type CategoryQuestions_Min_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  nextItemId?: InputMaybe<Order_By>;
  prevItemId?: InputMaybe<Order_By>;
  questionId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "category_questions" */
export type CategoryQuestions_Mutation_Response = {
  __typename?: 'categoryQuestions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<CategoryQuestions>;
};

/** on_conflict condition type for table "category_questions" */
export type CategoryQuestions_On_Conflict = {
  constraint: CategoryQuestions_Constraint;
  update_columns?: Array<CategoryQuestions_Update_Column>;
  where?: InputMaybe<CategoryQuestions_Bool_Exp>;
};

/** Ordering options when selecting data from "category_questions". */
export type CategoryQuestions_Order_By = {
  category?: InputMaybe<Categories_Order_By>;
  categoryId?: InputMaybe<Order_By>;
  nextItemId?: InputMaybe<Order_By>;
  prevItemId?: InputMaybe<Order_By>;
  question?: InputMaybe<Questions_Order_By>;
  questionId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: category_questions */
export type CategoryQuestions_Pk_Columns_Input = {
  categoryId: Scalars['uuid'];
  questionId: Scalars['uuid'];
};

/** select columns of table "category_questions" */
export enum CategoryQuestions_Select_Column {
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  NextItemId = 'nextItemId',
  /** column name */
  PrevItemId = 'prevItemId',
  /** column name */
  QuestionId = 'questionId'
}

/** input type for updating data in table "category_questions" */
export type CategoryQuestions_Set_Input = {
  categoryId?: InputMaybe<Scalars['uuid']>;
  nextItemId?: InputMaybe<Scalars['uuid']>;
  prevItemId?: InputMaybe<Scalars['uuid']>;
  questionId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "categoryQuestions" */
export type CategoryQuestions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: CategoryQuestions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type CategoryQuestions_Stream_Cursor_Value_Input = {
  categoryId?: InputMaybe<Scalars['uuid']>;
  nextItemId?: InputMaybe<Scalars['uuid']>;
  prevItemId?: InputMaybe<Scalars['uuid']>;
  questionId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "category_questions" */
export enum CategoryQuestions_Update_Column {
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  NextItemId = 'nextItemId',
  /** column name */
  PrevItemId = 'prevItemId',
  /** column name */
  QuestionId = 'questionId'
}

export type CategoryQuestions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CategoryQuestions_Set_Input>;
  /** filter the rows which have to be updated */
  where: CategoryQuestions_Bool_Exp;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** columns and relationships of "collection_questions" */
export type CollectionQuestions = {
  __typename?: 'collectionQuestions';
  /** An object relationship */
  collection: Collections;
  collectionId: Scalars['uuid'];
  nextItemId?: Maybe<Scalars['uuid']>;
  prevItemId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  question: Questions;
  questionId: Scalars['uuid'];
};

/** aggregated selection of "collection_questions" */
export type CollectionQuestions_Aggregate = {
  __typename?: 'collectionQuestions_aggregate';
  aggregate?: Maybe<CollectionQuestions_Aggregate_Fields>;
  nodes: Array<CollectionQuestions>;
};

export type CollectionQuestions_Aggregate_Bool_Exp = {
  count?: InputMaybe<CollectionQuestions_Aggregate_Bool_Exp_Count>;
};

export type CollectionQuestions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<CollectionQuestions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<CollectionQuestions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "collection_questions" */
export type CollectionQuestions_Aggregate_Fields = {
  __typename?: 'collectionQuestions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CollectionQuestions_Max_Fields>;
  min?: Maybe<CollectionQuestions_Min_Fields>;
};


/** aggregate fields of "collection_questions" */
export type CollectionQuestions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<CollectionQuestions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "collection_questions" */
export type CollectionQuestions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<CollectionQuestions_Max_Order_By>;
  min?: InputMaybe<CollectionQuestions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "collection_questions" */
export type CollectionQuestions_Arr_Rel_Insert_Input = {
  data: Array<CollectionQuestions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<CollectionQuestions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "collection_questions". All fields are combined with a logical 'AND'. */
export type CollectionQuestions_Bool_Exp = {
  _and?: InputMaybe<Array<CollectionQuestions_Bool_Exp>>;
  _not?: InputMaybe<CollectionQuestions_Bool_Exp>;
  _or?: InputMaybe<Array<CollectionQuestions_Bool_Exp>>;
  collection?: InputMaybe<Collections_Bool_Exp>;
  collectionId?: InputMaybe<Uuid_Comparison_Exp>;
  nextItemId?: InputMaybe<Uuid_Comparison_Exp>;
  prevItemId?: InputMaybe<Uuid_Comparison_Exp>;
  question?: InputMaybe<Questions_Bool_Exp>;
  questionId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "collection_questions" */
export enum CollectionQuestions_Constraint {
  /** unique or primary key constraint on columns "question_id", "collection_id" */
  CollectionQuestionsPkey = 'collection_questions_pkey'
}

/** input type for inserting data into table "collection_questions" */
export type CollectionQuestions_Insert_Input = {
  collection?: InputMaybe<Collections_Obj_Rel_Insert_Input>;
  collectionId?: InputMaybe<Scalars['uuid']>;
  nextItemId?: InputMaybe<Scalars['uuid']>;
  prevItemId?: InputMaybe<Scalars['uuid']>;
  question?: InputMaybe<Questions_Obj_Rel_Insert_Input>;
  questionId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type CollectionQuestions_Max_Fields = {
  __typename?: 'collectionQuestions_max_fields';
  collectionId?: Maybe<Scalars['uuid']>;
  nextItemId?: Maybe<Scalars['uuid']>;
  prevItemId?: Maybe<Scalars['uuid']>;
  questionId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "collection_questions" */
export type CollectionQuestions_Max_Order_By = {
  collectionId?: InputMaybe<Order_By>;
  nextItemId?: InputMaybe<Order_By>;
  prevItemId?: InputMaybe<Order_By>;
  questionId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type CollectionQuestions_Min_Fields = {
  __typename?: 'collectionQuestions_min_fields';
  collectionId?: Maybe<Scalars['uuid']>;
  nextItemId?: Maybe<Scalars['uuid']>;
  prevItemId?: Maybe<Scalars['uuid']>;
  questionId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "collection_questions" */
export type CollectionQuestions_Min_Order_By = {
  collectionId?: InputMaybe<Order_By>;
  nextItemId?: InputMaybe<Order_By>;
  prevItemId?: InputMaybe<Order_By>;
  questionId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "collection_questions" */
export type CollectionQuestions_Mutation_Response = {
  __typename?: 'collectionQuestions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<CollectionQuestions>;
};

/** on_conflict condition type for table "collection_questions" */
export type CollectionQuestions_On_Conflict = {
  constraint: CollectionQuestions_Constraint;
  update_columns?: Array<CollectionQuestions_Update_Column>;
  where?: InputMaybe<CollectionQuestions_Bool_Exp>;
};

/** Ordering options when selecting data from "collection_questions". */
export type CollectionQuestions_Order_By = {
  collection?: InputMaybe<Collections_Order_By>;
  collectionId?: InputMaybe<Order_By>;
  nextItemId?: InputMaybe<Order_By>;
  prevItemId?: InputMaybe<Order_By>;
  question?: InputMaybe<Questions_Order_By>;
  questionId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: collection_questions */
export type CollectionQuestions_Pk_Columns_Input = {
  collectionId: Scalars['uuid'];
  questionId: Scalars['uuid'];
};

/** select columns of table "collection_questions" */
export enum CollectionQuestions_Select_Column {
  /** column name */
  CollectionId = 'collectionId',
  /** column name */
  NextItemId = 'nextItemId',
  /** column name */
  PrevItemId = 'prevItemId',
  /** column name */
  QuestionId = 'questionId'
}

/** input type for updating data in table "collection_questions" */
export type CollectionQuestions_Set_Input = {
  collectionId?: InputMaybe<Scalars['uuid']>;
  nextItemId?: InputMaybe<Scalars['uuid']>;
  prevItemId?: InputMaybe<Scalars['uuid']>;
  questionId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "collectionQuestions" */
export type CollectionQuestions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: CollectionQuestions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type CollectionQuestions_Stream_Cursor_Value_Input = {
  collectionId?: InputMaybe<Scalars['uuid']>;
  nextItemId?: InputMaybe<Scalars['uuid']>;
  prevItemId?: InputMaybe<Scalars['uuid']>;
  questionId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "collection_questions" */
export enum CollectionQuestions_Update_Column {
  /** column name */
  CollectionId = 'collectionId',
  /** column name */
  NextItemId = 'nextItemId',
  /** column name */
  PrevItemId = 'prevItemId',
  /** column name */
  QuestionId = 'questionId'
}

export type CollectionQuestions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CollectionQuestions_Set_Input>;
  /** filter the rows which have to be updated */
  where: CollectionQuestions_Bool_Exp;
};

/** columns and relationships of "collections" */
export type Collections = {
  __typename?: 'collections';
  /** An array relationship */
  gameInformation: Array<GameInformationFeud>;
  /** An aggregate relationship */
  gameInformation_aggregate: GameInformationFeud_Aggregate;
  id: Scalars['uuid'];
  name: Scalars['String'];
  nextItemId?: Maybe<Scalars['uuid']>;
  prevItemId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  questions: Array<CollectionQuestions>;
  /** An aggregate relationship */
  questions_aggregate: CollectionQuestions_Aggregate;
  type?: Maybe<Scalars['String']>;
};


/** columns and relationships of "collections" */
export type CollectionsGameInformationArgs = {
  distinct_on?: InputMaybe<Array<GameInformationFeud_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationFeud_Order_By>>;
  where?: InputMaybe<GameInformationFeud_Bool_Exp>;
};


/** columns and relationships of "collections" */
export type CollectionsGameInformation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameInformationFeud_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationFeud_Order_By>>;
  where?: InputMaybe<GameInformationFeud_Bool_Exp>;
};


/** columns and relationships of "collections" */
export type CollectionsQuestionsArgs = {
  distinct_on?: InputMaybe<Array<CollectionQuestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CollectionQuestions_Order_By>>;
  where?: InputMaybe<CollectionQuestions_Bool_Exp>;
};


/** columns and relationships of "collections" */
export type CollectionsQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CollectionQuestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CollectionQuestions_Order_By>>;
  where?: InputMaybe<CollectionQuestions_Bool_Exp>;
};

/** aggregated selection of "collections" */
export type Collections_Aggregate = {
  __typename?: 'collections_aggregate';
  aggregate?: Maybe<Collections_Aggregate_Fields>;
  nodes: Array<Collections>;
};

/** aggregate fields of "collections" */
export type Collections_Aggregate_Fields = {
  __typename?: 'collections_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Collections_Max_Fields>;
  min?: Maybe<Collections_Min_Fields>;
};


/** aggregate fields of "collections" */
export type Collections_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Collections_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "collections". All fields are combined with a logical 'AND'. */
export type Collections_Bool_Exp = {
  _and?: InputMaybe<Array<Collections_Bool_Exp>>;
  _not?: InputMaybe<Collections_Bool_Exp>;
  _or?: InputMaybe<Array<Collections_Bool_Exp>>;
  gameInformation?: InputMaybe<GameInformationFeud_Bool_Exp>;
  gameInformation_aggregate?: InputMaybe<GameInformationFeud_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nextItemId?: InputMaybe<Uuid_Comparison_Exp>;
  prevItemId?: InputMaybe<Uuid_Comparison_Exp>;
  questions?: InputMaybe<CollectionQuestions_Bool_Exp>;
  questions_aggregate?: InputMaybe<CollectionQuestions_Aggregate_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "collections" */
export enum Collections_Constraint {
  /** unique or primary key constraint on columns "id" */
  CollectionsPkey = 'collections_pkey'
}

/** input type for inserting data into table "collections" */
export type Collections_Insert_Input = {
  gameInformation?: InputMaybe<GameInformationFeud_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  nextItemId?: InputMaybe<Scalars['uuid']>;
  prevItemId?: InputMaybe<Scalars['uuid']>;
  questions?: InputMaybe<CollectionQuestions_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Collections_Max_Fields = {
  __typename?: 'collections_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  nextItemId?: Maybe<Scalars['uuid']>;
  prevItemId?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Collections_Min_Fields = {
  __typename?: 'collections_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  nextItemId?: Maybe<Scalars['uuid']>;
  prevItemId?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "collections" */
export type Collections_Mutation_Response = {
  __typename?: 'collections_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Collections>;
};

/** input type for inserting object relation for remote table "collections" */
export type Collections_Obj_Rel_Insert_Input = {
  data: Collections_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Collections_On_Conflict>;
};

/** on_conflict condition type for table "collections" */
export type Collections_On_Conflict = {
  constraint: Collections_Constraint;
  update_columns?: Array<Collections_Update_Column>;
  where?: InputMaybe<Collections_Bool_Exp>;
};

/** Ordering options when selecting data from "collections". */
export type Collections_Order_By = {
  gameInformation_aggregate?: InputMaybe<GameInformationFeud_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nextItemId?: InputMaybe<Order_By>;
  prevItemId?: InputMaybe<Order_By>;
  questions_aggregate?: InputMaybe<CollectionQuestions_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: collections */
export type Collections_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "collections" */
export enum Collections_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NextItemId = 'nextItemId',
  /** column name */
  PrevItemId = 'prevItemId',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "collections" */
export type Collections_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  nextItemId?: InputMaybe<Scalars['uuid']>;
  prevItemId?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "collections" */
export type Collections_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Collections_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Collections_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  nextItemId?: InputMaybe<Scalars['uuid']>;
  prevItemId?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "collections" */
export enum Collections_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NextItemId = 'nextItemId',
  /** column name */
  PrevItemId = 'prevItemId',
  /** column name */
  Type = 'type'
}

export type Collections_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Collections_Set_Input>;
  /** filter the rows which have to be updated */
  where: Collections_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "event_hosts" */
export type EventHosts = {
  __typename?: 'eventHosts';
  /** An object relationship */
  event: Events;
  eventId: Scalars['uuid'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  status: Scalars['String'];
  /** An object relationship */
  user: UserMetadata;
  userId: Scalars['uuid'];
};

/** aggregated selection of "event_hosts" */
export type EventHosts_Aggregate = {
  __typename?: 'eventHosts_aggregate';
  aggregate?: Maybe<EventHosts_Aggregate_Fields>;
  nodes: Array<EventHosts>;
};

export type EventHosts_Aggregate_Bool_Exp = {
  count?: InputMaybe<EventHosts_Aggregate_Bool_Exp_Count>;
};

export type EventHosts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<EventHosts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<EventHosts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "event_hosts" */
export type EventHosts_Aggregate_Fields = {
  __typename?: 'eventHosts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<EventHosts_Max_Fields>;
  min?: Maybe<EventHosts_Min_Fields>;
};


/** aggregate fields of "event_hosts" */
export type EventHosts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<EventHosts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "event_hosts" */
export type EventHosts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<EventHosts_Max_Order_By>;
  min?: InputMaybe<EventHosts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "event_hosts" */
export type EventHosts_Arr_Rel_Insert_Input = {
  data: Array<EventHosts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<EventHosts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "event_hosts". All fields are combined with a logical 'AND'. */
export type EventHosts_Bool_Exp = {
  _and?: InputMaybe<Array<EventHosts_Bool_Exp>>;
  _not?: InputMaybe<EventHosts_Bool_Exp>;
  _or?: InputMaybe<Array<EventHosts_Bool_Exp>>;
  event?: InputMaybe<Events_Bool_Exp>;
  eventId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<UserMetadata_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "event_hosts" */
export enum EventHosts_Constraint {
  /** unique or primary key constraint on columns "id" */
  EventHostsPkey = 'event_hosts_pkey'
}

/** input type for inserting data into table "event_hosts" */
export type EventHosts_Insert_Input = {
  event?: InputMaybe<Events_Obj_Rel_Insert_Input>;
  eventId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserMetadata_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type EventHosts_Max_Fields = {
  __typename?: 'eventHosts_max_fields';
  eventId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "event_hosts" */
export type EventHosts_Max_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type EventHosts_Min_Fields = {
  __typename?: 'eventHosts_min_fields';
  eventId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "event_hosts" */
export type EventHosts_Min_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "event_hosts" */
export type EventHosts_Mutation_Response = {
  __typename?: 'eventHosts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<EventHosts>;
};

/** on_conflict condition type for table "event_hosts" */
export type EventHosts_On_Conflict = {
  constraint: EventHosts_Constraint;
  update_columns?: Array<EventHosts_Update_Column>;
  where?: InputMaybe<EventHosts_Bool_Exp>;
};

/** Ordering options when selecting data from "event_hosts". */
export type EventHosts_Order_By = {
  event?: InputMaybe<Events_Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  user?: InputMaybe<UserMetadata_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: event_hosts */
export type EventHosts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "event_hosts" */
export enum EventHosts_Select_Column {
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "event_hosts" */
export type EventHosts_Set_Input = {
  eventId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "eventHosts" */
export type EventHosts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: EventHosts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type EventHosts_Stream_Cursor_Value_Input = {
  eventId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "event_hosts" */
export enum EventHosts_Update_Column {
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'userId'
}

export type EventHosts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EventHosts_Set_Input>;
  /** filter the rows which have to be updated */
  where: EventHosts_Bool_Exp;
};

/** columns and relationships of "olympics.event_leader_board" */
export type EventLeaderBoard = {
  __typename?: 'eventLeaderBoard';
  /** An object relationship */
  event: Events;
  event_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  stage: Olympics_Event_Stages;
  stage_id: Scalars['uuid'];
  /** An object relationship */
  team: Teams;
  team_id: Scalars['uuid'];
  value?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "olympics.event_leader_board" */
export type EventLeaderBoard_Aggregate = {
  __typename?: 'eventLeaderBoard_aggregate';
  aggregate?: Maybe<EventLeaderBoard_Aggregate_Fields>;
  nodes: Array<EventLeaderBoard>;
};

export type EventLeaderBoard_Aggregate_Bool_Exp = {
  count?: InputMaybe<EventLeaderBoard_Aggregate_Bool_Exp_Count>;
};

export type EventLeaderBoard_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<EventLeaderBoard_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<EventLeaderBoard_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "olympics.event_leader_board" */
export type EventLeaderBoard_Aggregate_Fields = {
  __typename?: 'eventLeaderBoard_aggregate_fields';
  avg?: Maybe<EventLeaderBoard_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<EventLeaderBoard_Max_Fields>;
  min?: Maybe<EventLeaderBoard_Min_Fields>;
  stddev?: Maybe<EventLeaderBoard_Stddev_Fields>;
  stddev_pop?: Maybe<EventLeaderBoard_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<EventLeaderBoard_Stddev_Samp_Fields>;
  sum?: Maybe<EventLeaderBoard_Sum_Fields>;
  var_pop?: Maybe<EventLeaderBoard_Var_Pop_Fields>;
  var_samp?: Maybe<EventLeaderBoard_Var_Samp_Fields>;
  variance?: Maybe<EventLeaderBoard_Variance_Fields>;
};


/** aggregate fields of "olympics.event_leader_board" */
export type EventLeaderBoard_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<EventLeaderBoard_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "olympics.event_leader_board" */
export type EventLeaderBoard_Aggregate_Order_By = {
  avg?: InputMaybe<EventLeaderBoard_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<EventLeaderBoard_Max_Order_By>;
  min?: InputMaybe<EventLeaderBoard_Min_Order_By>;
  stddev?: InputMaybe<EventLeaderBoard_Stddev_Order_By>;
  stddev_pop?: InputMaybe<EventLeaderBoard_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<EventLeaderBoard_Stddev_Samp_Order_By>;
  sum?: InputMaybe<EventLeaderBoard_Sum_Order_By>;
  var_pop?: InputMaybe<EventLeaderBoard_Var_Pop_Order_By>;
  var_samp?: InputMaybe<EventLeaderBoard_Var_Samp_Order_By>;
  variance?: InputMaybe<EventLeaderBoard_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "olympics.event_leader_board" */
export type EventLeaderBoard_Arr_Rel_Insert_Input = {
  data: Array<EventLeaderBoard_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<EventLeaderBoard_On_Conflict>;
};

/** aggregate avg on columns */
export type EventLeaderBoard_Avg_Fields = {
  __typename?: 'eventLeaderBoard_avg_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "olympics.event_leader_board" */
export type EventLeaderBoard_Avg_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "olympics.event_leader_board". All fields are combined with a logical 'AND'. */
export type EventLeaderBoard_Bool_Exp = {
  _and?: InputMaybe<Array<EventLeaderBoard_Bool_Exp>>;
  _not?: InputMaybe<EventLeaderBoard_Bool_Exp>;
  _or?: InputMaybe<Array<EventLeaderBoard_Bool_Exp>>;
  event?: InputMaybe<Events_Bool_Exp>;
  event_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  stage?: InputMaybe<Olympics_Event_Stages_Bool_Exp>;
  stage_id?: InputMaybe<Uuid_Comparison_Exp>;
  team?: InputMaybe<Teams_Bool_Exp>;
  team_id?: InputMaybe<Uuid_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "olympics.event_leader_board" */
export enum EventLeaderBoard_Constraint {
  /** unique or primary key constraint on columns "id", "stage_id", "team_id" */
  EventLeaderBoardPkey = 'event_leader_board_pkey'
}

/** input type for incrementing numeric columns in table "olympics.event_leader_board" */
export type EventLeaderBoard_Inc_Input = {
  value?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "olympics.event_leader_board" */
export type EventLeaderBoard_Insert_Input = {
  event?: InputMaybe<Events_Obj_Rel_Insert_Input>;
  event_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  stage?: InputMaybe<Olympics_Event_Stages_Obj_Rel_Insert_Input>;
  stage_id?: InputMaybe<Scalars['uuid']>;
  team?: InputMaybe<Teams_Obj_Rel_Insert_Input>;
  team_id?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type EventLeaderBoard_Max_Fields = {
  __typename?: 'eventLeaderBoard_max_fields';
  event_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  stage_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "olympics.event_leader_board" */
export type EventLeaderBoard_Max_Order_By = {
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  stage_id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type EventLeaderBoard_Min_Fields = {
  __typename?: 'eventLeaderBoard_min_fields';
  event_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  stage_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "olympics.event_leader_board" */
export type EventLeaderBoard_Min_Order_By = {
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  stage_id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "olympics.event_leader_board" */
export type EventLeaderBoard_Mutation_Response = {
  __typename?: 'eventLeaderBoard_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<EventLeaderBoard>;
};

/** on_conflict condition type for table "olympics.event_leader_board" */
export type EventLeaderBoard_On_Conflict = {
  constraint: EventLeaderBoard_Constraint;
  update_columns?: Array<EventLeaderBoard_Update_Column>;
  where?: InputMaybe<EventLeaderBoard_Bool_Exp>;
};

/** Ordering options when selecting data from "olympics.event_leader_board". */
export type EventLeaderBoard_Order_By = {
  event?: InputMaybe<Events_Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  stage?: InputMaybe<Olympics_Event_Stages_Order_By>;
  stage_id?: InputMaybe<Order_By>;
  team?: InputMaybe<Teams_Order_By>;
  team_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: olympics.event_leader_board */
export type EventLeaderBoard_Pk_Columns_Input = {
  id: Scalars['uuid'];
  stage_id: Scalars['uuid'];
  team_id: Scalars['uuid'];
};

/** select columns of table "olympics.event_leader_board" */
export enum EventLeaderBoard_Select_Column {
  /** column name */
  EventId = 'event_id',
  /** column name */
  Id = 'id',
  /** column name */
  StageId = 'stage_id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "olympics.event_leader_board" */
export type EventLeaderBoard_Set_Input = {
  event_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  stage_id?: InputMaybe<Scalars['uuid']>;
  team_id?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type EventLeaderBoard_Stddev_Fields = {
  __typename?: 'eventLeaderBoard_stddev_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "olympics.event_leader_board" */
export type EventLeaderBoard_Stddev_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type EventLeaderBoard_Stddev_Pop_Fields = {
  __typename?: 'eventLeaderBoard_stddev_pop_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "olympics.event_leader_board" */
export type EventLeaderBoard_Stddev_Pop_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type EventLeaderBoard_Stddev_Samp_Fields = {
  __typename?: 'eventLeaderBoard_stddev_samp_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "olympics.event_leader_board" */
export type EventLeaderBoard_Stddev_Samp_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "eventLeaderBoard" */
export type EventLeaderBoard_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: EventLeaderBoard_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type EventLeaderBoard_Stream_Cursor_Value_Input = {
  event_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  stage_id?: InputMaybe<Scalars['uuid']>;
  team_id?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate sum on columns */
export type EventLeaderBoard_Sum_Fields = {
  __typename?: 'eventLeaderBoard_sum_fields';
  value?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "olympics.event_leader_board" */
export type EventLeaderBoard_Sum_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** update columns of table "olympics.event_leader_board" */
export enum EventLeaderBoard_Update_Column {
  /** column name */
  EventId = 'event_id',
  /** column name */
  Id = 'id',
  /** column name */
  StageId = 'stage_id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  Value = 'value'
}

export type EventLeaderBoard_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<EventLeaderBoard_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EventLeaderBoard_Set_Input>;
  /** filter the rows which have to be updated */
  where: EventLeaderBoard_Bool_Exp;
};

/** aggregate var_pop on columns */
export type EventLeaderBoard_Var_Pop_Fields = {
  __typename?: 'eventLeaderBoard_var_pop_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "olympics.event_leader_board" */
export type EventLeaderBoard_Var_Pop_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type EventLeaderBoard_Var_Samp_Fields = {
  __typename?: 'eventLeaderBoard_var_samp_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "olympics.event_leader_board" */
export type EventLeaderBoard_Var_Samp_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type EventLeaderBoard_Variance_Fields = {
  __typename?: 'eventLeaderBoard_variance_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "olympics.event_leader_board" */
export type EventLeaderBoard_Variance_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** columns and relationships of "event_codes" */
export type Event_Codes = {
  __typename?: 'event_codes';
  code: Scalars['String'];
  event_id: Scalars['uuid'];
  id: Scalars['uuid'];
  role: Scalars['String'];
};

/** aggregated selection of "event_codes" */
export type Event_Codes_Aggregate = {
  __typename?: 'event_codes_aggregate';
  aggregate?: Maybe<Event_Codes_Aggregate_Fields>;
  nodes: Array<Event_Codes>;
};

export type Event_Codes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Event_Codes_Aggregate_Bool_Exp_Count>;
};

export type Event_Codes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Event_Codes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Event_Codes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "event_codes" */
export type Event_Codes_Aggregate_Fields = {
  __typename?: 'event_codes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Event_Codes_Max_Fields>;
  min?: Maybe<Event_Codes_Min_Fields>;
};


/** aggregate fields of "event_codes" */
export type Event_Codes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Event_Codes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "event_codes" */
export type Event_Codes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Event_Codes_Max_Order_By>;
  min?: InputMaybe<Event_Codes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "event_codes" */
export type Event_Codes_Arr_Rel_Insert_Input = {
  data: Array<Event_Codes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Event_Codes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "event_codes". All fields are combined with a logical 'AND'. */
export type Event_Codes_Bool_Exp = {
  _and?: InputMaybe<Array<Event_Codes_Bool_Exp>>;
  _not?: InputMaybe<Event_Codes_Bool_Exp>;
  _or?: InputMaybe<Array<Event_Codes_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  event_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "event_codes" */
export enum Event_Codes_Constraint {
  /** unique or primary key constraint on columns "code" */
  EventCodesCodeKey = 'event_codes_code_key',
  /** unique or primary key constraint on columns "id" */
  EventCodesPkey = 'event_codes_pkey'
}

/** input type for inserting data into table "event_codes" */
export type Event_Codes_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
  event_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Event_Codes_Max_Fields = {
  __typename?: 'event_codes_max_fields';
  code?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "event_codes" */
export type Event_Codes_Max_Order_By = {
  code?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Event_Codes_Min_Fields = {
  __typename?: 'event_codes_min_fields';
  code?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "event_codes" */
export type Event_Codes_Min_Order_By = {
  code?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "event_codes" */
export type Event_Codes_Mutation_Response = {
  __typename?: 'event_codes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Event_Codes>;
};

/** on_conflict condition type for table "event_codes" */
export type Event_Codes_On_Conflict = {
  constraint: Event_Codes_Constraint;
  update_columns?: Array<Event_Codes_Update_Column>;
  where?: InputMaybe<Event_Codes_Bool_Exp>;
};

/** Ordering options when selecting data from "event_codes". */
export type Event_Codes_Order_By = {
  code?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: event_codes */
export type Event_Codes_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "event_codes" */
export enum Event_Codes_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  EventId = 'event_id',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "event_codes" */
export type Event_Codes_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  event_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "event_codes" */
export type Event_Codes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Event_Codes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Event_Codes_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
  event_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "event_codes" */
export enum Event_Codes_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  EventId = 'event_id',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

export type Event_Codes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Event_Codes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Event_Codes_Bool_Exp;
};

/** columns and relationships of "events" */
export type Events = {
  __typename?: 'events';
  actualParticipants: Scalars['Int'];
  clientName?: Maybe<Scalars['String']>;
  /** An array relationship */
  codes: Array<Event_Codes>;
  /** An aggregate relationship */
  codes_aggregate: Event_Codes_Aggregate;
  company: Scalars['String'];
  contactPerson: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  createdBy?: Maybe<UserMetadata>;
  createdById?: Maybe<Scalars['uuid']>;
  date: Scalars['timestamptz'];
  expectedParticipants: Scalars['Int'];
  /** An object relationship */
  gameInformationFeud?: Maybe<GameInformationFeud>;
  gameInformationFeudId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  gameInformationOlympics?: Maybe<GameInformationOlympics>;
  gameInformationOlympicsId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  gameInformationSketchWars?: Maybe<GameInformationSketchWars>;
  gameInformationSketchWarsId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  gameInformationStq?: Maybe<GameInformationStq>;
  gameInformationStqId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  gameInformationTemplate?: Maybe<GameInformationTemplate>;
  gameInformationTemplateId?: Maybe<Scalars['uuid']>;
  gameType: Scalars['String'];
  game_old_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  hosts: Array<EventHosts>;
  /** An aggregate relationship */
  hosts_aggregate: EventHosts_Aggregate;
  id: Scalars['uuid'];
  isTestGame: Scalars['Boolean'];
  notionId?: Maybe<Scalars['String']>;
  /** An object relationship */
  source?: Maybe<Sources>;
  sourceId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  stages: Array<Olympics_Event_Stages>;
  /** An aggregate relationship */
  stages_aggregate: Olympics_Event_Stages_Aggregate;
  status?: Maybe<Scalars['String']>;
  /** An array relationship */
  teams: Array<Teams>;
  /** An aggregate relationship */
  teams_aggregate: Teams_Aggregate;
  time: Scalars['String'];
  timezone: Scalars['String'];
  totalTeams: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "events" */
export type EventsCodesArgs = {
  distinct_on?: InputMaybe<Array<Event_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Codes_Order_By>>;
  where?: InputMaybe<Event_Codes_Bool_Exp>;
};


/** columns and relationships of "events" */
export type EventsCodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Codes_Order_By>>;
  where?: InputMaybe<Event_Codes_Bool_Exp>;
};


/** columns and relationships of "events" */
export type EventsHostsArgs = {
  distinct_on?: InputMaybe<Array<EventHosts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventHosts_Order_By>>;
  where?: InputMaybe<EventHosts_Bool_Exp>;
};


/** columns and relationships of "events" */
export type EventsHosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<EventHosts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventHosts_Order_By>>;
  where?: InputMaybe<EventHosts_Bool_Exp>;
};


/** columns and relationships of "events" */
export type EventsStagesArgs = {
  distinct_on?: InputMaybe<Array<Olympics_Event_Stages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Olympics_Event_Stages_Order_By>>;
  where?: InputMaybe<Olympics_Event_Stages_Bool_Exp>;
};


/** columns and relationships of "events" */
export type EventsStages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Olympics_Event_Stages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Olympics_Event_Stages_Order_By>>;
  where?: InputMaybe<Olympics_Event_Stages_Bool_Exp>;
};


/** columns and relationships of "events" */
export type EventsTeamsArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


/** columns and relationships of "events" */
export type EventsTeams_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};

/** aggregated selection of "events" */
export type Events_Aggregate = {
  __typename?: 'events_aggregate';
  aggregate?: Maybe<Events_Aggregate_Fields>;
  nodes: Array<Events>;
};

/** aggregate fields of "events" */
export type Events_Aggregate_Fields = {
  __typename?: 'events_aggregate_fields';
  avg?: Maybe<Events_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Events_Max_Fields>;
  min?: Maybe<Events_Min_Fields>;
  stddev?: Maybe<Events_Stddev_Fields>;
  stddev_pop?: Maybe<Events_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Events_Stddev_Samp_Fields>;
  sum?: Maybe<Events_Sum_Fields>;
  var_pop?: Maybe<Events_Var_Pop_Fields>;
  var_samp?: Maybe<Events_Var_Samp_Fields>;
  variance?: Maybe<Events_Variance_Fields>;
};


/** aggregate fields of "events" */
export type Events_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Events_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Events_Avg_Fields = {
  __typename?: 'events_avg_fields';
  actualParticipants?: Maybe<Scalars['Float']>;
  expectedParticipants?: Maybe<Scalars['Float']>;
  totalTeams?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "events". All fields are combined with a logical 'AND'. */
export type Events_Bool_Exp = {
  _and?: InputMaybe<Array<Events_Bool_Exp>>;
  _not?: InputMaybe<Events_Bool_Exp>;
  _or?: InputMaybe<Array<Events_Bool_Exp>>;
  actualParticipants?: InputMaybe<Int_Comparison_Exp>;
  clientName?: InputMaybe<String_Comparison_Exp>;
  codes?: InputMaybe<Event_Codes_Bool_Exp>;
  codes_aggregate?: InputMaybe<Event_Codes_Aggregate_Bool_Exp>;
  company?: InputMaybe<String_Comparison_Exp>;
  contactPerson?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  createdBy?: InputMaybe<UserMetadata_Bool_Exp>;
  createdById?: InputMaybe<Uuid_Comparison_Exp>;
  date?: InputMaybe<Timestamptz_Comparison_Exp>;
  expectedParticipants?: InputMaybe<Int_Comparison_Exp>;
  gameInformationFeud?: InputMaybe<GameInformationFeud_Bool_Exp>;
  gameInformationFeudId?: InputMaybe<Uuid_Comparison_Exp>;
  gameInformationOlympics?: InputMaybe<GameInformationOlympics_Bool_Exp>;
  gameInformationOlympicsId?: InputMaybe<Uuid_Comparison_Exp>;
  gameInformationSketchWars?: InputMaybe<GameInformationSketchWars_Bool_Exp>;
  gameInformationSketchWarsId?: InputMaybe<Uuid_Comparison_Exp>;
  gameInformationStq?: InputMaybe<GameInformationStq_Bool_Exp>;
  gameInformationStqId?: InputMaybe<Uuid_Comparison_Exp>;
  gameInformationTemplate?: InputMaybe<GameInformationTemplate_Bool_Exp>;
  gameInformationTemplateId?: InputMaybe<Uuid_Comparison_Exp>;
  gameType?: InputMaybe<String_Comparison_Exp>;
  game_old_id?: InputMaybe<Uuid_Comparison_Exp>;
  hosts?: InputMaybe<EventHosts_Bool_Exp>;
  hosts_aggregate?: InputMaybe<EventHosts_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isTestGame?: InputMaybe<Boolean_Comparison_Exp>;
  notionId?: InputMaybe<String_Comparison_Exp>;
  source?: InputMaybe<Sources_Bool_Exp>;
  sourceId?: InputMaybe<Uuid_Comparison_Exp>;
  stages?: InputMaybe<Olympics_Event_Stages_Bool_Exp>;
  stages_aggregate?: InputMaybe<Olympics_Event_Stages_Aggregate_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  teams?: InputMaybe<Teams_Bool_Exp>;
  teams_aggregate?: InputMaybe<Teams_Aggregate_Bool_Exp>;
  time?: InputMaybe<String_Comparison_Exp>;
  timezone?: InputMaybe<String_Comparison_Exp>;
  totalTeams?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "events" */
export enum Events_Constraint {
  /** unique or primary key constraint on columns "id" */
  EventsPkey = 'events_pkey'
}

/** input type for incrementing numeric columns in table "events" */
export type Events_Inc_Input = {
  actualParticipants?: InputMaybe<Scalars['Int']>;
  expectedParticipants?: InputMaybe<Scalars['Int']>;
  totalTeams?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "events" */
export type Events_Insert_Input = {
  actualParticipants?: InputMaybe<Scalars['Int']>;
  clientName?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Event_Codes_Arr_Rel_Insert_Input>;
  company?: InputMaybe<Scalars['String']>;
  contactPerson?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  createdBy?: InputMaybe<UserMetadata_Obj_Rel_Insert_Input>;
  createdById?: InputMaybe<Scalars['uuid']>;
  date?: InputMaybe<Scalars['timestamptz']>;
  expectedParticipants?: InputMaybe<Scalars['Int']>;
  gameInformationFeud?: InputMaybe<GameInformationFeud_Obj_Rel_Insert_Input>;
  gameInformationFeudId?: InputMaybe<Scalars['uuid']>;
  gameInformationOlympics?: InputMaybe<GameInformationOlympics_Obj_Rel_Insert_Input>;
  gameInformationOlympicsId?: InputMaybe<Scalars['uuid']>;
  gameInformationSketchWars?: InputMaybe<GameInformationSketchWars_Obj_Rel_Insert_Input>;
  gameInformationSketchWarsId?: InputMaybe<Scalars['uuid']>;
  gameInformationStq?: InputMaybe<GameInformationStq_Obj_Rel_Insert_Input>;
  gameInformationStqId?: InputMaybe<Scalars['uuid']>;
  gameInformationTemplate?: InputMaybe<GameInformationTemplate_Obj_Rel_Insert_Input>;
  gameInformationTemplateId?: InputMaybe<Scalars['uuid']>;
  gameType?: InputMaybe<Scalars['String']>;
  game_old_id?: InputMaybe<Scalars['uuid']>;
  hosts?: InputMaybe<EventHosts_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  isTestGame?: InputMaybe<Scalars['Boolean']>;
  notionId?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Sources_Obj_Rel_Insert_Input>;
  sourceId?: InputMaybe<Scalars['uuid']>;
  stages?: InputMaybe<Olympics_Event_Stages_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']>;
  teams?: InputMaybe<Teams_Arr_Rel_Insert_Input>;
  time?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  totalTeams?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Events_Max_Fields = {
  __typename?: 'events_max_fields';
  actualParticipants?: Maybe<Scalars['Int']>;
  clientName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  contactPerson?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdById?: Maybe<Scalars['uuid']>;
  date?: Maybe<Scalars['timestamptz']>;
  expectedParticipants?: Maybe<Scalars['Int']>;
  gameInformationFeudId?: Maybe<Scalars['uuid']>;
  gameInformationOlympicsId?: Maybe<Scalars['uuid']>;
  gameInformationSketchWarsId?: Maybe<Scalars['uuid']>;
  gameInformationStqId?: Maybe<Scalars['uuid']>;
  gameInformationTemplateId?: Maybe<Scalars['uuid']>;
  gameType?: Maybe<Scalars['String']>;
  game_old_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  notionId?: Maybe<Scalars['String']>;
  sourceId?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  totalTeams?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Events_Min_Fields = {
  __typename?: 'events_min_fields';
  actualParticipants?: Maybe<Scalars['Int']>;
  clientName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  contactPerson?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdById?: Maybe<Scalars['uuid']>;
  date?: Maybe<Scalars['timestamptz']>;
  expectedParticipants?: Maybe<Scalars['Int']>;
  gameInformationFeudId?: Maybe<Scalars['uuid']>;
  gameInformationOlympicsId?: Maybe<Scalars['uuid']>;
  gameInformationSketchWarsId?: Maybe<Scalars['uuid']>;
  gameInformationStqId?: Maybe<Scalars['uuid']>;
  gameInformationTemplateId?: Maybe<Scalars['uuid']>;
  gameType?: Maybe<Scalars['String']>;
  game_old_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  notionId?: Maybe<Scalars['String']>;
  sourceId?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  totalTeams?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "events" */
export type Events_Mutation_Response = {
  __typename?: 'events_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Events>;
};

/** input type for inserting object relation for remote table "events" */
export type Events_Obj_Rel_Insert_Input = {
  data: Events_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Events_On_Conflict>;
};

/** on_conflict condition type for table "events" */
export type Events_On_Conflict = {
  constraint: Events_Constraint;
  update_columns?: Array<Events_Update_Column>;
  where?: InputMaybe<Events_Bool_Exp>;
};

/** Ordering options when selecting data from "events". */
export type Events_Order_By = {
  actualParticipants?: InputMaybe<Order_By>;
  clientName?: InputMaybe<Order_By>;
  codes_aggregate?: InputMaybe<Event_Codes_Aggregate_Order_By>;
  company?: InputMaybe<Order_By>;
  contactPerson?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<UserMetadata_Order_By>;
  createdById?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  expectedParticipants?: InputMaybe<Order_By>;
  gameInformationFeud?: InputMaybe<GameInformationFeud_Order_By>;
  gameInformationFeudId?: InputMaybe<Order_By>;
  gameInformationOlympics?: InputMaybe<GameInformationOlympics_Order_By>;
  gameInformationOlympicsId?: InputMaybe<Order_By>;
  gameInformationSketchWars?: InputMaybe<GameInformationSketchWars_Order_By>;
  gameInformationSketchWarsId?: InputMaybe<Order_By>;
  gameInformationStq?: InputMaybe<GameInformationStq_Order_By>;
  gameInformationStqId?: InputMaybe<Order_By>;
  gameInformationTemplate?: InputMaybe<GameInformationTemplate_Order_By>;
  gameInformationTemplateId?: InputMaybe<Order_By>;
  gameType?: InputMaybe<Order_By>;
  game_old_id?: InputMaybe<Order_By>;
  hosts_aggregate?: InputMaybe<EventHosts_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  isTestGame?: InputMaybe<Order_By>;
  notionId?: InputMaybe<Order_By>;
  source?: InputMaybe<Sources_Order_By>;
  sourceId?: InputMaybe<Order_By>;
  stages_aggregate?: InputMaybe<Olympics_Event_Stages_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
  teams_aggregate?: InputMaybe<Teams_Aggregate_Order_By>;
  time?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  totalTeams?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: events */
export type Events_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "events" */
export enum Events_Select_Column {
  /** column name */
  ActualParticipants = 'actualParticipants',
  /** column name */
  ClientName = 'clientName',
  /** column name */
  Company = 'company',
  /** column name */
  ContactPerson = 'contactPerson',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedById = 'createdById',
  /** column name */
  Date = 'date',
  /** column name */
  ExpectedParticipants = 'expectedParticipants',
  /** column name */
  GameInformationFeudId = 'gameInformationFeudId',
  /** column name */
  GameInformationOlympicsId = 'gameInformationOlympicsId',
  /** column name */
  GameInformationSketchWarsId = 'gameInformationSketchWarsId',
  /** column name */
  GameInformationStqId = 'gameInformationStqId',
  /** column name */
  GameInformationTemplateId = 'gameInformationTemplateId',
  /** column name */
  GameType = 'gameType',
  /** column name */
  GameOldId = 'game_old_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsTestGame = 'isTestGame',
  /** column name */
  NotionId = 'notionId',
  /** column name */
  SourceId = 'sourceId',
  /** column name */
  Status = 'status',
  /** column name */
  Time = 'time',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  TotalTeams = 'totalTeams',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "events" */
export type Events_Set_Input = {
  actualParticipants?: InputMaybe<Scalars['Int']>;
  clientName?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  contactPerson?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  createdById?: InputMaybe<Scalars['uuid']>;
  date?: InputMaybe<Scalars['timestamptz']>;
  expectedParticipants?: InputMaybe<Scalars['Int']>;
  gameInformationFeudId?: InputMaybe<Scalars['uuid']>;
  gameInformationOlympicsId?: InputMaybe<Scalars['uuid']>;
  gameInformationSketchWarsId?: InputMaybe<Scalars['uuid']>;
  gameInformationStqId?: InputMaybe<Scalars['uuid']>;
  gameInformationTemplateId?: InputMaybe<Scalars['uuid']>;
  gameType?: InputMaybe<Scalars['String']>;
  game_old_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  isTestGame?: InputMaybe<Scalars['Boolean']>;
  notionId?: InputMaybe<Scalars['String']>;
  sourceId?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  totalTeams?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Events_Stddev_Fields = {
  __typename?: 'events_stddev_fields';
  actualParticipants?: Maybe<Scalars['Float']>;
  expectedParticipants?: Maybe<Scalars['Float']>;
  totalTeams?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Events_Stddev_Pop_Fields = {
  __typename?: 'events_stddev_pop_fields';
  actualParticipants?: Maybe<Scalars['Float']>;
  expectedParticipants?: Maybe<Scalars['Float']>;
  totalTeams?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Events_Stddev_Samp_Fields = {
  __typename?: 'events_stddev_samp_fields';
  actualParticipants?: Maybe<Scalars['Float']>;
  expectedParticipants?: Maybe<Scalars['Float']>;
  totalTeams?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "events" */
export type Events_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Events_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Events_Stream_Cursor_Value_Input = {
  actualParticipants?: InputMaybe<Scalars['Int']>;
  clientName?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  contactPerson?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  createdById?: InputMaybe<Scalars['uuid']>;
  date?: InputMaybe<Scalars['timestamptz']>;
  expectedParticipants?: InputMaybe<Scalars['Int']>;
  gameInformationFeudId?: InputMaybe<Scalars['uuid']>;
  gameInformationOlympicsId?: InputMaybe<Scalars['uuid']>;
  gameInformationSketchWarsId?: InputMaybe<Scalars['uuid']>;
  gameInformationStqId?: InputMaybe<Scalars['uuid']>;
  gameInformationTemplateId?: InputMaybe<Scalars['uuid']>;
  gameType?: InputMaybe<Scalars['String']>;
  game_old_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  isTestGame?: InputMaybe<Scalars['Boolean']>;
  notionId?: InputMaybe<Scalars['String']>;
  sourceId?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  totalTeams?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Events_Sum_Fields = {
  __typename?: 'events_sum_fields';
  actualParticipants?: Maybe<Scalars['Int']>;
  expectedParticipants?: Maybe<Scalars['Int']>;
  totalTeams?: Maybe<Scalars['Int']>;
};

/** update columns of table "events" */
export enum Events_Update_Column {
  /** column name */
  ActualParticipants = 'actualParticipants',
  /** column name */
  ClientName = 'clientName',
  /** column name */
  Company = 'company',
  /** column name */
  ContactPerson = 'contactPerson',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedById = 'createdById',
  /** column name */
  Date = 'date',
  /** column name */
  ExpectedParticipants = 'expectedParticipants',
  /** column name */
  GameInformationFeudId = 'gameInformationFeudId',
  /** column name */
  GameInformationOlympicsId = 'gameInformationOlympicsId',
  /** column name */
  GameInformationSketchWarsId = 'gameInformationSketchWarsId',
  /** column name */
  GameInformationStqId = 'gameInformationStqId',
  /** column name */
  GameInformationTemplateId = 'gameInformationTemplateId',
  /** column name */
  GameType = 'gameType',
  /** column name */
  GameOldId = 'game_old_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsTestGame = 'isTestGame',
  /** column name */
  NotionId = 'notionId',
  /** column name */
  SourceId = 'sourceId',
  /** column name */
  Status = 'status',
  /** column name */
  Time = 'time',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  TotalTeams = 'totalTeams',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Events_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Events_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Events_Set_Input>;
  /** filter the rows which have to be updated */
  where: Events_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Events_Var_Pop_Fields = {
  __typename?: 'events_var_pop_fields';
  actualParticipants?: Maybe<Scalars['Float']>;
  expectedParticipants?: Maybe<Scalars['Float']>;
  totalTeams?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Events_Var_Samp_Fields = {
  __typename?: 'events_var_samp_fields';
  actualParticipants?: Maybe<Scalars['Float']>;
  expectedParticipants?: Maybe<Scalars['Float']>;
  totalTeams?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Events_Variance_Fields = {
  __typename?: 'events_variance_fields';
  actualParticipants?: Maybe<Scalars['Float']>;
  expectedParticipants?: Maybe<Scalars['Float']>;
  totalTeams?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "feud_old.games_old" */
export type Feud_Old_Games_Old = {
  __typename?: 'feud_old_games_old';
  code?: Maybe<Scalars['String']>;
  expire_time?: Maybe<Scalars['timestamp']>;
  game_type: Scalars['String'];
  id: Scalars['uuid'];
  is_breakout?: Maybe<Scalars['Int']>;
  is_breakout_popup?: Maybe<Scalars['Int']>;
  not_started?: Maybe<Scalars['Int']>;
  questions_per_matchup: Scalars['Int'];
  questions_total: Scalars['Int'];
  status_end?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "feud_old.games_old" */
export type Feud_Old_Games_Old_Aggregate = {
  __typename?: 'feud_old_games_old_aggregate';
  aggregate?: Maybe<Feud_Old_Games_Old_Aggregate_Fields>;
  nodes: Array<Feud_Old_Games_Old>;
};

/** aggregate fields of "feud_old.games_old" */
export type Feud_Old_Games_Old_Aggregate_Fields = {
  __typename?: 'feud_old_games_old_aggregate_fields';
  avg?: Maybe<Feud_Old_Games_Old_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Feud_Old_Games_Old_Max_Fields>;
  min?: Maybe<Feud_Old_Games_Old_Min_Fields>;
  stddev?: Maybe<Feud_Old_Games_Old_Stddev_Fields>;
  stddev_pop?: Maybe<Feud_Old_Games_Old_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Feud_Old_Games_Old_Stddev_Samp_Fields>;
  sum?: Maybe<Feud_Old_Games_Old_Sum_Fields>;
  var_pop?: Maybe<Feud_Old_Games_Old_Var_Pop_Fields>;
  var_samp?: Maybe<Feud_Old_Games_Old_Var_Samp_Fields>;
  variance?: Maybe<Feud_Old_Games_Old_Variance_Fields>;
};


/** aggregate fields of "feud_old.games_old" */
export type Feud_Old_Games_Old_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Feud_Old_Games_Old_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Feud_Old_Games_Old_Avg_Fields = {
  __typename?: 'feud_old_games_old_avg_fields';
  is_breakout?: Maybe<Scalars['Float']>;
  is_breakout_popup?: Maybe<Scalars['Float']>;
  not_started?: Maybe<Scalars['Float']>;
  questions_per_matchup?: Maybe<Scalars['Float']>;
  questions_total?: Maybe<Scalars['Float']>;
  status_end?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "feud_old.games_old". All fields are combined with a logical 'AND'. */
export type Feud_Old_Games_Old_Bool_Exp = {
  _and?: InputMaybe<Array<Feud_Old_Games_Old_Bool_Exp>>;
  _not?: InputMaybe<Feud_Old_Games_Old_Bool_Exp>;
  _or?: InputMaybe<Array<Feud_Old_Games_Old_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  expire_time?: InputMaybe<Timestamp_Comparison_Exp>;
  game_type?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_breakout?: InputMaybe<Int_Comparison_Exp>;
  is_breakout_popup?: InputMaybe<Int_Comparison_Exp>;
  not_started?: InputMaybe<Int_Comparison_Exp>;
  questions_per_matchup?: InputMaybe<Int_Comparison_Exp>;
  questions_total?: InputMaybe<Int_Comparison_Exp>;
  status_end?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "feud_old.games_old" */
export enum Feud_Old_Games_Old_Constraint {
  /** unique or primary key constraint on columns "id" */
  PkE3169c74d9cb33ad9a8971c7fc2 = 'PK_e3169c74d9cb33ad9a8971c7fc2'
}

/** input type for incrementing numeric columns in table "feud_old.games_old" */
export type Feud_Old_Games_Old_Inc_Input = {
  is_breakout?: InputMaybe<Scalars['Int']>;
  is_breakout_popup?: InputMaybe<Scalars['Int']>;
  not_started?: InputMaybe<Scalars['Int']>;
  questions_per_matchup?: InputMaybe<Scalars['Int']>;
  questions_total?: InputMaybe<Scalars['Int']>;
  status_end?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "feud_old.games_old" */
export type Feud_Old_Games_Old_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
  expire_time?: InputMaybe<Scalars['timestamp']>;
  game_type?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_breakout?: InputMaybe<Scalars['Int']>;
  is_breakout_popup?: InputMaybe<Scalars['Int']>;
  not_started?: InputMaybe<Scalars['Int']>;
  questions_per_matchup?: InputMaybe<Scalars['Int']>;
  questions_total?: InputMaybe<Scalars['Int']>;
  status_end?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Feud_Old_Games_Old_Max_Fields = {
  __typename?: 'feud_old_games_old_max_fields';
  code?: Maybe<Scalars['String']>;
  expire_time?: Maybe<Scalars['timestamp']>;
  game_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_breakout?: Maybe<Scalars['Int']>;
  is_breakout_popup?: Maybe<Scalars['Int']>;
  not_started?: Maybe<Scalars['Int']>;
  questions_per_matchup?: Maybe<Scalars['Int']>;
  questions_total?: Maybe<Scalars['Int']>;
  status_end?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Feud_Old_Games_Old_Min_Fields = {
  __typename?: 'feud_old_games_old_min_fields';
  code?: Maybe<Scalars['String']>;
  expire_time?: Maybe<Scalars['timestamp']>;
  game_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_breakout?: Maybe<Scalars['Int']>;
  is_breakout_popup?: Maybe<Scalars['Int']>;
  not_started?: Maybe<Scalars['Int']>;
  questions_per_matchup?: Maybe<Scalars['Int']>;
  questions_total?: Maybe<Scalars['Int']>;
  status_end?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "feud_old.games_old" */
export type Feud_Old_Games_Old_Mutation_Response = {
  __typename?: 'feud_old_games_old_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Feud_Old_Games_Old>;
};

/** on_conflict condition type for table "feud_old.games_old" */
export type Feud_Old_Games_Old_On_Conflict = {
  constraint: Feud_Old_Games_Old_Constraint;
  update_columns?: Array<Feud_Old_Games_Old_Update_Column>;
  where?: InputMaybe<Feud_Old_Games_Old_Bool_Exp>;
};

/** Ordering options when selecting data from "feud_old.games_old". */
export type Feud_Old_Games_Old_Order_By = {
  code?: InputMaybe<Order_By>;
  expire_time?: InputMaybe<Order_By>;
  game_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_breakout?: InputMaybe<Order_By>;
  is_breakout_popup?: InputMaybe<Order_By>;
  not_started?: InputMaybe<Order_By>;
  questions_per_matchup?: InputMaybe<Order_By>;
  questions_total?: InputMaybe<Order_By>;
  status_end?: InputMaybe<Order_By>;
};

/** primary key columns input for table: feud_old.games_old */
export type Feud_Old_Games_Old_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "feud_old.games_old" */
export enum Feud_Old_Games_Old_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  ExpireTime = 'expire_time',
  /** column name */
  GameType = 'game_type',
  /** column name */
  Id = 'id',
  /** column name */
  IsBreakout = 'is_breakout',
  /** column name */
  IsBreakoutPopup = 'is_breakout_popup',
  /** column name */
  NotStarted = 'not_started',
  /** column name */
  QuestionsPerMatchup = 'questions_per_matchup',
  /** column name */
  QuestionsTotal = 'questions_total',
  /** column name */
  StatusEnd = 'status_end'
}

/** input type for updating data in table "feud_old.games_old" */
export type Feud_Old_Games_Old_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  expire_time?: InputMaybe<Scalars['timestamp']>;
  game_type?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_breakout?: InputMaybe<Scalars['Int']>;
  is_breakout_popup?: InputMaybe<Scalars['Int']>;
  not_started?: InputMaybe<Scalars['Int']>;
  questions_per_matchup?: InputMaybe<Scalars['Int']>;
  questions_total?: InputMaybe<Scalars['Int']>;
  status_end?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Feud_Old_Games_Old_Stddev_Fields = {
  __typename?: 'feud_old_games_old_stddev_fields';
  is_breakout?: Maybe<Scalars['Float']>;
  is_breakout_popup?: Maybe<Scalars['Float']>;
  not_started?: Maybe<Scalars['Float']>;
  questions_per_matchup?: Maybe<Scalars['Float']>;
  questions_total?: Maybe<Scalars['Float']>;
  status_end?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Feud_Old_Games_Old_Stddev_Pop_Fields = {
  __typename?: 'feud_old_games_old_stddev_pop_fields';
  is_breakout?: Maybe<Scalars['Float']>;
  is_breakout_popup?: Maybe<Scalars['Float']>;
  not_started?: Maybe<Scalars['Float']>;
  questions_per_matchup?: Maybe<Scalars['Float']>;
  questions_total?: Maybe<Scalars['Float']>;
  status_end?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Feud_Old_Games_Old_Stddev_Samp_Fields = {
  __typename?: 'feud_old_games_old_stddev_samp_fields';
  is_breakout?: Maybe<Scalars['Float']>;
  is_breakout_popup?: Maybe<Scalars['Float']>;
  not_started?: Maybe<Scalars['Float']>;
  questions_per_matchup?: Maybe<Scalars['Float']>;
  questions_total?: Maybe<Scalars['Float']>;
  status_end?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "feud_old_games_old" */
export type Feud_Old_Games_Old_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Feud_Old_Games_Old_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Feud_Old_Games_Old_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
  expire_time?: InputMaybe<Scalars['timestamp']>;
  game_type?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_breakout?: InputMaybe<Scalars['Int']>;
  is_breakout_popup?: InputMaybe<Scalars['Int']>;
  not_started?: InputMaybe<Scalars['Int']>;
  questions_per_matchup?: InputMaybe<Scalars['Int']>;
  questions_total?: InputMaybe<Scalars['Int']>;
  status_end?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Feud_Old_Games_Old_Sum_Fields = {
  __typename?: 'feud_old_games_old_sum_fields';
  is_breakout?: Maybe<Scalars['Int']>;
  is_breakout_popup?: Maybe<Scalars['Int']>;
  not_started?: Maybe<Scalars['Int']>;
  questions_per_matchup?: Maybe<Scalars['Int']>;
  questions_total?: Maybe<Scalars['Int']>;
  status_end?: Maybe<Scalars['Int']>;
};

/** update columns of table "feud_old.games_old" */
export enum Feud_Old_Games_Old_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  ExpireTime = 'expire_time',
  /** column name */
  GameType = 'game_type',
  /** column name */
  Id = 'id',
  /** column name */
  IsBreakout = 'is_breakout',
  /** column name */
  IsBreakoutPopup = 'is_breakout_popup',
  /** column name */
  NotStarted = 'not_started',
  /** column name */
  QuestionsPerMatchup = 'questions_per_matchup',
  /** column name */
  QuestionsTotal = 'questions_total',
  /** column name */
  StatusEnd = 'status_end'
}

export type Feud_Old_Games_Old_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Feud_Old_Games_Old_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Feud_Old_Games_Old_Set_Input>;
  /** filter the rows which have to be updated */
  where: Feud_Old_Games_Old_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Feud_Old_Games_Old_Var_Pop_Fields = {
  __typename?: 'feud_old_games_old_var_pop_fields';
  is_breakout?: Maybe<Scalars['Float']>;
  is_breakout_popup?: Maybe<Scalars['Float']>;
  not_started?: Maybe<Scalars['Float']>;
  questions_per_matchup?: Maybe<Scalars['Float']>;
  questions_total?: Maybe<Scalars['Float']>;
  status_end?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Feud_Old_Games_Old_Var_Samp_Fields = {
  __typename?: 'feud_old_games_old_var_samp_fields';
  is_breakout?: Maybe<Scalars['Float']>;
  is_breakout_popup?: Maybe<Scalars['Float']>;
  not_started?: Maybe<Scalars['Float']>;
  questions_per_matchup?: Maybe<Scalars['Float']>;
  questions_total?: Maybe<Scalars['Float']>;
  status_end?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Feud_Old_Games_Old_Variance_Fields = {
  __typename?: 'feud_old_games_old_variance_fields';
  is_breakout?: Maybe<Scalars['Float']>;
  is_breakout_popup?: Maybe<Scalars['Float']>;
  not_started?: Maybe<Scalars['Float']>;
  questions_per_matchup?: Maybe<Scalars['Float']>;
  questions_total?: Maybe<Scalars['Float']>;
  status_end?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  etag?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isUploaded?: Maybe<Scalars['Boolean']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

export type Files_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Files_Aggregate_Bool_Exp_Count>;
};

export type Files_Aggregate_Bool_Exp_Bool_And = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<Files_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
  stddev?: Maybe<Files_Stddev_Fields>;
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
  sum?: Maybe<Files_Sum_Fields>;
  var_pop?: Maybe<Files_Var_Pop_Fields>;
  var_samp?: Maybe<Files_Var_Samp_Fields>;
  variance?: Maybe<Files_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg?: InputMaybe<Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Max_Order_By>;
  min?: InputMaybe<Files_Min_Order_By>;
  stddev?: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Files_Sum_Order_By>;
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  bucket?: InputMaybe<Buckets_Bool_Exp>;
  bucketId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  etag?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  mimeType?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey'
}

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** input type for inserting object relation for remote table "storage.files" */
export type Files_Obj_Rel_Insert_Input = {
  data: Files_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>;
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isUploaded?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "files" */
export type Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Files_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Files_Stream_Cursor_Value_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

export type Files_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Files_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Files_Set_Input>;
  /** filter the rows which have to be updated */
  where: Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** columns and relationships of "sketchWars.game_information_collections" */
export type GameInformationCollections = {
  __typename?: 'gameInformationCollections';
  /** An object relationship */
  collection: Collections;
  collectionId: Scalars['uuid'];
  /** An object relationship */
  gameInformation: GameInformationSketchWars;
  gameInformationId: Scalars['uuid'];
};

/** aggregated selection of "sketchWars.game_information_collections" */
export type GameInformationCollections_Aggregate = {
  __typename?: 'gameInformationCollections_aggregate';
  aggregate?: Maybe<GameInformationCollections_Aggregate_Fields>;
  nodes: Array<GameInformationCollections>;
};

export type GameInformationCollections_Aggregate_Bool_Exp = {
  count?: InputMaybe<GameInformationCollections_Aggregate_Bool_Exp_Count>;
};

export type GameInformationCollections_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<GameInformationCollections_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<GameInformationCollections_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "sketchWars.game_information_collections" */
export type GameInformationCollections_Aggregate_Fields = {
  __typename?: 'gameInformationCollections_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<GameInformationCollections_Max_Fields>;
  min?: Maybe<GameInformationCollections_Min_Fields>;
};


/** aggregate fields of "sketchWars.game_information_collections" */
export type GameInformationCollections_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<GameInformationCollections_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sketchWars.game_information_collections" */
export type GameInformationCollections_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<GameInformationCollections_Max_Order_By>;
  min?: InputMaybe<GameInformationCollections_Min_Order_By>;
};

/** input type for inserting array relation for remote table "sketchWars.game_information_collections" */
export type GameInformationCollections_Arr_Rel_Insert_Input = {
  data: Array<GameInformationCollections_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<GameInformationCollections_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sketchWars.game_information_collections". All fields are combined with a logical 'AND'. */
export type GameInformationCollections_Bool_Exp = {
  _and?: InputMaybe<Array<GameInformationCollections_Bool_Exp>>;
  _not?: InputMaybe<GameInformationCollections_Bool_Exp>;
  _or?: InputMaybe<Array<GameInformationCollections_Bool_Exp>>;
  collection?: InputMaybe<Collections_Bool_Exp>;
  collectionId?: InputMaybe<Uuid_Comparison_Exp>;
  gameInformation?: InputMaybe<GameInformationSketchWars_Bool_Exp>;
  gameInformationId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "sketchWars.game_information_collections" */
export enum GameInformationCollections_Constraint {
  /** unique or primary key constraint on columns "game_information_id", "collection_id" */
  GameInformationCollectionsPkey = 'game_information_collections_pkey'
}

/** input type for inserting data into table "sketchWars.game_information_collections" */
export type GameInformationCollections_Insert_Input = {
  collection?: InputMaybe<Collections_Obj_Rel_Insert_Input>;
  collectionId?: InputMaybe<Scalars['uuid']>;
  gameInformation?: InputMaybe<GameInformationSketchWars_Obj_Rel_Insert_Input>;
  gameInformationId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type GameInformationCollections_Max_Fields = {
  __typename?: 'gameInformationCollections_max_fields';
  collectionId?: Maybe<Scalars['uuid']>;
  gameInformationId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "sketchWars.game_information_collections" */
export type GameInformationCollections_Max_Order_By = {
  collectionId?: InputMaybe<Order_By>;
  gameInformationId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type GameInformationCollections_Min_Fields = {
  __typename?: 'gameInformationCollections_min_fields';
  collectionId?: Maybe<Scalars['uuid']>;
  gameInformationId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "sketchWars.game_information_collections" */
export type GameInformationCollections_Min_Order_By = {
  collectionId?: InputMaybe<Order_By>;
  gameInformationId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sketchWars.game_information_collections" */
export type GameInformationCollections_Mutation_Response = {
  __typename?: 'gameInformationCollections_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<GameInformationCollections>;
};

/** on_conflict condition type for table "sketchWars.game_information_collections" */
export type GameInformationCollections_On_Conflict = {
  constraint: GameInformationCollections_Constraint;
  update_columns?: Array<GameInformationCollections_Update_Column>;
  where?: InputMaybe<GameInformationCollections_Bool_Exp>;
};

/** Ordering options when selecting data from "sketchWars.game_information_collections". */
export type GameInformationCollections_Order_By = {
  collection?: InputMaybe<Collections_Order_By>;
  collectionId?: InputMaybe<Order_By>;
  gameInformation?: InputMaybe<GameInformationSketchWars_Order_By>;
  gameInformationId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sketchWars.game_information_collections */
export type GameInformationCollections_Pk_Columns_Input = {
  collectionId: Scalars['uuid'];
  gameInformationId: Scalars['uuid'];
};

/** select columns of table "sketchWars.game_information_collections" */
export enum GameInformationCollections_Select_Column {
  /** column name */
  CollectionId = 'collectionId',
  /** column name */
  GameInformationId = 'gameInformationId'
}

/** input type for updating data in table "sketchWars.game_information_collections" */
export type GameInformationCollections_Set_Input = {
  collectionId?: InputMaybe<Scalars['uuid']>;
  gameInformationId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "gameInformationCollections" */
export type GameInformationCollections_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: GameInformationCollections_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GameInformationCollections_Stream_Cursor_Value_Input = {
  collectionId?: InputMaybe<Scalars['uuid']>;
  gameInformationId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "sketchWars.game_information_collections" */
export enum GameInformationCollections_Update_Column {
  /** column name */
  CollectionId = 'collectionId',
  /** column name */
  GameInformationId = 'gameInformationId'
}

export type GameInformationCollections_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GameInformationCollections_Set_Input>;
  /** filter the rows which have to be updated */
  where: GameInformationCollections_Bool_Exp;
};

/** columns and relationships of "game_information_feud" */
export type GameInformationFeud = {
  __typename?: 'gameInformationFeud';
  answerTimer: Scalars['Int'];
  breakoutRoomTimer: Scalars['Int'];
  /** An object relationship */
  collection?: Maybe<Collections>;
  collectionId?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  /** An object relationship */
  matchupSettings?: Maybe<MatchupSettings>;
  matchupSettingsId?: Maybe<Scalars['uuid']>;
  multiplier: Scalars['Int'];
  /** An object relationship */
  resource?: Maybe<Resources>;
  resourceId?: Maybe<Scalars['uuid']>;
  state: Scalars['String'];
  /** An object relationship */
  theme?: Maybe<Themes>;
  themeId?: Maybe<Scalars['uuid']>;
  totalGameTimer: Scalars['Int'];
  totalQuestions?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "game_information_feud" */
export type GameInformationFeud_Aggregate = {
  __typename?: 'gameInformationFeud_aggregate';
  aggregate?: Maybe<GameInformationFeud_Aggregate_Fields>;
  nodes: Array<GameInformationFeud>;
};

export type GameInformationFeud_Aggregate_Bool_Exp = {
  count?: InputMaybe<GameInformationFeud_Aggregate_Bool_Exp_Count>;
};

export type GameInformationFeud_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<GameInformationFeud_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<GameInformationFeud_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "game_information_feud" */
export type GameInformationFeud_Aggregate_Fields = {
  __typename?: 'gameInformationFeud_aggregate_fields';
  avg?: Maybe<GameInformationFeud_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<GameInformationFeud_Max_Fields>;
  min?: Maybe<GameInformationFeud_Min_Fields>;
  stddev?: Maybe<GameInformationFeud_Stddev_Fields>;
  stddev_pop?: Maybe<GameInformationFeud_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<GameInformationFeud_Stddev_Samp_Fields>;
  sum?: Maybe<GameInformationFeud_Sum_Fields>;
  var_pop?: Maybe<GameInformationFeud_Var_Pop_Fields>;
  var_samp?: Maybe<GameInformationFeud_Var_Samp_Fields>;
  variance?: Maybe<GameInformationFeud_Variance_Fields>;
};


/** aggregate fields of "game_information_feud" */
export type GameInformationFeud_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<GameInformationFeud_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "game_information_feud" */
export type GameInformationFeud_Aggregate_Order_By = {
  avg?: InputMaybe<GameInformationFeud_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<GameInformationFeud_Max_Order_By>;
  min?: InputMaybe<GameInformationFeud_Min_Order_By>;
  stddev?: InputMaybe<GameInformationFeud_Stddev_Order_By>;
  stddev_pop?: InputMaybe<GameInformationFeud_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<GameInformationFeud_Stddev_Samp_Order_By>;
  sum?: InputMaybe<GameInformationFeud_Sum_Order_By>;
  var_pop?: InputMaybe<GameInformationFeud_Var_Pop_Order_By>;
  var_samp?: InputMaybe<GameInformationFeud_Var_Samp_Order_By>;
  variance?: InputMaybe<GameInformationFeud_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "game_information_feud" */
export type GameInformationFeud_Arr_Rel_Insert_Input = {
  data: Array<GameInformationFeud_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<GameInformationFeud_On_Conflict>;
};

/** aggregate avg on columns */
export type GameInformationFeud_Avg_Fields = {
  __typename?: 'gameInformationFeud_avg_fields';
  answerTimer?: Maybe<Scalars['Float']>;
  breakoutRoomTimer?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
  totalGameTimer?: Maybe<Scalars['Float']>;
  totalQuestions?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "game_information_feud" */
export type GameInformationFeud_Avg_Order_By = {
  answerTimer?: InputMaybe<Order_By>;
  breakoutRoomTimer?: InputMaybe<Order_By>;
  multiplier?: InputMaybe<Order_By>;
  totalGameTimer?: InputMaybe<Order_By>;
  totalQuestions?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "game_information_feud". All fields are combined with a logical 'AND'. */
export type GameInformationFeud_Bool_Exp = {
  _and?: InputMaybe<Array<GameInformationFeud_Bool_Exp>>;
  _not?: InputMaybe<GameInformationFeud_Bool_Exp>;
  _or?: InputMaybe<Array<GameInformationFeud_Bool_Exp>>;
  answerTimer?: InputMaybe<Int_Comparison_Exp>;
  breakoutRoomTimer?: InputMaybe<Int_Comparison_Exp>;
  collection?: InputMaybe<Collections_Bool_Exp>;
  collectionId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  matchupSettings?: InputMaybe<MatchupSettings_Bool_Exp>;
  matchupSettingsId?: InputMaybe<Uuid_Comparison_Exp>;
  multiplier?: InputMaybe<Int_Comparison_Exp>;
  resource?: InputMaybe<Resources_Bool_Exp>;
  resourceId?: InputMaybe<Uuid_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  theme?: InputMaybe<Themes_Bool_Exp>;
  themeId?: InputMaybe<Uuid_Comparison_Exp>;
  totalGameTimer?: InputMaybe<Int_Comparison_Exp>;
  totalQuestions?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "game_information_feud" */
export enum GameInformationFeud_Constraint {
  /** unique or primary key constraint on columns "id" */
  GameInformationFeudPkey = 'game_information_feud_pkey'
}

/** input type for incrementing numeric columns in table "game_information_feud" */
export type GameInformationFeud_Inc_Input = {
  answerTimer?: InputMaybe<Scalars['Int']>;
  breakoutRoomTimer?: InputMaybe<Scalars['Int']>;
  multiplier?: InputMaybe<Scalars['Int']>;
  totalGameTimer?: InputMaybe<Scalars['Int']>;
  totalQuestions?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "game_information_feud" */
export type GameInformationFeud_Insert_Input = {
  answerTimer?: InputMaybe<Scalars['Int']>;
  breakoutRoomTimer?: InputMaybe<Scalars['Int']>;
  collection?: InputMaybe<Collections_Obj_Rel_Insert_Input>;
  collectionId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  matchupSettings?: InputMaybe<MatchupSettings_Obj_Rel_Insert_Input>;
  matchupSettingsId?: InputMaybe<Scalars['uuid']>;
  multiplier?: InputMaybe<Scalars['Int']>;
  resource?: InputMaybe<Resources_Obj_Rel_Insert_Input>;
  resourceId?: InputMaybe<Scalars['uuid']>;
  state?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Themes_Obj_Rel_Insert_Input>;
  themeId?: InputMaybe<Scalars['uuid']>;
  totalGameTimer?: InputMaybe<Scalars['Int']>;
  totalQuestions?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type GameInformationFeud_Max_Fields = {
  __typename?: 'gameInformationFeud_max_fields';
  answerTimer?: Maybe<Scalars['Int']>;
  breakoutRoomTimer?: Maybe<Scalars['Int']>;
  collectionId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  matchupSettingsId?: Maybe<Scalars['uuid']>;
  multiplier?: Maybe<Scalars['Int']>;
  resourceId?: Maybe<Scalars['uuid']>;
  state?: Maybe<Scalars['String']>;
  themeId?: Maybe<Scalars['uuid']>;
  totalGameTimer?: Maybe<Scalars['Int']>;
  totalQuestions?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "game_information_feud" */
export type GameInformationFeud_Max_Order_By = {
  answerTimer?: InputMaybe<Order_By>;
  breakoutRoomTimer?: InputMaybe<Order_By>;
  collectionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  matchupSettingsId?: InputMaybe<Order_By>;
  multiplier?: InputMaybe<Order_By>;
  resourceId?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
  totalGameTimer?: InputMaybe<Order_By>;
  totalQuestions?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type GameInformationFeud_Min_Fields = {
  __typename?: 'gameInformationFeud_min_fields';
  answerTimer?: Maybe<Scalars['Int']>;
  breakoutRoomTimer?: Maybe<Scalars['Int']>;
  collectionId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  matchupSettingsId?: Maybe<Scalars['uuid']>;
  multiplier?: Maybe<Scalars['Int']>;
  resourceId?: Maybe<Scalars['uuid']>;
  state?: Maybe<Scalars['String']>;
  themeId?: Maybe<Scalars['uuid']>;
  totalGameTimer?: Maybe<Scalars['Int']>;
  totalQuestions?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "game_information_feud" */
export type GameInformationFeud_Min_Order_By = {
  answerTimer?: InputMaybe<Order_By>;
  breakoutRoomTimer?: InputMaybe<Order_By>;
  collectionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  matchupSettingsId?: InputMaybe<Order_By>;
  multiplier?: InputMaybe<Order_By>;
  resourceId?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
  totalGameTimer?: InputMaybe<Order_By>;
  totalQuestions?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "game_information_feud" */
export type GameInformationFeud_Mutation_Response = {
  __typename?: 'gameInformationFeud_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<GameInformationFeud>;
};

/** input type for inserting object relation for remote table "game_information_feud" */
export type GameInformationFeud_Obj_Rel_Insert_Input = {
  data: GameInformationFeud_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<GameInformationFeud_On_Conflict>;
};

/** on_conflict condition type for table "game_information_feud" */
export type GameInformationFeud_On_Conflict = {
  constraint: GameInformationFeud_Constraint;
  update_columns?: Array<GameInformationFeud_Update_Column>;
  where?: InputMaybe<GameInformationFeud_Bool_Exp>;
};

/** Ordering options when selecting data from "game_information_feud". */
export type GameInformationFeud_Order_By = {
  answerTimer?: InputMaybe<Order_By>;
  breakoutRoomTimer?: InputMaybe<Order_By>;
  collection?: InputMaybe<Collections_Order_By>;
  collectionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  matchupSettings?: InputMaybe<MatchupSettings_Order_By>;
  matchupSettingsId?: InputMaybe<Order_By>;
  multiplier?: InputMaybe<Order_By>;
  resource?: InputMaybe<Resources_Order_By>;
  resourceId?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  theme?: InputMaybe<Themes_Order_By>;
  themeId?: InputMaybe<Order_By>;
  totalGameTimer?: InputMaybe<Order_By>;
  totalQuestions?: InputMaybe<Order_By>;
};

/** primary key columns input for table: game_information_feud */
export type GameInformationFeud_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "game_information_feud" */
export enum GameInformationFeud_Select_Column {
  /** column name */
  AnswerTimer = 'answerTimer',
  /** column name */
  BreakoutRoomTimer = 'breakoutRoomTimer',
  /** column name */
  CollectionId = 'collectionId',
  /** column name */
  Id = 'id',
  /** column name */
  MatchupSettingsId = 'matchupSettingsId',
  /** column name */
  Multiplier = 'multiplier',
  /** column name */
  ResourceId = 'resourceId',
  /** column name */
  State = 'state',
  /** column name */
  ThemeId = 'themeId',
  /** column name */
  TotalGameTimer = 'totalGameTimer',
  /** column name */
  TotalQuestions = 'totalQuestions'
}

/** input type for updating data in table "game_information_feud" */
export type GameInformationFeud_Set_Input = {
  answerTimer?: InputMaybe<Scalars['Int']>;
  breakoutRoomTimer?: InputMaybe<Scalars['Int']>;
  collectionId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  matchupSettingsId?: InputMaybe<Scalars['uuid']>;
  multiplier?: InputMaybe<Scalars['Int']>;
  resourceId?: InputMaybe<Scalars['uuid']>;
  state?: InputMaybe<Scalars['String']>;
  themeId?: InputMaybe<Scalars['uuid']>;
  totalGameTimer?: InputMaybe<Scalars['Int']>;
  totalQuestions?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type GameInformationFeud_Stddev_Fields = {
  __typename?: 'gameInformationFeud_stddev_fields';
  answerTimer?: Maybe<Scalars['Float']>;
  breakoutRoomTimer?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
  totalGameTimer?: Maybe<Scalars['Float']>;
  totalQuestions?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "game_information_feud" */
export type GameInformationFeud_Stddev_Order_By = {
  answerTimer?: InputMaybe<Order_By>;
  breakoutRoomTimer?: InputMaybe<Order_By>;
  multiplier?: InputMaybe<Order_By>;
  totalGameTimer?: InputMaybe<Order_By>;
  totalQuestions?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type GameInformationFeud_Stddev_Pop_Fields = {
  __typename?: 'gameInformationFeud_stddev_pop_fields';
  answerTimer?: Maybe<Scalars['Float']>;
  breakoutRoomTimer?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
  totalGameTimer?: Maybe<Scalars['Float']>;
  totalQuestions?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "game_information_feud" */
export type GameInformationFeud_Stddev_Pop_Order_By = {
  answerTimer?: InputMaybe<Order_By>;
  breakoutRoomTimer?: InputMaybe<Order_By>;
  multiplier?: InputMaybe<Order_By>;
  totalGameTimer?: InputMaybe<Order_By>;
  totalQuestions?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type GameInformationFeud_Stddev_Samp_Fields = {
  __typename?: 'gameInformationFeud_stddev_samp_fields';
  answerTimer?: Maybe<Scalars['Float']>;
  breakoutRoomTimer?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
  totalGameTimer?: Maybe<Scalars['Float']>;
  totalQuestions?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "game_information_feud" */
export type GameInformationFeud_Stddev_Samp_Order_By = {
  answerTimer?: InputMaybe<Order_By>;
  breakoutRoomTimer?: InputMaybe<Order_By>;
  multiplier?: InputMaybe<Order_By>;
  totalGameTimer?: InputMaybe<Order_By>;
  totalQuestions?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "gameInformationFeud" */
export type GameInformationFeud_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: GameInformationFeud_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GameInformationFeud_Stream_Cursor_Value_Input = {
  answerTimer?: InputMaybe<Scalars['Int']>;
  breakoutRoomTimer?: InputMaybe<Scalars['Int']>;
  collectionId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  matchupSettingsId?: InputMaybe<Scalars['uuid']>;
  multiplier?: InputMaybe<Scalars['Int']>;
  resourceId?: InputMaybe<Scalars['uuid']>;
  state?: InputMaybe<Scalars['String']>;
  themeId?: InputMaybe<Scalars['uuid']>;
  totalGameTimer?: InputMaybe<Scalars['Int']>;
  totalQuestions?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type GameInformationFeud_Sum_Fields = {
  __typename?: 'gameInformationFeud_sum_fields';
  answerTimer?: Maybe<Scalars['Int']>;
  breakoutRoomTimer?: Maybe<Scalars['Int']>;
  multiplier?: Maybe<Scalars['Int']>;
  totalGameTimer?: Maybe<Scalars['Int']>;
  totalQuestions?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "game_information_feud" */
export type GameInformationFeud_Sum_Order_By = {
  answerTimer?: InputMaybe<Order_By>;
  breakoutRoomTimer?: InputMaybe<Order_By>;
  multiplier?: InputMaybe<Order_By>;
  totalGameTimer?: InputMaybe<Order_By>;
  totalQuestions?: InputMaybe<Order_By>;
};

/** update columns of table "game_information_feud" */
export enum GameInformationFeud_Update_Column {
  /** column name */
  AnswerTimer = 'answerTimer',
  /** column name */
  BreakoutRoomTimer = 'breakoutRoomTimer',
  /** column name */
  CollectionId = 'collectionId',
  /** column name */
  Id = 'id',
  /** column name */
  MatchupSettingsId = 'matchupSettingsId',
  /** column name */
  Multiplier = 'multiplier',
  /** column name */
  ResourceId = 'resourceId',
  /** column name */
  State = 'state',
  /** column name */
  ThemeId = 'themeId',
  /** column name */
  TotalGameTimer = 'totalGameTimer',
  /** column name */
  TotalQuestions = 'totalQuestions'
}

export type GameInformationFeud_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<GameInformationFeud_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GameInformationFeud_Set_Input>;
  /** filter the rows which have to be updated */
  where: GameInformationFeud_Bool_Exp;
};

/** aggregate var_pop on columns */
export type GameInformationFeud_Var_Pop_Fields = {
  __typename?: 'gameInformationFeud_var_pop_fields';
  answerTimer?: Maybe<Scalars['Float']>;
  breakoutRoomTimer?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
  totalGameTimer?: Maybe<Scalars['Float']>;
  totalQuestions?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "game_information_feud" */
export type GameInformationFeud_Var_Pop_Order_By = {
  answerTimer?: InputMaybe<Order_By>;
  breakoutRoomTimer?: InputMaybe<Order_By>;
  multiplier?: InputMaybe<Order_By>;
  totalGameTimer?: InputMaybe<Order_By>;
  totalQuestions?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type GameInformationFeud_Var_Samp_Fields = {
  __typename?: 'gameInformationFeud_var_samp_fields';
  answerTimer?: Maybe<Scalars['Float']>;
  breakoutRoomTimer?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
  totalGameTimer?: Maybe<Scalars['Float']>;
  totalQuestions?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "game_information_feud" */
export type GameInformationFeud_Var_Samp_Order_By = {
  answerTimer?: InputMaybe<Order_By>;
  breakoutRoomTimer?: InputMaybe<Order_By>;
  multiplier?: InputMaybe<Order_By>;
  totalGameTimer?: InputMaybe<Order_By>;
  totalQuestions?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type GameInformationFeud_Variance_Fields = {
  __typename?: 'gameInformationFeud_variance_fields';
  answerTimer?: Maybe<Scalars['Float']>;
  breakoutRoomTimer?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
  totalGameTimer?: Maybe<Scalars['Float']>;
  totalQuestions?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "game_information_feud" */
export type GameInformationFeud_Variance_Order_By = {
  answerTimer?: InputMaybe<Order_By>;
  breakoutRoomTimer?: InputMaybe<Order_By>;
  multiplier?: InputMaybe<Order_By>;
  totalGameTimer?: InputMaybe<Order_By>;
  totalQuestions?: InputMaybe<Order_By>;
};

/** columns and relationships of "olympics.game_information" */
export type GameInformationOlympics = {
  __typename?: 'gameInformationOlympics';
  id: Scalars['uuid'];
  /** An object relationship */
  theme?: Maybe<OlympicsThemes>;
  theme_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "olympics.game_information" */
export type GameInformationOlympics_Aggregate = {
  __typename?: 'gameInformationOlympics_aggregate';
  aggregate?: Maybe<GameInformationOlympics_Aggregate_Fields>;
  nodes: Array<GameInformationOlympics>;
};

/** aggregate fields of "olympics.game_information" */
export type GameInformationOlympics_Aggregate_Fields = {
  __typename?: 'gameInformationOlympics_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<GameInformationOlympics_Max_Fields>;
  min?: Maybe<GameInformationOlympics_Min_Fields>;
};


/** aggregate fields of "olympics.game_information" */
export type GameInformationOlympics_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<GameInformationOlympics_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "olympics.game_information". All fields are combined with a logical 'AND'. */
export type GameInformationOlympics_Bool_Exp = {
  _and?: InputMaybe<Array<GameInformationOlympics_Bool_Exp>>;
  _not?: InputMaybe<GameInformationOlympics_Bool_Exp>;
  _or?: InputMaybe<Array<GameInformationOlympics_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  theme?: InputMaybe<OlympicsThemes_Bool_Exp>;
  theme_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "olympics.game_information" */
export enum GameInformationOlympics_Constraint {
  /** unique or primary key constraint on columns "id" */
  GameInformationOlympicsPkey = 'game_information_olympics_pkey'
}

/** input type for inserting data into table "olympics.game_information" */
export type GameInformationOlympics_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  theme?: InputMaybe<OlympicsThemes_Obj_Rel_Insert_Input>;
  theme_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type GameInformationOlympics_Max_Fields = {
  __typename?: 'gameInformationOlympics_max_fields';
  id?: Maybe<Scalars['uuid']>;
  theme_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type GameInformationOlympics_Min_Fields = {
  __typename?: 'gameInformationOlympics_min_fields';
  id?: Maybe<Scalars['uuid']>;
  theme_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "olympics.game_information" */
export type GameInformationOlympics_Mutation_Response = {
  __typename?: 'gameInformationOlympics_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<GameInformationOlympics>;
};

/** input type for inserting object relation for remote table "olympics.game_information" */
export type GameInformationOlympics_Obj_Rel_Insert_Input = {
  data: GameInformationOlympics_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<GameInformationOlympics_On_Conflict>;
};

/** on_conflict condition type for table "olympics.game_information" */
export type GameInformationOlympics_On_Conflict = {
  constraint: GameInformationOlympics_Constraint;
  update_columns?: Array<GameInformationOlympics_Update_Column>;
  where?: InputMaybe<GameInformationOlympics_Bool_Exp>;
};

/** Ordering options when selecting data from "olympics.game_information". */
export type GameInformationOlympics_Order_By = {
  id?: InputMaybe<Order_By>;
  theme?: InputMaybe<OlympicsThemes_Order_By>;
  theme_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: olympics.game_information */
export type GameInformationOlympics_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "olympics.game_information" */
export enum GameInformationOlympics_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ThemeId = 'theme_id'
}

/** input type for updating data in table "olympics.game_information" */
export type GameInformationOlympics_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  theme_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "gameInformationOlympics" */
export type GameInformationOlympics_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: GameInformationOlympics_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GameInformationOlympics_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  theme_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "olympics.game_information" */
export enum GameInformationOlympics_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ThemeId = 'theme_id'
}

export type GameInformationOlympics_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GameInformationOlympics_Set_Input>;
  /** filter the rows which have to be updated */
  where: GameInformationOlympics_Bool_Exp;
};

/** columns and relationships of "sketchWars.game_information_sketch_wars" */
export type GameInformationSketchWars = {
  __typename?: 'gameInformationSketchWars';
  /** An array relationship */
  collections: Array<GameInformationCollections>;
  /** An aggregate relationship */
  collections_aggregate: GameInformationCollections_Aggregate;
  drawTime: Scalars['Int'];
  hints: Scalars['Boolean'];
  id: Scalars['uuid'];
  state: Scalars['String'];
  teamAssignments: Scalars['String'];
  totalRounds?: Maybe<Scalars['Int']>;
  tournamentMode: Scalars['Boolean'];
  wordMode: Scalars['String'];
};


/** columns and relationships of "sketchWars.game_information_sketch_wars" */
export type GameInformationSketchWarsCollectionsArgs = {
  distinct_on?: InputMaybe<Array<GameInformationCollections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationCollections_Order_By>>;
  where?: InputMaybe<GameInformationCollections_Bool_Exp>;
};


/** columns and relationships of "sketchWars.game_information_sketch_wars" */
export type GameInformationSketchWarsCollections_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameInformationCollections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationCollections_Order_By>>;
  where?: InputMaybe<GameInformationCollections_Bool_Exp>;
};

/** aggregated selection of "sketchWars.game_information_sketch_wars" */
export type GameInformationSketchWars_Aggregate = {
  __typename?: 'gameInformationSketchWars_aggregate';
  aggregate?: Maybe<GameInformationSketchWars_Aggregate_Fields>;
  nodes: Array<GameInformationSketchWars>;
};

/** aggregate fields of "sketchWars.game_information_sketch_wars" */
export type GameInformationSketchWars_Aggregate_Fields = {
  __typename?: 'gameInformationSketchWars_aggregate_fields';
  avg?: Maybe<GameInformationSketchWars_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<GameInformationSketchWars_Max_Fields>;
  min?: Maybe<GameInformationSketchWars_Min_Fields>;
  stddev?: Maybe<GameInformationSketchWars_Stddev_Fields>;
  stddev_pop?: Maybe<GameInformationSketchWars_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<GameInformationSketchWars_Stddev_Samp_Fields>;
  sum?: Maybe<GameInformationSketchWars_Sum_Fields>;
  var_pop?: Maybe<GameInformationSketchWars_Var_Pop_Fields>;
  var_samp?: Maybe<GameInformationSketchWars_Var_Samp_Fields>;
  variance?: Maybe<GameInformationSketchWars_Variance_Fields>;
};


/** aggregate fields of "sketchWars.game_information_sketch_wars" */
export type GameInformationSketchWars_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<GameInformationSketchWars_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type GameInformationSketchWars_Avg_Fields = {
  __typename?: 'gameInformationSketchWars_avg_fields';
  drawTime?: Maybe<Scalars['Float']>;
  totalRounds?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "sketchWars.game_information_sketch_wars". All fields are combined with a logical 'AND'. */
export type GameInformationSketchWars_Bool_Exp = {
  _and?: InputMaybe<Array<GameInformationSketchWars_Bool_Exp>>;
  _not?: InputMaybe<GameInformationSketchWars_Bool_Exp>;
  _or?: InputMaybe<Array<GameInformationSketchWars_Bool_Exp>>;
  collections?: InputMaybe<GameInformationCollections_Bool_Exp>;
  collections_aggregate?: InputMaybe<GameInformationCollections_Aggregate_Bool_Exp>;
  drawTime?: InputMaybe<Int_Comparison_Exp>;
  hints?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  teamAssignments?: InputMaybe<String_Comparison_Exp>;
  totalRounds?: InputMaybe<Int_Comparison_Exp>;
  tournamentMode?: InputMaybe<Boolean_Comparison_Exp>;
  wordMode?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "sketchWars.game_information_sketch_wars" */
export enum GameInformationSketchWars_Constraint {
  /** unique or primary key constraint on columns "id" */
  GameInformationSketchWarsPkey = 'game_information_sketch_wars_pkey'
}

/** input type for incrementing numeric columns in table "sketchWars.game_information_sketch_wars" */
export type GameInformationSketchWars_Inc_Input = {
  drawTime?: InputMaybe<Scalars['Int']>;
  totalRounds?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "sketchWars.game_information_sketch_wars" */
export type GameInformationSketchWars_Insert_Input = {
  collections?: InputMaybe<GameInformationCollections_Arr_Rel_Insert_Input>;
  drawTime?: InputMaybe<Scalars['Int']>;
  hints?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  state?: InputMaybe<Scalars['String']>;
  teamAssignments?: InputMaybe<Scalars['String']>;
  totalRounds?: InputMaybe<Scalars['Int']>;
  tournamentMode?: InputMaybe<Scalars['Boolean']>;
  wordMode?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type GameInformationSketchWars_Max_Fields = {
  __typename?: 'gameInformationSketchWars_max_fields';
  drawTime?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  state?: Maybe<Scalars['String']>;
  teamAssignments?: Maybe<Scalars['String']>;
  totalRounds?: Maybe<Scalars['Int']>;
  wordMode?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type GameInformationSketchWars_Min_Fields = {
  __typename?: 'gameInformationSketchWars_min_fields';
  drawTime?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  state?: Maybe<Scalars['String']>;
  teamAssignments?: Maybe<Scalars['String']>;
  totalRounds?: Maybe<Scalars['Int']>;
  wordMode?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "sketchWars.game_information_sketch_wars" */
export type GameInformationSketchWars_Mutation_Response = {
  __typename?: 'gameInformationSketchWars_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<GameInformationSketchWars>;
};

/** input type for inserting object relation for remote table "sketchWars.game_information_sketch_wars" */
export type GameInformationSketchWars_Obj_Rel_Insert_Input = {
  data: GameInformationSketchWars_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<GameInformationSketchWars_On_Conflict>;
};

/** on_conflict condition type for table "sketchWars.game_information_sketch_wars" */
export type GameInformationSketchWars_On_Conflict = {
  constraint: GameInformationSketchWars_Constraint;
  update_columns?: Array<GameInformationSketchWars_Update_Column>;
  where?: InputMaybe<GameInformationSketchWars_Bool_Exp>;
};

/** Ordering options when selecting data from "sketchWars.game_information_sketch_wars". */
export type GameInformationSketchWars_Order_By = {
  collections_aggregate?: InputMaybe<GameInformationCollections_Aggregate_Order_By>;
  drawTime?: InputMaybe<Order_By>;
  hints?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  teamAssignments?: InputMaybe<Order_By>;
  totalRounds?: InputMaybe<Order_By>;
  tournamentMode?: InputMaybe<Order_By>;
  wordMode?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sketchWars.game_information_sketch_wars */
export type GameInformationSketchWars_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "sketchWars.game_information_sketch_wars" */
export enum GameInformationSketchWars_Select_Column {
  /** column name */
  DrawTime = 'drawTime',
  /** column name */
  Hints = 'hints',
  /** column name */
  Id = 'id',
  /** column name */
  State = 'state',
  /** column name */
  TeamAssignments = 'teamAssignments',
  /** column name */
  TotalRounds = 'totalRounds',
  /** column name */
  TournamentMode = 'tournamentMode',
  /** column name */
  WordMode = 'wordMode'
}

/** input type for updating data in table "sketchWars.game_information_sketch_wars" */
export type GameInformationSketchWars_Set_Input = {
  drawTime?: InputMaybe<Scalars['Int']>;
  hints?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  state?: InputMaybe<Scalars['String']>;
  teamAssignments?: InputMaybe<Scalars['String']>;
  totalRounds?: InputMaybe<Scalars['Int']>;
  tournamentMode?: InputMaybe<Scalars['Boolean']>;
  wordMode?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type GameInformationSketchWars_Stddev_Fields = {
  __typename?: 'gameInformationSketchWars_stddev_fields';
  drawTime?: Maybe<Scalars['Float']>;
  totalRounds?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type GameInformationSketchWars_Stddev_Pop_Fields = {
  __typename?: 'gameInformationSketchWars_stddev_pop_fields';
  drawTime?: Maybe<Scalars['Float']>;
  totalRounds?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type GameInformationSketchWars_Stddev_Samp_Fields = {
  __typename?: 'gameInformationSketchWars_stddev_samp_fields';
  drawTime?: Maybe<Scalars['Float']>;
  totalRounds?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "gameInformationSketchWars" */
export type GameInformationSketchWars_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: GameInformationSketchWars_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GameInformationSketchWars_Stream_Cursor_Value_Input = {
  drawTime?: InputMaybe<Scalars['Int']>;
  hints?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  state?: InputMaybe<Scalars['String']>;
  teamAssignments?: InputMaybe<Scalars['String']>;
  totalRounds?: InputMaybe<Scalars['Int']>;
  tournamentMode?: InputMaybe<Scalars['Boolean']>;
  wordMode?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type GameInformationSketchWars_Sum_Fields = {
  __typename?: 'gameInformationSketchWars_sum_fields';
  drawTime?: Maybe<Scalars['Int']>;
  totalRounds?: Maybe<Scalars['Int']>;
};

/** update columns of table "sketchWars.game_information_sketch_wars" */
export enum GameInformationSketchWars_Update_Column {
  /** column name */
  DrawTime = 'drawTime',
  /** column name */
  Hints = 'hints',
  /** column name */
  Id = 'id',
  /** column name */
  State = 'state',
  /** column name */
  TeamAssignments = 'teamAssignments',
  /** column name */
  TotalRounds = 'totalRounds',
  /** column name */
  TournamentMode = 'tournamentMode',
  /** column name */
  WordMode = 'wordMode'
}

export type GameInformationSketchWars_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<GameInformationSketchWars_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GameInformationSketchWars_Set_Input>;
  /** filter the rows which have to be updated */
  where: GameInformationSketchWars_Bool_Exp;
};

/** aggregate var_pop on columns */
export type GameInformationSketchWars_Var_Pop_Fields = {
  __typename?: 'gameInformationSketchWars_var_pop_fields';
  drawTime?: Maybe<Scalars['Float']>;
  totalRounds?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type GameInformationSketchWars_Var_Samp_Fields = {
  __typename?: 'gameInformationSketchWars_var_samp_fields';
  drawTime?: Maybe<Scalars['Float']>;
  totalRounds?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type GameInformationSketchWars_Variance_Fields = {
  __typename?: 'gameInformationSketchWars_variance_fields';
  drawTime?: Maybe<Scalars['Float']>;
  totalRounds?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "game_information_stq" */
export type GameInformationStq = {
  __typename?: 'gameInformationStq';
  id: Scalars['uuid'];
};

/** aggregated selection of "game_information_stq" */
export type GameInformationStq_Aggregate = {
  __typename?: 'gameInformationStq_aggregate';
  aggregate?: Maybe<GameInformationStq_Aggregate_Fields>;
  nodes: Array<GameInformationStq>;
};

/** aggregate fields of "game_information_stq" */
export type GameInformationStq_Aggregate_Fields = {
  __typename?: 'gameInformationStq_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<GameInformationStq_Max_Fields>;
  min?: Maybe<GameInformationStq_Min_Fields>;
};


/** aggregate fields of "game_information_stq" */
export type GameInformationStq_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<GameInformationStq_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "game_information_stq". All fields are combined with a logical 'AND'. */
export type GameInformationStq_Bool_Exp = {
  _and?: InputMaybe<Array<GameInformationStq_Bool_Exp>>;
  _not?: InputMaybe<GameInformationStq_Bool_Exp>;
  _or?: InputMaybe<Array<GameInformationStq_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "game_information_stq" */
export enum GameInformationStq_Constraint {
  /** unique or primary key constraint on columns "id" */
  GameInformationStqPkey = 'game_information_stq_pkey'
}

/** input type for inserting data into table "game_information_stq" */
export type GameInformationStq_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type GameInformationStq_Max_Fields = {
  __typename?: 'gameInformationStq_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type GameInformationStq_Min_Fields = {
  __typename?: 'gameInformationStq_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "game_information_stq" */
export type GameInformationStq_Mutation_Response = {
  __typename?: 'gameInformationStq_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<GameInformationStq>;
};

/** input type for inserting object relation for remote table "game_information_stq" */
export type GameInformationStq_Obj_Rel_Insert_Input = {
  data: GameInformationStq_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<GameInformationStq_On_Conflict>;
};

/** on_conflict condition type for table "game_information_stq" */
export type GameInformationStq_On_Conflict = {
  constraint: GameInformationStq_Constraint;
  update_columns?: Array<GameInformationStq_Update_Column>;
  where?: InputMaybe<GameInformationStq_Bool_Exp>;
};

/** Ordering options when selecting data from "game_information_stq". */
export type GameInformationStq_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: game_information_stq */
export type GameInformationStq_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "game_information_stq" */
export enum GameInformationStq_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "game_information_stq" */
export type GameInformationStq_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "gameInformationStq" */
export type GameInformationStq_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: GameInformationStq_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GameInformationStq_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "game_information_stq" */
export enum GameInformationStq_Update_Column {
  /** column name */
  Id = 'id'
}

export type GameInformationStq_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GameInformationStq_Set_Input>;
  /** filter the rows which have to be updated */
  where: GameInformationStq_Bool_Exp;
};

/** columns and relationships of "game_information_template" */
export type GameInformationTemplate = {
  __typename?: 'gameInformationTemplate';
  /** An array relationship */
  bonuses: Array<Olympics_Event_Stages>;
  /** An aggregate relationship */
  bonuses_aggregate: Olympics_Event_Stages_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']>;
  escapeTime?: Maybe<Scalars['numeric']>;
  eventStartTime?: Maybe<Scalars['numeric']>;
  favicon?: Maybe<Scalars['String']>;
  gameLogo: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  presentationCoverImage?: Maybe<Scalars['String']>;
  presentationFormat: Scalars['String'];
  presentationTitleText?: Maybe<Scalars['String']>;
  /** An object relationship */
  resource?: Maybe<Resources>;
  resourceId?: Maybe<Scalars['uuid']>;
  scoringFormat: Scalars['String'];
  state: Scalars['String'];
  subdomain: Scalars['String'];
  /** An object relationship */
  systemSettings?: Maybe<GameInformationTemplate>;
  systemSettingsId?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "game_information_template" */
export type GameInformationTemplateBonusesArgs = {
  distinct_on?: InputMaybe<Array<Olympics_Event_Stages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Olympics_Event_Stages_Order_By>>;
  where?: InputMaybe<Olympics_Event_Stages_Bool_Exp>;
};


/** columns and relationships of "game_information_template" */
export type GameInformationTemplateBonuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Olympics_Event_Stages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Olympics_Event_Stages_Order_By>>;
  where?: InputMaybe<Olympics_Event_Stages_Bool_Exp>;
};

/** aggregated selection of "game_information_template" */
export type GameInformationTemplate_Aggregate = {
  __typename?: 'gameInformationTemplate_aggregate';
  aggregate?: Maybe<GameInformationTemplate_Aggregate_Fields>;
  nodes: Array<GameInformationTemplate>;
};

/** aggregate fields of "game_information_template" */
export type GameInformationTemplate_Aggregate_Fields = {
  __typename?: 'gameInformationTemplate_aggregate_fields';
  avg?: Maybe<GameInformationTemplate_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<GameInformationTemplate_Max_Fields>;
  min?: Maybe<GameInformationTemplate_Min_Fields>;
  stddev?: Maybe<GameInformationTemplate_Stddev_Fields>;
  stddev_pop?: Maybe<GameInformationTemplate_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<GameInformationTemplate_Stddev_Samp_Fields>;
  sum?: Maybe<GameInformationTemplate_Sum_Fields>;
  var_pop?: Maybe<GameInformationTemplate_Var_Pop_Fields>;
  var_samp?: Maybe<GameInformationTemplate_Var_Samp_Fields>;
  variance?: Maybe<GameInformationTemplate_Variance_Fields>;
};


/** aggregate fields of "game_information_template" */
export type GameInformationTemplate_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<GameInformationTemplate_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type GameInformationTemplate_Avg_Fields = {
  __typename?: 'gameInformationTemplate_avg_fields';
  escapeTime?: Maybe<Scalars['Float']>;
  eventStartTime?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "game_information_template". All fields are combined with a logical 'AND'. */
export type GameInformationTemplate_Bool_Exp = {
  _and?: InputMaybe<Array<GameInformationTemplate_Bool_Exp>>;
  _not?: InputMaybe<GameInformationTemplate_Bool_Exp>;
  _or?: InputMaybe<Array<GameInformationTemplate_Bool_Exp>>;
  bonuses?: InputMaybe<Olympics_Event_Stages_Bool_Exp>;
  bonuses_aggregate?: InputMaybe<Olympics_Event_Stages_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  escapeTime?: InputMaybe<Numeric_Comparison_Exp>;
  eventStartTime?: InputMaybe<Numeric_Comparison_Exp>;
  favicon?: InputMaybe<String_Comparison_Exp>;
  gameLogo?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  presentationCoverImage?: InputMaybe<String_Comparison_Exp>;
  presentationFormat?: InputMaybe<String_Comparison_Exp>;
  presentationTitleText?: InputMaybe<String_Comparison_Exp>;
  resource?: InputMaybe<Resources_Bool_Exp>;
  resourceId?: InputMaybe<Uuid_Comparison_Exp>;
  scoringFormat?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  subdomain?: InputMaybe<String_Comparison_Exp>;
  systemSettings?: InputMaybe<GameInformationTemplate_Bool_Exp>;
  systemSettingsId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "game_information_template" */
export enum GameInformationTemplate_Constraint {
  /** unique or primary key constraint on columns "id" */
  GameInformationTemplatePkey = 'game_information_template_pkey'
}

/** input type for incrementing numeric columns in table "game_information_template" */
export type GameInformationTemplate_Inc_Input = {
  escapeTime?: InputMaybe<Scalars['numeric']>;
  eventStartTime?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "game_information_template" */
export type GameInformationTemplate_Insert_Input = {
  bonuses?: InputMaybe<Olympics_Event_Stages_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  escapeTime?: InputMaybe<Scalars['numeric']>;
  eventStartTime?: InputMaybe<Scalars['numeric']>;
  favicon?: InputMaybe<Scalars['String']>;
  gameLogo?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  presentationCoverImage?: InputMaybe<Scalars['String']>;
  presentationFormat?: InputMaybe<Scalars['String']>;
  presentationTitleText?: InputMaybe<Scalars['String']>;
  resource?: InputMaybe<Resources_Obj_Rel_Insert_Input>;
  resourceId?: InputMaybe<Scalars['uuid']>;
  scoringFormat?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  subdomain?: InputMaybe<Scalars['String']>;
  systemSettings?: InputMaybe<GameInformationTemplate_Obj_Rel_Insert_Input>;
  systemSettingsId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type GameInformationTemplate_Max_Fields = {
  __typename?: 'gameInformationTemplate_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  escapeTime?: Maybe<Scalars['numeric']>;
  eventStartTime?: Maybe<Scalars['numeric']>;
  favicon?: Maybe<Scalars['String']>;
  gameLogo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  presentationCoverImage?: Maybe<Scalars['String']>;
  presentationFormat?: Maybe<Scalars['String']>;
  presentationTitleText?: Maybe<Scalars['String']>;
  resourceId?: Maybe<Scalars['uuid']>;
  scoringFormat?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  subdomain?: Maybe<Scalars['String']>;
  systemSettingsId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type GameInformationTemplate_Min_Fields = {
  __typename?: 'gameInformationTemplate_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  escapeTime?: Maybe<Scalars['numeric']>;
  eventStartTime?: Maybe<Scalars['numeric']>;
  favicon?: Maybe<Scalars['String']>;
  gameLogo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  presentationCoverImage?: Maybe<Scalars['String']>;
  presentationFormat?: Maybe<Scalars['String']>;
  presentationTitleText?: Maybe<Scalars['String']>;
  resourceId?: Maybe<Scalars['uuid']>;
  scoringFormat?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  subdomain?: Maybe<Scalars['String']>;
  systemSettingsId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "game_information_template" */
export type GameInformationTemplate_Mutation_Response = {
  __typename?: 'gameInformationTemplate_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<GameInformationTemplate>;
};

/** input type for inserting object relation for remote table "game_information_template" */
export type GameInformationTemplate_Obj_Rel_Insert_Input = {
  data: GameInformationTemplate_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<GameInformationTemplate_On_Conflict>;
};

/** on_conflict condition type for table "game_information_template" */
export type GameInformationTemplate_On_Conflict = {
  constraint: GameInformationTemplate_Constraint;
  update_columns?: Array<GameInformationTemplate_Update_Column>;
  where?: InputMaybe<GameInformationTemplate_Bool_Exp>;
};

/** Ordering options when selecting data from "game_information_template". */
export type GameInformationTemplate_Order_By = {
  bonuses_aggregate?: InputMaybe<Olympics_Event_Stages_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  escapeTime?: InputMaybe<Order_By>;
  eventStartTime?: InputMaybe<Order_By>;
  favicon?: InputMaybe<Order_By>;
  gameLogo?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  presentationCoverImage?: InputMaybe<Order_By>;
  presentationFormat?: InputMaybe<Order_By>;
  presentationTitleText?: InputMaybe<Order_By>;
  resource?: InputMaybe<Resources_Order_By>;
  resourceId?: InputMaybe<Order_By>;
  scoringFormat?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  subdomain?: InputMaybe<Order_By>;
  systemSettings?: InputMaybe<GameInformationTemplate_Order_By>;
  systemSettingsId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: game_information_template */
export type GameInformationTemplate_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "game_information_template" */
export enum GameInformationTemplate_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EscapeTime = 'escapeTime',
  /** column name */
  EventStartTime = 'eventStartTime',
  /** column name */
  Favicon = 'favicon',
  /** column name */
  GameLogo = 'gameLogo',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PresentationCoverImage = 'presentationCoverImage',
  /** column name */
  PresentationFormat = 'presentationFormat',
  /** column name */
  PresentationTitleText = 'presentationTitleText',
  /** column name */
  ResourceId = 'resourceId',
  /** column name */
  ScoringFormat = 'scoringFormat',
  /** column name */
  State = 'state',
  /** column name */
  Subdomain = 'subdomain',
  /** column name */
  SystemSettingsId = 'systemSettingsId'
}

/** input type for updating data in table "game_information_template" */
export type GameInformationTemplate_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  escapeTime?: InputMaybe<Scalars['numeric']>;
  eventStartTime?: InputMaybe<Scalars['numeric']>;
  favicon?: InputMaybe<Scalars['String']>;
  gameLogo?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  presentationCoverImage?: InputMaybe<Scalars['String']>;
  presentationFormat?: InputMaybe<Scalars['String']>;
  presentationTitleText?: InputMaybe<Scalars['String']>;
  resourceId?: InputMaybe<Scalars['uuid']>;
  scoringFormat?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  subdomain?: InputMaybe<Scalars['String']>;
  systemSettingsId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type GameInformationTemplate_Stddev_Fields = {
  __typename?: 'gameInformationTemplate_stddev_fields';
  escapeTime?: Maybe<Scalars['Float']>;
  eventStartTime?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type GameInformationTemplate_Stddev_Pop_Fields = {
  __typename?: 'gameInformationTemplate_stddev_pop_fields';
  escapeTime?: Maybe<Scalars['Float']>;
  eventStartTime?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type GameInformationTemplate_Stddev_Samp_Fields = {
  __typename?: 'gameInformationTemplate_stddev_samp_fields';
  escapeTime?: Maybe<Scalars['Float']>;
  eventStartTime?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "gameInformationTemplate" */
export type GameInformationTemplate_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: GameInformationTemplate_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GameInformationTemplate_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  escapeTime?: InputMaybe<Scalars['numeric']>;
  eventStartTime?: InputMaybe<Scalars['numeric']>;
  favicon?: InputMaybe<Scalars['String']>;
  gameLogo?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  presentationCoverImage?: InputMaybe<Scalars['String']>;
  presentationFormat?: InputMaybe<Scalars['String']>;
  presentationTitleText?: InputMaybe<Scalars['String']>;
  resourceId?: InputMaybe<Scalars['uuid']>;
  scoringFormat?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  subdomain?: InputMaybe<Scalars['String']>;
  systemSettingsId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type GameInformationTemplate_Sum_Fields = {
  __typename?: 'gameInformationTemplate_sum_fields';
  escapeTime?: Maybe<Scalars['numeric']>;
  eventStartTime?: Maybe<Scalars['numeric']>;
};

/** update columns of table "game_information_template" */
export enum GameInformationTemplate_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EscapeTime = 'escapeTime',
  /** column name */
  EventStartTime = 'eventStartTime',
  /** column name */
  Favicon = 'favicon',
  /** column name */
  GameLogo = 'gameLogo',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PresentationCoverImage = 'presentationCoverImage',
  /** column name */
  PresentationFormat = 'presentationFormat',
  /** column name */
  PresentationTitleText = 'presentationTitleText',
  /** column name */
  ResourceId = 'resourceId',
  /** column name */
  ScoringFormat = 'scoringFormat',
  /** column name */
  State = 'state',
  /** column name */
  Subdomain = 'subdomain',
  /** column name */
  SystemSettingsId = 'systemSettingsId'
}

export type GameInformationTemplate_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<GameInformationTemplate_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GameInformationTemplate_Set_Input>;
  /** filter the rows which have to be updated */
  where: GameInformationTemplate_Bool_Exp;
};

/** aggregate var_pop on columns */
export type GameInformationTemplate_Var_Pop_Fields = {
  __typename?: 'gameInformationTemplate_var_pop_fields';
  escapeTime?: Maybe<Scalars['Float']>;
  eventStartTime?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type GameInformationTemplate_Var_Samp_Fields = {
  __typename?: 'gameInformationTemplate_var_samp_fields';
  escapeTime?: Maybe<Scalars['Float']>;
  eventStartTime?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type GameInformationTemplate_Variance_Fields = {
  __typename?: 'gameInformationTemplate_variance_fields';
  escapeTime?: Maybe<Scalars['Float']>;
  eventStartTime?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "game_permissions" */
export type GamePermissions = {
  __typename?: 'gamePermissions';
  game: Scalars['String'];
  /** An object relationship */
  gamePermissions: UserMetadata;
  id: Scalars['uuid'];
  permission: Scalars['String'];
  userMetadataId: Scalars['uuid'];
};

/** aggregated selection of "game_permissions" */
export type GamePermissions_Aggregate = {
  __typename?: 'gamePermissions_aggregate';
  aggregate?: Maybe<GamePermissions_Aggregate_Fields>;
  nodes: Array<GamePermissions>;
};

export type GamePermissions_Aggregate_Bool_Exp = {
  count?: InputMaybe<GamePermissions_Aggregate_Bool_Exp_Count>;
};

export type GamePermissions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<GamePermissions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<GamePermissions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "game_permissions" */
export type GamePermissions_Aggregate_Fields = {
  __typename?: 'gamePermissions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<GamePermissions_Max_Fields>;
  min?: Maybe<GamePermissions_Min_Fields>;
};


/** aggregate fields of "game_permissions" */
export type GamePermissions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<GamePermissions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "game_permissions" */
export type GamePermissions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<GamePermissions_Max_Order_By>;
  min?: InputMaybe<GamePermissions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "game_permissions" */
export type GamePermissions_Arr_Rel_Insert_Input = {
  data: Array<GamePermissions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<GamePermissions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "game_permissions". All fields are combined with a logical 'AND'. */
export type GamePermissions_Bool_Exp = {
  _and?: InputMaybe<Array<GamePermissions_Bool_Exp>>;
  _not?: InputMaybe<GamePermissions_Bool_Exp>;
  _or?: InputMaybe<Array<GamePermissions_Bool_Exp>>;
  game?: InputMaybe<String_Comparison_Exp>;
  gamePermissions?: InputMaybe<UserMetadata_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  permission?: InputMaybe<String_Comparison_Exp>;
  userMetadataId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "game_permissions" */
export enum GamePermissions_Constraint {
  /** unique or primary key constraint on columns "id" */
  GamePermissionsPkey = 'game_permissions_pkey'
}

/** input type for inserting data into table "game_permissions" */
export type GamePermissions_Insert_Input = {
  game?: InputMaybe<Scalars['String']>;
  gamePermissions?: InputMaybe<UserMetadata_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  permission?: InputMaybe<Scalars['String']>;
  userMetadataId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type GamePermissions_Max_Fields = {
  __typename?: 'gamePermissions_max_fields';
  game?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  permission?: Maybe<Scalars['String']>;
  userMetadataId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "game_permissions" */
export type GamePermissions_Max_Order_By = {
  game?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  permission?: InputMaybe<Order_By>;
  userMetadataId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type GamePermissions_Min_Fields = {
  __typename?: 'gamePermissions_min_fields';
  game?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  permission?: Maybe<Scalars['String']>;
  userMetadataId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "game_permissions" */
export type GamePermissions_Min_Order_By = {
  game?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  permission?: InputMaybe<Order_By>;
  userMetadataId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "game_permissions" */
export type GamePermissions_Mutation_Response = {
  __typename?: 'gamePermissions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<GamePermissions>;
};

/** on_conflict condition type for table "game_permissions" */
export type GamePermissions_On_Conflict = {
  constraint: GamePermissions_Constraint;
  update_columns?: Array<GamePermissions_Update_Column>;
  where?: InputMaybe<GamePermissions_Bool_Exp>;
};

/** Ordering options when selecting data from "game_permissions". */
export type GamePermissions_Order_By = {
  game?: InputMaybe<Order_By>;
  gamePermissions?: InputMaybe<UserMetadata_Order_By>;
  id?: InputMaybe<Order_By>;
  permission?: InputMaybe<Order_By>;
  userMetadataId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: game_permissions */
export type GamePermissions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "game_permissions" */
export enum GamePermissions_Select_Column {
  /** column name */
  Game = 'game',
  /** column name */
  Id = 'id',
  /** column name */
  Permission = 'permission',
  /** column name */
  UserMetadataId = 'userMetadataId'
}

/** input type for updating data in table "game_permissions" */
export type GamePermissions_Set_Input = {
  game?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  permission?: InputMaybe<Scalars['String']>;
  userMetadataId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "gamePermissions" */
export type GamePermissions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: GamePermissions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GamePermissions_Stream_Cursor_Value_Input = {
  game?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  permission?: InputMaybe<Scalars['String']>;
  userMetadataId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "game_permissions" */
export enum GamePermissions_Update_Column {
  /** column name */
  Game = 'game',
  /** column name */
  Id = 'id',
  /** column name */
  Permission = 'permission',
  /** column name */
  UserMetadataId = 'userMetadataId'
}

export type GamePermissions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GamePermissions_Set_Input>;
  /** filter the rows which have to be updated */
  where: GamePermissions_Bool_Exp;
};

/** columns and relationships of "game_templates" */
export type GameTemplates = {
  __typename?: 'gameTemplates';
  id: Scalars['uuid'];
  name: Scalars['String'];
};

/** aggregated selection of "game_templates" */
export type GameTemplates_Aggregate = {
  __typename?: 'gameTemplates_aggregate';
  aggregate?: Maybe<GameTemplates_Aggregate_Fields>;
  nodes: Array<GameTemplates>;
};

/** aggregate fields of "game_templates" */
export type GameTemplates_Aggregate_Fields = {
  __typename?: 'gameTemplates_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<GameTemplates_Max_Fields>;
  min?: Maybe<GameTemplates_Min_Fields>;
};


/** aggregate fields of "game_templates" */
export type GameTemplates_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<GameTemplates_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "game_templates". All fields are combined with a logical 'AND'. */
export type GameTemplates_Bool_Exp = {
  _and?: InputMaybe<Array<GameTemplates_Bool_Exp>>;
  _not?: InputMaybe<GameTemplates_Bool_Exp>;
  _or?: InputMaybe<Array<GameTemplates_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "game_templates" */
export enum GameTemplates_Constraint {
  /** unique or primary key constraint on columns "id" */
  GameTemplatesPkey = 'game_templates_pkey'
}

/** input type for inserting data into table "game_templates" */
export type GameTemplates_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type GameTemplates_Max_Fields = {
  __typename?: 'gameTemplates_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type GameTemplates_Min_Fields = {
  __typename?: 'gameTemplates_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "game_templates" */
export type GameTemplates_Mutation_Response = {
  __typename?: 'gameTemplates_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<GameTemplates>;
};

/** on_conflict condition type for table "game_templates" */
export type GameTemplates_On_Conflict = {
  constraint: GameTemplates_Constraint;
  update_columns?: Array<GameTemplates_Update_Column>;
  where?: InputMaybe<GameTemplates_Bool_Exp>;
};

/** Ordering options when selecting data from "game_templates". */
export type GameTemplates_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: game_templates */
export type GameTemplates_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "game_templates" */
export enum GameTemplates_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "game_templates" */
export type GameTemplates_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "gameTemplates" */
export type GameTemplates_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: GameTemplates_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GameTemplates_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "game_templates" */
export enum GameTemplates_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type GameTemplates_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GameTemplates_Set_Input>;
  /** filter the rows which have to be updated */
  where: GameTemplates_Bool_Exp;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "matchup_settings" */
export type MatchupSettings = {
  __typename?: 'matchupSettings';
  defaultQuestions: Scalars['Int'];
  /** An array relationship */
  gameInformation: Array<GameInformationFeud>;
  /** An aggregate relationship */
  gameInformation_aggregate: GameInformationFeud_Aggregate;
  gameType: Scalars['String'];
  id: Scalars['uuid'];
  questions: Scalars['Int'];
  teams: Scalars['Int'];
};


/** columns and relationships of "matchup_settings" */
export type MatchupSettingsGameInformationArgs = {
  distinct_on?: InputMaybe<Array<GameInformationFeud_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationFeud_Order_By>>;
  where?: InputMaybe<GameInformationFeud_Bool_Exp>;
};


/** columns and relationships of "matchup_settings" */
export type MatchupSettingsGameInformation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameInformationFeud_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationFeud_Order_By>>;
  where?: InputMaybe<GameInformationFeud_Bool_Exp>;
};

/** aggregated selection of "matchup_settings" */
export type MatchupSettings_Aggregate = {
  __typename?: 'matchupSettings_aggregate';
  aggregate?: Maybe<MatchupSettings_Aggregate_Fields>;
  nodes: Array<MatchupSettings>;
};

/** aggregate fields of "matchup_settings" */
export type MatchupSettings_Aggregate_Fields = {
  __typename?: 'matchupSettings_aggregate_fields';
  avg?: Maybe<MatchupSettings_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<MatchupSettings_Max_Fields>;
  min?: Maybe<MatchupSettings_Min_Fields>;
  stddev?: Maybe<MatchupSettings_Stddev_Fields>;
  stddev_pop?: Maybe<MatchupSettings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<MatchupSettings_Stddev_Samp_Fields>;
  sum?: Maybe<MatchupSettings_Sum_Fields>;
  var_pop?: Maybe<MatchupSettings_Var_Pop_Fields>;
  var_samp?: Maybe<MatchupSettings_Var_Samp_Fields>;
  variance?: Maybe<MatchupSettings_Variance_Fields>;
};


/** aggregate fields of "matchup_settings" */
export type MatchupSettings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MatchupSettings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type MatchupSettings_Avg_Fields = {
  __typename?: 'matchupSettings_avg_fields';
  defaultQuestions?: Maybe<Scalars['Float']>;
  questions?: Maybe<Scalars['Float']>;
  teams?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "matchup_settings". All fields are combined with a logical 'AND'. */
export type MatchupSettings_Bool_Exp = {
  _and?: InputMaybe<Array<MatchupSettings_Bool_Exp>>;
  _not?: InputMaybe<MatchupSettings_Bool_Exp>;
  _or?: InputMaybe<Array<MatchupSettings_Bool_Exp>>;
  defaultQuestions?: InputMaybe<Int_Comparison_Exp>;
  gameInformation?: InputMaybe<GameInformationFeud_Bool_Exp>;
  gameInformation_aggregate?: InputMaybe<GameInformationFeud_Aggregate_Bool_Exp>;
  gameType?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  questions?: InputMaybe<Int_Comparison_Exp>;
  teams?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "matchup_settings" */
export enum MatchupSettings_Constraint {
  /** unique or primary key constraint on columns "id" */
  MatchupSettingsFeudPkey = 'matchup_settings_feud_pkey'
}

/** input type for incrementing numeric columns in table "matchup_settings" */
export type MatchupSettings_Inc_Input = {
  defaultQuestions?: InputMaybe<Scalars['Int']>;
  questions?: InputMaybe<Scalars['Int']>;
  teams?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "matchup_settings" */
export type MatchupSettings_Insert_Input = {
  defaultQuestions?: InputMaybe<Scalars['Int']>;
  gameInformation?: InputMaybe<GameInformationFeud_Arr_Rel_Insert_Input>;
  gameType?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  questions?: InputMaybe<Scalars['Int']>;
  teams?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type MatchupSettings_Max_Fields = {
  __typename?: 'matchupSettings_max_fields';
  defaultQuestions?: Maybe<Scalars['Int']>;
  gameType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  questions?: Maybe<Scalars['Int']>;
  teams?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type MatchupSettings_Min_Fields = {
  __typename?: 'matchupSettings_min_fields';
  defaultQuestions?: Maybe<Scalars['Int']>;
  gameType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  questions?: Maybe<Scalars['Int']>;
  teams?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "matchup_settings" */
export type MatchupSettings_Mutation_Response = {
  __typename?: 'matchupSettings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<MatchupSettings>;
};

/** input type for inserting object relation for remote table "matchup_settings" */
export type MatchupSettings_Obj_Rel_Insert_Input = {
  data: MatchupSettings_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<MatchupSettings_On_Conflict>;
};

/** on_conflict condition type for table "matchup_settings" */
export type MatchupSettings_On_Conflict = {
  constraint: MatchupSettings_Constraint;
  update_columns?: Array<MatchupSettings_Update_Column>;
  where?: InputMaybe<MatchupSettings_Bool_Exp>;
};

/** Ordering options when selecting data from "matchup_settings". */
export type MatchupSettings_Order_By = {
  defaultQuestions?: InputMaybe<Order_By>;
  gameInformation_aggregate?: InputMaybe<GameInformationFeud_Aggregate_Order_By>;
  gameType?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  questions?: InputMaybe<Order_By>;
  teams?: InputMaybe<Order_By>;
};

/** primary key columns input for table: matchup_settings */
export type MatchupSettings_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "matchup_settings" */
export enum MatchupSettings_Select_Column {
  /** column name */
  DefaultQuestions = 'defaultQuestions',
  /** column name */
  GameType = 'gameType',
  /** column name */
  Id = 'id',
  /** column name */
  Questions = 'questions',
  /** column name */
  Teams = 'teams'
}

/** input type for updating data in table "matchup_settings" */
export type MatchupSettings_Set_Input = {
  defaultQuestions?: InputMaybe<Scalars['Int']>;
  gameType?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  questions?: InputMaybe<Scalars['Int']>;
  teams?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type MatchupSettings_Stddev_Fields = {
  __typename?: 'matchupSettings_stddev_fields';
  defaultQuestions?: Maybe<Scalars['Float']>;
  questions?: Maybe<Scalars['Float']>;
  teams?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type MatchupSettings_Stddev_Pop_Fields = {
  __typename?: 'matchupSettings_stddev_pop_fields';
  defaultQuestions?: Maybe<Scalars['Float']>;
  questions?: Maybe<Scalars['Float']>;
  teams?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type MatchupSettings_Stddev_Samp_Fields = {
  __typename?: 'matchupSettings_stddev_samp_fields';
  defaultQuestions?: Maybe<Scalars['Float']>;
  questions?: Maybe<Scalars['Float']>;
  teams?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "matchupSettings" */
export type MatchupSettings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MatchupSettings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MatchupSettings_Stream_Cursor_Value_Input = {
  defaultQuestions?: InputMaybe<Scalars['Int']>;
  gameType?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  questions?: InputMaybe<Scalars['Int']>;
  teams?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type MatchupSettings_Sum_Fields = {
  __typename?: 'matchupSettings_sum_fields';
  defaultQuestions?: Maybe<Scalars['Int']>;
  questions?: Maybe<Scalars['Int']>;
  teams?: Maybe<Scalars['Int']>;
};

/** update columns of table "matchup_settings" */
export enum MatchupSettings_Update_Column {
  /** column name */
  DefaultQuestions = 'defaultQuestions',
  /** column name */
  GameType = 'gameType',
  /** column name */
  Id = 'id',
  /** column name */
  Questions = 'questions',
  /** column name */
  Teams = 'teams'
}

export type MatchupSettings_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<MatchupSettings_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MatchupSettings_Set_Input>;
  /** filter the rows which have to be updated */
  where: MatchupSettings_Bool_Exp;
};

/** aggregate var_pop on columns */
export type MatchupSettings_Var_Pop_Fields = {
  __typename?: 'matchupSettings_var_pop_fields';
  defaultQuestions?: Maybe<Scalars['Float']>;
  questions?: Maybe<Scalars['Float']>;
  teams?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type MatchupSettings_Var_Samp_Fields = {
  __typename?: 'matchupSettings_var_samp_fields';
  defaultQuestions?: Maybe<Scalars['Float']>;
  questions?: Maybe<Scalars['Float']>;
  teams?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type MatchupSettings_Variance_Fields = {
  __typename?: 'matchupSettings_variance_fields';
  defaultQuestions?: Maybe<Scalars['Float']>;
  questions?: Maybe<Scalars['Float']>;
  teams?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete single row from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** delete data from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** delete data from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "category_questions" */
  delete_categoryQuestions?: Maybe<CategoryQuestions_Mutation_Response>;
  /** delete single row from the table: "category_questions" */
  delete_categoryQuestions_by_pk?: Maybe<CategoryQuestions>;
  /** delete data from the table: "collection_questions" */
  delete_collectionQuestions?: Maybe<CollectionQuestions_Mutation_Response>;
  /** delete single row from the table: "collection_questions" */
  delete_collectionQuestions_by_pk?: Maybe<CollectionQuestions>;
  /** delete data from the table: "collections" */
  delete_collections?: Maybe<Collections_Mutation_Response>;
  /** delete single row from the table: "collections" */
  delete_collections_by_pk?: Maybe<Collections>;
  /** delete data from the table: "event_hosts" */
  delete_eventHosts?: Maybe<EventHosts_Mutation_Response>;
  /** delete single row from the table: "event_hosts" */
  delete_eventHosts_by_pk?: Maybe<EventHosts>;
  /** delete data from the table: "olympics.event_leader_board" */
  delete_eventLeaderBoard?: Maybe<EventLeaderBoard_Mutation_Response>;
  /** delete single row from the table: "olympics.event_leader_board" */
  delete_eventLeaderBoard_by_pk?: Maybe<EventLeaderBoard>;
  /** delete data from the table: "event_codes" */
  delete_event_codes?: Maybe<Event_Codes_Mutation_Response>;
  /** delete single row from the table: "event_codes" */
  delete_event_codes_by_pk?: Maybe<Event_Codes>;
  /** delete data from the table: "events" */
  delete_events?: Maybe<Events_Mutation_Response>;
  /** delete single row from the table: "events" */
  delete_events_by_pk?: Maybe<Events>;
  /** delete data from the table: "feud_old.games_old" */
  delete_feud_old_games_old?: Maybe<Feud_Old_Games_Old_Mutation_Response>;
  /** delete single row from the table: "feud_old.games_old" */
  delete_feud_old_games_old_by_pk?: Maybe<Feud_Old_Games_Old>;
  /** delete data from the table: "sketchWars.game_information_collections" */
  delete_gameInformationCollections?: Maybe<GameInformationCollections_Mutation_Response>;
  /** delete single row from the table: "sketchWars.game_information_collections" */
  delete_gameInformationCollections_by_pk?: Maybe<GameInformationCollections>;
  /** delete data from the table: "game_information_feud" */
  delete_gameInformationFeud?: Maybe<GameInformationFeud_Mutation_Response>;
  /** delete single row from the table: "game_information_feud" */
  delete_gameInformationFeud_by_pk?: Maybe<GameInformationFeud>;
  /** delete data from the table: "olympics.game_information" */
  delete_gameInformationOlympics?: Maybe<GameInformationOlympics_Mutation_Response>;
  /** delete single row from the table: "olympics.game_information" */
  delete_gameInformationOlympics_by_pk?: Maybe<GameInformationOlympics>;
  /** delete data from the table: "sketchWars.game_information_sketch_wars" */
  delete_gameInformationSketchWars?: Maybe<GameInformationSketchWars_Mutation_Response>;
  /** delete single row from the table: "sketchWars.game_information_sketch_wars" */
  delete_gameInformationSketchWars_by_pk?: Maybe<GameInformationSketchWars>;
  /** delete data from the table: "game_information_stq" */
  delete_gameInformationStq?: Maybe<GameInformationStq_Mutation_Response>;
  /** delete single row from the table: "game_information_stq" */
  delete_gameInformationStq_by_pk?: Maybe<GameInformationStq>;
  /** delete data from the table: "game_information_template" */
  delete_gameInformationTemplate?: Maybe<GameInformationTemplate_Mutation_Response>;
  /** delete single row from the table: "game_information_template" */
  delete_gameInformationTemplate_by_pk?: Maybe<GameInformationTemplate>;
  /** delete data from the table: "game_permissions" */
  delete_gamePermissions?: Maybe<GamePermissions_Mutation_Response>;
  /** delete single row from the table: "game_permissions" */
  delete_gamePermissions_by_pk?: Maybe<GamePermissions>;
  /** delete data from the table: "game_templates" */
  delete_gameTemplates?: Maybe<GameTemplates_Mutation_Response>;
  /** delete single row from the table: "game_templates" */
  delete_gameTemplates_by_pk?: Maybe<GameTemplates>;
  /** delete data from the table: "matchup_settings" */
  delete_matchupSettings?: Maybe<MatchupSettings_Mutation_Response>;
  /** delete single row from the table: "matchup_settings" */
  delete_matchupSettings_by_pk?: Maybe<MatchupSettings>;
  /** delete data from the table: "olympics.themes" */
  delete_olympicsThemes?: Maybe<OlympicsThemes_Mutation_Response>;
  /** delete single row from the table: "olympics.themes" */
  delete_olympicsThemes_by_pk?: Maybe<OlympicsThemes>;
  /** delete data from the table: "olympics.event_stages" */
  delete_olympics_event_stages?: Maybe<Olympics_Event_Stages_Mutation_Response>;
  /** delete single row from the table: "olympics.event_stages" */
  delete_olympics_event_stages_by_pk?: Maybe<Olympics_Event_Stages>;
  /** delete data from the table: "players" */
  delete_players?: Maybe<Players_Mutation_Response>;
  /** delete single row from the table: "players" */
  delete_players_by_pk?: Maybe<Players>;
  /** delete data from the table: "question_answers" */
  delete_questionAnswers?: Maybe<QuestionAnswers_Mutation_Response>;
  /** delete single row from the table: "question_answers" */
  delete_questionAnswers_by_pk?: Maybe<QuestionAnswers>;
  /** delete data from the table: "questions" */
  delete_questions?: Maybe<Questions_Mutation_Response>;
  /** delete single row from the table: "questions" */
  delete_questions_by_pk?: Maybe<Questions>;
  /** delete data from the table: "resources" */
  delete_resources?: Maybe<Resources_Mutation_Response>;
  /** delete single row from the table: "resources" */
  delete_resources_by_pk?: Maybe<Resources>;
  /** delete data from the table: "sources" */
  delete_sources?: Maybe<Sources_Mutation_Response>;
  /** delete single row from the table: "sources" */
  delete_sources_by_pk?: Maybe<Sources>;
  /** delete data from the table: "teams" */
  delete_teams?: Maybe<Teams_Mutation_Response>;
  /** delete single row from the table: "teams" */
  delete_teams_by_pk?: Maybe<Teams>;
  /** delete data from the table: "themes" */
  delete_themes?: Maybe<Themes_Mutation_Response>;
  /** delete single row from the table: "themes" */
  delete_themes_by_pk?: Maybe<Themes>;
  /** delete data from the table: "user_metadata" */
  delete_userMetadata?: Maybe<UserMetadata_Mutation_Response>;
  /** delete single row from the table: "user_metadata" */
  delete_userMetadata_by_pk?: Maybe<UserMetadata>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert a single row into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** insert data into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** insert data into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "category_questions" */
  insert_categoryQuestions?: Maybe<CategoryQuestions_Mutation_Response>;
  /** insert a single row into the table: "category_questions" */
  insert_categoryQuestions_one?: Maybe<CategoryQuestions>;
  /** insert data into the table: "collection_questions" */
  insert_collectionQuestions?: Maybe<CollectionQuestions_Mutation_Response>;
  /** insert a single row into the table: "collection_questions" */
  insert_collectionQuestions_one?: Maybe<CollectionQuestions>;
  /** insert data into the table: "collections" */
  insert_collections?: Maybe<Collections_Mutation_Response>;
  /** insert a single row into the table: "collections" */
  insert_collections_one?: Maybe<Collections>;
  /** insert data into the table: "event_hosts" */
  insert_eventHosts?: Maybe<EventHosts_Mutation_Response>;
  /** insert a single row into the table: "event_hosts" */
  insert_eventHosts_one?: Maybe<EventHosts>;
  /** insert data into the table: "olympics.event_leader_board" */
  insert_eventLeaderBoard?: Maybe<EventLeaderBoard_Mutation_Response>;
  /** insert a single row into the table: "olympics.event_leader_board" */
  insert_eventLeaderBoard_one?: Maybe<EventLeaderBoard>;
  /** insert data into the table: "event_codes" */
  insert_event_codes?: Maybe<Event_Codes_Mutation_Response>;
  /** insert a single row into the table: "event_codes" */
  insert_event_codes_one?: Maybe<Event_Codes>;
  /** insert data into the table: "events" */
  insert_events?: Maybe<Events_Mutation_Response>;
  /** insert a single row into the table: "events" */
  insert_events_one?: Maybe<Events>;
  /** insert data into the table: "feud_old.games_old" */
  insert_feud_old_games_old?: Maybe<Feud_Old_Games_Old_Mutation_Response>;
  /** insert a single row into the table: "feud_old.games_old" */
  insert_feud_old_games_old_one?: Maybe<Feud_Old_Games_Old>;
  /** insert data into the table: "sketchWars.game_information_collections" */
  insert_gameInformationCollections?: Maybe<GameInformationCollections_Mutation_Response>;
  /** insert a single row into the table: "sketchWars.game_information_collections" */
  insert_gameInformationCollections_one?: Maybe<GameInformationCollections>;
  /** insert data into the table: "game_information_feud" */
  insert_gameInformationFeud?: Maybe<GameInformationFeud_Mutation_Response>;
  /** insert a single row into the table: "game_information_feud" */
  insert_gameInformationFeud_one?: Maybe<GameInformationFeud>;
  /** insert data into the table: "olympics.game_information" */
  insert_gameInformationOlympics?: Maybe<GameInformationOlympics_Mutation_Response>;
  /** insert a single row into the table: "olympics.game_information" */
  insert_gameInformationOlympics_one?: Maybe<GameInformationOlympics>;
  /** insert data into the table: "sketchWars.game_information_sketch_wars" */
  insert_gameInformationSketchWars?: Maybe<GameInformationSketchWars_Mutation_Response>;
  /** insert a single row into the table: "sketchWars.game_information_sketch_wars" */
  insert_gameInformationSketchWars_one?: Maybe<GameInformationSketchWars>;
  /** insert data into the table: "game_information_stq" */
  insert_gameInformationStq?: Maybe<GameInformationStq_Mutation_Response>;
  /** insert a single row into the table: "game_information_stq" */
  insert_gameInformationStq_one?: Maybe<GameInformationStq>;
  /** insert data into the table: "game_information_template" */
  insert_gameInformationTemplate?: Maybe<GameInformationTemplate_Mutation_Response>;
  /** insert a single row into the table: "game_information_template" */
  insert_gameInformationTemplate_one?: Maybe<GameInformationTemplate>;
  /** insert data into the table: "game_permissions" */
  insert_gamePermissions?: Maybe<GamePermissions_Mutation_Response>;
  /** insert a single row into the table: "game_permissions" */
  insert_gamePermissions_one?: Maybe<GamePermissions>;
  /** insert data into the table: "game_templates" */
  insert_gameTemplates?: Maybe<GameTemplates_Mutation_Response>;
  /** insert a single row into the table: "game_templates" */
  insert_gameTemplates_one?: Maybe<GameTemplates>;
  /** insert data into the table: "matchup_settings" */
  insert_matchupSettings?: Maybe<MatchupSettings_Mutation_Response>;
  /** insert a single row into the table: "matchup_settings" */
  insert_matchupSettings_one?: Maybe<MatchupSettings>;
  /** insert data into the table: "olympics.themes" */
  insert_olympicsThemes?: Maybe<OlympicsThemes_Mutation_Response>;
  /** insert a single row into the table: "olympics.themes" */
  insert_olympicsThemes_one?: Maybe<OlympicsThemes>;
  /** insert data into the table: "olympics.event_stages" */
  insert_olympics_event_stages?: Maybe<Olympics_Event_Stages_Mutation_Response>;
  /** insert a single row into the table: "olympics.event_stages" */
  insert_olympics_event_stages_one?: Maybe<Olympics_Event_Stages>;
  /** insert data into the table: "players" */
  insert_players?: Maybe<Players_Mutation_Response>;
  /** insert a single row into the table: "players" */
  insert_players_one?: Maybe<Players>;
  /** insert data into the table: "question_answers" */
  insert_questionAnswers?: Maybe<QuestionAnswers_Mutation_Response>;
  /** insert a single row into the table: "question_answers" */
  insert_questionAnswers_one?: Maybe<QuestionAnswers>;
  /** insert data into the table: "questions" */
  insert_questions?: Maybe<Questions_Mutation_Response>;
  /** insert a single row into the table: "questions" */
  insert_questions_one?: Maybe<Questions>;
  /** insert data into the table: "resources" */
  insert_resources?: Maybe<Resources_Mutation_Response>;
  /** insert a single row into the table: "resources" */
  insert_resources_one?: Maybe<Resources>;
  /** insert data into the table: "sources" */
  insert_sources?: Maybe<Sources_Mutation_Response>;
  /** insert a single row into the table: "sources" */
  insert_sources_one?: Maybe<Sources>;
  /** insert data into the table: "teams" */
  insert_teams?: Maybe<Teams_Mutation_Response>;
  /** insert a single row into the table: "teams" */
  insert_teams_one?: Maybe<Teams>;
  /** insert data into the table: "themes" */
  insert_themes?: Maybe<Themes_Mutation_Response>;
  /** insert a single row into the table: "themes" */
  insert_themes_one?: Maybe<Themes>;
  /** insert data into the table: "user_metadata" */
  insert_userMetadata?: Maybe<UserMetadata_Mutation_Response>;
  /** insert a single row into the table: "user_metadata" */
  insert_userMetadata_one?: Maybe<UserMetadata>;
  sendEmail: Scalars['Boolean'];
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update single row of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** update data of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** update data of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many?: Maybe<Array<Maybe<AuthProviderRequests_Mutation_Response>>>;
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many?: Maybe<Array<Maybe<AuthProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_token_types" */
  update_authRefreshTokenTypes_many?: Maybe<Array<Maybe<AuthRefreshTokenTypes_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many?: Maybe<Array<Maybe<AuthRefreshTokens_Mutation_Response>>>;
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many?: Maybe<Array<Maybe<AuthRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many?: Maybe<Array<Maybe<AuthUserProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many?: Maybe<Array<Maybe<AuthUserRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_security_keys" */
  update_authUserSecurityKeys_many?: Maybe<Array<Maybe<AuthUserSecurityKeys_Mutation_Response>>>;
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many?: Maybe<Array<Maybe<Buckets_Mutation_Response>>>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
  /** update data of the table: "category_questions" */
  update_categoryQuestions?: Maybe<CategoryQuestions_Mutation_Response>;
  /** update single row of the table: "category_questions" */
  update_categoryQuestions_by_pk?: Maybe<CategoryQuestions>;
  /** update multiples rows of table: "category_questions" */
  update_categoryQuestions_many?: Maybe<Array<Maybe<CategoryQuestions_Mutation_Response>>>;
  /** update data of the table: "collection_questions" */
  update_collectionQuestions?: Maybe<CollectionQuestions_Mutation_Response>;
  /** update single row of the table: "collection_questions" */
  update_collectionQuestions_by_pk?: Maybe<CollectionQuestions>;
  /** update multiples rows of table: "collection_questions" */
  update_collectionQuestions_many?: Maybe<Array<Maybe<CollectionQuestions_Mutation_Response>>>;
  /** update data of the table: "collections" */
  update_collections?: Maybe<Collections_Mutation_Response>;
  /** update single row of the table: "collections" */
  update_collections_by_pk?: Maybe<Collections>;
  /** update multiples rows of table: "collections" */
  update_collections_many?: Maybe<Array<Maybe<Collections_Mutation_Response>>>;
  /** update data of the table: "event_hosts" */
  update_eventHosts?: Maybe<EventHosts_Mutation_Response>;
  /** update single row of the table: "event_hosts" */
  update_eventHosts_by_pk?: Maybe<EventHosts>;
  /** update multiples rows of table: "event_hosts" */
  update_eventHosts_many?: Maybe<Array<Maybe<EventHosts_Mutation_Response>>>;
  /** update data of the table: "olympics.event_leader_board" */
  update_eventLeaderBoard?: Maybe<EventLeaderBoard_Mutation_Response>;
  /** update single row of the table: "olympics.event_leader_board" */
  update_eventLeaderBoard_by_pk?: Maybe<EventLeaderBoard>;
  /** update multiples rows of table: "olympics.event_leader_board" */
  update_eventLeaderBoard_many?: Maybe<Array<Maybe<EventLeaderBoard_Mutation_Response>>>;
  /** update data of the table: "event_codes" */
  update_event_codes?: Maybe<Event_Codes_Mutation_Response>;
  /** update single row of the table: "event_codes" */
  update_event_codes_by_pk?: Maybe<Event_Codes>;
  /** update multiples rows of table: "event_codes" */
  update_event_codes_many?: Maybe<Array<Maybe<Event_Codes_Mutation_Response>>>;
  /** update data of the table: "events" */
  update_events?: Maybe<Events_Mutation_Response>;
  /** update single row of the table: "events" */
  update_events_by_pk?: Maybe<Events>;
  /** update multiples rows of table: "events" */
  update_events_many?: Maybe<Array<Maybe<Events_Mutation_Response>>>;
  /** update data of the table: "feud_old.games_old" */
  update_feud_old_games_old?: Maybe<Feud_Old_Games_Old_Mutation_Response>;
  /** update single row of the table: "feud_old.games_old" */
  update_feud_old_games_old_by_pk?: Maybe<Feud_Old_Games_Old>;
  /** update multiples rows of table: "feud_old.games_old" */
  update_feud_old_games_old_many?: Maybe<Array<Maybe<Feud_Old_Games_Old_Mutation_Response>>>;
  /** update multiples rows of table: "storage.files" */
  update_files_many?: Maybe<Array<Maybe<Files_Mutation_Response>>>;
  /** update data of the table: "sketchWars.game_information_collections" */
  update_gameInformationCollections?: Maybe<GameInformationCollections_Mutation_Response>;
  /** update single row of the table: "sketchWars.game_information_collections" */
  update_gameInformationCollections_by_pk?: Maybe<GameInformationCollections>;
  /** update multiples rows of table: "sketchWars.game_information_collections" */
  update_gameInformationCollections_many?: Maybe<Array<Maybe<GameInformationCollections_Mutation_Response>>>;
  /** update data of the table: "game_information_feud" */
  update_gameInformationFeud?: Maybe<GameInformationFeud_Mutation_Response>;
  /** update single row of the table: "game_information_feud" */
  update_gameInformationFeud_by_pk?: Maybe<GameInformationFeud>;
  /** update multiples rows of table: "game_information_feud" */
  update_gameInformationFeud_many?: Maybe<Array<Maybe<GameInformationFeud_Mutation_Response>>>;
  /** update data of the table: "olympics.game_information" */
  update_gameInformationOlympics?: Maybe<GameInformationOlympics_Mutation_Response>;
  /** update single row of the table: "olympics.game_information" */
  update_gameInformationOlympics_by_pk?: Maybe<GameInformationOlympics>;
  /** update multiples rows of table: "olympics.game_information" */
  update_gameInformationOlympics_many?: Maybe<Array<Maybe<GameInformationOlympics_Mutation_Response>>>;
  /** update data of the table: "sketchWars.game_information_sketch_wars" */
  update_gameInformationSketchWars?: Maybe<GameInformationSketchWars_Mutation_Response>;
  /** update single row of the table: "sketchWars.game_information_sketch_wars" */
  update_gameInformationSketchWars_by_pk?: Maybe<GameInformationSketchWars>;
  /** update multiples rows of table: "sketchWars.game_information_sketch_wars" */
  update_gameInformationSketchWars_many?: Maybe<Array<Maybe<GameInformationSketchWars_Mutation_Response>>>;
  /** update data of the table: "game_information_stq" */
  update_gameInformationStq?: Maybe<GameInformationStq_Mutation_Response>;
  /** update single row of the table: "game_information_stq" */
  update_gameInformationStq_by_pk?: Maybe<GameInformationStq>;
  /** update multiples rows of table: "game_information_stq" */
  update_gameInformationStq_many?: Maybe<Array<Maybe<GameInformationStq_Mutation_Response>>>;
  /** update data of the table: "game_information_template" */
  update_gameInformationTemplate?: Maybe<GameInformationTemplate_Mutation_Response>;
  /** update single row of the table: "game_information_template" */
  update_gameInformationTemplate_by_pk?: Maybe<GameInformationTemplate>;
  /** update multiples rows of table: "game_information_template" */
  update_gameInformationTemplate_many?: Maybe<Array<Maybe<GameInformationTemplate_Mutation_Response>>>;
  /** update data of the table: "game_permissions" */
  update_gamePermissions?: Maybe<GamePermissions_Mutation_Response>;
  /** update single row of the table: "game_permissions" */
  update_gamePermissions_by_pk?: Maybe<GamePermissions>;
  /** update multiples rows of table: "game_permissions" */
  update_gamePermissions_many?: Maybe<Array<Maybe<GamePermissions_Mutation_Response>>>;
  /** update data of the table: "game_templates" */
  update_gameTemplates?: Maybe<GameTemplates_Mutation_Response>;
  /** update single row of the table: "game_templates" */
  update_gameTemplates_by_pk?: Maybe<GameTemplates>;
  /** update multiples rows of table: "game_templates" */
  update_gameTemplates_many?: Maybe<Array<Maybe<GameTemplates_Mutation_Response>>>;
  /** update data of the table: "matchup_settings" */
  update_matchupSettings?: Maybe<MatchupSettings_Mutation_Response>;
  /** update single row of the table: "matchup_settings" */
  update_matchupSettings_by_pk?: Maybe<MatchupSettings>;
  /** update multiples rows of table: "matchup_settings" */
  update_matchupSettings_many?: Maybe<Array<Maybe<MatchupSettings_Mutation_Response>>>;
  /** update data of the table: "olympics.themes" */
  update_olympicsThemes?: Maybe<OlympicsThemes_Mutation_Response>;
  /** update single row of the table: "olympics.themes" */
  update_olympicsThemes_by_pk?: Maybe<OlympicsThemes>;
  /** update multiples rows of table: "olympics.themes" */
  update_olympicsThemes_many?: Maybe<Array<Maybe<OlympicsThemes_Mutation_Response>>>;
  /** update data of the table: "olympics.event_stages" */
  update_olympics_event_stages?: Maybe<Olympics_Event_Stages_Mutation_Response>;
  /** update single row of the table: "olympics.event_stages" */
  update_olympics_event_stages_by_pk?: Maybe<Olympics_Event_Stages>;
  /** update multiples rows of table: "olympics.event_stages" */
  update_olympics_event_stages_many?: Maybe<Array<Maybe<Olympics_Event_Stages_Mutation_Response>>>;
  /** update data of the table: "players" */
  update_players?: Maybe<Players_Mutation_Response>;
  /** update single row of the table: "players" */
  update_players_by_pk?: Maybe<Players>;
  /** update multiples rows of table: "players" */
  update_players_many?: Maybe<Array<Maybe<Players_Mutation_Response>>>;
  /** update data of the table: "question_answers" */
  update_questionAnswers?: Maybe<QuestionAnswers_Mutation_Response>;
  /** update single row of the table: "question_answers" */
  update_questionAnswers_by_pk?: Maybe<QuestionAnswers>;
  /** update multiples rows of table: "question_answers" */
  update_questionAnswers_many?: Maybe<Array<Maybe<QuestionAnswers_Mutation_Response>>>;
  /** update data of the table: "questions" */
  update_questions?: Maybe<Questions_Mutation_Response>;
  /** update single row of the table: "questions" */
  update_questions_by_pk?: Maybe<Questions>;
  /** update multiples rows of table: "questions" */
  update_questions_many?: Maybe<Array<Maybe<Questions_Mutation_Response>>>;
  /** update data of the table: "resources" */
  update_resources?: Maybe<Resources_Mutation_Response>;
  /** update single row of the table: "resources" */
  update_resources_by_pk?: Maybe<Resources>;
  /** update multiples rows of table: "resources" */
  update_resources_many?: Maybe<Array<Maybe<Resources_Mutation_Response>>>;
  /** update data of the table: "sources" */
  update_sources?: Maybe<Sources_Mutation_Response>;
  /** update single row of the table: "sources" */
  update_sources_by_pk?: Maybe<Sources>;
  /** update multiples rows of table: "sources" */
  update_sources_many?: Maybe<Array<Maybe<Sources_Mutation_Response>>>;
  /** update data of the table: "teams" */
  update_teams?: Maybe<Teams_Mutation_Response>;
  /** update single row of the table: "teams" */
  update_teams_by_pk?: Maybe<Teams>;
  /** update multiples rows of table: "teams" */
  update_teams_many?: Maybe<Array<Maybe<Teams_Mutation_Response>>>;
  /** update data of the table: "themes" */
  update_themes?: Maybe<Themes_Mutation_Response>;
  /** update single row of the table: "themes" */
  update_themes_by_pk?: Maybe<Themes>;
  /** update multiples rows of table: "themes" */
  update_themes_many?: Maybe<Array<Maybe<Themes_Mutation_Response>>>;
  /** update data of the table: "user_metadata" */
  update_userMetadata?: Maybe<UserMetadata_Mutation_Response>;
  /** update single row of the table: "user_metadata" */
  update_userMetadata_by_pk?: Maybe<UserMetadata>;
  /** update multiples rows of table: "user_metadata" */
  update_userMetadata_many?: Maybe<Array<Maybe<UserMetadata_Mutation_Response>>>;
  /** update multiples rows of table: "auth.users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypeArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypesArgs = {
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeysArgs = {
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CategoryQuestionsArgs = {
  where: CategoryQuestions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CategoryQuestions_By_PkArgs = {
  categoryId: Scalars['uuid'];
  questionId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CollectionQuestionsArgs = {
  where: CollectionQuestions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CollectionQuestions_By_PkArgs = {
  collectionId: Scalars['uuid'];
  questionId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CollectionsArgs = {
  where: Collections_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Collections_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_EventHostsArgs = {
  where: EventHosts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_EventHosts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_EventLeaderBoardArgs = {
  where: EventLeaderBoard_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_EventLeaderBoard_By_PkArgs = {
  id: Scalars['uuid'];
  stage_id: Scalars['uuid'];
  team_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Event_CodesArgs = {
  where: Event_Codes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Event_Codes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_EventsArgs = {
  where: Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Events_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Feud_Old_Games_OldArgs = {
  where: Feud_Old_Games_Old_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Feud_Old_Games_Old_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GameInformationCollectionsArgs = {
  where: GameInformationCollections_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_GameInformationCollections_By_PkArgs = {
  collectionId: Scalars['uuid'];
  gameInformationId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GameInformationFeudArgs = {
  where: GameInformationFeud_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_GameInformationFeud_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GameInformationOlympicsArgs = {
  where: GameInformationOlympics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_GameInformationOlympics_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GameInformationSketchWarsArgs = {
  where: GameInformationSketchWars_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_GameInformationSketchWars_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GameInformationStqArgs = {
  where: GameInformationStq_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_GameInformationStq_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GameInformationTemplateArgs = {
  where: GameInformationTemplate_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_GameInformationTemplate_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GamePermissionsArgs = {
  where: GamePermissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_GamePermissions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GameTemplatesArgs = {
  where: GameTemplates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_GameTemplates_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_MatchupSettingsArgs = {
  where: MatchupSettings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_MatchupSettings_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_OlympicsThemesArgs = {
  where: OlympicsThemes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_OlympicsThemes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Olympics_Event_StagesArgs = {
  where: Olympics_Event_Stages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Olympics_Event_Stages_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PlayersArgs = {
  where: Players_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Players_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_QuestionAnswersArgs = {
  where: QuestionAnswers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_QuestionAnswers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_QuestionsArgs = {
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Questions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ResourcesArgs = {
  where: Resources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Resources_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SourcesArgs = {
  where: Sources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sources_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TeamsArgs = {
  where: Teams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Teams_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ThemesArgs = {
  where: Themes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Themes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserMetadataArgs = {
  where: UserMetadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UserMetadata_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypeArgs = {
  object: AuthRefreshTokenTypes_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypesArgs = {
  objects: Array<AuthRefreshTokenTypes_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeyArgs = {
  object: AuthUserSecurityKeys_Insert_Input;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeysArgs = {
  objects: Array<AuthUserSecurityKeys_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoryQuestionsArgs = {
  objects: Array<CategoryQuestions_Insert_Input>;
  on_conflict?: InputMaybe<CategoryQuestions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoryQuestions_OneArgs = {
  object: CategoryQuestions_Insert_Input;
  on_conflict?: InputMaybe<CategoryQuestions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CollectionQuestionsArgs = {
  objects: Array<CollectionQuestions_Insert_Input>;
  on_conflict?: InputMaybe<CollectionQuestions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CollectionQuestions_OneArgs = {
  object: CollectionQuestions_Insert_Input;
  on_conflict?: InputMaybe<CollectionQuestions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CollectionsArgs = {
  objects: Array<Collections_Insert_Input>;
  on_conflict?: InputMaybe<Collections_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Collections_OneArgs = {
  object: Collections_Insert_Input;
  on_conflict?: InputMaybe<Collections_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EventHostsArgs = {
  objects: Array<EventHosts_Insert_Input>;
  on_conflict?: InputMaybe<EventHosts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EventHosts_OneArgs = {
  object: EventHosts_Insert_Input;
  on_conflict?: InputMaybe<EventHosts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EventLeaderBoardArgs = {
  objects: Array<EventLeaderBoard_Insert_Input>;
  on_conflict?: InputMaybe<EventLeaderBoard_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EventLeaderBoard_OneArgs = {
  object: EventLeaderBoard_Insert_Input;
  on_conflict?: InputMaybe<EventLeaderBoard_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Event_CodesArgs = {
  objects: Array<Event_Codes_Insert_Input>;
  on_conflict?: InputMaybe<Event_Codes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Event_Codes_OneArgs = {
  object: Event_Codes_Insert_Input;
  on_conflict?: InputMaybe<Event_Codes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EventsArgs = {
  objects: Array<Events_Insert_Input>;
  on_conflict?: InputMaybe<Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Events_OneArgs = {
  object: Events_Insert_Input;
  on_conflict?: InputMaybe<Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feud_Old_Games_OldArgs = {
  objects: Array<Feud_Old_Games_Old_Insert_Input>;
  on_conflict?: InputMaybe<Feud_Old_Games_Old_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feud_Old_Games_Old_OneArgs = {
  object: Feud_Old_Games_Old_Insert_Input;
  on_conflict?: InputMaybe<Feud_Old_Games_Old_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameInformationCollectionsArgs = {
  objects: Array<GameInformationCollections_Insert_Input>;
  on_conflict?: InputMaybe<GameInformationCollections_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameInformationCollections_OneArgs = {
  object: GameInformationCollections_Insert_Input;
  on_conflict?: InputMaybe<GameInformationCollections_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameInformationFeudArgs = {
  objects: Array<GameInformationFeud_Insert_Input>;
  on_conflict?: InputMaybe<GameInformationFeud_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameInformationFeud_OneArgs = {
  object: GameInformationFeud_Insert_Input;
  on_conflict?: InputMaybe<GameInformationFeud_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameInformationOlympicsArgs = {
  objects: Array<GameInformationOlympics_Insert_Input>;
  on_conflict?: InputMaybe<GameInformationOlympics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameInformationOlympics_OneArgs = {
  object: GameInformationOlympics_Insert_Input;
  on_conflict?: InputMaybe<GameInformationOlympics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameInformationSketchWarsArgs = {
  objects: Array<GameInformationSketchWars_Insert_Input>;
  on_conflict?: InputMaybe<GameInformationSketchWars_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameInformationSketchWars_OneArgs = {
  object: GameInformationSketchWars_Insert_Input;
  on_conflict?: InputMaybe<GameInformationSketchWars_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameInformationStqArgs = {
  objects: Array<GameInformationStq_Insert_Input>;
  on_conflict?: InputMaybe<GameInformationStq_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameInformationStq_OneArgs = {
  object: GameInformationStq_Insert_Input;
  on_conflict?: InputMaybe<GameInformationStq_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameInformationTemplateArgs = {
  objects: Array<GameInformationTemplate_Insert_Input>;
  on_conflict?: InputMaybe<GameInformationTemplate_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameInformationTemplate_OneArgs = {
  object: GameInformationTemplate_Insert_Input;
  on_conflict?: InputMaybe<GameInformationTemplate_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GamePermissionsArgs = {
  objects: Array<GamePermissions_Insert_Input>;
  on_conflict?: InputMaybe<GamePermissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GamePermissions_OneArgs = {
  object: GamePermissions_Insert_Input;
  on_conflict?: InputMaybe<GamePermissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameTemplatesArgs = {
  objects: Array<GameTemplates_Insert_Input>;
  on_conflict?: InputMaybe<GameTemplates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameTemplates_OneArgs = {
  object: GameTemplates_Insert_Input;
  on_conflict?: InputMaybe<GameTemplates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MatchupSettingsArgs = {
  objects: Array<MatchupSettings_Insert_Input>;
  on_conflict?: InputMaybe<MatchupSettings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MatchupSettings_OneArgs = {
  object: MatchupSettings_Insert_Input;
  on_conflict?: InputMaybe<MatchupSettings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OlympicsThemesArgs = {
  objects: Array<OlympicsThemes_Insert_Input>;
  on_conflict?: InputMaybe<OlympicsThemes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OlympicsThemes_OneArgs = {
  object: OlympicsThemes_Insert_Input;
  on_conflict?: InputMaybe<OlympicsThemes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Olympics_Event_StagesArgs = {
  objects: Array<Olympics_Event_Stages_Insert_Input>;
  on_conflict?: InputMaybe<Olympics_Event_Stages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Olympics_Event_Stages_OneArgs = {
  object: Olympics_Event_Stages_Insert_Input;
  on_conflict?: InputMaybe<Olympics_Event_Stages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PlayersArgs = {
  objects: Array<Players_Insert_Input>;
  on_conflict?: InputMaybe<Players_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Players_OneArgs = {
  object: Players_Insert_Input;
  on_conflict?: InputMaybe<Players_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestionAnswersArgs = {
  objects: Array<QuestionAnswers_Insert_Input>;
  on_conflict?: InputMaybe<QuestionAnswers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestionAnswers_OneArgs = {
  object: QuestionAnswers_Insert_Input;
  on_conflict?: InputMaybe<QuestionAnswers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestionsArgs = {
  objects: Array<Questions_Insert_Input>;
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questions_OneArgs = {
  object: Questions_Insert_Input;
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ResourcesArgs = {
  objects: Array<Resources_Insert_Input>;
  on_conflict?: InputMaybe<Resources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Resources_OneArgs = {
  object: Resources_Insert_Input;
  on_conflict?: InputMaybe<Resources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SourcesArgs = {
  objects: Array<Sources_Insert_Input>;
  on_conflict?: InputMaybe<Sources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sources_OneArgs = {
  object: Sources_Insert_Input;
  on_conflict?: InputMaybe<Sources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TeamsArgs = {
  objects: Array<Teams_Insert_Input>;
  on_conflict?: InputMaybe<Teams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Teams_OneArgs = {
  object: Teams_Insert_Input;
  on_conflict?: InputMaybe<Teams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ThemesArgs = {
  objects: Array<Themes_Insert_Input>;
  on_conflict?: InputMaybe<Themes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Themes_OneArgs = {
  object: Themes_Insert_Input;
  on_conflict?: InputMaybe<Themes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserMetadataArgs = {
  objects: Array<UserMetadata_Insert_Input>;
  on_conflict?: InputMaybe<UserMetadata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserMetadata_OneArgs = {
  object: UserMetadata_Insert_Input;
  on_conflict?: InputMaybe<UserMetadata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootSendEmailArgs = {
  input: SendEmailInput;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypeArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  pk_columns: AuthRefreshTokenTypes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypesArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeyArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  pk_columns: AuthUserSecurityKeys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeysArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviderRequests_ManyArgs = {
  updates: Array<AuthProviderRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviders_ManyArgs = {
  updates: Array<AuthProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokenTypes_ManyArgs = {
  updates: Array<AuthRefreshTokenTypes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokens_ManyArgs = {
  updates: Array<AuthRefreshTokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRoles_ManyArgs = {
  updates: Array<AuthRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserProviders_ManyArgs = {
  updates: Array<AuthUserProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserRoles_ManyArgs = {
  updates: Array<AuthUserRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserSecurityKeys_ManyArgs = {
  updates: Array<AuthUserSecurityKeys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Buckets_ManyArgs = {
  updates: Array<Buckets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoryQuestionsArgs = {
  _set?: InputMaybe<CategoryQuestions_Set_Input>;
  where: CategoryQuestions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CategoryQuestions_By_PkArgs = {
  _set?: InputMaybe<CategoryQuestions_Set_Input>;
  pk_columns: CategoryQuestions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CategoryQuestions_ManyArgs = {
  updates: Array<CategoryQuestions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CollectionQuestionsArgs = {
  _set?: InputMaybe<CollectionQuestions_Set_Input>;
  where: CollectionQuestions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CollectionQuestions_By_PkArgs = {
  _set?: InputMaybe<CollectionQuestions_Set_Input>;
  pk_columns: CollectionQuestions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CollectionQuestions_ManyArgs = {
  updates: Array<CollectionQuestions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CollectionsArgs = {
  _set?: InputMaybe<Collections_Set_Input>;
  where: Collections_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Collections_By_PkArgs = {
  _set?: InputMaybe<Collections_Set_Input>;
  pk_columns: Collections_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Collections_ManyArgs = {
  updates: Array<Collections_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_EventHostsArgs = {
  _set?: InputMaybe<EventHosts_Set_Input>;
  where: EventHosts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_EventHosts_By_PkArgs = {
  _set?: InputMaybe<EventHosts_Set_Input>;
  pk_columns: EventHosts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EventHosts_ManyArgs = {
  updates: Array<EventHosts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_EventLeaderBoardArgs = {
  _inc?: InputMaybe<EventLeaderBoard_Inc_Input>;
  _set?: InputMaybe<EventLeaderBoard_Set_Input>;
  where: EventLeaderBoard_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_EventLeaderBoard_By_PkArgs = {
  _inc?: InputMaybe<EventLeaderBoard_Inc_Input>;
  _set?: InputMaybe<EventLeaderBoard_Set_Input>;
  pk_columns: EventLeaderBoard_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EventLeaderBoard_ManyArgs = {
  updates: Array<EventLeaderBoard_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Event_CodesArgs = {
  _set?: InputMaybe<Event_Codes_Set_Input>;
  where: Event_Codes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Event_Codes_By_PkArgs = {
  _set?: InputMaybe<Event_Codes_Set_Input>;
  pk_columns: Event_Codes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Event_Codes_ManyArgs = {
  updates: Array<Event_Codes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_EventsArgs = {
  _inc?: InputMaybe<Events_Inc_Input>;
  _set?: InputMaybe<Events_Set_Input>;
  where: Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Events_By_PkArgs = {
  _inc?: InputMaybe<Events_Inc_Input>;
  _set?: InputMaybe<Events_Set_Input>;
  pk_columns: Events_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Events_ManyArgs = {
  updates: Array<Events_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Feud_Old_Games_OldArgs = {
  _inc?: InputMaybe<Feud_Old_Games_Old_Inc_Input>;
  _set?: InputMaybe<Feud_Old_Games_Old_Set_Input>;
  where: Feud_Old_Games_Old_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Feud_Old_Games_Old_By_PkArgs = {
  _inc?: InputMaybe<Feud_Old_Games_Old_Inc_Input>;
  _set?: InputMaybe<Feud_Old_Games_Old_Set_Input>;
  pk_columns: Feud_Old_Games_Old_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Feud_Old_Games_Old_ManyArgs = {
  updates: Array<Feud_Old_Games_Old_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: Array<Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GameInformationCollectionsArgs = {
  _set?: InputMaybe<GameInformationCollections_Set_Input>;
  where: GameInformationCollections_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_GameInformationCollections_By_PkArgs = {
  _set?: InputMaybe<GameInformationCollections_Set_Input>;
  pk_columns: GameInformationCollections_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GameInformationCollections_ManyArgs = {
  updates: Array<GameInformationCollections_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GameInformationFeudArgs = {
  _inc?: InputMaybe<GameInformationFeud_Inc_Input>;
  _set?: InputMaybe<GameInformationFeud_Set_Input>;
  where: GameInformationFeud_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_GameInformationFeud_By_PkArgs = {
  _inc?: InputMaybe<GameInformationFeud_Inc_Input>;
  _set?: InputMaybe<GameInformationFeud_Set_Input>;
  pk_columns: GameInformationFeud_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GameInformationFeud_ManyArgs = {
  updates: Array<GameInformationFeud_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GameInformationOlympicsArgs = {
  _set?: InputMaybe<GameInformationOlympics_Set_Input>;
  where: GameInformationOlympics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_GameInformationOlympics_By_PkArgs = {
  _set?: InputMaybe<GameInformationOlympics_Set_Input>;
  pk_columns: GameInformationOlympics_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GameInformationOlympics_ManyArgs = {
  updates: Array<GameInformationOlympics_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GameInformationSketchWarsArgs = {
  _inc?: InputMaybe<GameInformationSketchWars_Inc_Input>;
  _set?: InputMaybe<GameInformationSketchWars_Set_Input>;
  where: GameInformationSketchWars_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_GameInformationSketchWars_By_PkArgs = {
  _inc?: InputMaybe<GameInformationSketchWars_Inc_Input>;
  _set?: InputMaybe<GameInformationSketchWars_Set_Input>;
  pk_columns: GameInformationSketchWars_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GameInformationSketchWars_ManyArgs = {
  updates: Array<GameInformationSketchWars_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GameInformationStqArgs = {
  _set?: InputMaybe<GameInformationStq_Set_Input>;
  where: GameInformationStq_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_GameInformationStq_By_PkArgs = {
  _set?: InputMaybe<GameInformationStq_Set_Input>;
  pk_columns: GameInformationStq_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GameInformationStq_ManyArgs = {
  updates: Array<GameInformationStq_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GameInformationTemplateArgs = {
  _inc?: InputMaybe<GameInformationTemplate_Inc_Input>;
  _set?: InputMaybe<GameInformationTemplate_Set_Input>;
  where: GameInformationTemplate_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_GameInformationTemplate_By_PkArgs = {
  _inc?: InputMaybe<GameInformationTemplate_Inc_Input>;
  _set?: InputMaybe<GameInformationTemplate_Set_Input>;
  pk_columns: GameInformationTemplate_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GameInformationTemplate_ManyArgs = {
  updates: Array<GameInformationTemplate_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GamePermissionsArgs = {
  _set?: InputMaybe<GamePermissions_Set_Input>;
  where: GamePermissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_GamePermissions_By_PkArgs = {
  _set?: InputMaybe<GamePermissions_Set_Input>;
  pk_columns: GamePermissions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GamePermissions_ManyArgs = {
  updates: Array<GamePermissions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GameTemplatesArgs = {
  _set?: InputMaybe<GameTemplates_Set_Input>;
  where: GameTemplates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_GameTemplates_By_PkArgs = {
  _set?: InputMaybe<GameTemplates_Set_Input>;
  pk_columns: GameTemplates_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GameTemplates_ManyArgs = {
  updates: Array<GameTemplates_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MatchupSettingsArgs = {
  _inc?: InputMaybe<MatchupSettings_Inc_Input>;
  _set?: InputMaybe<MatchupSettings_Set_Input>;
  where: MatchupSettings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_MatchupSettings_By_PkArgs = {
  _inc?: InputMaybe<MatchupSettings_Inc_Input>;
  _set?: InputMaybe<MatchupSettings_Set_Input>;
  pk_columns: MatchupSettings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MatchupSettings_ManyArgs = {
  updates: Array<MatchupSettings_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OlympicsThemesArgs = {
  _set?: InputMaybe<OlympicsThemes_Set_Input>;
  where: OlympicsThemes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_OlympicsThemes_By_PkArgs = {
  _set?: InputMaybe<OlympicsThemes_Set_Input>;
  pk_columns: OlympicsThemes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OlympicsThemes_ManyArgs = {
  updates: Array<OlympicsThemes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Olympics_Event_StagesArgs = {
  _inc?: InputMaybe<Olympics_Event_Stages_Inc_Input>;
  _set?: InputMaybe<Olympics_Event_Stages_Set_Input>;
  where: Olympics_Event_Stages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Olympics_Event_Stages_By_PkArgs = {
  _inc?: InputMaybe<Olympics_Event_Stages_Inc_Input>;
  _set?: InputMaybe<Olympics_Event_Stages_Set_Input>;
  pk_columns: Olympics_Event_Stages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Olympics_Event_Stages_ManyArgs = {
  updates: Array<Olympics_Event_Stages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PlayersArgs = {
  _set?: InputMaybe<Players_Set_Input>;
  where: Players_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Players_By_PkArgs = {
  _set?: InputMaybe<Players_Set_Input>;
  pk_columns: Players_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Players_ManyArgs = {
  updates: Array<Players_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionAnswersArgs = {
  _inc?: InputMaybe<QuestionAnswers_Inc_Input>;
  _set?: InputMaybe<QuestionAnswers_Set_Input>;
  where: QuestionAnswers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionAnswers_By_PkArgs = {
  _inc?: InputMaybe<QuestionAnswers_Inc_Input>;
  _set?: InputMaybe<QuestionAnswers_Set_Input>;
  pk_columns: QuestionAnswers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionAnswers_ManyArgs = {
  updates: Array<QuestionAnswers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionsArgs = {
  _set?: InputMaybe<Questions_Set_Input>;
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Questions_By_PkArgs = {
  _set?: InputMaybe<Questions_Set_Input>;
  pk_columns: Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Questions_ManyArgs = {
  updates: Array<Questions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ResourcesArgs = {
  _set?: InputMaybe<Resources_Set_Input>;
  where: Resources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Resources_By_PkArgs = {
  _set?: InputMaybe<Resources_Set_Input>;
  pk_columns: Resources_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Resources_ManyArgs = {
  updates: Array<Resources_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SourcesArgs = {
  _set?: InputMaybe<Sources_Set_Input>;
  where: Sources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sources_By_PkArgs = {
  _set?: InputMaybe<Sources_Set_Input>;
  pk_columns: Sources_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sources_ManyArgs = {
  updates: Array<Sources_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TeamsArgs = {
  _inc?: InputMaybe<Teams_Inc_Input>;
  _set?: InputMaybe<Teams_Set_Input>;
  where: Teams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Teams_By_PkArgs = {
  _inc?: InputMaybe<Teams_Inc_Input>;
  _set?: InputMaybe<Teams_Set_Input>;
  pk_columns: Teams_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Teams_ManyArgs = {
  updates: Array<Teams_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ThemesArgs = {
  _set?: InputMaybe<Themes_Set_Input>;
  where: Themes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Themes_By_PkArgs = {
  _set?: InputMaybe<Themes_Set_Input>;
  pk_columns: Themes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Themes_ManyArgs = {
  updates: Array<Themes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserMetadataArgs = {
  _set?: InputMaybe<UserMetadata_Set_Input>;
  where: UserMetadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UserMetadata_By_PkArgs = {
  _set?: InputMaybe<UserMetadata_Set_Input>;
  pk_columns: UserMetadata_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserMetadata_ManyArgs = {
  updates: Array<UserMetadata_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** columns and relationships of "olympics.themes" */
export type OlympicsThemes = {
  __typename?: 'olympicsThemes';
  bgImage?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  presentationFormat: Scalars['String'];
  /** An object relationship */
  resource?: Maybe<Resources>;
  resourceId?: Maybe<Scalars['uuid']>;
  scoringFormat: Scalars['String'];
  /** An array relationship */
  stages: Array<Olympics_Event_Stages>;
  /** An aggregate relationship */
  stages_aggregate: Olympics_Event_Stages_Aggregate;
  state: Scalars['String'];
  subdomain?: Maybe<Scalars['String']>;
  themeLogo?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "olympics.themes" */
export type OlympicsThemesStagesArgs = {
  distinct_on?: InputMaybe<Array<Olympics_Event_Stages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Olympics_Event_Stages_Order_By>>;
  where?: InputMaybe<Olympics_Event_Stages_Bool_Exp>;
};


/** columns and relationships of "olympics.themes" */
export type OlympicsThemesStages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Olympics_Event_Stages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Olympics_Event_Stages_Order_By>>;
  where?: InputMaybe<Olympics_Event_Stages_Bool_Exp>;
};

/** aggregated selection of "olympics.themes" */
export type OlympicsThemes_Aggregate = {
  __typename?: 'olympicsThemes_aggregate';
  aggregate?: Maybe<OlympicsThemes_Aggregate_Fields>;
  nodes: Array<OlympicsThemes>;
};

/** aggregate fields of "olympics.themes" */
export type OlympicsThemes_Aggregate_Fields = {
  __typename?: 'olympicsThemes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<OlympicsThemes_Max_Fields>;
  min?: Maybe<OlympicsThemes_Min_Fields>;
};


/** aggregate fields of "olympics.themes" */
export type OlympicsThemes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<OlympicsThemes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "olympics.themes". All fields are combined with a logical 'AND'. */
export type OlympicsThemes_Bool_Exp = {
  _and?: InputMaybe<Array<OlympicsThemes_Bool_Exp>>;
  _not?: InputMaybe<OlympicsThemes_Bool_Exp>;
  _or?: InputMaybe<Array<OlympicsThemes_Bool_Exp>>;
  bgImage?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  presentationFormat?: InputMaybe<String_Comparison_Exp>;
  resource?: InputMaybe<Resources_Bool_Exp>;
  resourceId?: InputMaybe<Uuid_Comparison_Exp>;
  scoringFormat?: InputMaybe<String_Comparison_Exp>;
  stages?: InputMaybe<Olympics_Event_Stages_Bool_Exp>;
  stages_aggregate?: InputMaybe<Olympics_Event_Stages_Aggregate_Bool_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  subdomain?: InputMaybe<String_Comparison_Exp>;
  themeLogo?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "olympics.themes" */
export enum OlympicsThemes_Constraint {
  /** unique or primary key constraint on columns "id" */
  OlympicsThemesPkey = 'olympics_themes_pkey'
}

/** input type for inserting data into table "olympics.themes" */
export type OlympicsThemes_Insert_Input = {
  bgImage?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  presentationFormat?: InputMaybe<Scalars['String']>;
  resource?: InputMaybe<Resources_Obj_Rel_Insert_Input>;
  resourceId?: InputMaybe<Scalars['uuid']>;
  scoringFormat?: InputMaybe<Scalars['String']>;
  stages?: InputMaybe<Olympics_Event_Stages_Arr_Rel_Insert_Input>;
  state?: InputMaybe<Scalars['String']>;
  subdomain?: InputMaybe<Scalars['String']>;
  themeLogo?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type OlympicsThemes_Max_Fields = {
  __typename?: 'olympicsThemes_max_fields';
  bgImage?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  presentationFormat?: Maybe<Scalars['String']>;
  resourceId?: Maybe<Scalars['uuid']>;
  scoringFormat?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  subdomain?: Maybe<Scalars['String']>;
  themeLogo?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type OlympicsThemes_Min_Fields = {
  __typename?: 'olympicsThemes_min_fields';
  bgImage?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  presentationFormat?: Maybe<Scalars['String']>;
  resourceId?: Maybe<Scalars['uuid']>;
  scoringFormat?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  subdomain?: Maybe<Scalars['String']>;
  themeLogo?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "olympics.themes" */
export type OlympicsThemes_Mutation_Response = {
  __typename?: 'olympicsThemes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<OlympicsThemes>;
};

/** input type for inserting object relation for remote table "olympics.themes" */
export type OlympicsThemes_Obj_Rel_Insert_Input = {
  data: OlympicsThemes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<OlympicsThemes_On_Conflict>;
};

/** on_conflict condition type for table "olympics.themes" */
export type OlympicsThemes_On_Conflict = {
  constraint: OlympicsThemes_Constraint;
  update_columns?: Array<OlympicsThemes_Update_Column>;
  where?: InputMaybe<OlympicsThemes_Bool_Exp>;
};

/** Ordering options when selecting data from "olympics.themes". */
export type OlympicsThemes_Order_By = {
  bgImage?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  presentationFormat?: InputMaybe<Order_By>;
  resource?: InputMaybe<Resources_Order_By>;
  resourceId?: InputMaybe<Order_By>;
  scoringFormat?: InputMaybe<Order_By>;
  stages_aggregate?: InputMaybe<Olympics_Event_Stages_Aggregate_Order_By>;
  state?: InputMaybe<Order_By>;
  subdomain?: InputMaybe<Order_By>;
  themeLogo?: InputMaybe<Order_By>;
};

/** primary key columns input for table: olympics.themes */
export type OlympicsThemes_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "olympics.themes" */
export enum OlympicsThemes_Select_Column {
  /** column name */
  BgImage = 'bgImage',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PresentationFormat = 'presentationFormat',
  /** column name */
  ResourceId = 'resourceId',
  /** column name */
  ScoringFormat = 'scoringFormat',
  /** column name */
  State = 'state',
  /** column name */
  Subdomain = 'subdomain',
  /** column name */
  ThemeLogo = 'themeLogo'
}

/** input type for updating data in table "olympics.themes" */
export type OlympicsThemes_Set_Input = {
  bgImage?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  presentationFormat?: InputMaybe<Scalars['String']>;
  resourceId?: InputMaybe<Scalars['uuid']>;
  scoringFormat?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  subdomain?: InputMaybe<Scalars['String']>;
  themeLogo?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "olympicsThemes" */
export type OlympicsThemes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: OlympicsThemes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type OlympicsThemes_Stream_Cursor_Value_Input = {
  bgImage?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  presentationFormat?: InputMaybe<Scalars['String']>;
  resourceId?: InputMaybe<Scalars['uuid']>;
  scoringFormat?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  subdomain?: InputMaybe<Scalars['String']>;
  themeLogo?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "olympics.themes" */
export enum OlympicsThemes_Update_Column {
  /** column name */
  BgImage = 'bgImage',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PresentationFormat = 'presentationFormat',
  /** column name */
  ResourceId = 'resourceId',
  /** column name */
  ScoringFormat = 'scoringFormat',
  /** column name */
  State = 'state',
  /** column name */
  Subdomain = 'subdomain',
  /** column name */
  ThemeLogo = 'themeLogo'
}

export type OlympicsThemes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OlympicsThemes_Set_Input>;
  /** filter the rows which have to be updated */
  where: OlympicsThemes_Bool_Exp;
};

/** columns and relationships of "olympics.event_stages" */
export type Olympics_Event_Stages = {
  __typename?: 'olympics_event_stages';
  /** An object relationship */
  event?: Maybe<Events>;
  eventId?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  /** An array relationship */
  leaderBoards: Array<EventLeaderBoard>;
  /** An aggregate relationship */
  leaderBoards_aggregate: EventLeaderBoard_Aggregate;
  multiplier: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  nextItemId?: Maybe<Scalars['uuid']>;
  prevItemId?: Maybe<Scalars['uuid']>;
  state: Scalars['String'];
  /** An object relationship */
  templateGame?: Maybe<GameInformationTemplate>;
  templateGameId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  theme?: Maybe<OlympicsThemes>;
  themeId?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
};


/** columns and relationships of "olympics.event_stages" */
export type Olympics_Event_StagesLeaderBoardsArgs = {
  distinct_on?: InputMaybe<Array<EventLeaderBoard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventLeaderBoard_Order_By>>;
  where?: InputMaybe<EventLeaderBoard_Bool_Exp>;
};


/** columns and relationships of "olympics.event_stages" */
export type Olympics_Event_StagesLeaderBoards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<EventLeaderBoard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventLeaderBoard_Order_By>>;
  where?: InputMaybe<EventLeaderBoard_Bool_Exp>;
};

/** aggregated selection of "olympics.event_stages" */
export type Olympics_Event_Stages_Aggregate = {
  __typename?: 'olympics_event_stages_aggregate';
  aggregate?: Maybe<Olympics_Event_Stages_Aggregate_Fields>;
  nodes: Array<Olympics_Event_Stages>;
};

export type Olympics_Event_Stages_Aggregate_Bool_Exp = {
  count?: InputMaybe<Olympics_Event_Stages_Aggregate_Bool_Exp_Count>;
};

export type Olympics_Event_Stages_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Olympics_Event_Stages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Olympics_Event_Stages_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "olympics.event_stages" */
export type Olympics_Event_Stages_Aggregate_Fields = {
  __typename?: 'olympics_event_stages_aggregate_fields';
  avg?: Maybe<Olympics_Event_Stages_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Olympics_Event_Stages_Max_Fields>;
  min?: Maybe<Olympics_Event_Stages_Min_Fields>;
  stddev?: Maybe<Olympics_Event_Stages_Stddev_Fields>;
  stddev_pop?: Maybe<Olympics_Event_Stages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Olympics_Event_Stages_Stddev_Samp_Fields>;
  sum?: Maybe<Olympics_Event_Stages_Sum_Fields>;
  var_pop?: Maybe<Olympics_Event_Stages_Var_Pop_Fields>;
  var_samp?: Maybe<Olympics_Event_Stages_Var_Samp_Fields>;
  variance?: Maybe<Olympics_Event_Stages_Variance_Fields>;
};


/** aggregate fields of "olympics.event_stages" */
export type Olympics_Event_Stages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Olympics_Event_Stages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "olympics.event_stages" */
export type Olympics_Event_Stages_Aggregate_Order_By = {
  avg?: InputMaybe<Olympics_Event_Stages_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Olympics_Event_Stages_Max_Order_By>;
  min?: InputMaybe<Olympics_Event_Stages_Min_Order_By>;
  stddev?: InputMaybe<Olympics_Event_Stages_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Olympics_Event_Stages_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Olympics_Event_Stages_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Olympics_Event_Stages_Sum_Order_By>;
  var_pop?: InputMaybe<Olympics_Event_Stages_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Olympics_Event_Stages_Var_Samp_Order_By>;
  variance?: InputMaybe<Olympics_Event_Stages_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "olympics.event_stages" */
export type Olympics_Event_Stages_Arr_Rel_Insert_Input = {
  data: Array<Olympics_Event_Stages_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Olympics_Event_Stages_On_Conflict>;
};

/** aggregate avg on columns */
export type Olympics_Event_Stages_Avg_Fields = {
  __typename?: 'olympics_event_stages_avg_fields';
  multiplier?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "olympics.event_stages" */
export type Olympics_Event_Stages_Avg_Order_By = {
  multiplier?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "olympics.event_stages". All fields are combined with a logical 'AND'. */
export type Olympics_Event_Stages_Bool_Exp = {
  _and?: InputMaybe<Array<Olympics_Event_Stages_Bool_Exp>>;
  _not?: InputMaybe<Olympics_Event_Stages_Bool_Exp>;
  _or?: InputMaybe<Array<Olympics_Event_Stages_Bool_Exp>>;
  event?: InputMaybe<Events_Bool_Exp>;
  eventId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  leaderBoards?: InputMaybe<EventLeaderBoard_Bool_Exp>;
  leaderBoards_aggregate?: InputMaybe<EventLeaderBoard_Aggregate_Bool_Exp>;
  multiplier?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nextItemId?: InputMaybe<Uuid_Comparison_Exp>;
  prevItemId?: InputMaybe<Uuid_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  templateGame?: InputMaybe<GameInformationTemplate_Bool_Exp>;
  templateGameId?: InputMaybe<Uuid_Comparison_Exp>;
  theme?: InputMaybe<OlympicsThemes_Bool_Exp>;
  themeId?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "olympics.event_stages" */
export enum Olympics_Event_Stages_Constraint {
  /** unique or primary key constraint on columns "id" */
  EventStagesPkey = 'event_stages_pkey'
}

/** input type for incrementing numeric columns in table "olympics.event_stages" */
export type Olympics_Event_Stages_Inc_Input = {
  multiplier?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "olympics.event_stages" */
export type Olympics_Event_Stages_Insert_Input = {
  event?: InputMaybe<Events_Obj_Rel_Insert_Input>;
  eventId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  leaderBoards?: InputMaybe<EventLeaderBoard_Arr_Rel_Insert_Input>;
  multiplier?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nextItemId?: InputMaybe<Scalars['uuid']>;
  prevItemId?: InputMaybe<Scalars['uuid']>;
  state?: InputMaybe<Scalars['String']>;
  templateGame?: InputMaybe<GameInformationTemplate_Obj_Rel_Insert_Input>;
  templateGameId?: InputMaybe<Scalars['uuid']>;
  theme?: InputMaybe<OlympicsThemes_Obj_Rel_Insert_Input>;
  themeId?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Olympics_Event_Stages_Max_Fields = {
  __typename?: 'olympics_event_stages_max_fields';
  eventId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  multiplier?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nextItemId?: Maybe<Scalars['uuid']>;
  prevItemId?: Maybe<Scalars['uuid']>;
  state?: Maybe<Scalars['String']>;
  templateGameId?: Maybe<Scalars['uuid']>;
  themeId?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "olympics.event_stages" */
export type Olympics_Event_Stages_Max_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  multiplier?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nextItemId?: InputMaybe<Order_By>;
  prevItemId?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  templateGameId?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Olympics_Event_Stages_Min_Fields = {
  __typename?: 'olympics_event_stages_min_fields';
  eventId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  multiplier?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nextItemId?: Maybe<Scalars['uuid']>;
  prevItemId?: Maybe<Scalars['uuid']>;
  state?: Maybe<Scalars['String']>;
  templateGameId?: Maybe<Scalars['uuid']>;
  themeId?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "olympics.event_stages" */
export type Olympics_Event_Stages_Min_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  multiplier?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nextItemId?: InputMaybe<Order_By>;
  prevItemId?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  templateGameId?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "olympics.event_stages" */
export type Olympics_Event_Stages_Mutation_Response = {
  __typename?: 'olympics_event_stages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Olympics_Event_Stages>;
};

/** input type for inserting object relation for remote table "olympics.event_stages" */
export type Olympics_Event_Stages_Obj_Rel_Insert_Input = {
  data: Olympics_Event_Stages_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Olympics_Event_Stages_On_Conflict>;
};

/** on_conflict condition type for table "olympics.event_stages" */
export type Olympics_Event_Stages_On_Conflict = {
  constraint: Olympics_Event_Stages_Constraint;
  update_columns?: Array<Olympics_Event_Stages_Update_Column>;
  where?: InputMaybe<Olympics_Event_Stages_Bool_Exp>;
};

/** Ordering options when selecting data from "olympics.event_stages". */
export type Olympics_Event_Stages_Order_By = {
  event?: InputMaybe<Events_Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  leaderBoards_aggregate?: InputMaybe<EventLeaderBoard_Aggregate_Order_By>;
  multiplier?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nextItemId?: InputMaybe<Order_By>;
  prevItemId?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  templateGame?: InputMaybe<GameInformationTemplate_Order_By>;
  templateGameId?: InputMaybe<Order_By>;
  theme?: InputMaybe<OlympicsThemes_Order_By>;
  themeId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: olympics.event_stages */
export type Olympics_Event_Stages_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "olympics.event_stages" */
export enum Olympics_Event_Stages_Select_Column {
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  Multiplier = 'multiplier',
  /** column name */
  Name = 'name',
  /** column name */
  NextItemId = 'nextItemId',
  /** column name */
  PrevItemId = 'prevItemId',
  /** column name */
  State = 'state',
  /** column name */
  TemplateGameId = 'templateGameId',
  /** column name */
  ThemeId = 'themeId',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "olympics.event_stages" */
export type Olympics_Event_Stages_Set_Input = {
  eventId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  multiplier?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nextItemId?: InputMaybe<Scalars['uuid']>;
  prevItemId?: InputMaybe<Scalars['uuid']>;
  state?: InputMaybe<Scalars['String']>;
  templateGameId?: InputMaybe<Scalars['uuid']>;
  themeId?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Olympics_Event_Stages_Stddev_Fields = {
  __typename?: 'olympics_event_stages_stddev_fields';
  multiplier?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "olympics.event_stages" */
export type Olympics_Event_Stages_Stddev_Order_By = {
  multiplier?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Olympics_Event_Stages_Stddev_Pop_Fields = {
  __typename?: 'olympics_event_stages_stddev_pop_fields';
  multiplier?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "olympics.event_stages" */
export type Olympics_Event_Stages_Stddev_Pop_Order_By = {
  multiplier?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Olympics_Event_Stages_Stddev_Samp_Fields = {
  __typename?: 'olympics_event_stages_stddev_samp_fields';
  multiplier?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "olympics.event_stages" */
export type Olympics_Event_Stages_Stddev_Samp_Order_By = {
  multiplier?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "olympics_event_stages" */
export type Olympics_Event_Stages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Olympics_Event_Stages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Olympics_Event_Stages_Stream_Cursor_Value_Input = {
  eventId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  multiplier?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nextItemId?: InputMaybe<Scalars['uuid']>;
  prevItemId?: InputMaybe<Scalars['uuid']>;
  state?: InputMaybe<Scalars['String']>;
  templateGameId?: InputMaybe<Scalars['uuid']>;
  themeId?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Olympics_Event_Stages_Sum_Fields = {
  __typename?: 'olympics_event_stages_sum_fields';
  multiplier?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "olympics.event_stages" */
export type Olympics_Event_Stages_Sum_Order_By = {
  multiplier?: InputMaybe<Order_By>;
};

/** update columns of table "olympics.event_stages" */
export enum Olympics_Event_Stages_Update_Column {
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  Multiplier = 'multiplier',
  /** column name */
  Name = 'name',
  /** column name */
  NextItemId = 'nextItemId',
  /** column name */
  PrevItemId = 'prevItemId',
  /** column name */
  State = 'state',
  /** column name */
  TemplateGameId = 'templateGameId',
  /** column name */
  ThemeId = 'themeId',
  /** column name */
  Type = 'type'
}

export type Olympics_Event_Stages_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Olympics_Event_Stages_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Olympics_Event_Stages_Set_Input>;
  /** filter the rows which have to be updated */
  where: Olympics_Event_Stages_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Olympics_Event_Stages_Var_Pop_Fields = {
  __typename?: 'olympics_event_stages_var_pop_fields';
  multiplier?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "olympics.event_stages" */
export type Olympics_Event_Stages_Var_Pop_Order_By = {
  multiplier?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Olympics_Event_Stages_Var_Samp_Fields = {
  __typename?: 'olympics_event_stages_var_samp_fields';
  multiplier?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "olympics.event_stages" */
export type Olympics_Event_Stages_Var_Samp_Order_By = {
  multiplier?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Olympics_Event_Stages_Variance_Fields = {
  __typename?: 'olympics_event_stages_variance_fields';
  multiplier?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "olympics.event_stages" */
export type Olympics_Event_Stages_Variance_Order_By = {
  multiplier?: InputMaybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "players" */
export type Players = {
  __typename?: 'players';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  teamId: Scalars['uuid'];
};

/** aggregated selection of "players" */
export type Players_Aggregate = {
  __typename?: 'players_aggregate';
  aggregate?: Maybe<Players_Aggregate_Fields>;
  nodes: Array<Players>;
};

export type Players_Aggregate_Bool_Exp = {
  count?: InputMaybe<Players_Aggregate_Bool_Exp_Count>;
};

export type Players_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Players_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Players_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "players" */
export type Players_Aggregate_Fields = {
  __typename?: 'players_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Players_Max_Fields>;
  min?: Maybe<Players_Min_Fields>;
};


/** aggregate fields of "players" */
export type Players_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Players_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "players" */
export type Players_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Players_Max_Order_By>;
  min?: InputMaybe<Players_Min_Order_By>;
};

/** input type for inserting array relation for remote table "players" */
export type Players_Arr_Rel_Insert_Input = {
  data: Array<Players_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Players_On_Conflict>;
};

/** Boolean expression to filter rows from the table "players". All fields are combined with a logical 'AND'. */
export type Players_Bool_Exp = {
  _and?: InputMaybe<Array<Players_Bool_Exp>>;
  _not?: InputMaybe<Players_Bool_Exp>;
  _or?: InputMaybe<Array<Players_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  teamId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "players" */
export enum Players_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlayersPkey = 'players_pkey'
}

/** input type for inserting data into table "players" */
export type Players_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Players_Max_Fields = {
  __typename?: 'players_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "players" */
export type Players_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Players_Min_Fields = {
  __typename?: 'players_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "players" */
export type Players_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "players" */
export type Players_Mutation_Response = {
  __typename?: 'players_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Players>;
};

/** on_conflict condition type for table "players" */
export type Players_On_Conflict = {
  constraint: Players_Constraint;
  update_columns?: Array<Players_Update_Column>;
  where?: InputMaybe<Players_Bool_Exp>;
};

/** Ordering options when selecting data from "players". */
export type Players_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: players */
export type Players_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "players" */
export enum Players_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TeamId = 'teamId'
}

/** input type for updating data in table "players" */
export type Players_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "players" */
export type Players_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Players_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Players_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "players" */
export enum Players_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TeamId = 'teamId'
}

export type Players_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Players_Set_Input>;
  /** filter the rows which have to be updated */
  where: Players_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** An array relationship */
  categories: Array<Categories>;
  /** An aggregate relationship */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "category_questions" */
  categoryQuestions: Array<CategoryQuestions>;
  /** fetch aggregated fields from the table: "category_questions" */
  categoryQuestions_aggregate: CategoryQuestions_Aggregate;
  /** fetch data from the table: "category_questions" using primary key columns */
  categoryQuestions_by_pk?: Maybe<CategoryQuestions>;
  /** fetch data from the table: "collection_questions" */
  collectionQuestions: Array<CollectionQuestions>;
  /** fetch aggregated fields from the table: "collection_questions" */
  collectionQuestions_aggregate: CollectionQuestions_Aggregate;
  /** fetch data from the table: "collection_questions" using primary key columns */
  collectionQuestions_by_pk?: Maybe<CollectionQuestions>;
  /** fetch data from the table: "collections" */
  collections: Array<Collections>;
  /** fetch aggregated fields from the table: "collections" */
  collections_aggregate: Collections_Aggregate;
  /** fetch data from the table: "collections" using primary key columns */
  collections_by_pk?: Maybe<Collections>;
  /** An array relationship */
  eventHosts: Array<EventHosts>;
  /** An aggregate relationship */
  eventHosts_aggregate: EventHosts_Aggregate;
  /** fetch data from the table: "event_hosts" using primary key columns */
  eventHosts_by_pk?: Maybe<EventHosts>;
  /** fetch data from the table: "olympics.event_leader_board" */
  eventLeaderBoard: Array<EventLeaderBoard>;
  /** fetch aggregated fields from the table: "olympics.event_leader_board" */
  eventLeaderBoard_aggregate: EventLeaderBoard_Aggregate;
  /** fetch data from the table: "olympics.event_leader_board" using primary key columns */
  eventLeaderBoard_by_pk?: Maybe<EventLeaderBoard>;
  /** fetch data from the table: "event_codes" */
  event_codes: Array<Event_Codes>;
  /** fetch aggregated fields from the table: "event_codes" */
  event_codes_aggregate: Event_Codes_Aggregate;
  /** fetch data from the table: "event_codes" using primary key columns */
  event_codes_by_pk?: Maybe<Event_Codes>;
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "events" */
  events_aggregate: Events_Aggregate;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk?: Maybe<Events>;
  /** fetch data from the table: "feud_old.games_old" */
  feud_old_games_old: Array<Feud_Old_Games_Old>;
  /** fetch aggregated fields from the table: "feud_old.games_old" */
  feud_old_games_old_aggregate: Feud_Old_Games_Old_Aggregate;
  /** fetch data from the table: "feud_old.games_old" using primary key columns */
  feud_old_games_old_by_pk?: Maybe<Feud_Old_Games_Old>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table: "sketchWars.game_information_collections" */
  gameInformationCollections: Array<GameInformationCollections>;
  /** fetch aggregated fields from the table: "sketchWars.game_information_collections" */
  gameInformationCollections_aggregate: GameInformationCollections_Aggregate;
  /** fetch data from the table: "sketchWars.game_information_collections" using primary key columns */
  gameInformationCollections_by_pk?: Maybe<GameInformationCollections>;
  /** fetch data from the table: "game_information_feud" */
  gameInformationFeud: Array<GameInformationFeud>;
  /** fetch aggregated fields from the table: "game_information_feud" */
  gameInformationFeud_aggregate: GameInformationFeud_Aggregate;
  /** fetch data from the table: "game_information_feud" using primary key columns */
  gameInformationFeud_by_pk?: Maybe<GameInformationFeud>;
  /** fetch data from the table: "olympics.game_information" */
  gameInformationOlympics: Array<GameInformationOlympics>;
  /** fetch aggregated fields from the table: "olympics.game_information" */
  gameInformationOlympics_aggregate: GameInformationOlympics_Aggregate;
  /** fetch data from the table: "olympics.game_information" using primary key columns */
  gameInformationOlympics_by_pk?: Maybe<GameInformationOlympics>;
  /** fetch data from the table: "sketchWars.game_information_sketch_wars" */
  gameInformationSketchWars: Array<GameInformationSketchWars>;
  /** fetch aggregated fields from the table: "sketchWars.game_information_sketch_wars" */
  gameInformationSketchWars_aggregate: GameInformationSketchWars_Aggregate;
  /** fetch data from the table: "sketchWars.game_information_sketch_wars" using primary key columns */
  gameInformationSketchWars_by_pk?: Maybe<GameInformationSketchWars>;
  /** fetch data from the table: "game_information_stq" */
  gameInformationStq: Array<GameInformationStq>;
  /** fetch aggregated fields from the table: "game_information_stq" */
  gameInformationStq_aggregate: GameInformationStq_Aggregate;
  /** fetch data from the table: "game_information_stq" using primary key columns */
  gameInformationStq_by_pk?: Maybe<GameInformationStq>;
  /** fetch data from the table: "game_information_template" */
  gameInformationTemplate: Array<GameInformationTemplate>;
  /** fetch aggregated fields from the table: "game_information_template" */
  gameInformationTemplate_aggregate: GameInformationTemplate_Aggregate;
  /** fetch data from the table: "game_information_template" using primary key columns */
  gameInformationTemplate_by_pk?: Maybe<GameInformationTemplate>;
  /** An array relationship */
  gamePermissions: Array<GamePermissions>;
  /** An aggregate relationship */
  gamePermissions_aggregate: GamePermissions_Aggregate;
  /** fetch data from the table: "game_permissions" using primary key columns */
  gamePermissions_by_pk?: Maybe<GamePermissions>;
  /** fetch data from the table: "game_templates" */
  gameTemplates: Array<GameTemplates>;
  /** fetch aggregated fields from the table: "game_templates" */
  gameTemplates_aggregate: GameTemplates_Aggregate;
  /** fetch data from the table: "game_templates" using primary key columns */
  gameTemplates_by_pk?: Maybe<GameTemplates>;
  /** fetch data from the table: "matchup_settings" */
  matchupSettings: Array<MatchupSettings>;
  /** fetch aggregated fields from the table: "matchup_settings" */
  matchupSettings_aggregate: MatchupSettings_Aggregate;
  /** fetch data from the table: "matchup_settings" using primary key columns */
  matchupSettings_by_pk?: Maybe<MatchupSettings>;
  /** fetch data from the table: "olympics.themes" */
  olympicsThemes: Array<OlympicsThemes>;
  /** fetch aggregated fields from the table: "olympics.themes" */
  olympicsThemes_aggregate: OlympicsThemes_Aggregate;
  /** fetch data from the table: "olympics.themes" using primary key columns */
  olympicsThemes_by_pk?: Maybe<OlympicsThemes>;
  /** fetch data from the table: "olympics.event_stages" */
  olympics_event_stages: Array<Olympics_Event_Stages>;
  /** fetch aggregated fields from the table: "olympics.event_stages" */
  olympics_event_stages_aggregate: Olympics_Event_Stages_Aggregate;
  /** fetch data from the table: "olympics.event_stages" using primary key columns */
  olympics_event_stages_by_pk?: Maybe<Olympics_Event_Stages>;
  /** An array relationship */
  players: Array<Players>;
  /** An aggregate relationship */
  players_aggregate: Players_Aggregate;
  /** fetch data from the table: "players" using primary key columns */
  players_by_pk?: Maybe<Players>;
  /** fetch data from the table: "question_answers" */
  questionAnswers: Array<QuestionAnswers>;
  /** fetch aggregated fields from the table: "question_answers" */
  questionAnswers_aggregate: QuestionAnswers_Aggregate;
  /** fetch data from the table: "question_answers" using primary key columns */
  questionAnswers_by_pk?: Maybe<QuestionAnswers>;
  /** fetch data from the table: "questions" */
  questions: Array<Questions>;
  /** fetch aggregated fields from the table: "questions" */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
  /** fetch data from the table: "resources" */
  resources: Array<Resources>;
  /** fetch aggregated fields from the table: "resources" */
  resources_aggregate: Resources_Aggregate;
  /** fetch data from the table: "resources" using primary key columns */
  resources_by_pk?: Maybe<Resources>;
  /** fetch data from the table: "sources" */
  sources: Array<Sources>;
  /** fetch aggregated fields from the table: "sources" */
  sources_aggregate: Sources_Aggregate;
  /** fetch data from the table: "sources" using primary key columns */
  sources_by_pk?: Maybe<Sources>;
  /** An array relationship */
  teams: Array<Teams>;
  /** An aggregate relationship */
  teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teams_by_pk?: Maybe<Teams>;
  testEmail: Scalars['String'];
  /** fetch data from the table: "themes" */
  themes: Array<Themes>;
  /** fetch aggregated fields from the table: "themes" */
  themes_aggregate: Themes_Aggregate;
  /** fetch data from the table: "themes" using primary key columns */
  themes_by_pk?: Maybe<Themes>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_metadata" */
  userMetadata: Array<UserMetadata>;
  /** fetch aggregated fields from the table: "user_metadata" */
  userMetadata_aggregate: UserMetadata_Aggregate;
  /** fetch data from the table: "user_metadata" using primary key columns */
  userMetadata_by_pk?: Maybe<UserMetadata>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String'];
};


export type Query_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootBucketArgs = {
  id: Scalars['String'];
};


export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCategoryQuestionsArgs = {
  distinct_on?: InputMaybe<Array<CategoryQuestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CategoryQuestions_Order_By>>;
  where?: InputMaybe<CategoryQuestions_Bool_Exp>;
};


export type Query_RootCategoryQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CategoryQuestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CategoryQuestions_Order_By>>;
  where?: InputMaybe<CategoryQuestions_Bool_Exp>;
};


export type Query_RootCategoryQuestions_By_PkArgs = {
  categoryId: Scalars['uuid'];
  questionId: Scalars['uuid'];
};


export type Query_RootCollectionQuestionsArgs = {
  distinct_on?: InputMaybe<Array<CollectionQuestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CollectionQuestions_Order_By>>;
  where?: InputMaybe<CollectionQuestions_Bool_Exp>;
};


export type Query_RootCollectionQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CollectionQuestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CollectionQuestions_Order_By>>;
  where?: InputMaybe<CollectionQuestions_Bool_Exp>;
};


export type Query_RootCollectionQuestions_By_PkArgs = {
  collectionId: Scalars['uuid'];
  questionId: Scalars['uuid'];
};


export type Query_RootCollectionsArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type Query_RootCollections_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type Query_RootCollections_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEventHostsArgs = {
  distinct_on?: InputMaybe<Array<EventHosts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventHosts_Order_By>>;
  where?: InputMaybe<EventHosts_Bool_Exp>;
};


export type Query_RootEventHosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<EventHosts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventHosts_Order_By>>;
  where?: InputMaybe<EventHosts_Bool_Exp>;
};


export type Query_RootEventHosts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEventLeaderBoardArgs = {
  distinct_on?: InputMaybe<Array<EventLeaderBoard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventLeaderBoard_Order_By>>;
  where?: InputMaybe<EventLeaderBoard_Bool_Exp>;
};


export type Query_RootEventLeaderBoard_AggregateArgs = {
  distinct_on?: InputMaybe<Array<EventLeaderBoard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventLeaderBoard_Order_By>>;
  where?: InputMaybe<EventLeaderBoard_Bool_Exp>;
};


export type Query_RootEventLeaderBoard_By_PkArgs = {
  id: Scalars['uuid'];
  stage_id: Scalars['uuid'];
  team_id: Scalars['uuid'];
};


export type Query_RootEvent_CodesArgs = {
  distinct_on?: InputMaybe<Array<Event_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Codes_Order_By>>;
  where?: InputMaybe<Event_Codes_Bool_Exp>;
};


export type Query_RootEvent_Codes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Codes_Order_By>>;
  where?: InputMaybe<Event_Codes_Bool_Exp>;
};


export type Query_RootEvent_Codes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Query_RootEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Query_RootEvents_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFeud_Old_Games_OldArgs = {
  distinct_on?: InputMaybe<Array<Feud_Old_Games_Old_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feud_Old_Games_Old_Order_By>>;
  where?: InputMaybe<Feud_Old_Games_Old_Bool_Exp>;
};


export type Query_RootFeud_Old_Games_Old_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feud_Old_Games_Old_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feud_Old_Games_Old_Order_By>>;
  where?: InputMaybe<Feud_Old_Games_Old_Bool_Exp>;
};


export type Query_RootFeud_Old_Games_Old_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootGameInformationCollectionsArgs = {
  distinct_on?: InputMaybe<Array<GameInformationCollections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationCollections_Order_By>>;
  where?: InputMaybe<GameInformationCollections_Bool_Exp>;
};


export type Query_RootGameInformationCollections_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameInformationCollections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationCollections_Order_By>>;
  where?: InputMaybe<GameInformationCollections_Bool_Exp>;
};


export type Query_RootGameInformationCollections_By_PkArgs = {
  collectionId: Scalars['uuid'];
  gameInformationId: Scalars['uuid'];
};


export type Query_RootGameInformationFeudArgs = {
  distinct_on?: InputMaybe<Array<GameInformationFeud_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationFeud_Order_By>>;
  where?: InputMaybe<GameInformationFeud_Bool_Exp>;
};


export type Query_RootGameInformationFeud_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameInformationFeud_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationFeud_Order_By>>;
  where?: InputMaybe<GameInformationFeud_Bool_Exp>;
};


export type Query_RootGameInformationFeud_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGameInformationOlympicsArgs = {
  distinct_on?: InputMaybe<Array<GameInformationOlympics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationOlympics_Order_By>>;
  where?: InputMaybe<GameInformationOlympics_Bool_Exp>;
};


export type Query_RootGameInformationOlympics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameInformationOlympics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationOlympics_Order_By>>;
  where?: InputMaybe<GameInformationOlympics_Bool_Exp>;
};


export type Query_RootGameInformationOlympics_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGameInformationSketchWarsArgs = {
  distinct_on?: InputMaybe<Array<GameInformationSketchWars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationSketchWars_Order_By>>;
  where?: InputMaybe<GameInformationSketchWars_Bool_Exp>;
};


export type Query_RootGameInformationSketchWars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameInformationSketchWars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationSketchWars_Order_By>>;
  where?: InputMaybe<GameInformationSketchWars_Bool_Exp>;
};


export type Query_RootGameInformationSketchWars_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGameInformationStqArgs = {
  distinct_on?: InputMaybe<Array<GameInformationStq_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationStq_Order_By>>;
  where?: InputMaybe<GameInformationStq_Bool_Exp>;
};


export type Query_RootGameInformationStq_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameInformationStq_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationStq_Order_By>>;
  where?: InputMaybe<GameInformationStq_Bool_Exp>;
};


export type Query_RootGameInformationStq_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGameInformationTemplateArgs = {
  distinct_on?: InputMaybe<Array<GameInformationTemplate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationTemplate_Order_By>>;
  where?: InputMaybe<GameInformationTemplate_Bool_Exp>;
};


export type Query_RootGameInformationTemplate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameInformationTemplate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationTemplate_Order_By>>;
  where?: InputMaybe<GameInformationTemplate_Bool_Exp>;
};


export type Query_RootGameInformationTemplate_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGamePermissionsArgs = {
  distinct_on?: InputMaybe<Array<GamePermissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GamePermissions_Order_By>>;
  where?: InputMaybe<GamePermissions_Bool_Exp>;
};


export type Query_RootGamePermissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GamePermissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GamePermissions_Order_By>>;
  where?: InputMaybe<GamePermissions_Bool_Exp>;
};


export type Query_RootGamePermissions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGameTemplatesArgs = {
  distinct_on?: InputMaybe<Array<GameTemplates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameTemplates_Order_By>>;
  where?: InputMaybe<GameTemplates_Bool_Exp>;
};


export type Query_RootGameTemplates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameTemplates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameTemplates_Order_By>>;
  where?: InputMaybe<GameTemplates_Bool_Exp>;
};


export type Query_RootGameTemplates_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMatchupSettingsArgs = {
  distinct_on?: InputMaybe<Array<MatchupSettings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MatchupSettings_Order_By>>;
  where?: InputMaybe<MatchupSettings_Bool_Exp>;
};


export type Query_RootMatchupSettings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MatchupSettings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MatchupSettings_Order_By>>;
  where?: InputMaybe<MatchupSettings_Bool_Exp>;
};


export type Query_RootMatchupSettings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOlympicsThemesArgs = {
  distinct_on?: InputMaybe<Array<OlympicsThemes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OlympicsThemes_Order_By>>;
  where?: InputMaybe<OlympicsThemes_Bool_Exp>;
};


export type Query_RootOlympicsThemes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OlympicsThemes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OlympicsThemes_Order_By>>;
  where?: InputMaybe<OlympicsThemes_Bool_Exp>;
};


export type Query_RootOlympicsThemes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOlympics_Event_StagesArgs = {
  distinct_on?: InputMaybe<Array<Olympics_Event_Stages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Olympics_Event_Stages_Order_By>>;
  where?: InputMaybe<Olympics_Event_Stages_Bool_Exp>;
};


export type Query_RootOlympics_Event_Stages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Olympics_Event_Stages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Olympics_Event_Stages_Order_By>>;
  where?: InputMaybe<Olympics_Event_Stages_Bool_Exp>;
};


export type Query_RootOlympics_Event_Stages_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPlayersArgs = {
  distinct_on?: InputMaybe<Array<Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Players_Order_By>>;
  where?: InputMaybe<Players_Bool_Exp>;
};


export type Query_RootPlayers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Players_Order_By>>;
  where?: InputMaybe<Players_Bool_Exp>;
};


export type Query_RootPlayers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootQuestionAnswersArgs = {
  distinct_on?: InputMaybe<Array<QuestionAnswers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuestionAnswers_Order_By>>;
  where?: InputMaybe<QuestionAnswers_Bool_Exp>;
};


export type Query_RootQuestionAnswers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<QuestionAnswers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuestionAnswers_Order_By>>;
  where?: InputMaybe<QuestionAnswers_Bool_Exp>;
};


export type Query_RootQuestionAnswers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Query_RootQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Query_RootQuestions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootResourcesArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Query_RootResources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Query_RootResources_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSourcesArgs = {
  distinct_on?: InputMaybe<Array<Sources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sources_Order_By>>;
  where?: InputMaybe<Sources_Bool_Exp>;
};


export type Query_RootSources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sources_Order_By>>;
  where?: InputMaybe<Sources_Bool_Exp>;
};


export type Query_RootSources_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTeamsArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


export type Query_RootTeams_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


export type Query_RootTeams_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootThemesArgs = {
  distinct_on?: InputMaybe<Array<Themes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Themes_Order_By>>;
  where?: InputMaybe<Themes_Bool_Exp>;
};


export type Query_RootThemes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Themes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Themes_Order_By>>;
  where?: InputMaybe<Themes_Bool_Exp>;
};


export type Query_RootThemes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserMetadataArgs = {
  distinct_on?: InputMaybe<Array<UserMetadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserMetadata_Order_By>>;
  where?: InputMaybe<UserMetadata_Bool_Exp>;
};


export type Query_RootUserMetadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserMetadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserMetadata_Order_By>>;
  where?: InputMaybe<UserMetadata_Bool_Exp>;
};


export type Query_RootUserMetadata_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "question_answers" */
export type QuestionAnswers = {
  __typename?: 'questionAnswers';
  answer: Scalars['String'];
  id: Scalars['uuid'];
  points: Scalars['Int'];
  /** An object relationship */
  question: Questions;
  questionId: Scalars['uuid'];
};

/** aggregated selection of "question_answers" */
export type QuestionAnswers_Aggregate = {
  __typename?: 'questionAnswers_aggregate';
  aggregate?: Maybe<QuestionAnswers_Aggregate_Fields>;
  nodes: Array<QuestionAnswers>;
};

export type QuestionAnswers_Aggregate_Bool_Exp = {
  count?: InputMaybe<QuestionAnswers_Aggregate_Bool_Exp_Count>;
};

export type QuestionAnswers_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<QuestionAnswers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<QuestionAnswers_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "question_answers" */
export type QuestionAnswers_Aggregate_Fields = {
  __typename?: 'questionAnswers_aggregate_fields';
  avg?: Maybe<QuestionAnswers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<QuestionAnswers_Max_Fields>;
  min?: Maybe<QuestionAnswers_Min_Fields>;
  stddev?: Maybe<QuestionAnswers_Stddev_Fields>;
  stddev_pop?: Maybe<QuestionAnswers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<QuestionAnswers_Stddev_Samp_Fields>;
  sum?: Maybe<QuestionAnswers_Sum_Fields>;
  var_pop?: Maybe<QuestionAnswers_Var_Pop_Fields>;
  var_samp?: Maybe<QuestionAnswers_Var_Samp_Fields>;
  variance?: Maybe<QuestionAnswers_Variance_Fields>;
};


/** aggregate fields of "question_answers" */
export type QuestionAnswers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<QuestionAnswers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "question_answers" */
export type QuestionAnswers_Aggregate_Order_By = {
  avg?: InputMaybe<QuestionAnswers_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<QuestionAnswers_Max_Order_By>;
  min?: InputMaybe<QuestionAnswers_Min_Order_By>;
  stddev?: InputMaybe<QuestionAnswers_Stddev_Order_By>;
  stddev_pop?: InputMaybe<QuestionAnswers_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<QuestionAnswers_Stddev_Samp_Order_By>;
  sum?: InputMaybe<QuestionAnswers_Sum_Order_By>;
  var_pop?: InputMaybe<QuestionAnswers_Var_Pop_Order_By>;
  var_samp?: InputMaybe<QuestionAnswers_Var_Samp_Order_By>;
  variance?: InputMaybe<QuestionAnswers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "question_answers" */
export type QuestionAnswers_Arr_Rel_Insert_Input = {
  data: Array<QuestionAnswers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<QuestionAnswers_On_Conflict>;
};

/** aggregate avg on columns */
export type QuestionAnswers_Avg_Fields = {
  __typename?: 'questionAnswers_avg_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "question_answers" */
export type QuestionAnswers_Avg_Order_By = {
  points?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "question_answers". All fields are combined with a logical 'AND'. */
export type QuestionAnswers_Bool_Exp = {
  _and?: InputMaybe<Array<QuestionAnswers_Bool_Exp>>;
  _not?: InputMaybe<QuestionAnswers_Bool_Exp>;
  _or?: InputMaybe<Array<QuestionAnswers_Bool_Exp>>;
  answer?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  points?: InputMaybe<Int_Comparison_Exp>;
  question?: InputMaybe<Questions_Bool_Exp>;
  questionId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "question_answers" */
export enum QuestionAnswers_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuestionAnswersPkey = 'question_answers_pkey'
}

/** input type for incrementing numeric columns in table "question_answers" */
export type QuestionAnswers_Inc_Input = {
  points?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "question_answers" */
export type QuestionAnswers_Insert_Input = {
  answer?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  points?: InputMaybe<Scalars['Int']>;
  question?: InputMaybe<Questions_Obj_Rel_Insert_Input>;
  questionId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type QuestionAnswers_Max_Fields = {
  __typename?: 'questionAnswers_max_fields';
  answer?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  points?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "question_answers" */
export type QuestionAnswers_Max_Order_By = {
  answer?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  questionId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type QuestionAnswers_Min_Fields = {
  __typename?: 'questionAnswers_min_fields';
  answer?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  points?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "question_answers" */
export type QuestionAnswers_Min_Order_By = {
  answer?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  questionId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "question_answers" */
export type QuestionAnswers_Mutation_Response = {
  __typename?: 'questionAnswers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<QuestionAnswers>;
};

/** on_conflict condition type for table "question_answers" */
export type QuestionAnswers_On_Conflict = {
  constraint: QuestionAnswers_Constraint;
  update_columns?: Array<QuestionAnswers_Update_Column>;
  where?: InputMaybe<QuestionAnswers_Bool_Exp>;
};

/** Ordering options when selecting data from "question_answers". */
export type QuestionAnswers_Order_By = {
  answer?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  question?: InputMaybe<Questions_Order_By>;
  questionId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: question_answers */
export type QuestionAnswers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "question_answers" */
export enum QuestionAnswers_Select_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  Id = 'id',
  /** column name */
  Points = 'points',
  /** column name */
  QuestionId = 'questionId'
}

/** input type for updating data in table "question_answers" */
export type QuestionAnswers_Set_Input = {
  answer?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  points?: InputMaybe<Scalars['Int']>;
  questionId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type QuestionAnswers_Stddev_Fields = {
  __typename?: 'questionAnswers_stddev_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "question_answers" */
export type QuestionAnswers_Stddev_Order_By = {
  points?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type QuestionAnswers_Stddev_Pop_Fields = {
  __typename?: 'questionAnswers_stddev_pop_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "question_answers" */
export type QuestionAnswers_Stddev_Pop_Order_By = {
  points?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type QuestionAnswers_Stddev_Samp_Fields = {
  __typename?: 'questionAnswers_stddev_samp_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "question_answers" */
export type QuestionAnswers_Stddev_Samp_Order_By = {
  points?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "questionAnswers" */
export type QuestionAnswers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: QuestionAnswers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type QuestionAnswers_Stream_Cursor_Value_Input = {
  answer?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  points?: InputMaybe<Scalars['Int']>;
  questionId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type QuestionAnswers_Sum_Fields = {
  __typename?: 'questionAnswers_sum_fields';
  points?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "question_answers" */
export type QuestionAnswers_Sum_Order_By = {
  points?: InputMaybe<Order_By>;
};

/** update columns of table "question_answers" */
export enum QuestionAnswers_Update_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  Id = 'id',
  /** column name */
  Points = 'points',
  /** column name */
  QuestionId = 'questionId'
}

export type QuestionAnswers_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<QuestionAnswers_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<QuestionAnswers_Set_Input>;
  /** filter the rows which have to be updated */
  where: QuestionAnswers_Bool_Exp;
};

/** aggregate var_pop on columns */
export type QuestionAnswers_Var_Pop_Fields = {
  __typename?: 'questionAnswers_var_pop_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "question_answers" */
export type QuestionAnswers_Var_Pop_Order_By = {
  points?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type QuestionAnswers_Var_Samp_Fields = {
  __typename?: 'questionAnswers_var_samp_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "question_answers" */
export type QuestionAnswers_Var_Samp_Order_By = {
  points?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type QuestionAnswers_Variance_Fields = {
  __typename?: 'questionAnswers_variance_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "question_answers" */
export type QuestionAnswers_Variance_Order_By = {
  points?: InputMaybe<Order_By>;
};

/** columns and relationships of "questions" */
export type Questions = {
  __typename?: 'questions';
  /** An array relationship */
  answers: Array<QuestionAnswers>;
  /** An aggregate relationship */
  answers_aggregate: QuestionAnswers_Aggregate;
  /** An array relationship */
  categories: Array<CategoryQuestions>;
  /** An aggregate relationship */
  categories_aggregate: CategoryQuestions_Aggregate;
  id: Scalars['uuid'];
  question: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


/** columns and relationships of "questions" */
export type QuestionsAnswersArgs = {
  distinct_on?: InputMaybe<Array<QuestionAnswers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuestionAnswers_Order_By>>;
  where?: InputMaybe<QuestionAnswers_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsAnswers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<QuestionAnswers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuestionAnswers_Order_By>>;
  where?: InputMaybe<QuestionAnswers_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsCategoriesArgs = {
  distinct_on?: InputMaybe<Array<CategoryQuestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CategoryQuestions_Order_By>>;
  where?: InputMaybe<CategoryQuestions_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CategoryQuestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CategoryQuestions_Order_By>>;
  where?: InputMaybe<CategoryQuestions_Bool_Exp>;
};

/** aggregated selection of "questions" */
export type Questions_Aggregate = {
  __typename?: 'questions_aggregate';
  aggregate?: Maybe<Questions_Aggregate_Fields>;
  nodes: Array<Questions>;
};

/** aggregate fields of "questions" */
export type Questions_Aggregate_Fields = {
  __typename?: 'questions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Questions_Max_Fields>;
  min?: Maybe<Questions_Min_Fields>;
};


/** aggregate fields of "questions" */
export type Questions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Questions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "questions". All fields are combined with a logical 'AND'. */
export type Questions_Bool_Exp = {
  _and?: InputMaybe<Array<Questions_Bool_Exp>>;
  _not?: InputMaybe<Questions_Bool_Exp>;
  _or?: InputMaybe<Array<Questions_Bool_Exp>>;
  answers?: InputMaybe<QuestionAnswers_Bool_Exp>;
  answers_aggregate?: InputMaybe<QuestionAnswers_Aggregate_Bool_Exp>;
  categories?: InputMaybe<CategoryQuestions_Bool_Exp>;
  categories_aggregate?: InputMaybe<CategoryQuestions_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  question?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "questions" */
export enum Questions_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuestionsPkey = 'questions_pkey'
}

/** input type for inserting data into table "questions" */
export type Questions_Insert_Input = {
  answers?: InputMaybe<QuestionAnswers_Arr_Rel_Insert_Input>;
  categories?: InputMaybe<CategoryQuestions_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  question?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Questions_Max_Fields = {
  __typename?: 'questions_max_fields';
  id?: Maybe<Scalars['uuid']>;
  question?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Questions_Min_Fields = {
  __typename?: 'questions_min_fields';
  id?: Maybe<Scalars['uuid']>;
  question?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "questions" */
export type Questions_Mutation_Response = {
  __typename?: 'questions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Questions>;
};

/** input type for inserting object relation for remote table "questions" */
export type Questions_Obj_Rel_Insert_Input = {
  data: Questions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};

/** on_conflict condition type for table "questions" */
export type Questions_On_Conflict = {
  constraint: Questions_Constraint;
  update_columns?: Array<Questions_Update_Column>;
  where?: InputMaybe<Questions_Bool_Exp>;
};

/** Ordering options when selecting data from "questions". */
export type Questions_Order_By = {
  answers_aggregate?: InputMaybe<QuestionAnswers_Aggregate_Order_By>;
  categories_aggregate?: InputMaybe<CategoryQuestions_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  question?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: questions */
export type Questions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "questions" */
export enum Questions_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Question = 'question',
  /** column name */
  Type = 'type',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "questions" */
export type Questions_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  question?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "questions" */
export type Questions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Questions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Questions_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  question?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "questions" */
export enum Questions_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Question = 'question',
  /** column name */
  Type = 'type',
  /** column name */
  Url = 'url'
}

export type Questions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Questions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Questions_Bool_Exp;
};

/** columns and relationships of "resources" */
export type Resources = {
  __typename?: 'resources';
  /** An array relationship */
  categories: Array<Categories>;
  /** An aggregate relationship */
  categories_aggregate: Categories_Aggregate;
  id: Scalars['uuid'];
  name: Scalars['String'];
};


/** columns and relationships of "resources" */
export type ResourcesCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


/** columns and relationships of "resources" */
export type ResourcesCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** aggregated selection of "resources" */
export type Resources_Aggregate = {
  __typename?: 'resources_aggregate';
  aggregate?: Maybe<Resources_Aggregate_Fields>;
  nodes: Array<Resources>;
};

/** aggregate fields of "resources" */
export type Resources_Aggregate_Fields = {
  __typename?: 'resources_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Resources_Max_Fields>;
  min?: Maybe<Resources_Min_Fields>;
};


/** aggregate fields of "resources" */
export type Resources_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Resources_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "resources". All fields are combined with a logical 'AND'. */
export type Resources_Bool_Exp = {
  _and?: InputMaybe<Array<Resources_Bool_Exp>>;
  _not?: InputMaybe<Resources_Bool_Exp>;
  _or?: InputMaybe<Array<Resources_Bool_Exp>>;
  categories?: InputMaybe<Categories_Bool_Exp>;
  categories_aggregate?: InputMaybe<Categories_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "resources" */
export enum Resources_Constraint {
  /** unique or primary key constraint on columns "id" */
  ResourcesPkey = 'resources_pkey'
}

/** input type for inserting data into table "resources" */
export type Resources_Insert_Input = {
  categories?: InputMaybe<Categories_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Resources_Max_Fields = {
  __typename?: 'resources_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Resources_Min_Fields = {
  __typename?: 'resources_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "resources" */
export type Resources_Mutation_Response = {
  __typename?: 'resources_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Resources>;
};

/** input type for inserting object relation for remote table "resources" */
export type Resources_Obj_Rel_Insert_Input = {
  data: Resources_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Resources_On_Conflict>;
};

/** on_conflict condition type for table "resources" */
export type Resources_On_Conflict = {
  constraint: Resources_Constraint;
  update_columns?: Array<Resources_Update_Column>;
  where?: InputMaybe<Resources_Bool_Exp>;
};

/** Ordering options when selecting data from "resources". */
export type Resources_Order_By = {
  categories_aggregate?: InputMaybe<Categories_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: resources */
export type Resources_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "resources" */
export enum Resources_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "resources" */
export type Resources_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "resources" */
export type Resources_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Resources_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Resources_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "resources" */
export enum Resources_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Resources_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Resources_Set_Input>;
  /** filter the rows which have to be updated */
  where: Resources_Bool_Exp;
};

/** columns and relationships of "sources" */
export type Sources = {
  __typename?: 'sources';
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  is_direct: Scalars['Boolean'];
  is_test: Scalars['Boolean'];
  name: Scalars['String'];
};

/** aggregated selection of "sources" */
export type Sources_Aggregate = {
  __typename?: 'sources_aggregate';
  aggregate?: Maybe<Sources_Aggregate_Fields>;
  nodes: Array<Sources>;
};

/** aggregate fields of "sources" */
export type Sources_Aggregate_Fields = {
  __typename?: 'sources_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Sources_Max_Fields>;
  min?: Maybe<Sources_Min_Fields>;
};


/** aggregate fields of "sources" */
export type Sources_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sources_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "sources". All fields are combined with a logical 'AND'. */
export type Sources_Bool_Exp = {
  _and?: InputMaybe<Array<Sources_Bool_Exp>>;
  _not?: InputMaybe<Sources_Bool_Exp>;
  _or?: InputMaybe<Array<Sources_Bool_Exp>>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_direct?: InputMaybe<Boolean_Comparison_Exp>;
  is_test?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "sources" */
export enum Sources_Constraint {
  /** unique or primary key constraint on columns "id" */
  SourcesPkey = 'sources_pkey'
}

/** input type for inserting data into table "sources" */
export type Sources_Insert_Input = {
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_direct?: InputMaybe<Scalars['Boolean']>;
  is_test?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Sources_Max_Fields = {
  __typename?: 'sources_max_fields';
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Sources_Min_Fields = {
  __typename?: 'sources_min_fields';
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "sources" */
export type Sources_Mutation_Response = {
  __typename?: 'sources_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sources>;
};

/** input type for inserting object relation for remote table "sources" */
export type Sources_Obj_Rel_Insert_Input = {
  data: Sources_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Sources_On_Conflict>;
};

/** on_conflict condition type for table "sources" */
export type Sources_On_Conflict = {
  constraint: Sources_Constraint;
  update_columns?: Array<Sources_Update_Column>;
  where?: InputMaybe<Sources_Bool_Exp>;
};

/** Ordering options when selecting data from "sources". */
export type Sources_Order_By = {
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_direct?: InputMaybe<Order_By>;
  is_test?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sources */
export type Sources_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "sources" */
export enum Sources_Select_Column {
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDirect = 'is_direct',
  /** column name */
  IsTest = 'is_test',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "sources" */
export type Sources_Set_Input = {
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_direct?: InputMaybe<Scalars['Boolean']>;
  is_test?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "sources" */
export type Sources_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sources_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sources_Stream_Cursor_Value_Input = {
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_direct?: InputMaybe<Scalars['Boolean']>;
  is_test?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "sources" */
export enum Sources_Update_Column {
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDirect = 'is_direct',
  /** column name */
  IsTest = 'is_test',
  /** column name */
  Name = 'name'
}

export type Sources_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sources_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sources_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.provider_requests" */
  authProviderRequests_stream: Array<AuthProviderRequests>;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.providers" */
  authProviders_stream: Array<AuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_token_types" */
  authRefreshTokenTypes_stream: Array<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  authRefreshTokens_stream: Array<AuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.roles" */
  authRoles_stream: Array<AuthRoles>;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_providers" */
  authUserProviders_stream: Array<AuthUserProviders>;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_roles" */
  authUserRoles_stream: Array<AuthUserRoles>;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
  authUserSecurityKeys_stream: Array<AuthUserSecurityKeys>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.buckets" */
  buckets_stream: Array<Buckets>;
  /** An array relationship */
  categories: Array<Categories>;
  /** An aggregate relationship */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<Categories>;
  /** fetch data from the table: "category_questions" */
  categoryQuestions: Array<CategoryQuestions>;
  /** fetch aggregated fields from the table: "category_questions" */
  categoryQuestions_aggregate: CategoryQuestions_Aggregate;
  /** fetch data from the table: "category_questions" using primary key columns */
  categoryQuestions_by_pk?: Maybe<CategoryQuestions>;
  /** fetch data from the table in a streaming manner: "category_questions" */
  categoryQuestions_stream: Array<CategoryQuestions>;
  /** fetch data from the table: "collection_questions" */
  collectionQuestions: Array<CollectionQuestions>;
  /** fetch aggregated fields from the table: "collection_questions" */
  collectionQuestions_aggregate: CollectionQuestions_Aggregate;
  /** fetch data from the table: "collection_questions" using primary key columns */
  collectionQuestions_by_pk?: Maybe<CollectionQuestions>;
  /** fetch data from the table in a streaming manner: "collection_questions" */
  collectionQuestions_stream: Array<CollectionQuestions>;
  /** fetch data from the table: "collections" */
  collections: Array<Collections>;
  /** fetch aggregated fields from the table: "collections" */
  collections_aggregate: Collections_Aggregate;
  /** fetch data from the table: "collections" using primary key columns */
  collections_by_pk?: Maybe<Collections>;
  /** fetch data from the table in a streaming manner: "collections" */
  collections_stream: Array<Collections>;
  /** An array relationship */
  eventHosts: Array<EventHosts>;
  /** An aggregate relationship */
  eventHosts_aggregate: EventHosts_Aggregate;
  /** fetch data from the table: "event_hosts" using primary key columns */
  eventHosts_by_pk?: Maybe<EventHosts>;
  /** fetch data from the table in a streaming manner: "event_hosts" */
  eventHosts_stream: Array<EventHosts>;
  /** fetch data from the table: "olympics.event_leader_board" */
  eventLeaderBoard: Array<EventLeaderBoard>;
  /** fetch aggregated fields from the table: "olympics.event_leader_board" */
  eventLeaderBoard_aggregate: EventLeaderBoard_Aggregate;
  /** fetch data from the table: "olympics.event_leader_board" using primary key columns */
  eventLeaderBoard_by_pk?: Maybe<EventLeaderBoard>;
  /** fetch data from the table in a streaming manner: "olympics.event_leader_board" */
  eventLeaderBoard_stream: Array<EventLeaderBoard>;
  /** fetch data from the table: "event_codes" */
  event_codes: Array<Event_Codes>;
  /** fetch aggregated fields from the table: "event_codes" */
  event_codes_aggregate: Event_Codes_Aggregate;
  /** fetch data from the table: "event_codes" using primary key columns */
  event_codes_by_pk?: Maybe<Event_Codes>;
  /** fetch data from the table in a streaming manner: "event_codes" */
  event_codes_stream: Array<Event_Codes>;
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "events" */
  events_aggregate: Events_Aggregate;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk?: Maybe<Events>;
  /** fetch data from the table in a streaming manner: "events" */
  events_stream: Array<Events>;
  /** fetch data from the table: "feud_old.games_old" */
  feud_old_games_old: Array<Feud_Old_Games_Old>;
  /** fetch aggregated fields from the table: "feud_old.games_old" */
  feud_old_games_old_aggregate: Feud_Old_Games_Old_Aggregate;
  /** fetch data from the table: "feud_old.games_old" using primary key columns */
  feud_old_games_old_by_pk?: Maybe<Feud_Old_Games_Old>;
  /** fetch data from the table in a streaming manner: "feud_old.games_old" */
  feud_old_games_old_stream: Array<Feud_Old_Games_Old>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.files" */
  files_stream: Array<Files>;
  /** fetch data from the table: "sketchWars.game_information_collections" */
  gameInformationCollections: Array<GameInformationCollections>;
  /** fetch aggregated fields from the table: "sketchWars.game_information_collections" */
  gameInformationCollections_aggregate: GameInformationCollections_Aggregate;
  /** fetch data from the table: "sketchWars.game_information_collections" using primary key columns */
  gameInformationCollections_by_pk?: Maybe<GameInformationCollections>;
  /** fetch data from the table in a streaming manner: "sketchWars.game_information_collections" */
  gameInformationCollections_stream: Array<GameInformationCollections>;
  /** fetch data from the table: "game_information_feud" */
  gameInformationFeud: Array<GameInformationFeud>;
  /** fetch aggregated fields from the table: "game_information_feud" */
  gameInformationFeud_aggregate: GameInformationFeud_Aggregate;
  /** fetch data from the table: "game_information_feud" using primary key columns */
  gameInformationFeud_by_pk?: Maybe<GameInformationFeud>;
  /** fetch data from the table in a streaming manner: "game_information_feud" */
  gameInformationFeud_stream: Array<GameInformationFeud>;
  /** fetch data from the table: "olympics.game_information" */
  gameInformationOlympics: Array<GameInformationOlympics>;
  /** fetch aggregated fields from the table: "olympics.game_information" */
  gameInformationOlympics_aggregate: GameInformationOlympics_Aggregate;
  /** fetch data from the table: "olympics.game_information" using primary key columns */
  gameInformationOlympics_by_pk?: Maybe<GameInformationOlympics>;
  /** fetch data from the table in a streaming manner: "olympics.game_information" */
  gameInformationOlympics_stream: Array<GameInformationOlympics>;
  /** fetch data from the table: "sketchWars.game_information_sketch_wars" */
  gameInformationSketchWars: Array<GameInformationSketchWars>;
  /** fetch aggregated fields from the table: "sketchWars.game_information_sketch_wars" */
  gameInformationSketchWars_aggregate: GameInformationSketchWars_Aggregate;
  /** fetch data from the table: "sketchWars.game_information_sketch_wars" using primary key columns */
  gameInformationSketchWars_by_pk?: Maybe<GameInformationSketchWars>;
  /** fetch data from the table in a streaming manner: "sketchWars.game_information_sketch_wars" */
  gameInformationSketchWars_stream: Array<GameInformationSketchWars>;
  /** fetch data from the table: "game_information_stq" */
  gameInformationStq: Array<GameInformationStq>;
  /** fetch aggregated fields from the table: "game_information_stq" */
  gameInformationStq_aggregate: GameInformationStq_Aggregate;
  /** fetch data from the table: "game_information_stq" using primary key columns */
  gameInformationStq_by_pk?: Maybe<GameInformationStq>;
  /** fetch data from the table in a streaming manner: "game_information_stq" */
  gameInformationStq_stream: Array<GameInformationStq>;
  /** fetch data from the table: "game_information_template" */
  gameInformationTemplate: Array<GameInformationTemplate>;
  /** fetch aggregated fields from the table: "game_information_template" */
  gameInformationTemplate_aggregate: GameInformationTemplate_Aggregate;
  /** fetch data from the table: "game_information_template" using primary key columns */
  gameInformationTemplate_by_pk?: Maybe<GameInformationTemplate>;
  /** fetch data from the table in a streaming manner: "game_information_template" */
  gameInformationTemplate_stream: Array<GameInformationTemplate>;
  /** An array relationship */
  gamePermissions: Array<GamePermissions>;
  /** An aggregate relationship */
  gamePermissions_aggregate: GamePermissions_Aggregate;
  /** fetch data from the table: "game_permissions" using primary key columns */
  gamePermissions_by_pk?: Maybe<GamePermissions>;
  /** fetch data from the table in a streaming manner: "game_permissions" */
  gamePermissions_stream: Array<GamePermissions>;
  /** fetch data from the table: "game_templates" */
  gameTemplates: Array<GameTemplates>;
  /** fetch aggregated fields from the table: "game_templates" */
  gameTemplates_aggregate: GameTemplates_Aggregate;
  /** fetch data from the table: "game_templates" using primary key columns */
  gameTemplates_by_pk?: Maybe<GameTemplates>;
  /** fetch data from the table in a streaming manner: "game_templates" */
  gameTemplates_stream: Array<GameTemplates>;
  /** fetch data from the table: "matchup_settings" */
  matchupSettings: Array<MatchupSettings>;
  /** fetch aggregated fields from the table: "matchup_settings" */
  matchupSettings_aggregate: MatchupSettings_Aggregate;
  /** fetch data from the table: "matchup_settings" using primary key columns */
  matchupSettings_by_pk?: Maybe<MatchupSettings>;
  /** fetch data from the table in a streaming manner: "matchup_settings" */
  matchupSettings_stream: Array<MatchupSettings>;
  /** fetch data from the table: "olympics.themes" */
  olympicsThemes: Array<OlympicsThemes>;
  /** fetch aggregated fields from the table: "olympics.themes" */
  olympicsThemes_aggregate: OlympicsThemes_Aggregate;
  /** fetch data from the table: "olympics.themes" using primary key columns */
  olympicsThemes_by_pk?: Maybe<OlympicsThemes>;
  /** fetch data from the table in a streaming manner: "olympics.themes" */
  olympicsThemes_stream: Array<OlympicsThemes>;
  /** fetch data from the table: "olympics.event_stages" */
  olympics_event_stages: Array<Olympics_Event_Stages>;
  /** fetch aggregated fields from the table: "olympics.event_stages" */
  olympics_event_stages_aggregate: Olympics_Event_Stages_Aggregate;
  /** fetch data from the table: "olympics.event_stages" using primary key columns */
  olympics_event_stages_by_pk?: Maybe<Olympics_Event_Stages>;
  /** fetch data from the table in a streaming manner: "olympics.event_stages" */
  olympics_event_stages_stream: Array<Olympics_Event_Stages>;
  /** An array relationship */
  players: Array<Players>;
  /** An aggregate relationship */
  players_aggregate: Players_Aggregate;
  /** fetch data from the table: "players" using primary key columns */
  players_by_pk?: Maybe<Players>;
  /** fetch data from the table in a streaming manner: "players" */
  players_stream: Array<Players>;
  /** fetch data from the table: "question_answers" */
  questionAnswers: Array<QuestionAnswers>;
  /** fetch aggregated fields from the table: "question_answers" */
  questionAnswers_aggregate: QuestionAnswers_Aggregate;
  /** fetch data from the table: "question_answers" using primary key columns */
  questionAnswers_by_pk?: Maybe<QuestionAnswers>;
  /** fetch data from the table in a streaming manner: "question_answers" */
  questionAnswers_stream: Array<QuestionAnswers>;
  /** fetch data from the table: "questions" */
  questions: Array<Questions>;
  /** fetch aggregated fields from the table: "questions" */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
  /** fetch data from the table in a streaming manner: "questions" */
  questions_stream: Array<Questions>;
  /** fetch data from the table: "resources" */
  resources: Array<Resources>;
  /** fetch aggregated fields from the table: "resources" */
  resources_aggregate: Resources_Aggregate;
  /** fetch data from the table: "resources" using primary key columns */
  resources_by_pk?: Maybe<Resources>;
  /** fetch data from the table in a streaming manner: "resources" */
  resources_stream: Array<Resources>;
  /** fetch data from the table: "sources" */
  sources: Array<Sources>;
  /** fetch aggregated fields from the table: "sources" */
  sources_aggregate: Sources_Aggregate;
  /** fetch data from the table: "sources" using primary key columns */
  sources_by_pk?: Maybe<Sources>;
  /** fetch data from the table in a streaming manner: "sources" */
  sources_stream: Array<Sources>;
  /** An array relationship */
  teams: Array<Teams>;
  /** An aggregate relationship */
  teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teams_by_pk?: Maybe<Teams>;
  /** fetch data from the table in a streaming manner: "teams" */
  teams_stream: Array<Teams>;
  /** fetch data from the table: "themes" */
  themes: Array<Themes>;
  /** fetch aggregated fields from the table: "themes" */
  themes_aggregate: Themes_Aggregate;
  /** fetch data from the table: "themes" using primary key columns */
  themes_by_pk?: Maybe<Themes>;
  /** fetch data from the table in a streaming manner: "themes" */
  themes_stream: Array<Themes>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_metadata" */
  userMetadata: Array<UserMetadata>;
  /** fetch aggregated fields from the table: "user_metadata" */
  userMetadata_aggregate: UserMetadata_Aggregate;
  /** fetch data from the table: "user_metadata" using primary key columns */
  userMetadata_by_pk?: Maybe<UserMetadata>;
  /** fetch data from the table in a streaming manner: "user_metadata" */
  userMetadata_stream: Array<UserMetadata>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.users" */
  users_stream: Array<Users>;
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequests_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthProviderRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProviders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String'];
};


export type Subscription_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthRefreshTokenTypes_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthRefreshTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProviders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeys_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserSecurityKeys_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBuckets_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Buckets_Stream_Cursor_Input>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategoryQuestionsArgs = {
  distinct_on?: InputMaybe<Array<CategoryQuestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CategoryQuestions_Order_By>>;
  where?: InputMaybe<CategoryQuestions_Bool_Exp>;
};


export type Subscription_RootCategoryQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CategoryQuestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CategoryQuestions_Order_By>>;
  where?: InputMaybe<CategoryQuestions_Bool_Exp>;
};


export type Subscription_RootCategoryQuestions_By_PkArgs = {
  categoryId: Scalars['uuid'];
  questionId: Scalars['uuid'];
};


export type Subscription_RootCategoryQuestions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<CategoryQuestions_Stream_Cursor_Input>>;
  where?: InputMaybe<CategoryQuestions_Bool_Exp>;
};


export type Subscription_RootCollectionQuestionsArgs = {
  distinct_on?: InputMaybe<Array<CollectionQuestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CollectionQuestions_Order_By>>;
  where?: InputMaybe<CollectionQuestions_Bool_Exp>;
};


export type Subscription_RootCollectionQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CollectionQuestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CollectionQuestions_Order_By>>;
  where?: InputMaybe<CollectionQuestions_Bool_Exp>;
};


export type Subscription_RootCollectionQuestions_By_PkArgs = {
  collectionId: Scalars['uuid'];
  questionId: Scalars['uuid'];
};


export type Subscription_RootCollectionQuestions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<CollectionQuestions_Stream_Cursor_Input>>;
  where?: InputMaybe<CollectionQuestions_Bool_Exp>;
};


export type Subscription_RootCollectionsArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type Subscription_RootCollections_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type Subscription_RootCollections_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCollections_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Collections_Stream_Cursor_Input>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type Subscription_RootEventHostsArgs = {
  distinct_on?: InputMaybe<Array<EventHosts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventHosts_Order_By>>;
  where?: InputMaybe<EventHosts_Bool_Exp>;
};


export type Subscription_RootEventHosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<EventHosts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventHosts_Order_By>>;
  where?: InputMaybe<EventHosts_Bool_Exp>;
};


export type Subscription_RootEventHosts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEventHosts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<EventHosts_Stream_Cursor_Input>>;
  where?: InputMaybe<EventHosts_Bool_Exp>;
};


export type Subscription_RootEventLeaderBoardArgs = {
  distinct_on?: InputMaybe<Array<EventLeaderBoard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventLeaderBoard_Order_By>>;
  where?: InputMaybe<EventLeaderBoard_Bool_Exp>;
};


export type Subscription_RootEventLeaderBoard_AggregateArgs = {
  distinct_on?: InputMaybe<Array<EventLeaderBoard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventLeaderBoard_Order_By>>;
  where?: InputMaybe<EventLeaderBoard_Bool_Exp>;
};


export type Subscription_RootEventLeaderBoard_By_PkArgs = {
  id: Scalars['uuid'];
  stage_id: Scalars['uuid'];
  team_id: Scalars['uuid'];
};


export type Subscription_RootEventLeaderBoard_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<EventLeaderBoard_Stream_Cursor_Input>>;
  where?: InputMaybe<EventLeaderBoard_Bool_Exp>;
};


export type Subscription_RootEvent_CodesArgs = {
  distinct_on?: InputMaybe<Array<Event_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Codes_Order_By>>;
  where?: InputMaybe<Event_Codes_Bool_Exp>;
};


export type Subscription_RootEvent_Codes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Codes_Order_By>>;
  where?: InputMaybe<Event_Codes_Bool_Exp>;
};


export type Subscription_RootEvent_Codes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEvent_Codes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Event_Codes_Stream_Cursor_Input>>;
  where?: InputMaybe<Event_Codes_Bool_Exp>;
};


export type Subscription_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootEvents_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEvents_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Events_Stream_Cursor_Input>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootFeud_Old_Games_OldArgs = {
  distinct_on?: InputMaybe<Array<Feud_Old_Games_Old_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feud_Old_Games_Old_Order_By>>;
  where?: InputMaybe<Feud_Old_Games_Old_Bool_Exp>;
};


export type Subscription_RootFeud_Old_Games_Old_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feud_Old_Games_Old_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feud_Old_Games_Old_Order_By>>;
  where?: InputMaybe<Feud_Old_Games_Old_Bool_Exp>;
};


export type Subscription_RootFeud_Old_Games_Old_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFeud_Old_Games_Old_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Feud_Old_Games_Old_Stream_Cursor_Input>>;
  where?: InputMaybe<Feud_Old_Games_Old_Bool_Exp>;
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFiles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Files_Stream_Cursor_Input>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootGameInformationCollectionsArgs = {
  distinct_on?: InputMaybe<Array<GameInformationCollections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationCollections_Order_By>>;
  where?: InputMaybe<GameInformationCollections_Bool_Exp>;
};


export type Subscription_RootGameInformationCollections_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameInformationCollections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationCollections_Order_By>>;
  where?: InputMaybe<GameInformationCollections_Bool_Exp>;
};


export type Subscription_RootGameInformationCollections_By_PkArgs = {
  collectionId: Scalars['uuid'];
  gameInformationId: Scalars['uuid'];
};


export type Subscription_RootGameInformationCollections_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GameInformationCollections_Stream_Cursor_Input>>;
  where?: InputMaybe<GameInformationCollections_Bool_Exp>;
};


export type Subscription_RootGameInformationFeudArgs = {
  distinct_on?: InputMaybe<Array<GameInformationFeud_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationFeud_Order_By>>;
  where?: InputMaybe<GameInformationFeud_Bool_Exp>;
};


export type Subscription_RootGameInformationFeud_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameInformationFeud_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationFeud_Order_By>>;
  where?: InputMaybe<GameInformationFeud_Bool_Exp>;
};


export type Subscription_RootGameInformationFeud_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGameInformationFeud_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GameInformationFeud_Stream_Cursor_Input>>;
  where?: InputMaybe<GameInformationFeud_Bool_Exp>;
};


export type Subscription_RootGameInformationOlympicsArgs = {
  distinct_on?: InputMaybe<Array<GameInformationOlympics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationOlympics_Order_By>>;
  where?: InputMaybe<GameInformationOlympics_Bool_Exp>;
};


export type Subscription_RootGameInformationOlympics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameInformationOlympics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationOlympics_Order_By>>;
  where?: InputMaybe<GameInformationOlympics_Bool_Exp>;
};


export type Subscription_RootGameInformationOlympics_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGameInformationOlympics_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GameInformationOlympics_Stream_Cursor_Input>>;
  where?: InputMaybe<GameInformationOlympics_Bool_Exp>;
};


export type Subscription_RootGameInformationSketchWarsArgs = {
  distinct_on?: InputMaybe<Array<GameInformationSketchWars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationSketchWars_Order_By>>;
  where?: InputMaybe<GameInformationSketchWars_Bool_Exp>;
};


export type Subscription_RootGameInformationSketchWars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameInformationSketchWars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationSketchWars_Order_By>>;
  where?: InputMaybe<GameInformationSketchWars_Bool_Exp>;
};


export type Subscription_RootGameInformationSketchWars_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGameInformationSketchWars_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GameInformationSketchWars_Stream_Cursor_Input>>;
  where?: InputMaybe<GameInformationSketchWars_Bool_Exp>;
};


export type Subscription_RootGameInformationStqArgs = {
  distinct_on?: InputMaybe<Array<GameInformationStq_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationStq_Order_By>>;
  where?: InputMaybe<GameInformationStq_Bool_Exp>;
};


export type Subscription_RootGameInformationStq_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameInformationStq_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationStq_Order_By>>;
  where?: InputMaybe<GameInformationStq_Bool_Exp>;
};


export type Subscription_RootGameInformationStq_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGameInformationStq_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GameInformationStq_Stream_Cursor_Input>>;
  where?: InputMaybe<GameInformationStq_Bool_Exp>;
};


export type Subscription_RootGameInformationTemplateArgs = {
  distinct_on?: InputMaybe<Array<GameInformationTemplate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationTemplate_Order_By>>;
  where?: InputMaybe<GameInformationTemplate_Bool_Exp>;
};


export type Subscription_RootGameInformationTemplate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameInformationTemplate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameInformationTemplate_Order_By>>;
  where?: InputMaybe<GameInformationTemplate_Bool_Exp>;
};


export type Subscription_RootGameInformationTemplate_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGameInformationTemplate_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GameInformationTemplate_Stream_Cursor_Input>>;
  where?: InputMaybe<GameInformationTemplate_Bool_Exp>;
};


export type Subscription_RootGamePermissionsArgs = {
  distinct_on?: InputMaybe<Array<GamePermissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GamePermissions_Order_By>>;
  where?: InputMaybe<GamePermissions_Bool_Exp>;
};


export type Subscription_RootGamePermissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GamePermissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GamePermissions_Order_By>>;
  where?: InputMaybe<GamePermissions_Bool_Exp>;
};


export type Subscription_RootGamePermissions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGamePermissions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GamePermissions_Stream_Cursor_Input>>;
  where?: InputMaybe<GamePermissions_Bool_Exp>;
};


export type Subscription_RootGameTemplatesArgs = {
  distinct_on?: InputMaybe<Array<GameTemplates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameTemplates_Order_By>>;
  where?: InputMaybe<GameTemplates_Bool_Exp>;
};


export type Subscription_RootGameTemplates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameTemplates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameTemplates_Order_By>>;
  where?: InputMaybe<GameTemplates_Bool_Exp>;
};


export type Subscription_RootGameTemplates_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGameTemplates_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GameTemplates_Stream_Cursor_Input>>;
  where?: InputMaybe<GameTemplates_Bool_Exp>;
};


export type Subscription_RootMatchupSettingsArgs = {
  distinct_on?: InputMaybe<Array<MatchupSettings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MatchupSettings_Order_By>>;
  where?: InputMaybe<MatchupSettings_Bool_Exp>;
};


export type Subscription_RootMatchupSettings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MatchupSettings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MatchupSettings_Order_By>>;
  where?: InputMaybe<MatchupSettings_Bool_Exp>;
};


export type Subscription_RootMatchupSettings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMatchupSettings_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<MatchupSettings_Stream_Cursor_Input>>;
  where?: InputMaybe<MatchupSettings_Bool_Exp>;
};


export type Subscription_RootOlympicsThemesArgs = {
  distinct_on?: InputMaybe<Array<OlympicsThemes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OlympicsThemes_Order_By>>;
  where?: InputMaybe<OlympicsThemes_Bool_Exp>;
};


export type Subscription_RootOlympicsThemes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OlympicsThemes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OlympicsThemes_Order_By>>;
  where?: InputMaybe<OlympicsThemes_Bool_Exp>;
};


export type Subscription_RootOlympicsThemes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOlympicsThemes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<OlympicsThemes_Stream_Cursor_Input>>;
  where?: InputMaybe<OlympicsThemes_Bool_Exp>;
};


export type Subscription_RootOlympics_Event_StagesArgs = {
  distinct_on?: InputMaybe<Array<Olympics_Event_Stages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Olympics_Event_Stages_Order_By>>;
  where?: InputMaybe<Olympics_Event_Stages_Bool_Exp>;
};


export type Subscription_RootOlympics_Event_Stages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Olympics_Event_Stages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Olympics_Event_Stages_Order_By>>;
  where?: InputMaybe<Olympics_Event_Stages_Bool_Exp>;
};


export type Subscription_RootOlympics_Event_Stages_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOlympics_Event_Stages_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Olympics_Event_Stages_Stream_Cursor_Input>>;
  where?: InputMaybe<Olympics_Event_Stages_Bool_Exp>;
};


export type Subscription_RootPlayersArgs = {
  distinct_on?: InputMaybe<Array<Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Players_Order_By>>;
  where?: InputMaybe<Players_Bool_Exp>;
};


export type Subscription_RootPlayers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Players_Order_By>>;
  where?: InputMaybe<Players_Bool_Exp>;
};


export type Subscription_RootPlayers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPlayers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Players_Stream_Cursor_Input>>;
  where?: InputMaybe<Players_Bool_Exp>;
};


export type Subscription_RootQuestionAnswersArgs = {
  distinct_on?: InputMaybe<Array<QuestionAnswers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuestionAnswers_Order_By>>;
  where?: InputMaybe<QuestionAnswers_Bool_Exp>;
};


export type Subscription_RootQuestionAnswers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<QuestionAnswers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuestionAnswers_Order_By>>;
  where?: InputMaybe<QuestionAnswers_Bool_Exp>;
};


export type Subscription_RootQuestionAnswers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootQuestionAnswers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<QuestionAnswers_Stream_Cursor_Input>>;
  where?: InputMaybe<QuestionAnswers_Bool_Exp>;
};


export type Subscription_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootQuestions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootQuestions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Questions_Stream_Cursor_Input>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootResourcesArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Subscription_RootResources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Subscription_RootResources_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootResources_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Resources_Stream_Cursor_Input>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Subscription_RootSourcesArgs = {
  distinct_on?: InputMaybe<Array<Sources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sources_Order_By>>;
  where?: InputMaybe<Sources_Bool_Exp>;
};


export type Subscription_RootSources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sources_Order_By>>;
  where?: InputMaybe<Sources_Bool_Exp>;
};


export type Subscription_RootSources_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSources_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Sources_Stream_Cursor_Input>>;
  where?: InputMaybe<Sources_Bool_Exp>;
};


export type Subscription_RootTeamsArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


export type Subscription_RootTeams_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


export type Subscription_RootTeams_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTeams_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Teams_Stream_Cursor_Input>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


export type Subscription_RootThemesArgs = {
  distinct_on?: InputMaybe<Array<Themes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Themes_Order_By>>;
  where?: InputMaybe<Themes_Bool_Exp>;
};


export type Subscription_RootThemes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Themes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Themes_Order_By>>;
  where?: InputMaybe<Themes_Bool_Exp>;
};


export type Subscription_RootThemes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootThemes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Themes_Stream_Cursor_Input>>;
  where?: InputMaybe<Themes_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserMetadataArgs = {
  distinct_on?: InputMaybe<Array<UserMetadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserMetadata_Order_By>>;
  where?: InputMaybe<UserMetadata_Bool_Exp>;
};


export type Subscription_RootUserMetadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserMetadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserMetadata_Order_By>>;
  where?: InputMaybe<UserMetadata_Bool_Exp>;
};


export type Subscription_RootUserMetadata_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserMetadata_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<UserMetadata_Stream_Cursor_Input>>;
  where?: InputMaybe<UserMetadata_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "teams" */
export type Teams = {
  __typename?: 'teams';
  createdAt?: Maybe<Scalars['timestamptz']>;
  eventId: Scalars['uuid'];
  /** An object relationship */
  host?: Maybe<UserMetadata>;
  hostId?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  /** An object relationship */
  image?: Maybe<Files>;
  imageId?: Maybe<Scalars['uuid']>;
  index: Scalars['Int'];
  /** An array relationship */
  leaderBoards: Array<EventLeaderBoard>;
  /** An aggregate relationship */
  leaderBoards_aggregate: EventLeaderBoard_Aggregate;
  name: Scalars['String'];
  /** An array relationship */
  players: Array<Players>;
  /** An aggregate relationship */
  players_aggregate: Players_Aggregate;
  ranking?: Maybe<Scalars['Int']>;
  totalScore: Scalars['Int'];
};


/** columns and relationships of "teams" */
export type TeamsLeaderBoardsArgs = {
  distinct_on?: InputMaybe<Array<EventLeaderBoard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventLeaderBoard_Order_By>>;
  where?: InputMaybe<EventLeaderBoard_Bool_Exp>;
};


/** columns and relationships of "teams" */
export type TeamsLeaderBoards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<EventLeaderBoard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventLeaderBoard_Order_By>>;
  where?: InputMaybe<EventLeaderBoard_Bool_Exp>;
};


/** columns and relationships of "teams" */
export type TeamsPlayersArgs = {
  distinct_on?: InputMaybe<Array<Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Players_Order_By>>;
  where?: InputMaybe<Players_Bool_Exp>;
};


/** columns and relationships of "teams" */
export type TeamsPlayers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Players_Order_By>>;
  where?: InputMaybe<Players_Bool_Exp>;
};

/** aggregated selection of "teams" */
export type Teams_Aggregate = {
  __typename?: 'teams_aggregate';
  aggregate?: Maybe<Teams_Aggregate_Fields>;
  nodes: Array<Teams>;
};

export type Teams_Aggregate_Bool_Exp = {
  count?: InputMaybe<Teams_Aggregate_Bool_Exp_Count>;
};

export type Teams_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Teams_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Teams_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "teams" */
export type Teams_Aggregate_Fields = {
  __typename?: 'teams_aggregate_fields';
  avg?: Maybe<Teams_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Teams_Max_Fields>;
  min?: Maybe<Teams_Min_Fields>;
  stddev?: Maybe<Teams_Stddev_Fields>;
  stddev_pop?: Maybe<Teams_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Teams_Stddev_Samp_Fields>;
  sum?: Maybe<Teams_Sum_Fields>;
  var_pop?: Maybe<Teams_Var_Pop_Fields>;
  var_samp?: Maybe<Teams_Var_Samp_Fields>;
  variance?: Maybe<Teams_Variance_Fields>;
};


/** aggregate fields of "teams" */
export type Teams_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Teams_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "teams" */
export type Teams_Aggregate_Order_By = {
  avg?: InputMaybe<Teams_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Teams_Max_Order_By>;
  min?: InputMaybe<Teams_Min_Order_By>;
  stddev?: InputMaybe<Teams_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Teams_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Teams_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Teams_Sum_Order_By>;
  var_pop?: InputMaybe<Teams_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Teams_Var_Samp_Order_By>;
  variance?: InputMaybe<Teams_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "teams" */
export type Teams_Arr_Rel_Insert_Input = {
  data: Array<Teams_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Teams_On_Conflict>;
};

/** aggregate avg on columns */
export type Teams_Avg_Fields = {
  __typename?: 'teams_avg_fields';
  index?: Maybe<Scalars['Float']>;
  ranking?: Maybe<Scalars['Float']>;
  totalScore?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "teams" */
export type Teams_Avg_Order_By = {
  index?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
  totalScore?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "teams". All fields are combined with a logical 'AND'. */
export type Teams_Bool_Exp = {
  _and?: InputMaybe<Array<Teams_Bool_Exp>>;
  _not?: InputMaybe<Teams_Bool_Exp>;
  _or?: InputMaybe<Array<Teams_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  eventId?: InputMaybe<Uuid_Comparison_Exp>;
  host?: InputMaybe<UserMetadata_Bool_Exp>;
  hostId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<Files_Bool_Exp>;
  imageId?: InputMaybe<Uuid_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  leaderBoards?: InputMaybe<EventLeaderBoard_Bool_Exp>;
  leaderBoards_aggregate?: InputMaybe<EventLeaderBoard_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  players?: InputMaybe<Players_Bool_Exp>;
  players_aggregate?: InputMaybe<Players_Aggregate_Bool_Exp>;
  ranking?: InputMaybe<Int_Comparison_Exp>;
  totalScore?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "teams" */
export enum Teams_Constraint {
  /** unique or primary key constraint on columns "id" */
  TeamsPkey = 'teams_pkey'
}

/** input type for incrementing numeric columns in table "teams" */
export type Teams_Inc_Input = {
  index?: InputMaybe<Scalars['Int']>;
  ranking?: InputMaybe<Scalars['Int']>;
  totalScore?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "teams" */
export type Teams_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  eventId?: InputMaybe<Scalars['uuid']>;
  host?: InputMaybe<UserMetadata_Obj_Rel_Insert_Input>;
  hostId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  imageId?: InputMaybe<Scalars['uuid']>;
  index?: InputMaybe<Scalars['Int']>;
  leaderBoards?: InputMaybe<EventLeaderBoard_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  players?: InputMaybe<Players_Arr_Rel_Insert_Input>;
  ranking?: InputMaybe<Scalars['Int']>;
  totalScore?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Teams_Max_Fields = {
  __typename?: 'teams_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  eventId?: Maybe<Scalars['uuid']>;
  hostId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  imageId?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  ranking?: Maybe<Scalars['Int']>;
  totalScore?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "teams" */
export type Teams_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  hostId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
  totalScore?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Teams_Min_Fields = {
  __typename?: 'teams_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  eventId?: Maybe<Scalars['uuid']>;
  hostId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  imageId?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  ranking?: Maybe<Scalars['Int']>;
  totalScore?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "teams" */
export type Teams_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  hostId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
  totalScore?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "teams" */
export type Teams_Mutation_Response = {
  __typename?: 'teams_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Teams>;
};

/** input type for inserting object relation for remote table "teams" */
export type Teams_Obj_Rel_Insert_Input = {
  data: Teams_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Teams_On_Conflict>;
};

/** on_conflict condition type for table "teams" */
export type Teams_On_Conflict = {
  constraint: Teams_Constraint;
  update_columns?: Array<Teams_Update_Column>;
  where?: InputMaybe<Teams_Bool_Exp>;
};

/** Ordering options when selecting data from "teams". */
export type Teams_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  host?: InputMaybe<UserMetadata_Order_By>;
  hostId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Files_Order_By>;
  imageId?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  leaderBoards_aggregate?: InputMaybe<EventLeaderBoard_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  players_aggregate?: InputMaybe<Players_Aggregate_Order_By>;
  ranking?: InputMaybe<Order_By>;
  totalScore?: InputMaybe<Order_By>;
};

/** primary key columns input for table: teams */
export type Teams_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "teams" */
export enum Teams_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  HostId = 'hostId',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'imageId',
  /** column name */
  Index = 'index',
  /** column name */
  Name = 'name',
  /** column name */
  Ranking = 'ranking',
  /** column name */
  TotalScore = 'totalScore'
}

/** input type for updating data in table "teams" */
export type Teams_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  eventId?: InputMaybe<Scalars['uuid']>;
  hostId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageId?: InputMaybe<Scalars['uuid']>;
  index?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  ranking?: InputMaybe<Scalars['Int']>;
  totalScore?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Teams_Stddev_Fields = {
  __typename?: 'teams_stddev_fields';
  index?: Maybe<Scalars['Float']>;
  ranking?: Maybe<Scalars['Float']>;
  totalScore?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "teams" */
export type Teams_Stddev_Order_By = {
  index?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
  totalScore?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Teams_Stddev_Pop_Fields = {
  __typename?: 'teams_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
  ranking?: Maybe<Scalars['Float']>;
  totalScore?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "teams" */
export type Teams_Stddev_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
  totalScore?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Teams_Stddev_Samp_Fields = {
  __typename?: 'teams_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
  ranking?: Maybe<Scalars['Float']>;
  totalScore?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "teams" */
export type Teams_Stddev_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
  totalScore?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "teams" */
export type Teams_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Teams_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Teams_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  eventId?: InputMaybe<Scalars['uuid']>;
  hostId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageId?: InputMaybe<Scalars['uuid']>;
  index?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  ranking?: InputMaybe<Scalars['Int']>;
  totalScore?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Teams_Sum_Fields = {
  __typename?: 'teams_sum_fields';
  index?: Maybe<Scalars['Int']>;
  ranking?: Maybe<Scalars['Int']>;
  totalScore?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "teams" */
export type Teams_Sum_Order_By = {
  index?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
  totalScore?: InputMaybe<Order_By>;
};

/** update columns of table "teams" */
export enum Teams_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  HostId = 'hostId',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'imageId',
  /** column name */
  Index = 'index',
  /** column name */
  Name = 'name',
  /** column name */
  Ranking = 'ranking',
  /** column name */
  TotalScore = 'totalScore'
}

export type Teams_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Teams_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Teams_Set_Input>;
  /** filter the rows which have to be updated */
  where: Teams_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Teams_Var_Pop_Fields = {
  __typename?: 'teams_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
  ranking?: Maybe<Scalars['Float']>;
  totalScore?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "teams" */
export type Teams_Var_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
  totalScore?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Teams_Var_Samp_Fields = {
  __typename?: 'teams_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
  ranking?: Maybe<Scalars['Float']>;
  totalScore?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "teams" */
export type Teams_Var_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
  totalScore?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Teams_Variance_Fields = {
  __typename?: 'teams_variance_fields';
  index?: Maybe<Scalars['Float']>;
  ranking?: Maybe<Scalars['Float']>;
  totalScore?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "teams" */
export type Teams_Variance_Order_By = {
  index?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
  totalScore?: InputMaybe<Order_By>;
};

/** columns and relationships of "themes" */
export type Themes = {
  __typename?: 'themes';
  id: Scalars['uuid'];
  image_url: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "themes" */
export type Themes_Aggregate = {
  __typename?: 'themes_aggregate';
  aggregate?: Maybe<Themes_Aggregate_Fields>;
  nodes: Array<Themes>;
};

/** aggregate fields of "themes" */
export type Themes_Aggregate_Fields = {
  __typename?: 'themes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Themes_Max_Fields>;
  min?: Maybe<Themes_Min_Fields>;
};


/** aggregate fields of "themes" */
export type Themes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Themes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "themes". All fields are combined with a logical 'AND'. */
export type Themes_Bool_Exp = {
  _and?: InputMaybe<Array<Themes_Bool_Exp>>;
  _not?: InputMaybe<Themes_Bool_Exp>;
  _or?: InputMaybe<Array<Themes_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "themes" */
export enum Themes_Constraint {
  /** unique or primary key constraint on columns "id" */
  ThemesPkey = 'themes_pkey'
}

/** input type for inserting data into table "themes" */
export type Themes_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  image_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Themes_Max_Fields = {
  __typename?: 'themes_max_fields';
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Themes_Min_Fields = {
  __typename?: 'themes_min_fields';
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "themes" */
export type Themes_Mutation_Response = {
  __typename?: 'themes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Themes>;
};

/** input type for inserting object relation for remote table "themes" */
export type Themes_Obj_Rel_Insert_Input = {
  data: Themes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Themes_On_Conflict>;
};

/** on_conflict condition type for table "themes" */
export type Themes_On_Conflict = {
  constraint: Themes_Constraint;
  update_columns?: Array<Themes_Update_Column>;
  where?: InputMaybe<Themes_Bool_Exp>;
};

/** Ordering options when selecting data from "themes". */
export type Themes_Order_By = {
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: themes */
export type Themes_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "themes" */
export enum Themes_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "themes" */
export type Themes_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  image_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "themes" */
export type Themes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Themes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Themes_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  image_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "themes" */
export enum Themes_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name'
}

export type Themes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Themes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Themes_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user_metadata" */
export type UserMetadata = {
  __typename?: 'userMetadata';
  /** An object relationship */
  avatar: Files;
  avatarId: Scalars['uuid'];
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  disabled: Scalars['Boolean'];
  email: Scalars['String'];
  /** An array relationship */
  eventHosts: Array<EventHosts>;
  /** An aggregate relationship */
  eventHosts_aggregate: EventHosts_Aggregate;
  firstName: Scalars['String'];
  /** An array relationship */
  gamePermissions: Array<GamePermissions>;
  /** An aggregate relationship */
  gamePermissions_aggregate: GamePermissions_Aggregate;
  id: Scalars['uuid'];
  isActiveHost: Scalars['Boolean'];
  joinDate?: Maybe<Scalars['date']>;
  lastName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  token: Scalars['String'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "user_metadata" */
export type UserMetadataEventHostsArgs = {
  distinct_on?: InputMaybe<Array<EventHosts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventHosts_Order_By>>;
  where?: InputMaybe<EventHosts_Bool_Exp>;
};


/** columns and relationships of "user_metadata" */
export type UserMetadataEventHosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<EventHosts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventHosts_Order_By>>;
  where?: InputMaybe<EventHosts_Bool_Exp>;
};


/** columns and relationships of "user_metadata" */
export type UserMetadataGamePermissionsArgs = {
  distinct_on?: InputMaybe<Array<GamePermissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GamePermissions_Order_By>>;
  where?: InputMaybe<GamePermissions_Bool_Exp>;
};


/** columns and relationships of "user_metadata" */
export type UserMetadataGamePermissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GamePermissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GamePermissions_Order_By>>;
  where?: InputMaybe<GamePermissions_Bool_Exp>;
};

/** aggregated selection of "user_metadata" */
export type UserMetadata_Aggregate = {
  __typename?: 'userMetadata_aggregate';
  aggregate?: Maybe<UserMetadata_Aggregate_Fields>;
  nodes: Array<UserMetadata>;
};

/** aggregate fields of "user_metadata" */
export type UserMetadata_Aggregate_Fields = {
  __typename?: 'userMetadata_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<UserMetadata_Max_Fields>;
  min?: Maybe<UserMetadata_Min_Fields>;
};


/** aggregate fields of "user_metadata" */
export type UserMetadata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<UserMetadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_metadata". All fields are combined with a logical 'AND'. */
export type UserMetadata_Bool_Exp = {
  _and?: InputMaybe<Array<UserMetadata_Bool_Exp>>;
  _not?: InputMaybe<UserMetadata_Bool_Exp>;
  _or?: InputMaybe<Array<UserMetadata_Bool_Exp>>;
  avatar?: InputMaybe<Files_Bool_Exp>;
  avatarId?: InputMaybe<Uuid_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  eventHosts?: InputMaybe<EventHosts_Bool_Exp>;
  eventHosts_aggregate?: InputMaybe<EventHosts_Aggregate_Bool_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  gamePermissions?: InputMaybe<GamePermissions_Bool_Exp>;
  gamePermissions_aggregate?: InputMaybe<GamePermissions_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isActiveHost?: InputMaybe<Boolean_Comparison_Exp>;
  joinDate?: InputMaybe<Date_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_metadata" */
export enum UserMetadata_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserMetadataPkey = 'user_metadata_pkey'
}

/** input type for inserting data into table "user_metadata" */
export type UserMetadata_Insert_Input = {
  avatar?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  avatarId?: InputMaybe<Scalars['uuid']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  eventHosts?: InputMaybe<EventHosts_Arr_Rel_Insert_Input>;
  firstName?: InputMaybe<Scalars['String']>;
  gamePermissions?: InputMaybe<GamePermissions_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  isActiveHost?: InputMaybe<Scalars['Boolean']>;
  joinDate?: InputMaybe<Scalars['date']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type UserMetadata_Max_Fields = {
  __typename?: 'userMetadata_max_fields';
  avatarId?: Maybe<Scalars['uuid']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  joinDate?: Maybe<Scalars['date']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type UserMetadata_Min_Fields = {
  __typename?: 'userMetadata_min_fields';
  avatarId?: Maybe<Scalars['uuid']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  joinDate?: Maybe<Scalars['date']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "user_metadata" */
export type UserMetadata_Mutation_Response = {
  __typename?: 'userMetadata_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UserMetadata>;
};

/** input type for inserting object relation for remote table "user_metadata" */
export type UserMetadata_Obj_Rel_Insert_Input = {
  data: UserMetadata_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<UserMetadata_On_Conflict>;
};

/** on_conflict condition type for table "user_metadata" */
export type UserMetadata_On_Conflict = {
  constraint: UserMetadata_Constraint;
  update_columns?: Array<UserMetadata_Update_Column>;
  where?: InputMaybe<UserMetadata_Bool_Exp>;
};

/** Ordering options when selecting data from "user_metadata". */
export type UserMetadata_Order_By = {
  avatar?: InputMaybe<Files_Order_By>;
  avatarId?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  disabled?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  eventHosts_aggregate?: InputMaybe<EventHosts_Aggregate_Order_By>;
  firstName?: InputMaybe<Order_By>;
  gamePermissions_aggregate?: InputMaybe<GamePermissions_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  isActiveHost?: InputMaybe<Order_By>;
  joinDate?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_metadata */
export type UserMetadata_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_metadata" */
export enum UserMetadata_Select_Column {
  /** column name */
  AvatarId = 'avatarId',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  IsActiveHost = 'isActiveHost',
  /** column name */
  JoinDate = 'joinDate',
  /** column name */
  LastName = 'lastName',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  Role = 'role',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "user_metadata" */
export type UserMetadata_Set_Input = {
  avatarId?: InputMaybe<Scalars['uuid']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isActiveHost?: InputMaybe<Scalars['Boolean']>;
  joinDate?: InputMaybe<Scalars['date']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "userMetadata" */
export type UserMetadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: UserMetadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type UserMetadata_Stream_Cursor_Value_Input = {
  avatarId?: InputMaybe<Scalars['uuid']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isActiveHost?: InputMaybe<Scalars['Boolean']>;
  joinDate?: InputMaybe<Scalars['date']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "user_metadata" */
export enum UserMetadata_Update_Column {
  /** column name */
  AvatarId = 'avatarId',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  IsActiveHost = 'isActiveHost',
  /** column name */
  JoinDate = 'joinDate',
  /** column name */
  LastName = 'lastName',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  Role = 'role',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type UserMetadata_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserMetadata_Set_Input>;
  /** filter the rows which have to be updated */
  where: UserMetadata_Bool_Exp;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole: Scalars['String'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  id: Scalars['uuid'];
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  securityKeys: Array<AuthUserSecurityKeys>;
  /** An aggregate relationship */
  securityKeys_aggregate: AuthUserSecurityKeys_Aggregate;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  currentChallenge?: InputMaybe<String_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type InsertProviderRequestMutationVariables = Exact<{
  providerRequest: AuthProviderRequests_Insert_Input;
}>;


export type InsertProviderRequestMutation = { __typename?: 'mutation_root', insertAuthProviderRequest?: { __typename?: 'authProviderRequests', id: any, options?: any | null } | null };

export type DeleteProviderRequestMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteProviderRequestMutation = { __typename?: 'mutation_root', deleteAuthProviderRequest?: { __typename?: 'authProviderRequests', id: any, options?: any | null } | null };

export type ProviderRequestQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type ProviderRequestQuery = { __typename?: 'query_root', authProviderRequest?: { __typename?: 'authProviderRequests', id: any, options?: any | null } | null };

export type InsertRefreshTokenMutationVariables = Exact<{
  refreshToken: AuthRefreshTokens_Insert_Input;
}>;


export type InsertRefreshTokenMutation = { __typename?: 'mutation_root', insertAuthRefreshToken?: { __typename?: 'authRefreshTokens', id: any } | null };

export type DeleteRefreshTokenMutationVariables = Exact<{
  refreshTokenHash: Scalars['String'];
}>;


export type DeleteRefreshTokenMutation = { __typename?: 'mutation_root', deleteAuthRefreshTokens?: { __typename?: 'authRefreshTokens_mutation_response', affected_rows: number } | null };

export type DeleteUserRefreshTokensMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type DeleteUserRefreshTokensMutation = { __typename?: 'mutation_root', deleteAuthRefreshTokens?: { __typename?: 'authRefreshTokens_mutation_response', affected_rows: number } | null };

export type DeleteExpiredRefreshTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteExpiredRefreshTokensMutation = { __typename?: 'mutation_root', deleteAuthRefreshTokens?: { __typename?: 'authRefreshTokens_mutation_response', affected_rows: number } | null };

export type UpsertRolesMutationVariables = Exact<{
  roles: Array<AuthRoles_Insert_Input> | AuthRoles_Insert_Input;
}>;


export type UpsertRolesMutation = { __typename?: 'mutation_root', insertAuthRoles?: { __typename?: 'authRoles_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'authRoles', role: string }> } | null };

export type GetUserSecurityKeysQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserSecurityKeysQuery = { __typename?: 'query_root', authUserSecurityKeys: Array<{ __typename?: 'authUserSecurityKeys', counter: any, credentialId: string, credentialPublicKey?: any | null, transports: string, id: any, user: { __typename?: 'users', id: any } }> };

export type GetUserChallengeQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserChallengeQuery = { __typename?: 'query_root', user?: { __typename?: 'users', id: any, currentChallenge?: string | null } | null };

export type UpdateUserChallengeMutationVariables = Exact<{
  userId: Scalars['uuid'];
  challenge: Scalars['String'];
}>;


export type UpdateUserChallengeMutation = { __typename?: 'mutation_root', updateUser?: { __typename?: 'users', id: any } | null };

export type AddUserSecurityKeyMutationVariables = Exact<{
  userSecurityKey: AuthUserSecurityKeys_Insert_Input;
}>;


export type AddUserSecurityKeyMutation = { __typename?: 'mutation_root', insertAuthUserSecurityKey?: { __typename?: 'authUserSecurityKeys', id: any } | null };

export type UpdateUserSecurityKeyMutationVariables = Exact<{
  id: Scalars['uuid'];
  counter: Scalars['bigint'];
}>;


export type UpdateUserSecurityKeyMutation = { __typename?: 'mutation_root', updateAuthUserSecurityKey?: { __typename?: 'authUserSecurityKeys', id: any } | null };

export type AuthUserProvidersQueryVariables = Exact<{
  provider: Scalars['String'];
  providerUserId: Scalars['String'];
}>;


export type AuthUserProvidersQuery = { __typename?: 'query_root', authUserProviders: Array<{ __typename?: 'authUserProviders', id: any, user: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } }> };

export type UserProviderQueryVariables = Exact<{
  userId: Scalars['uuid'];
  providerId: Scalars['String'];
}>;


export type UserProviderQuery = { __typename?: 'query_root', authUserProviders: Array<{ __typename?: 'authUserProviders', id: any, refreshToken?: string | null }> };

export type UpdateAuthUserproviderMutationVariables = Exact<{
  id: Scalars['uuid'];
  authUserProvider: AuthUserProviders_Set_Input;
}>;


export type UpdateAuthUserproviderMutation = { __typename?: 'mutation_root', updateAuthUserProvider?: { __typename?: 'authUserProviders', id: any } | null };

export type InsertUserRolesMutationVariables = Exact<{
  userRoles: Array<AuthUserRoles_Insert_Input> | AuthUserRoles_Insert_Input;
}>;


export type InsertUserRolesMutation = { __typename?: 'mutation_root', insertAuthUserRoles?: { __typename?: 'authUserRoles_mutation_response', affected_rows: number } | null };

export type DeleteUserRolesByUserIdMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type DeleteUserRolesByUserIdMutation = { __typename?: 'mutation_root', deleteAuthUserRoles?: { __typename?: 'authUserRoles_mutation_response', affected_rows: number } | null };

export type UserFieldsFragment = { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> };

export type UserQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type UserQuery = { __typename?: 'query_root', user?: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } | null };

export type UsersQueryVariables = Exact<{
  where: Users_Bool_Exp;
}>;


export type UsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> }> };

export type GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutationVariables = Exact<{
  refreshTokenHash: Scalars['String'];
  expiresAt: Scalars['timestamptz'];
}>;


export type GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutation = { __typename?: 'mutation_root', updateAuthRefreshTokens?: { __typename?: 'authRefreshTokens_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'authRefreshTokens', id: any }> } | null };

export type GetUsersByRefreshTokenQueryVariables = Exact<{
  refreshTokenHash: Scalars['String'];
}>;


export type GetUsersByRefreshTokenQuery = { __typename?: 'query_root', authRefreshTokens: Array<{ __typename?: 'authRefreshTokens', id: any, user: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } }> };

export type GetUsersByPatQueryVariables = Exact<{
  patHash: Scalars['String'];
}>;


export type GetUsersByPatQuery = { __typename?: 'query_root', authRefreshTokens: Array<{ __typename?: 'authRefreshTokens', id: any, user: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } }> };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['uuid'];
  user: Users_Set_Input;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', updateUser?: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } | null };

export type UpdateUserWhereMutationVariables = Exact<{
  where: Users_Bool_Exp;
  user: Users_Set_Input;
}>;


export type UpdateUserWhereMutation = { __typename?: 'mutation_root', updateUsers?: { __typename?: 'users_mutation_response', affected_rows: number } | null };

export type RotateUsersTicketMutationVariables = Exact<{
  oldTicket: Scalars['String'];
  newTicket: Scalars['String'];
  newTicketExpiresAt: Scalars['timestamptz'];
}>;


export type RotateUsersTicketMutation = { __typename?: 'mutation_root', updateUsers?: { __typename?: 'users_mutation_response', affected_rows: number } | null };

export type ChangeEmailsByTicketMutationVariables = Exact<{
  ticket: Scalars['String'];
  email: Scalars['citext'];
  newTicket: Scalars['String'];
  now: Scalars['timestamptz'];
}>;


export type ChangeEmailsByTicketMutation = { __typename?: 'mutation_root', updateUsers?: { __typename?: 'users_mutation_response', returning: Array<{ __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> }> } | null };

export type InsertUserMutationVariables = Exact<{
  user: Users_Insert_Input;
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insertUser?: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } | null };

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type DeleteUserMutation = { __typename?: 'mutation_root', deleteAuthUserRoles?: { __typename?: 'authUserRoles_mutation_response', affected_rows: number } | null, deleteUser?: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } | null };

export type DeanonymizeUserMutationVariables = Exact<{
  userId: Scalars['uuid'];
  avatarUrl?: InputMaybe<Scalars['String']>;
  role: Scalars['String'];
}>;


export type DeanonymizeUserMutation = { __typename?: 'mutation_root', updateAuthUserRoles?: { __typename?: 'authUserRoles_mutation_response', affected_rows: number } | null, updateUser?: { __typename?: 'users', id: any } | null };

export type InsertUserProviderToUserMutationVariables = Exact<{
  userProvider: AuthUserProviders_Insert_Input;
}>;


export type InsertUserProviderToUserMutation = { __typename?: 'mutation_root', insertAuthUserProvider?: { __typename?: 'authUserProviders', id: any } | null };

export type GetUserByTicketQueryVariables = Exact<{
  ticket: Scalars['String'];
}>;


export type GetUserByTicketQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> }> };

export type UpdateUsersByTicketMutationVariables = Exact<{
  ticket: Scalars['String'];
  user: Users_Set_Input;
}>;


export type UpdateUsersByTicketMutation = { __typename?: 'mutation_root', updateUsers?: { __typename?: 'users_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> }> } | null };

export const UserFieldsFragmentDoc = gql`
    fragment userFields on users {
  id
  createdAt
  disabled
  displayName
  avatarUrl
  email
  passwordHash
  emailVerified
  phoneNumber
  phoneNumberVerified
  defaultRole
  isAnonymous
  ticket
  otpHash
  totpSecret
  activeMfaType
  newEmail
  locale
  metadata
  roles {
    role
  }
}
    `;
export const InsertProviderRequestDocument = gql`
    mutation insertProviderRequest($providerRequest: authProviderRequests_insert_input!) {
  insertAuthProviderRequest(
    object: $providerRequest
    on_conflict: {constraint: provider_requests_pkey, update_columns: [options]}
  ) {
    id
    options
  }
}
    `;
export const DeleteProviderRequestDocument = gql`
    mutation deleteProviderRequest($id: uuid!) {
  deleteAuthProviderRequest(id: $id) {
    id
    options
  }
}
    `;
export const ProviderRequestDocument = gql`
    query providerRequest($id: uuid!) {
  authProviderRequest(id: $id) {
    id
    options
  }
}
    `;
export const InsertRefreshTokenDocument = gql`
    mutation insertRefreshToken($refreshToken: authRefreshTokens_insert_input!) {
  insertAuthRefreshToken(object: $refreshToken) {
    id
  }
}
    `;
export const DeleteRefreshTokenDocument = gql`
    mutation deleteRefreshToken($refreshTokenHash: String!) {
  deleteAuthRefreshTokens(where: {refreshTokenHash: {_eq: $refreshTokenHash}}) {
    affected_rows
  }
}
    `;
export const DeleteUserRefreshTokensDocument = gql`
    mutation deleteUserRefreshTokens($userId: uuid!) {
  deleteAuthRefreshTokens(where: {user: {id: {_eq: $userId}}}) {
    affected_rows
  }
}
    `;
export const DeleteExpiredRefreshTokensDocument = gql`
    mutation deleteExpiredRefreshTokens {
  deleteAuthRefreshTokens(where: {expiresAt: {_lt: now}}) {
    affected_rows
  }
}
    `;
export const UpsertRolesDocument = gql`
    mutation upsertRoles($roles: [authRoles_insert_input!]!) {
  insertAuthRoles(
    objects: $roles
    on_conflict: {constraint: roles_pkey, update_columns: []}
  ) {
    affected_rows
    returning {
      role
    }
  }
}
    `;
export const GetUserSecurityKeysDocument = gql`
    query getUserSecurityKeys($id: uuid!) {
  authUserSecurityKeys(where: {userId: {_eq: $id}}) {
    counter
    credentialId
    credentialPublicKey
    transports
    id
    user {
      id
    }
  }
}
    `;
export const GetUserChallengeDocument = gql`
    query getUserChallenge($id: uuid!) {
  user(id: $id) {
    id
    currentChallenge
  }
}
    `;
export const UpdateUserChallengeDocument = gql`
    mutation updateUserChallenge($userId: uuid!, $challenge: String!) {
  updateUser(pk_columns: {id: $userId}, _set: {currentChallenge: $challenge}) {
    id
  }
}
    `;
export const AddUserSecurityKeyDocument = gql`
    mutation addUserSecurityKey($userSecurityKey: authUserSecurityKeys_insert_input!) {
  insertAuthUserSecurityKey(object: $userSecurityKey) {
    id
  }
}
    `;
export const UpdateUserSecurityKeyDocument = gql`
    mutation updateUserSecurityKey($id: uuid!, $counter: bigint!) {
  updateAuthUserSecurityKey(pk_columns: {id: $id}, _set: {counter: $counter}) {
    id
  }
}
    `;
export const AuthUserProvidersDocument = gql`
    query authUserProviders($provider: String!, $providerUserId: String!) {
  authUserProviders(
    where: {_and: {provider: {id: {_eq: $provider}}, providerUserId: {_eq: $providerUserId}}}
    limit: 1
  ) {
    id
    user {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export const UserProviderDocument = gql`
    query userProvider($userId: uuid!, $providerId: String!) {
  authUserProviders(
    where: {_and: [{userId: {_eq: $userId}}, {providerId: {_eq: $providerId}}]}
    limit: 1
  ) {
    id
    refreshToken
  }
}
    `;
export const UpdateAuthUserproviderDocument = gql`
    mutation updateAuthUserprovider($id: uuid!, $authUserProvider: authUserProviders_set_input!) {
  updateAuthUserProvider(pk_columns: {id: $id}, _set: $authUserProvider) {
    id
  }
}
    `;
export const InsertUserRolesDocument = gql`
    mutation insertUserRoles($userRoles: [authUserRoles_insert_input!]!) {
  insertAuthUserRoles(objects: $userRoles) {
    affected_rows
  }
}
    `;
export const DeleteUserRolesByUserIdDocument = gql`
    mutation deleteUserRolesByUserId($userId: uuid!) {
  deleteAuthUserRoles(where: {userId: {_eq: $userId}}) {
    affected_rows
  }
}
    `;
export const UserDocument = gql`
    query user($id: uuid!) {
  user(id: $id) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const UsersDocument = gql`
    query users($where: users_bool_exp!) {
  users(where: $where) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtDocument = gql`
    mutation getUsersByRefreshTokenAndUpdateRefreshTokenExpiresAt($refreshTokenHash: String!, $expiresAt: timestamptz!) {
  updateAuthRefreshTokens(
    _set: {expiresAt: $expiresAt}
    where: {_and: [{refreshTokenHash: {_eq: $refreshTokenHash}}, {user: {disabled: {_eq: false}}}, {expiresAt: {_gte: now}}]}
  ) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export const GetUsersByRefreshTokenDocument = gql`
    query getUsersByRefreshToken($refreshTokenHash: String!) {
  authRefreshTokens(
    where: {_and: [{refreshTokenHash: {_eq: $refreshTokenHash}}, {user: {disabled: {_eq: false}}}, {expiresAt: {_gte: now}}]}
  ) {
    id
    user {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export const GetUsersByPatDocument = gql`
    query getUsersByPAT($patHash: String!) {
  authRefreshTokens(
    where: {_and: [{refreshTokenHash: {_eq: $patHash}}, {user: {disabled: {_eq: false}}}, {expiresAt: {_gte: now}}, {type: {_eq: pat}}]}
  ) {
    id
    user {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export const UpdateUserDocument = gql`
    mutation updateUser($id: uuid!, $user: users_set_input!) {
  updateUser(pk_columns: {id: $id}, _set: $user) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const UpdateUserWhereDocument = gql`
    mutation updateUserWhere($where: users_bool_exp!, $user: users_set_input!) {
  updateUsers(where: $where, _set: $user) {
    affected_rows
  }
}
    `;
export const RotateUsersTicketDocument = gql`
    mutation rotateUsersTicket($oldTicket: String!, $newTicket: String!, $newTicketExpiresAt: timestamptz!) {
  updateUsers(
    _set: {ticket: $newTicket, ticketExpiresAt: $newTicketExpiresAt}
    where: {ticket: {_eq: $oldTicket}}
  ) {
    affected_rows
  }
}
    `;
export const ChangeEmailsByTicketDocument = gql`
    mutation changeEmailsByTicket($ticket: String!, $email: citext!, $newTicket: String!, $now: timestamptz!) {
  updateUsers(
    where: {_and: [{ticket: {_eq: $ticket}}, {ticketExpiresAt: {_gt: $now}}]}
    _set: {email: $email, newEmail: null, ticket: $newTicket, ticketExpiresAt: $now}
  ) {
    returning {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export const InsertUserDocument = gql`
    mutation insertUser($user: users_insert_input!) {
  insertUser(object: $user) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const DeleteUserDocument = gql`
    mutation deleteUser($userId: uuid!) {
  deleteAuthUserRoles(where: {userId: {_eq: $userId}}) {
    affected_rows
  }
  deleteUser(id: $userId) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const DeanonymizeUserDocument = gql`
    mutation deanonymizeUser($userId: uuid!, $avatarUrl: String, $role: String!) {
  updateAuthUserRoles(where: {user: {id: {_eq: $userId}}}, _set: {role: $role}) {
    affected_rows
  }
  updateUser(
    pk_columns: {id: $userId}
    _set: {avatarUrl: $avatarUrl, defaultRole: $role}
  ) {
    id
  }
}
    `;
export const InsertUserProviderToUserDocument = gql`
    mutation insertUserProviderToUser($userProvider: authUserProviders_insert_input!) {
  insertAuthUserProvider(object: $userProvider) {
    id
  }
}
    `;
export const GetUserByTicketDocument = gql`
    query getUserByTicket($ticket: String!) {
  users(where: {ticket: {_eq: $ticket}}) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const UpdateUsersByTicketDocument = gql`
    mutation updateUsersByTicket($ticket: String!, $user: users_set_input!) {
  updateUsers(
    where: {_and: [{ticket: {_eq: $ticket}}, {ticketExpiresAt: {_gt: now}}]}
    _set: $user
  ) {
    affected_rows
    returning {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    insertProviderRequest(variables: InsertProviderRequestMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertProviderRequestMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertProviderRequestMutation>(InsertProviderRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertProviderRequest', 'mutation');
    },
    deleteProviderRequest(variables: DeleteProviderRequestMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteProviderRequestMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteProviderRequestMutation>(DeleteProviderRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteProviderRequest', 'mutation');
    },
    providerRequest(variables: ProviderRequestQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProviderRequestQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProviderRequestQuery>(ProviderRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'providerRequest', 'query');
    },
    insertRefreshToken(variables: InsertRefreshTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertRefreshTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertRefreshTokenMutation>(InsertRefreshTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertRefreshToken', 'mutation');
    },
    deleteRefreshToken(variables: DeleteRefreshTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteRefreshTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteRefreshTokenMutation>(DeleteRefreshTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteRefreshToken', 'mutation');
    },
    deleteUserRefreshTokens(variables: DeleteUserRefreshTokensMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserRefreshTokensMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserRefreshTokensMutation>(DeleteUserRefreshTokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUserRefreshTokens', 'mutation');
    },
    deleteExpiredRefreshTokens(variables?: DeleteExpiredRefreshTokensMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteExpiredRefreshTokensMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteExpiredRefreshTokensMutation>(DeleteExpiredRefreshTokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteExpiredRefreshTokens', 'mutation');
    },
    upsertRoles(variables: UpsertRolesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertRolesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertRolesMutation>(UpsertRolesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upsertRoles', 'mutation');
    },
    getUserSecurityKeys(variables: GetUserSecurityKeysQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserSecurityKeysQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserSecurityKeysQuery>(GetUserSecurityKeysDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserSecurityKeys', 'query');
    },
    getUserChallenge(variables: GetUserChallengeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserChallengeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserChallengeQuery>(GetUserChallengeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserChallenge', 'query');
    },
    updateUserChallenge(variables: UpdateUserChallengeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserChallengeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserChallengeMutation>(UpdateUserChallengeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserChallenge', 'mutation');
    },
    addUserSecurityKey(variables: AddUserSecurityKeyMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddUserSecurityKeyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddUserSecurityKeyMutation>(AddUserSecurityKeyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addUserSecurityKey', 'mutation');
    },
    updateUserSecurityKey(variables: UpdateUserSecurityKeyMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserSecurityKeyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserSecurityKeyMutation>(UpdateUserSecurityKeyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserSecurityKey', 'mutation');
    },
    authUserProviders(variables: AuthUserProvidersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AuthUserProvidersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthUserProvidersQuery>(AuthUserProvidersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'authUserProviders', 'query');
    },
    userProvider(variables: UserProviderQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserProviderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserProviderQuery>(UserProviderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userProvider', 'query');
    },
    updateAuthUserprovider(variables: UpdateAuthUserproviderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateAuthUserproviderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateAuthUserproviderMutation>(UpdateAuthUserproviderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateAuthUserprovider', 'mutation');
    },
    insertUserRoles(variables: InsertUserRolesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertUserRolesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertUserRolesMutation>(InsertUserRolesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertUserRoles', 'mutation');
    },
    deleteUserRolesByUserId(variables: DeleteUserRolesByUserIdMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserRolesByUserIdMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserRolesByUserIdMutation>(DeleteUserRolesByUserIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUserRolesByUserId', 'mutation');
    },
    user(variables: UserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserQuery>(UserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'user', 'query');
    },
    users(variables: UsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsersQuery>(UsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'users', 'query');
    },
    getUsersByRefreshTokenAndUpdateRefreshTokenExpiresAt(variables: GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutation>(GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUsersByRefreshTokenAndUpdateRefreshTokenExpiresAt', 'mutation');
    },
    getUsersByRefreshToken(variables: GetUsersByRefreshTokenQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersByRefreshTokenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersByRefreshTokenQuery>(GetUsersByRefreshTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUsersByRefreshToken', 'query');
    },
    getUsersByPAT(variables: GetUsersByPatQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersByPatQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersByPatQuery>(GetUsersByPatDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUsersByPAT', 'query');
    },
    updateUser(variables: UpdateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserMutation>(UpdateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUser', 'mutation');
    },
    updateUserWhere(variables: UpdateUserWhereMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserWhereMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserWhereMutation>(UpdateUserWhereDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserWhere', 'mutation');
    },
    rotateUsersTicket(variables: RotateUsersTicketMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RotateUsersTicketMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RotateUsersTicketMutation>(RotateUsersTicketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'rotateUsersTicket', 'mutation');
    },
    changeEmailsByTicket(variables: ChangeEmailsByTicketMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ChangeEmailsByTicketMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ChangeEmailsByTicketMutation>(ChangeEmailsByTicketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'changeEmailsByTicket', 'mutation');
    },
    insertUser(variables: InsertUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertUserMutation>(InsertUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertUser', 'mutation');
    },
    deleteUser(variables: DeleteUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserMutation>(DeleteUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUser', 'mutation');
    },
    deanonymizeUser(variables: DeanonymizeUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeanonymizeUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeanonymizeUserMutation>(DeanonymizeUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deanonymizeUser', 'mutation');
    },
    insertUserProviderToUser(variables: InsertUserProviderToUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertUserProviderToUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertUserProviderToUserMutation>(InsertUserProviderToUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertUserProviderToUser', 'mutation');
    },
    getUserByTicket(variables: GetUserByTicketQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserByTicketQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserByTicketQuery>(GetUserByTicketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserByTicket', 'query');
    },
    updateUsersByTicket(variables: UpdateUsersByTicketMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUsersByTicketMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUsersByTicketMutation>(UpdateUsersByTicketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUsersByTicket', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;