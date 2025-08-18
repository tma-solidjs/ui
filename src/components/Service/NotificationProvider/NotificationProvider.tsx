import {
  type Component,
  type JSX,
  For,
  createSignal,
  createEffect,
} from "solid-js";
import { Portal } from "solid-js/web";

import { registerNotificationHandler } from "@/utils/notify";

type Notification = {
  id: number;
  title: string;
  message: string;
  icon?: JSX.Element;
};

export interface NotificationProviderProps
  extends JSX.HTMLAttributes<HTMLElement> {}

let notifyIdCounter = 0;

const NotificationProvider: Component<NotificationProviderProps> = (props) => {
  const [notifications, setNotifications] = createSignal<Notification[]>([]);

  const addNotification = (notification: Omit<Notification, "id">) => {
    const id = ++notifyIdCounter;
    setNotifications((prev) => [...prev, { ...notification, id }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 5000);
  };

  registerNotificationHandler(addNotification);

  createEffect(() => {
    console.log(notifications());
  });

  return (
    <>
      {props.children}
      <Portal>
        <For each={notifications()}>
          {(v) => {
            return <p>{v.title}</p>;
          }}
        </For>
      </Portal>
    </>
  );
};

export default NotificationProvider;
