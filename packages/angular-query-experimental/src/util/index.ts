/**
 *
 * @param throwError
 * @param params
 */
export function shouldThrowError<T extends (...args: Array<any>) => boolean>(
  throwError: boolean | T | undefined,
  params: Parameters<T>,
): boolean {
  // Allow throwError function to override throwing behavior on a per-error basis
  if (typeof throwError === 'function') {
    return throwError(...params)
  }

  return !!throwError
}

export function noop(): void
export function noop(): undefined
export function noop() {}
