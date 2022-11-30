import React, {ReactNode} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {DialogContentProps, DialogProps} from '@radix-ui/react-dialog';
import styles from './index.module.scss';
import IconMintSuccess from '@/assets/icons/mint-success.svg'

export type ModalProps = DialogProps & {
    tips: string | ReactNode;
    trigger: ReactNode;
    contentProps?: DialogContentProps;
};

const NFTMintSuccessModal = (props: ModalProps) => {
    const {trigger, tips, contentProps, ...restProps} = props;

    return (
        <Dialog.Root {...restProps}>
            <Dialog.Trigger asChild={true}>{trigger}</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={styles['overlay']}>
                    <Dialog.Content className={styles['content']} {...contentProps}>
                        <div className={styles['modal-main']}>
                            <img src={IconMintSuccess} alt=""/>
                            <h1>{tips}</h1>
                            <button>Ok</button>
                        </div>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default NFTMintSuccessModal;
