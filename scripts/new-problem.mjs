#!/usr/bin/env node
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const slug = process.argv[2];
if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error("Usage: npm run new <kebab-case-slug>");
  console.error("Example: npm run new valid-parentheses");
  process.exit(1);
}

const fn = slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
const title = slug
  .split("-")
  .map((w) => w[0].toUpperCase() + w.slice(1))
  .join(" ");

const problemPath = join(root, "problems", `${slug}.ts`);
const testPath = join(root, "problems", `${slug}.test.ts`);

if (existsSync(problemPath) || existsSync(testPath)) {
  console.error(`Problem "${slug}" already exists.`);
  process.exit(1);
}

const render = (tmpl) =>
  tmpl.replaceAll("{{TITLE}}", title).replaceAll("{{FN}}", fn).replaceAll("{{SLUG}}", slug);

const problemTmpl = readFileSync(join(root, "templates", "problem.ts.tmpl"), "utf8");
const testTmpl = readFileSync(join(root, "templates", "problem.test.ts.tmpl"), "utf8");

writeFileSync(problemPath, render(problemTmpl));
writeFileSync(testPath, render(testTmpl));

console.log(`Created problems/${slug}.ts`);
console.log(`Created problems/${slug}.test.ts`);
