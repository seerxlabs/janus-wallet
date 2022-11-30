import {toast, ToastOptions} from 'react-toastify';

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
        type: 'success',
        ...options,
    });
};

export const error = (content: string, options?: ToastOptions) => {
    return createToast(content, {
        type: 'error',
        ...options,
    });
};

export const info = (content: string, options?: ToastOptions) => {
    return createToast(content, {
        type: 'info',
        ...options,
    });
};

export default {
    success,
    error,
    info,
};
