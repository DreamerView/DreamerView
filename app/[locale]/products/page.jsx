import { Suspense } from "react";
import Loading from './loading';
import AppListWrapper from "@/component/appListWrapper";

export default async function AppsSection({ params }) {
    const {locale} = await params;
    
    return (
        <Suspense fallback={<Loading />}>
            <AppListWrapper database={process.env.NOTION_DATABASE_PRODUCTS_ID} locale={locale} />
        </Suspense>
    );
}
