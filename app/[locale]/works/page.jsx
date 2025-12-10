import AppList from '@/component/appList.jsx';

const AppsSection = async({params}) => {
    const {locale} = await params;
    // 📌 NOTION FETCH (без SDK)
    const response = await fetch(
        `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_WORKS_ID}/query`,
        {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.NOTION_TOKEN}`,
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json"
        }
        }
    );

    return(
        <AppList list={notionData.results} locale={locale} />
    )
};

export default AppsSection;
