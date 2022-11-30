import React, {ReactNode} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {DialogContentProps, DialogProps} from '@radix-ui/react-dialog';
import styles from './index.module.scss';
import {Link} from "react-router-dom";

export type ModalProps = DialogProps & {
    title: string | ReactNode;
    trigger: ReactNode;
    contentProps?: DialogContentProps;
};

const BackupWalletModal = (props: ModalProps) => {
    const {trigger, title, contentProps, ...restProps} = props;

    return (
        <Dialog.Root {...restProps}>
            <Dialog.Trigger asChild={true}>{trigger}</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={styles['overlay']}>
                    <Dialog.Content className={styles['content']} {...contentProps}>
                        <div className={styles['modal-main']}>
                            <Dialog.Close className={styles['close']}/>
                            <h1>{title}</h1>
                            <div className={styles['btn-box']}>
                                <Link className={styles['primary']} to="/settings/showPrivateKey">Show private key</Link>
                                <Link className={styles['primary']} to="/settings/showRecoveryPhrase">Show recovery phrase</Link>
                                <button className={styles['default']}>Download Json file</button>
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default BackupWalletModal;
