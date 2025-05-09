function mapStatusHTTP(status: string): number {
  switch (status) {
    case 'SUCCESSFUL': return 200;
    case 'CREATED': return 201;
    case 'INVALID_VALUE': return 400;
    case 'NOT_FUND': return 404;
    default: return 500;
  }
}

export default mapStatusHTTP;
