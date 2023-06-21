import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import {AppNotificationTypes, AppNotification, Notify, Position} from './types';
import {SNACKBAR_ANIMATION_OUT_TIMING, Snackbar} from './SnackBar';

const Context = createContext<Notify>(null as never);

const TIME_OPEN = 3000;

const wait = async (ms: number) => new Promise(r => setTimeout(r, ms));

export const useNotify = () => {
  const value = useContext(Context);

  if (!value) {
    throw new Error(
      'useNotify can only be used inside a NotificationsProvider',
    );
  }

  return value;
};

const initialState: AppNotification = {
  type: AppNotificationTypes.Error,
  visible: false,
  text: '',
  bottom: 50,
  position: Position.BOTTOM,
};

export let notify: Notify | null = null;

export const NotifyProvider: React.FC<{children: React.ReactElement}> = ({
  children,
}) => {
  const [notification, setNotification] = useState(initialState);
  const promiseRef = useRef<Promise<void>>(Promise.resolve());

  const hide = useCallback(() => {
    setNotification(prev => ({...prev, visible: false}));
  }, []);

  const show = useCallback(
    async (value: AppNotification) => {
      promiseRef.current = promiseRef.current.then(async () => {
        setNotification(value);
        await wait(TIME_OPEN);
        hide();
        await wait(SNACKBAR_ANIMATION_OUT_TIMING);
      });
    },
    [hide],
  );

  const error: Notify['error'] = useCallback(
    ({error, text, bottom, position}) => {
      console.log(error);
      show({
        text: text || 'default error',
        visible: true,
        type: AppNotificationTypes.Error,
        bottom,
        position,
      });
    },
    [show],
  );

  const info: Notify['info'] = useCallback(
    ({text, onPress, bottom, position}) => {
      show({
        text,
        visible: true,
        type: AppNotificationTypes.Info,
        onPress,
        bottom,
        position,
      });
    },
    [show],
  );

  const success: Notify['success'] = useCallback(
    ({text, onPress, bottom, position}) => {
      show({
        text,
        visible: true,
        type: AppNotificationTypes.Success,
        onPress,
        bottom,
        position,
      });
    },
    [show],
  );

  const message: Notify['message'] = useCallback(
    ({title, body, type, onPress, bottom, position}) => {
      show({
        title,
        text: body ?? '',
        onPress,
        type: type ?? AppNotificationTypes.Info,
        visible: true,
        bottom,
        position,
      });
    },
    [show],
  );

  const custom: Notify['custom'] = useCallback(
    ({onPress, bottom, position, Component}) => {
      show({
        title: '',
        text: '',
        onPress,
        type: AppNotificationTypes.Custom,
        visible: true,
        Component,
        bottom,
        position,
      });
    },
    [show],
  );

  notify = useMemo<Notify>(
    () => ({
      error,
      info,
      message,
      success,
      custom,
    }),
    [custom, error, info, message, success],
  );

  return (
    <Context.Provider value={notify}>
      {children}
      <Snackbar notification={notification} onClose={hide} />
    </Context.Provider>
  );
};
