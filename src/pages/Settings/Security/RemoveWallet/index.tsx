import React, {ReactNode} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {DialogContentProps, DialogProps} from '@radix-ui/react-dialog';
import styles from './index.module.scss';
import IconWarn from '@/assets/icons/warn.svg'

export type ModalProps = DialogProps & {
    title: string | ReactNode;
    trigger: ReactNode;
    contentProps?: DialogContentProps;
};

const RemoveWalletModal = (props: ModalProps) => {
    const {trigger, title, contentProps, ...restProps} = props;

    return (
        <Dialog.Root {...restProps}>
            <Dialog.Trigger asChild={true}>{trigger}</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={styles['overlay']}>
                    <Dialog.Content className={styles['content']} {...contentProps}>
                        <div className={styles['modal-main']}>
                            <img src={IconWarn} alt=""/>
                            <h1>{title}</h1>
                            <h6>Make sure you’ve written down and save the recovery phrase securely before removing the wallet. Otherwise, you won’t be able to recover the wallet.</h6>
                            <div className={styles['agree']}>
                                <a/><p>I’ve written down and save the recovery phrase securely</p>
                            </div>
                            <div className={styles['btn-box']}>
                                <button className={styles['cancel']}>Cancel</button>
                                <button className={styles['remove']}>Remove</button>
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default RemoveWalletModal;
