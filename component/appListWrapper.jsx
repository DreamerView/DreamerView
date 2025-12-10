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
            cache: "no-store"
        }
    );

    const notionData = await response.json();

    return <AppList list={notionData?.results || []} locale={locale} />;
}
