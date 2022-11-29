import React, {ReactNode} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {DialogContentProps, DialogProps} from '@radix-ui/react-dialog';
import styles from './index.module.scss';

export type ModalProps = DialogProps & {
    title: string | ReactNode;
    trigger: ReactNode;
    contentProps?: DialogContentProps;
};

const Modal = (props: ModalProps) => {
    const {children, trigger, title, contentProps, ...restProps} = props;

    return (
        <Dialog.Root {...restProps}>
            <Dialog.Trigger asChild={true}>{trigger}</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={styles['overlay']}>
                    <Dialog.Content className={styles['content']} {...contentProps}>
                        <Dialog.Close className={styles['close']}/>
                        {children}
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default Modal;
