export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eebb133f96b9280be145481',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-stuj896r',
                  apiId: '25fad393-d83b-406e-8af1-f7a1070874d1'
                },
                {
                  buildHookId: '5eebb133065a2191fa558c29',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mvaqgwmc',
                  apiId: '8ed3a94e-1a9c-4537-8799-3799bcb983c1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/qudde/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mvaqgwmc.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
