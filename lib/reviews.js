import { readdir, readFile } from 'node:fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';

export async function getReview(slug) {
    const text = await readFile(`./content/reviews/${slug}.md`, 'utf-8');
    const { content, data: { title, date, image } } = matter(text);
    const body = marked(content, { headerIds: false, mangle: false });
    return { slug, title, date, image, body };
}

export async function getFeatureReview() {
    const reviews = await getReviews();
    return reviews[0];
}

export async function getReviews() {

    const slugs = await getSlugs();

    const reviews = [];
    for (const slug of slugs) {
        const review = await getReview(slug);
        reviews.push(review);
    }

    // reviews.sort((a, b) => a.date.localeCompare(b.date) * -1);
    reviews.sort((a, b) => b.date.localeCompare(a.date));

    return reviews;
}

export async function getSlugs() {
    const files = await readdir('./content/reviews');
    return files.filter((file) => file.endsWith('.md'))
        .map((slug) => slug.slice(0, -'.md'.length));
}