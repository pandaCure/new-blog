import React from 'react'
import * as Sentry from '@sentry/browser'
interface ITypeError {
  eventId: any
  hasError?: boolean
}
class HandleErrorBoundary extends React.Component<{}, ITypeError> {
  public static getDerivedStateFromError() {
    return { hasError: true }
  }
  public state: ITypeError = { eventId: null }
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  public componentDidCatch(error, errorInfo) {
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo)
      const eventId = Sentry.captureException(error)
      this.setState({ eventId })
    })
  }
  public render() {
    if (this.state.hasError) {
      // TODO: 改成错我提示
      return (
        <button
          onClick={() =>
            Sentry.showReportDialog({ eventId: this.state.eventId })
          }
        >
          Report feedback
        </button>
      )
    }
    return this.props.children
  }
}
export default HandleErrorBoundary
