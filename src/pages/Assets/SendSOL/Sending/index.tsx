import React, {ReactNode} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {DialogContentProps, DialogProps} from '@radix-ui/react-dialog';
import styles from './index.module.scss';
import IconSending from '@/assets/icons/sending.svg'

export type ModalProps = DialogProps & {
    tips: string | ReactNode;
    trigger: ReactNode;
    contentProps?: DialogContentProps;
};

const SOLSendingModal = (props: ModalProps) => {
    const {trigger, tips, contentProps, ...restProps} = props;

    return (
        <Dialog.Root {...restProps}>
            <Dialog.Trigger asChild={true}>{trigger}</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={styles['overlay']}>
                    <Dialog.Content className={styles['content']} {...contentProps}>
                        <div className={styles['modal-main']}>
                            <img src={IconSending} alt=""/>
                            <h1>{tips}</h1>
                        </div>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default SOLSendingModal;
