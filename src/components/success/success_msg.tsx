import React from 'react';
import { useData } from 'src/context/DataProvider';

export default function TransactionResult() {
    const { transferResult, txnHash } = useData()

    const handleRedirect = () => {
        // history.push('/');
        // push to the redirect url
    };

    return (
        <div>
            <p> {transferResult === "ok" ? "Transection Successful" : "Transection Failed"}</p>
            <p>Transection Details {txnHash}</p>
        </div>
    );
}
