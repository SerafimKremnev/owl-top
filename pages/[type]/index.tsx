import React from 'react';
import {withLayout} from "../../layout/Layout";
import {useRouter} from "next/router";

const Type = () => {
    const router = useRouter()
    return (
        <div>
            {router.asPath}
        </div>
    );
};

export default withLayout(Type);