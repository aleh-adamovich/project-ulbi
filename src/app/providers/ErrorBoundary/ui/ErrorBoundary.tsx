import React, {
    Component, ErrorInfo, ReactNode, Suspense,
} from 'react';
import { Error } from 'widgets/Error/Error';
import { Loader } from 'shared/ui/Loader/Loader';

type ErrorBoundaryPropsType = { children: ReactNode };
type ErrorBoundaryStateType = { hasError: boolean };

class ErrorBoundary extends Component<ErrorBoundaryPropsType, ErrorBoundaryStateType> {
    state: ErrorBoundaryStateType = { hasError: false };

    static getDerivedStateFromError(error: Error): ErrorBoundaryStateType {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // eslint-disable-next-line no-console
        console.log(error, info.componentStack);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <Suspense fallback={<Loader />}>
                    <Error />
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
