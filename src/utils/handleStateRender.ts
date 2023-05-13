const handleStateRender = (isFetched: boolean, data: unknown, canEmpty?: boolean) => {
  if (isFetched && data) {
    return 'view'
  }
  if (isFetched && !data) {
    return 'error'
  }
  if (isFetched && canEmpty) {
    return 'empty'
  }

  return 'loading'
}

export default handleStateRender