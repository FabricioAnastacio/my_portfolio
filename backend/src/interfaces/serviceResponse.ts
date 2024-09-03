type ServiceErrorStatus =
'NOT_FOUND'
| 'UNAUTHORIZED'
| 'INVALID_VALUE';

type ServiceError = {
  status: ServiceErrorStatus,
  data: {
    message: string,
  }
}

type ServiceSuccess<T> = {
  status: 'SUCCESSFUL' | 'CREATED',
  data: T
}

export type ServiceResponse<T> = ServiceSuccess<T> | ServiceError;
