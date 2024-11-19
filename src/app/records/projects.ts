
export interface IProject  {
    company: string,
    application: string,
    content: string [],
    link: string,
    assets?: string [],
    isWeb?: boolean,
}


export const projects: IProject [] = [
    {
      company: 'FedEx',
      application: 'GEMINI (Global Electronic Manifest and Intercept Systems)',
      content: [
        'This is the largest and most important Fedex Logistics application which files $42.1 billion- $43 billion worth of shipments to CBP annually.'
      ],
      link: '/project',
      isWeb: true,
      assets: [
        '/projects/one.png',
        '/projects/two.png',
        '/projects/three.png',
      ]
    },
    {
      company: 'Zhill systems',
      application: 'QSR (Quick service Restaurant) ',
      content: [
        'Delivery from inception to launch and maintenance.'
      ],
      link: 'https://why.tryotter.com/otterpos?qgad=681225524112&qgterm=restaurant%20software'
    },
    {
      company: 'Zhill Systems',
      application: 'Consumer Lending Application (Banking Solution for USAA) – Scrum – 2019 – 2020',
      content: [
        'Consumer Lending Application (Banking Solution for USAA)'
      ],
      link: 'https://www.usaa.com/inet/wc/bank-loan-auto-main?akredirect=true  '
    },
    {
      company: 'Jumia',
      application: 'E-commerce platform – Scrumban',
      content: [
        'Jumia E-commerce platform – Scrumban – 2018'
      ],
      link: 'https://tpaymobile.com/products/reporting-dashboard'
    },
    {
      company: 'TPAY',
      application: 'TPAY Payment gateway',
      content: [
        'TPAY Payment gateway'
      ],
      link: 'https://tpaymobile.com/products/reporting-dashboard/'
    },
    {
      company: 'Salesforce',
      application: 'Proposal for Southern Glazers Wine and Spirit',
      content: [
        'Salesforce development of Proposal for Southern Glazers Wine and Spirit'
      ],
      link: 'https://sgwsteam.my.site.com/login?locale=us '
    },
    {
        company: 'Konga',
        application: 'E-commerce platform',
        content: [
          'Konga E-commerce platform – Scrum – 2016 - '
        ],
        link: 'https://www.konga.com/?srsltid=AfmBOoqjihvf0ISLLj5ZZwv9YsqZ0MMyTZZQdzj5EYuxGKiMc0PqTMh3'
      },
  ]