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
  },
  {
    method: 'Get',
    url: '/api/projects',
    status: 200,
    response: {
      data: [
        {
          name: 'Jokes Bapak-Bapak App',
          url: 'https://www.jokesbapak.netlify.app',
          techStack: ['VueJs', 'ExpressJs', 'MongoDB', 'Tailwind', 'Netlify'],
          thumbnail: 'jokesbapak.png',
          screenShot: 'ss-jokesbapak.png',
          description: 'Aplikasi sharing joke khas bapak-bapak komplek yang garing dan ga lucu. Semua orang yang memiliki joke bisa menambahkan joke-nya. Semua orang berhak tertawa dan bahagia XD.'
        },
        {
          name: 'Scholarship and Course',
          url: 'https://www.scholarshipandcourse.netlify.app',
          techStack: ['ReactJs', 'ExpressJs', 'MongoDB', 'Bootstrap', 'Netlify', 'JWT'],
          thumbnail: 'snc.png',
          screenShot: 'ss-snc.png',
          description: 'Platform sharing informasi beasiswa untuk seluruh masyarakat. Semua orang bisa mendapatkan informasi beasiswa terpusat dengan mudah dan cepat. Pihak yang ingin menyalurkan beasiswa juga dapat membagi informasi beasiswa di sini. Dikerjakan bersama partner capstone project, Ni Wayan Windayani. Thankyouu Winda!'
        },
        {
          name: 'V-Citife',
          url: 'https://www.vcitife.store',
          techStack: ['Laravel', 'Bootstrap', 'MySQL', 'cPanel'],
          thumbnail: 'vcitife.png',
          screenShot: 'ss-vcitife.png',
          description: 'Mini-commerce yang dibuat untuk memenuhi kebutuhan penjualan design sertifikat. Dibuat untuk Pekan Mahasiswa Wirausaha. Dibangung menggunakan Laravel dan Bootstrap. Project ini merupakan request dari teman kuliahku Hana, Thanks Han!'
        },
      ]
    }
  }
]

export default routes