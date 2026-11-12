// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://pavelegorov-ru.github.io',
	base: '/crm-course',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'CRM / изнутри',
			description: 'Открытый проект о технической стороне CRM-маркетинга. Статьи, примеры и эксперименты.',
			defaultLocale: 'root',
			locales: { root: { label: 'Русский', lang: 'ru' } },
			customCss: ['./src/styles/custom.css'],
			logo: { src: './public/favicon.svg' },
			favicon: '/favicon.svg',
			social: [{ icon: 'github', label: 'Репозиторий проекта', href: 'https://github.com/PavelEgorov-ru/crm-course' }],
			editLink: { baseUrl: 'https://github.com/PavelEgorov-ru/crm-course/edit/main/' },
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			credits: false,
			sidebar: [
				{ label: 'Начало', items: [
					{ label: 'Главная', slug: '' },
					{ label: 'О проекте', slug: 'about' },
				] },
				{ label: 'Демонстрация', items: [
					{ label: 'Образец страницы', slug: 'preview' },
				] },
			],
		}),
	],
});
