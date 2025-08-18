import { JSX } from "solid-js";

type NotificationPayload = {
  title: string;
  message: string;
  icon?: JSX.Element;
};

type NotificationHandler = (notification: NotificationPayload) => void;

let notificationHandler: NotificationHandler | null = null;

export function registerNotificationHandler(fn: NotificationHandler) {
  notificationHandler = fn;
}

function notify(notification: NotificationPayload) {
  if (!notificationHandler) {
    console.error(
      "Attempt to call notify before initializing NotificationProvider",
    );

    return;
  }

  notificationHandler(notification);
}

export default notify;
