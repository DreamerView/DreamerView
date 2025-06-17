import AppList from '@/component/appList.jsx';
import jsonList from './list.js';

const AppsSection = async({params}) => {
    const {locale} = await params;
    console.log(locale)
    return(
        <AppList list={jsonList} locale={locale} />
    )
};

export default AppsSection;
