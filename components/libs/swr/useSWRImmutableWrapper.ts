import useSWRImmutable, { SWRConfiguration, SWRResponse } from "swr";

interface useSWRImmutableWrapperProps<T> {
  key: string;
  fetcher: () => Promise<T>;
  options?: SWRConfiguration;
  shouldFetch?: boolean;
}

interface SWRHookResponse<T> extends SWRResponse<T> {
  /**
   * A boolean indicating whether the data is currently being fetched or not.
   */
  isLoading: boolean;
}

/**
 * A custom hook that wraps the useSWR hook to provide a isLoading property for convenience.
 *
 * @param key - A unique key to identify the data being fetched.
 * @param shouldFetch - A boolean indicating whether the data should be fetched or not.
 * @param fetcher - A fetcher function to be called when fetching data.
 * @param options - Optional configuration options for the SWR hook.
 * @returns An object with the data, error, and isLoading properties.
 */
const useSWRImmutableWrapper = <T>({
  key,
  shouldFetch,
  fetcher,
  options = {},
}: useSWRImmutableWrapperProps<T>): SWRHookResponse<T> => {
  const { data, error, ...rest } = useSWRImmutable<T>(
    shouldFetch ? key : null,
    fetcher,
    {
      ...options,
    },
  );

  return {
    data,
    error,
    ...rest,
  };
};

export default useSWRImmutableWrapper;
