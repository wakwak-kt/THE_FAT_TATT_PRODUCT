/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://thefattatt.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    const priorityMap = {
      "/": 1.0,
      "/gallery": 0.9,
      "/artdrop": 0.8,
      "/pricing": 0.7,
      "/process": 0.7,
      "/booking": 0.6,
      "/access": 0.6,
      "/news": 0.5,
    };

    return {
      loc: path,
      changefreq: path === "/news" || path === "/artdrop" ? "daily" : config.changefreq,
      priority: priorityMap[path] ?? config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
