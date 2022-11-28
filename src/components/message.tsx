import { toast, ToastOptions } from 'react-toastify';
import IconSuccess from '@/assets/icons/msg-success.svg';
import IconError from '@/assets/icons/msg-error.svg';
import IconInfo from '@/assets/icons/msg-info.svg';

function createToast(content: string, options?: ToastOptions) {
  const commonOpts: ToastOptions = {
    position: 'top-center',
    closeButton: false,
    hideProgressBar: true,
    autoClose: 2000,
  };

  return toast(content, {
    ...commonOpts,
    ...options,
  });
}

export const success = (content: string, options?: ToastOptions) => {
  return createToast(content, {
    icon: ({theme, type}) =>  <img src={IconSuccess} alt={''}/>,
    type: 'success',
    ...options,
  });
};

export const error = (content: string, options?: ToastOptions) => {
  return createToast(content, {
    icon: ({theme, type}) =>  <img src={IconError} alt={''}/>,
    type: 'error',
    ...options,
  });
};

export const info = (content: string, options?: ToastOptions) => {
  return createToast(content, {
    icon: ({theme, type}) =>  <img src={IconInfo} alt={''}/>,
    type: 'info',
    ...options,
  });
};

export default {
  success,
  error,
  info,
};
