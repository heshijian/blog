import React from 'react';
import ReactDOM from 'react-dom/client';
import MessageComponent from './MessageComponent';
import styles from './MessageComponent.module.less';

export type MessageType = 'info' | 'success' | 'warn' | 'error';
export type MessageOpts = {
    message: string;
    type?: MessageType;
    duration?: number;
    container?: HTMLElement;
    callback?: () => void;
};

export default function showMessage(opts: MessageOpts) {
    const {
        message = '',
        type = 'success',
        duration = 2000,
        container = document.body,
        callback = () => {},
    } = opts;
    const div = document.createElement('div');
    div.className = styles.message;

    ReactDOM.createRoot(div).render(
        <MessageComponent
            message={message}
            type={type}
            duration={duration}
            destroy={() => {
                setTimeout(() => {
                    div.remove();
                    if (callback) {
                        callback();
                    }
                }, 300);
            }}
        />
    );
    if (getComputedStyle(container).position === 'static') {
        container.style.position = 'relative';
    }
    container.appendChild(div);
}
