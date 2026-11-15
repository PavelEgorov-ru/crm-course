// CMS stores canonical public URLs. Only rendered review content changes base.
export function rewriteReviewUrls(html) {
  return html.replace(/<(?:a|img|source|video|audio|iframe)\b[^>]*>/gi, (tag) =>
    tag.replace(/(\s(?:href|src|poster|srcset)\s*=\s*)(["'])(.*?)\2/gi, (_, attribute, quote, value) => {
      const rewritten = value.replace(/(^|[\s,])\/crm-course(?=\/|[?#]|$)(?!\/review(?:\/|[?#]|$))/g,
        '$1/crm-course/review');
      return `${attribute}${quote}${rewritten}${quote}`;
    })
  );
}
