import { errorMessage, successMessage } from '@/components/helper/notification'

/**
 * Copies text to the clipboard and shows a toast confirmation.
 * Falls back to the legacy execCommand API for non-secure contexts.
 */
export async function copyToClipboard(text: string, label = 'Text'): Promise<void> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
    } else {
      const el = document.createElement('textarea')
      el.value = text
      el.style.cssText = 'position:fixed;opacity:0;pointer-events:none'
      document.body.appendChild(el)
      el.focus()
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    successMessage(`${label} copied to clipboard`)
  } catch (err) {
    console.error('[copyToClipboard]', err)
    errorMessage('Failed to copy — please copy manually')
  }
}
