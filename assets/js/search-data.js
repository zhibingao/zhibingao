// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-people",
          title: "people",
          description: "金属材料强度国家重点实验室，所属团队 孙军院士：https://gr.xjtu.edu.cn/en/web/junsun/  丁向东教授：https://gr.xjtu.edu.cn/en/web/dingxd/3  Turab Lookman：https://scholar.google.com/citations?user=9SNxXpUAAAAJ&amp;hl=en&amp;oi=ao 已毕业学生   2024年本科毕设同学：刘博坤，薛亮  博士研究生：黄滇（与能动学院唐桂华教授联陪）  硕士生毕业：          王洋（2025.03），在李苏植教授课题组继续攻读博士      冯敏轩（2024.07），入职怀柔实验室山西研究院（带固定编制）      欧阳泓溢（2022.07），目前在哈尔滨工业大学攻读博士        本科毕业设计：          郭嘉耀（2022.07），目前在上海交通大学攻读博士      侯佳乐（2022.07），西安华为技术有限公司        本科生：          舒国钰（2024.07），物理强基班，已经成功保研到西安交通大学物理学院（直博）      于佳艺（2024.07），计算机专业，已经成功考研到武汉大学计算机学院      刘一鸣（2024.07），物理强基班，新加坡国立大学物理学院博士",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-恭喜王晓莹博士在materials-today-physics上发表论文an-interpretable-formula-for-lattice-thermal-conductivity",
          title: '恭喜王晓莹博士在Materials Today Physics上发表论文An interpretable formula for lattice thermal conductivity',
          description: "",
          section: "News",},{id: "news-恭喜王晓莹博士获得授权专利-一种半导体材料晶格热导率检测方法及系统",
          title: '恭喜王晓莹博士获得授权专利：一种半导体材料晶格热导率检测方法及系统',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-恭喜刘宇杰获得2024年中国移动创客马拉松大赛三等奖",
          title: '恭喜刘宇杰获得2024年中国移动创客马拉松大赛三等奖',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
