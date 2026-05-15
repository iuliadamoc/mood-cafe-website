"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Sparkles } from "lucide-react";
import Link from "next/link";
import type { JournalArticle } from "../articles";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 }
};

export default function ArticlePageClient({
  article,
  related
}: {
  article: JournalArticle;
  related: JournalArticle[];
}) {
  return (
    <main className="min-h-screen overflow-hidden bg-smoke text-crema">
      <section className="relative min-h-[78vh] overflow-hidden px-4 pb-16 pt-8 md:px-8">
        <motion.img
          initial={{ scale: 1.08, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 0.68 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={article.image}
          alt={article.title}
          className="absolute inset-0 h-full w-full object-cover soft-mask"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-roast/70 via-roast/62 to-smoke" />
        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-between">
          <nav className="flex items-center justify-between py-5">
            <Link href="/#blog" className="glass inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-bold text-crema transition hover:text-caramel">
              <ArrowLeft size={16} />
              Back to blog
            </Link>
            <Link href="/" className="font-display text-2xl font-bold tracking-wide text-crema">
              MØOD <span className="text-caramel">Café</span>
            </Link>
          </nav>

          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.12 }}
            className="max-w-4xl pb-10"
          >
            <motion.p
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-crema/15 bg-crema/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-oat backdrop-blur-xl"
            >
              <Sparkles size={14} />
              MØOD Journal
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-balance font-display text-5xl font-bold leading-[0.96] md:text-7xl lg:text-8xl">
              {article.title}
            </motion.h1>
            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-crema/72">
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2">
                <CalendarDays size={16} className="text-caramel" />
                {article.date}
              </span>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2">
                <Clock size={16} className="text-caramel" />
                {article.readTime}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.article
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
        className="mx-auto max-w-4xl px-4 py-20 md:px-8"
      >
        <motion.p variants={fadeUp} className="font-display text-3xl leading-10 text-oat md:text-4xl md:leading-[1.25]">
          {article.excerpt}
        </motion.p>
        <div className="mt-12 space-y-8">
          {article.paragraphs.map((paragraph) => (
            <motion.p key={paragraph} variants={fadeUp} className="text-lg leading-9 text-crema/74">
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.article>

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-oat">Related posts</p>
              <h2 className="font-display text-4xl font-bold md:text-6xl">More from the journal.</h2>
            </div>
            <Link href="/#blog" className="inline-flex w-fit items-center gap-2 rounded-full bg-crema px-5 py-3 text-sm font-bold text-roast transition hover:bg-caramel">
              Back to blog
              <ArrowLeft size={16} />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {related.map((post) => (
              <Link key={post.slug} href={`/journal/${post.slug}`} className="block">
                <motion.article whileHover={{ y: -6 }} className="group glass h-full overflow-hidden rounded-[2rem] p-3">
                  <div className="overflow-hidden rounded-[1.45rem]">
                    <img src={post.image} alt={post.title} className="h-56 w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-oat">{post.readTime}</p>
                    <h3 className="font-display text-3xl font-semibold">{post.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-crema/66">{post.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-caramel">
                      Read next
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
