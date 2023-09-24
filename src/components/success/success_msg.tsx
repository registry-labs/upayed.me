import React from 'react';
// import { useHistory } from 'react-router-dom';

interface IProps {
    txId: string;
    message: string;
}

export default function TransactionResult({ txId, message }: IProps) {
    // const history = useHistory();

    const handleRedirect = () => {
        // history.push('/');
        // push to the redirect url
    };

    return (
        <div>
            <p>{message}</p>
            <p>Transaction ID: {txId}</p>
            <button onClick={handleRedirect}>Go Back</button>
        </div>
    );
}
