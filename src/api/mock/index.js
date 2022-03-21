const routes = [
  {
    method: 'Get',
    url: '/api/contacts',
    status: 200,
    response: {
      data: [
        {
          url: 'https://github.com/hilmialmuhtadeb',
          icon: 'fa-brands fa-github',
          title: 'GitHub'
        },
        {
          url: 'https://www.linkedin.com/in/hilmialmuhtade/',
          icon: 'fa-brands fa-linkedin',
          title: 'LinkedIn'
        },
        {
          url: 'https://medium.com/@hilmialmuhtadeb',
          icon: 'fa-brands fa-medium',
          title: 'Medium'
        },
        {
          url: 'https://www.instagram.com/hilmi_almuhtade/',
          icon: 'fa-brands fa-instagram',
          title: 'Instagram'
        },
        {
          url: 'https://wa.me/6289601628845',
          icon: 'fa-brands fa-whatsapp',
          title: 'Whatsapp'
        },
        {
          url: 'mailto:hilmialmuhtadeb@gmail.com',
          icon: 'fa-solid fa-envelope',
          title: 'Email'
        },
      ]
    }
  }
]

export default routes