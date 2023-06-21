import React from 'react';

export enum AppNotificationTypes {
  Error = 'Error',
  Info = 'Info',
  Success = 'Success',
  Custom = 'Custom',
}

export enum Position {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
}

export interface AppNotification {
  visible: boolean;
  type: AppNotificationTypes;
  title?: string;
  text: string;
  bottom?: number;
  onPress?: () => void;
  position?: Position;
  // type = AppNotificationTypes.Custom
  Component?: React.ReactNode;
}

export interface ErrorParams {
  error?: Error | unknown;
  text?: string;
  bottom?: number;
  position?: Position;
}

export interface InfoParam {
  onPress?: () => void;
  text: string;
  bottom?: number;
  position?: Position;
}

export interface SuccessParam {
  onPress?: () => void;
  text: string;
  bottom?: number;
  position?: Position;
}

export interface MessageParam {
  title?: string;
  body?: string;
  type?: AppNotificationTypes;
  onPress?: () => void;
  bottom?: number;
  position?: Position;
}

export interface CustomParam {
  onPress?: () => void;
  bottom?: number;
  position?: Position;
  Component: React.ReactNode;
}

export interface Notify {
  error: (params: ErrorParams) => void;
  info: (params: InfoParam) => void;
  success: (param: SuccessParam) => void;
  message: (param: MessageParam) => void;
  custom: (param: CustomParam) => void;
}
