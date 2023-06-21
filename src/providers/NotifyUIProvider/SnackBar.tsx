import React from 'react';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import {AppNotification, Position} from './types';
import {AlertSnackbar} from './views/AlertSnackBar/AlertSnackBar';

export const SNACKBAR_ANIMATION_OUT_TIMING = 1000;

interface Props {
  notification: AppNotification;
  onClose: () => void;
}

export const Snackbar: React.FC<Props> = ({notification, onClose}) => {
  const isBottomPosition =
    (notification.position || Position.BOTTOM) === Position.BOTTOM;
  const animationIn = isBottomPosition ? 'slideInUp' : 'slideInDown';
  const animationOut = isBottomPosition ? 'slideOutDown' : 'slideOutUp';

  return (
    <Modal
      useNativeDriver
      animationIn={animationIn}
      animationOut={animationOut}
      animationOutTiming={SNACKBAR_ANIMATION_OUT_TIMING}
      coverScreen={false}
      hasBackdrop={false}
      avoidKeyboard
      isVisible={notification?.visible}
      style={[
        isBottomPosition ? styles.snackbarBottom : styles.snackbarTop,
        isBottomPosition && {
          marginBottom: notification.bottom || 50,
        },
      ]}
      swipeDirection={['up']}
      swipeThreshold={30}
      onModalHide={onClose}
      onSwipeComplete={onClose}>
      <AlertSnackbar notification={notification} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  snackbarBottom: {
    justifyContent: 'flex-end',
  },
  snackbarTop: {
    justifyContent: 'flex-start',
    marginTop: 50,
  },
});
