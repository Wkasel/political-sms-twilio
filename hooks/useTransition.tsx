import React, { useState, useEffect } from 'react';

export const useTransition = ({ pageTransitionReadyToEnter }) => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            pageTransitionReadyToEnter()
            setLoaded(true)
        }, 2000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [pageTransitionReadyToEnter])

    return { loaded }
}