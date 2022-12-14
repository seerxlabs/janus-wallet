import React, {ReactNode} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {DialogContentProps, DialogProps} from '@radix-ui/react-dialog';
import styles from './index.module.scss';

export type ModalProps = DialogProps & {
    title: string | ReactNode;
    trigger: ReactNode;
    contentProps?: DialogContentProps;
};

const ThemeModal = (props: ModalProps) => {
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
                            <ul>
                                <li><b>Auto</b></li>
                                <li className={styles['on']}><b>Light color</b><i/></li>
                                <li><b>Dark color</b></li>
                            </ul>
                        </div>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default ThemeModal;
