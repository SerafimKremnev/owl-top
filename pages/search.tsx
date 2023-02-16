import {useRouter} from "next/router";
import {withLayout} from "../layout/Layout";

const Search = () => {
    const router = useRouter()
    console.log(router)
    return (
        <div>
            
        </div>
    );
};

export default withLayout(Search);