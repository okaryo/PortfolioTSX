export const dateFormatter = (dateString: string) => {
  const monthExpressions = [
    'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
  ]

  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = date.getMonth()

  return `${monthExpressions[month]} ${year}`
}
