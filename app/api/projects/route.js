import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

export async function GET() {
  const notion = Client.fromConfig({
    auth: process.env.NOTION_TOKEN,
  });

  const databaseId = process.env.NOTION_DATABASE_ID;

  const response = await notion.databases.query({
    database_id: databaseId,
  });

  const data = response.results.map((page) => ({
    id: page.id,
    title: page.properties.Name?.title?.[0]?.plain_text || "",
    desc: page.properties.desc?.rich_text?.[0]?.plain_text || "",
  }));

  return NextResponse.json(data);
}
