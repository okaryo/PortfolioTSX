export const dateFormatter = (dateString: string | null) => {
  if (dateString == null) return 'present'

  const monthExpressions = [
    'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
  ]
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = date.getMonth()

  return `${monthExpressions[month]} ${year}`
}
