import AppList from '@/component/appList.jsx';
import jsonList from './list.js';

const AppsSection = () => {
    return(
        <AppList list={jsonList} />
    )
};

export default AppsSection;
