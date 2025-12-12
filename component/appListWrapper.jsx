import AppList from "./appList";

export default async function AppListWrapper({ locale,database }) {
    const response = await fetch(
        `https://api.notion.com/v1/databases/${database}/query`,
        {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.NOTION_TOKEN}`,
                "Notion-Version": "2022-06-28",
                "Content-Type": "application/json"
            },
            next: { revalidate: 60 }
        }
    );

    const notionData = await response.json();

    const results = Array.isArray(notionData?.results) ? notionData.results : [];

    const preparedList = results.map(item => ({
        ...item,
        created_time_formatted: formatDate(item.created_time),
        last_edited_time_formatted: formatDate(item.last_edited_time),
    }));

    function formatDate(date) {
        if (!date) return null;

        return new Date(date).toISOString(); 
        // ✅ стабильный формат, одинаковый везде
    }

    return <AppList list={preparedList || []} locale={locale} />
}
