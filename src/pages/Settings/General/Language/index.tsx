import React, { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { DialogContentProps, DialogProps } from '@radix-ui/react-dialog';
import styles from './index.module.scss';

export type ModalProps = DialogProps & {
  title: string | ReactNode;
  trigger: ReactNode;
  contentProps?: DialogContentProps;
};

const LanguageModal = (props: ModalProps) => {
  const { trigger, title, contentProps, ...restProps } = props;

  return (
    <Dialog.Root {...restProps}>
      <Dialog.Trigger asChild={true}>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles['overlay']}>
          <Dialog.Content className={styles['content']} {...contentProps}>
              <div className={styles['modal-main']}>
                  <Dialog.Close className={styles['close']}/>
                  <h1>Language</h1>
                  <ul>
                      <li className={styles['on']}><b>English</b><i/></li>
                      <li><b>简体中文</b><i/></li>
                      <li><b>繁體中文</b><i/></li>
                  </ul>
              </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default LanguageModal;
