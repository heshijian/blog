import PropTypes from 'prop-types';

type Props = {
    url?: string;
    size?: number;
};

export default function Avatar({ url, size = 40 }: Props) {
    return (
        <img
            src={url}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'block',
            }}
            alt=""
        />
    );
}

Avatar.propTypes = {
    url: PropTypes.string.isRequired,
    size: PropTypes.number,
};
