import React from 'react';
import PropTypes from 'prop-types';
import DataForm from './DataForm';
import DataList from './DataList';
import Loading from '@/components/Loading/Index';

function Index({
    title = '',
    subTitle = '',
    list = [],
    isListLoading = false,
    ...rest
}) {
    return (
        <div className="container">
            <DataForm v-on="$listeners" {...rest} />
            <h3>
                {title}
                <span>{subTitle}</span>
            </h3>
            <DataList list={list} />

            {isListLoading ? (
                <div style={{ height: '100px' }}>
                    <Loading loading={isListLoading} />
                </div>
            ) : null}
        </div>
    );
}

Index.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    list: PropTypes.array,
    isListLoading: PropTypes.bool,
    submit: PropTypes.func,
};

export default Index;
