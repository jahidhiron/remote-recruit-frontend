import { toast, Toast } from 'react-hot-toast'
import { X, CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react'

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

type ToastType = 'success' | 'error' | 'warning' | 'info'

const TOAST_CONFIG: Record<
  ToastType,
  { bg: string; text: string; border: string; icon: JSX.Element; baseDuration: number }
> = {
  success: {
    bg: 'bg-green-50',
    text: 'text-green-800',
    border: 'border-green-200',
    icon: <CheckCircle className="text-green-500 shrink-0" size={18} />,
    baseDuration: 4000,
  },
  error: {
    bg: 'bg-red-50',
    text: 'text-red-800',
    border: 'border-red-200',
    icon: <XCircle className="text-red-500 shrink-0" size={18} />,
    baseDuration: 6000,
  },
  warning: {
    bg: 'bg-yellow-50',
    text: 'text-yellow-800',
    border: 'border-yellow-200',
    icon: <AlertTriangle className="text-yellow-500 shrink-0" size={18} />,
    baseDuration: 5000,
  },
  info: {
    bg: 'bg-blue-50',
    text: 'text-blue-800',
    border: 'border-blue-200',
    icon: <Info className="text-blue-500 shrink-0" size={18} />,
    baseDuration: 5000,
  },
}

const showToast = (
  message: string,
  type: ToastType = 'success',
  position: ToastPosition = 'bottom-right',
  duration?: number,
) => {
  const { bg, text, border, icon, baseDuration } = TOAST_CONFIG[type]

  /** Scale duration with message length, capped at 15 s */
  const calculatedDuration = duration ?? Math.min(baseDuration + message.length * 50, 15_000)

  toast.custom(
    (t: Toast) => (
      <div
        className={`
          w-[360px] flex items-start gap-3 rounded-xl border shadow-lg px-4 py-3
          ${bg} ${text} ${border}
          ${t.visible ? 'animate-toast-in' : 'animate-toast-out'}
        `}
      >
        <div className="flex items-center pt-0.5">{icon}</div>
        <p className="flex-1 text-sm font-medium leading-snug break-words">{message}</p>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="text-gray-400 hover:text-gray-700 transition-colors mt-0.5"
          aria-label="Dismiss"
        >
          <X size={15} />
        </button>
      </div>
    ),
    { duration: calculatedDuration, position },
  )
}

export const successMessage = (message: string, position?: ToastPosition, duration?: number) =>
  showToast(message, 'success', position, duration)

export const errorMessage = (message: string, position?: ToastPosition, duration?: number) =>
  showToast(message, 'error', position, duration)

export const warningMessage = (message: string, position?: ToastPosition, duration?: number) =>
  showToast(message, 'warning', position, duration)

export const infoMessage = (message: string, position?: ToastPosition, duration?: number) =>
  showToast(message, 'info', position, duration)
