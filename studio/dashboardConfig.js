export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ecfa7ed7289d90275b7ca61',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zojub8nh',
                  apiId: '81d42cb1-9794-4f9e-a006-c429937f5d67'
                },
                {
                  buildHookId: '5ecfa7ed13aa5c018a92e1e2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9d9qov6f',
                  apiId: '18b48a16-aba2-4346-8ccf-a4b6b6b7eb51'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ankoss86/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9d9qov6f.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
