import React, { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { DialogContentProps, DialogProps } from '@radix-ui/react-dialog';
import styles from './index.module.scss';
import IconsETH from "@/assets/icons/net-eth.svg"

export type ModalProps = DialogProps & {
  title: string | ReactNode;
  trigger: ReactNode;
  contentProps?: DialogContentProps;
};

const DefaultCurrencyModal = (props: ModalProps) => {
  const { trigger, title, contentProps, ...restProps } = props;

  return (
    <Dialog.Root {...restProps}>
      <Dialog.Trigger asChild={true}>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles['overlay']}>
          <Dialog.Content className={styles['content']} {...contentProps}>
              <div className={styles['modal-main']}>
                  <Dialog.Close className={styles['close']}/>
                  <h1>{title}</h1>
                  <div className={styles['search-box']}>
                      <input type="text" placeholder={'Search token'}/>
                      <a/>
                  </div>
                  <ul>
                      <li className={styles['on']}><img src={IconsETH} alt=""/><b>ETH</b><i/></li>
                      <li><img src={IconsETH} alt=""/><b>ETH</b><i/></li>
                      <li><img src={IconsETH} alt=""/><b>ETH</b><i/></li>
                  </ul>
              </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DefaultCurrencyModal;
