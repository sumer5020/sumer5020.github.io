export const englishThemeConfig = {
  title: 'sumer5020',
  titleTemplate: 'Sumer Ahmed - :title',
  label: 'English',
  dir: 'ltr',
  lang: 'en',
  description: 'A passionate full stack web developer, interested in developing, managing websites, APIs, databases and data analysis with 5 years experience.I provide services such website development, website Design, SPA, PWA, and API services, specializes in SEO Web Design and Search Engine Optimization.',
  //will be merged with existing head entries, duplicate meta tags are automatically removed
  head: [],
  themeConfig: {
    notFound: {
      title: 'Page Not Found',
      quote: 'If you are looking for the page you have requested, please check your URL and try again.',
    },
    lastUpdated: {
      text: ' Updated at ',
      formatOptions: {
        // dateStyle: 'full',
        // timeStyle: 'medium'
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'About', link: '/about/' },
      { text: 'Contact', link: '/contact/' }
    ]
  }
};

export const arabicThemeConfig = {
  label: 'العربية',
  title: 'sumer5020',
  titleTemplate: 'سومر احمد - :title',
  dir: 'rtl',
  link: '/ar', // default /ar/ -- shows on navbar translations menu, can be external
  lang: 'ar', // optional, will be added  as `lang` attribute on `html` tag
  description: 'مطور مواقع خدمات الويب، مهتم بتطوير وإدارة مواقع الويب وواجهات برمجة التطبيقات وقواعد البيانات وتحليل البيانات بخبرة 5 سنوات. أقدم خدمات مثل تطوير مواقع الويب، وتصميم مواقع الويب، SPA،  وPWA،  وAPI، ومتخصص في تصميم وتطوير مواقع وخدمات الويب المتوافقة مع محركات البحث.',
  head: [],
  themeConfig: {
    notFound: {
      title: 'صفحة غير موجودة',
      quote: 'إذا كنت لاتزال تبحث عن الصفحة التي طلبتها، يرجى التحقق من عنوان URL الخاص بك والمحاولة مرة أخرى.',
    },
    lastUpdated: {
      text: 'تم التحديث في ',
      formatOptions: {
        // dateStyle: 'full',
        // timeStyle: 'medium'
      }
    },
    nav: [
      { text: 'الرئيسية', link: '/ar/' },
      { text: 'المدونة', link: '/ar/blog/' },
      { text: 'المشاريع', link: '/ar/projects/' },
      { text: 'من نحن', link: '/ar/about/' },
      { text: 'اتصل بنا', link: '/ar/contact/' }
    ]
  }
};