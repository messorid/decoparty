/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://decopartynashville.com',       // tu dominio
    generateRobotsTxt: true,                         // genera robots.txt
    changefreq: 'weekly',                            // frecuencia de cambio sugerida
    priority: 0.7,                                   // prioridad por defecto
    sitemapSize: 5000,                               // urls por sitemap (ajusta si hace falta)
    exclude: ['/secret-page', '/drafts/*'],           // rutas que no quieres indexar
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: ['/api/*'] }
      ]
    }
  };
  