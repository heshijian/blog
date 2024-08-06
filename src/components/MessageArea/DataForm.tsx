import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './DataForm.module.less';

function DataForm({ submit }) {
    const [formData, setFormData] = useState({
        nickname: '',
        content: '',
    });

    const [error, setError] = useState({
        nickname: '',
        content: '',
    });

    const [changingKey, setChangingKey] = useState<keyof typeof formData>('');

    const [isTouched, setIsTouched] = useState(false);

    const [isSubmiting, setIsSubmiting] = useState(false);

    function updateField(key: string, value: string) {
        setFormData({ ...formData, [key]: value });
        setChangingKey(key);
        setIsTouched(true);
    }

    const tips = useMemo(
        () => ({
            nickname: '请填写昵称',
            content: '请填写内容',
        }),
        []
    );

    useEffect(() => {
        if (isTouched) {
            setError({
                ...error,
                [changingKey]: formData[changingKey] ? '' : tips[changingKey],
            });
        }
    }, [formData, changingKey]);


    function onSubmit() {
        const newError = {
            nickname: formData.nickname ? '' : '请填写昵称',
            content: formData.content ? '' : '请填写内容',
        };
        setError(newError);
        if (newError.nickname || newError.content) {
            return;
        }

        setIsSubmiting(true);
        submit(formData, () => {
            setIsSubmiting(false);
            setFormData({
                nickname: '',
                content: '',
            });
            setIsTouched(false)
        });
    }
    return (
        <div className={styles.container} id="data-form-container">
            <div className={styles['form-item']}>
                <div className={styles['input-area']}>
                    <input
                        type="text"
                        maxLength={10}
                        value={formData.nickname}
                        onChange={(e) =>
                            updateField('nickname', e.target.value)
                        }
                        placeholder="用户昵称"
                    />
                    <span className={styles['tip']}>
                        {formData.nickname.length}/10
                    </span>
                </div>
                <div className={styles['error']}>{error.nickname}</div>
            </div>
            <div className={styles['form-item']}>
                <div className="text-area">
                    <textarea
                        maxLength={300}
                        placeholder="输入内容"
                        value={formData.content}
                        onChange={(e) => updateField('content', e.target.value)}
                    ></textarea>
                    <span className={styles['tip']}>
                        {formData.content.length}/300
                    </span>
                </div>
                <div className={styles['error']}>{error.content}</div>
            </div>
            <div className={styles['form-item']}>
                <div className={styles['button-area']}>
                    <button onClick={onSubmit} disabled={isSubmiting}>
                        {isSubmiting ? '提交中...' : '提交'}
                    </button>
                </div>
            </div>
        </div>
    );
}

DataForm.propTypes = {};

export default DataForm;
