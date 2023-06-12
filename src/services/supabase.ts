import config from '../config'
import { PostgrestError, PostgrestSingleResponse } from '@supabase/postgrest-js'
import { createClient } from '@supabase/supabase-js'
import { QueryKey, UseQueryOptions, useQuery } from '@tanstack/react-query'

export type SupabaseQueryFunction<T> = () => any

export type SupabaseSingleQueryFunction<T> = () => PromiseLike<PostgrestSingleResponse<T>>

export type SupabaseQueryOptions<T> = Omit<
  UseQueryOptions<T[], PostgrestError, T[], QueryKey>,
  'queryKey' | 'queryFn'
>

export type SupabaseSingleQueryOptions<T> = Omit<
  UseQueryOptions<T, PostgrestError, T, QueryKey>,
  'queryKey' | 'queryFn'
>

export const useSupabaseQuery = <T>(
  key: QueryKey,
  queryFn: SupabaseQueryFunction<T>,
  options?: SupabaseQueryOptions<T>
) => {
  return useQuery<T[], PostgrestError>(
    key,
    async () => {
      const { data, error } = await queryFn()
      if (error) {
        throw error
      }
      return data
    },
    options
  )
}

export const useSupabaseSingleQuery = <T>(
  key: QueryKey,
  queryFn: SupabaseSingleQueryFunction<T>,
  options?: SupabaseSingleQueryOptions<T>
) => {
  return useQuery<T, PostgrestError>(
    key,
    async () => {
      const { data, error } = await queryFn()
      if (error) {
        throw error
      }
      return data
    },
    options
  )
}

export const supabase = createClient(config.supabaseUrl, config.supabaseKey)
