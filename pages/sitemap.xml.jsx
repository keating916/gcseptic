import React from 'react'

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    res.setHeader('Content-Type', 'text/xml')
    res.write(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
    
    
    <url>
      <loc>https://gandcseptic.com/</loc>
      <lastmod>2022-07-01T00:45:41+00:00</lastmod>
      <priority>1.00</priority>
    </url>
    <url>
      <loc>https://gandcseptic.com/about</loc>
      <lastmod>2022-07-01T00:45:41+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://gandcseptic.com/contact</loc>
      <lastmod>2022-07-01T00:45:41+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://gandcseptic.com/residential</loc>
      <lastmod>2022-07-01T00:45:41+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://gandcseptic.com/commercial</loc>
      <lastmod>2022-07-01T00:45:41+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://gandcseptic.com/construction</loc>
      <lastmod>2022-07-01T00:45:41+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://gandcseptic.com/inspection</loc>
      <lastmod>2022-07-01T00:45:41+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://gandcseptic.com/faq</loc>
      <lastmod>2022-07-01T00:45:41+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://gandcseptic.com/careers</loc>
      <lastmod>2022-07-01T00:45:41+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://gandcseptic.com/inspection.pdf</loc>
      <lastmod>2022-07-01T00:45:41+00:00</lastmod>
      <priority>0.64</priority>
    </url>
    
    
    </urlset>`)
    res.end()
  }
}

export default Sitemap