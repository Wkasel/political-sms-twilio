
import React from 'react';
import { PageTransition } from 'next-page-transitions'
import { Loader } from '../components'

export const Transitions: React.FC<{ timeout: number }> = ({ children, timeout }) =>
  <>
    <PageTransition
      timeout={timeout}
      classNames="page-transition"
      loadingComponent={<Loader />}
      loadingDelay={500}
      loadingTimeout={{
        enter: timeout,
        exit: 0,
      }}
      loadingClassNames="loading-indicator"
    >

      {children}
    </PageTransition>
    <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
          transform: translate3d(0, 20px, 0);
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity ${timeout}ms, transform ${timeout}ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity ${timeout}ms;
        }
        .loading-indicator-appear,
        .loading-indicator-enter {
          opacity: 0;
        }
        .loading-indicator-appear-active,
        .loading-indicator-enter-active {
          opacity: 1;
          transition: opacity ${timeout}ms;
        }
      `}</style>
  </>
