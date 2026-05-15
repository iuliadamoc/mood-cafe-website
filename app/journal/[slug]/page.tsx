import { notFound } from "next/navigation";
import { journalArticles } from "../articles";
import ArticlePageClient from "./ArticlePageClient";

export function generateStaticParams() {
  return journalArticles.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = journalArticles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "MØOD Journal"
    };
  }

  return {
    title: `${article.title} | MØOD Journal`,
    description: article.excerpt
  };
}

export default async function JournalArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = journalArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const related = journalArticles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return <ArticlePageClient article={article} related={related} />;
}
