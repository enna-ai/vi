import type { MarkdownInstance } from "astro";
import slugify from "./slugify";
import type { CollectionEntry } from "astro:content";

const getReadingTime = async () => {
    const globPosts = import.meta.glob("../content/blog/*.md") as Promise<
        CollectionEntry<"blog">["data"][]
    >;

    const mapFrontmatter = new Map();
    const globPostsValues = Object.values(globPosts);
    await Promise.all(
        globPostsValues.map(async globPost => {
            const { frontmatter } = await globPost();
            mapFrontmatter.set(slugify(frontmatter), frontmatter.readingTime);
        })
    );

    return mapFrontmatter;
};

const getPostsWithRT = async (posts: CollectionEntry<"blog">[]) => {
    const mapFrontmatter = await getReadingTime();
    return posts.map(post => {
        post.data.readingTime = mapFrontmatter.get(slugify(post.data));
        return post;
    });
};

export default getPostsWithRT;