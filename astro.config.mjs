// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const isReview = process.env.SITE_VARIANT === 'review';

export default defineConfig({
	site: 'https://pavelegorov-ru.github.io',
	base: isReview ? '/crm-course/review' : '/crm-course',
	outDir: isReview ? './dist-review' : './dist',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'CRM / изнутри',
			description: 'Открытый проект о технической стороне CRM-маркетинга. Статьи, примеры и эксперименты.',
			defaultLocale: 'root',
			locales: { root: { label: 'Русский', lang: 'ru' } },
			customCss: ['./src/styles/custom.css'],
			components: {
				MarkdownContent: './src/components/ArticleContent.astro',
				...(isReview ? { Banner: './src/components/ReviewBanner.astro' } : {}),
			},
			head: isReview ? [{ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' } }] : [],
			logo: { src: './public/favicon.svg' },
			favicon: '/favicon.svg',
			social: [{ icon: 'github', label: 'Репозиторий проекта', href: 'https://github.com/PavelEgorov-ru/crm-course' }],
			editLink: { baseUrl: `https://github.com/PavelEgorov-ru/crm-course/edit/${isReview ? 'codex/drafts' : 'main'}/` },
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			credits: false,
			sidebar: [
				{ label: 'Начало', items: [
					{ label: 'Главная', slug: '' },
					{ label: 'О проекте', slug: 'about' },
				] },
				{ label: 'Статьи', items: [{ autogenerate: { directory: 'articles' } }] },
				{ label: 'Демонстрация', items: [
					{ label: 'Образец страницы', slug: 'preview' },
				] },
			],
		}),
	],
});
