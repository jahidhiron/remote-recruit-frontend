import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from './index'

/**
 * Type-safe replacement for useSelector.
 * Provides full autocomplete and type checking against RootState.
 *
 * @example
 * const faqItems = useTypedSelector(state => state.faq.faqItems)
 */
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
