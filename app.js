function Portfolio() {
  const avatarSources = ['assets/profile-main.jpg?v=1', 'assets/profile.svg'];
  const [avatarIndex, setAvatarIndex] = React.useState(0);
  const [showAvatarFallback, setShowAvatarFallback] = React.useState(false);
  function handleAvatarError() {
    if (avatarIndex < avatarSources.length - 1) {
      setAvatarIndex(prev => prev + 1);
      return;
    }
    setShowAvatarFallback(true);
  }
  const projects = [{
    title: 'Find Online Courses',
    desc: 'Discover curated online courses designed to help you learn new skills, grow professionally, and stay ahead in the digital world. Whether you’re a beginner or looking to advance, these courses provide practical knowledge with real-world applications.',
    tech: 'React, Node.js, OpenAI API',
    liveUrl: 'https://lms-client-dun.vercel.app/',
    image: 'assets/find-online-courses.svg?v=1'
  }, {
    title: 'E-Commerce Store',
    desc: 'Responsive shopping website with cart, payment, and authentication.',
    tech: 'React, MongoDB, Express',
    liveUrl: 'https://velora-client-psi.vercel.app/',
    githubUrl: 'https://velora-client-psi.vercel.app/',
    image: 'assets/e-commerce-store.svg?v=1'
  }, {
    title: 'Portfolio Website',
    desc: 'Animated futuristic personal portfolio website.',
    tech: 'React, Tailwind CSS, Framer Motion',
    liveUrl: '',
    githubUrl: 'https://portfolio-tawny-xi-24.vercel.app/',
    image: 'assets/portfolio-website.svg?v=1'
  }];
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'C', 'Java', 'OS', 'DSA', 'CN', 'GitHub'];
  const [iconsVisible, setIconsVisible] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setIconsVisible(true), 300);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-black text-white min-h-screen font-sans scroll-smooth"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md border-b border-gray-800 z-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto flex items-center justify-between px-6 py-4"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold text-cyan-400"
  }, "Manish.dev"), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex gap-8 text-gray-300"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    className: "hover:text-cyan-400 transition"
  }, "Home"), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    className: "hover:text-cyan-400 transition"
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#skills",
    className: "hover:text-cyan-400 transition"
  }, "Skills"), /*#__PURE__*/React.createElement("a", {
    href: "#projects",
    className: "hover:text-cyan-400 transition"
  }, "Projects"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "hover:text-cyan-400 transition"
  }, "Contact")))), /*#__PURE__*/React.createElement("section", {
    id: "home",
    className: "min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-20 left-10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-20 right-10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-center z-10"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-5xl md:text-7xl font-extrabold leading-tight"
  }, "Hi, I'm ", /*#__PURE__*/React.createElement("span", {
    className: "text-cyan-400"
  }, "Manish Kumar")), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto"
  }, "Full Stack Developer | Tech Enthusiast | React Developer"), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex flex-wrap justify-center gap-5"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#projects",
    className: "px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-2xl transition shadow-lg shadow-cyan-500/30"
  }, "View Projects"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "px-8 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded-2xl transition"
  }, "Contact Me")))), /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "py-24 px-6 max-w-6xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-12 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-72 h-72 rounded-3xl bg-gradient-to-br from-cyan-500 to-purple-500 p-1 shadow-2xl shadow-cyan-500/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full bg-black rounded-3xl overflow-hidden relative"
  }, !showAvatarFallback && /*#__PURE__*/React.createElement("img", {
    src: avatarSources[avatarIndex],
    alt: "Manish Kumar",
    className: "absolute inset-0 w-full h-full object-cover rounded-3xl",
    onError: handleAvatarError
  }), showAvatarFallback && /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full flex items-center justify-center text-7xl font-bold text-cyan-400"
  }, "MK")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-4xl font-bold mb-6 text-cyan-400"
  }, "About Me"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-lg leading-8"
  }, "I am a passionate developer who loves building modern websites, applications, and futuristic UI designs. I enjoy working with React, JavaScript, and backend technologies to create fast and responsive digital experiences."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-6 mt-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-3xl font-bold text-cyan-400"
  }, "10+"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 mt-2"
  }, "Projects")), /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-3xl font-bold text-cyan-400"
  }, "2+"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 mt-2"
  }, "Years Learning")), /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-3xl font-bold text-cyan-400"
  }, "100%"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 mt-2"
  }, "Dedication")))))), /*#__PURE__*/React.createElement("section", {
    id: "skills",
    className: "py-24 px-6 bg-[#0f0f0f]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-4xl font-bold text-center text-cyan-400 mb-16"
  }, "Skills"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
  }, skills.map((skill, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: "bg-black border border-gray-800 rounded-2xl p-8 text-center hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-xl font-semibold"
  }, skill)))))), /*#__PURE__*/React.createElement("section", {
    id: "projects",
    className: "py-24 px-6 max-w-6xl mx-auto"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-4xl font-bold text-center text-cyan-400 mb-16"
  }, "Projects"), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
  }, projects.map((project, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: "bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20 transition duration-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-52 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("img", {
    src: project.image,
    alt: `${project.title} preview`,
    className: "absolute inset-0 h-full w-full object-cover",
    loading: "lazy",
    onError: event => {
      event.currentTarget.style.display = 'none';
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-6"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-2xl font-bold mb-4"
  }, project.title), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 leading-7"
  }, project.desc), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 text-cyan-400 text-sm"
  }, project.tech), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4 mt-6"
  }, /*#__PURE__*/React.createElement("a", {
    href: project.liveUrl || '#',
    target: "_blank",
    rel: "noreferrer",
    className: "px-5 py-2 bg-cyan-500 text-black rounded-xl font-semibold hover:bg-cyan-400 transition"
  }, "Live Demo"), /*#__PURE__*/React.createElement("a", {
    href: project.githubUrl || 'https://github.com/ManishKumar0404',
    target: "_blank",
    rel: "noreferrer",
    className: "px-5 py-2 border border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition"
  }, "Website"))))))), /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "py-24 px-6 bg-[#0f0f0f]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto text-center"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-4xl font-bold text-cyan-400 mb-8"
  }, "Contact Me"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-lg mb-10"
  }, "Want to work together or have a project idea? Let's connect."), /*#__PURE__*/React.createElement("form", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Your Name",
    className: "w-full bg-black border border-gray-800 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400"
  }), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Your Email",
    className: "w-full bg-black border border-gray-800 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400"
  }), /*#__PURE__*/React.createElement("textarea", {
    rows: "6",
    placeholder: "Your Message",
    className: "w-full bg-black border border-gray-800 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-2xl transition shadow-lg shadow-cyan-500/30"
  }, "Send Message")))), /*#__PURE__*/React.createElement("footer", {
    className: "border-t border-gray-800 py-8 text-center text-gray-500"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4"
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 2026 Manish Kumar. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/ManishKumar0404",
    target: "_blank",
    rel: "noreferrer",
    "aria-label": "GitHub",
    title: "GitHub \u2014 ManishKumar0404",
    className: `inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-gray-800 to-gray-600 text-white shadow-2xl hover:scale-110 hover:-translate-y-1 hover:shadow-white/20 transform transition duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${iconsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "inline-block"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 .5C5.73.5.75 5.48.75 11.75c0 4.95 3.2 9.13 7.64 10.61.56.1.76-.24.76-.53 0-.26-.01-1-.02-1.95-3.11.68-3.77-1.5-3.77-1.5-.51-1.28-1.25-1.62-1.25-1.62-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .17 1.58.99 1.58.99.99 1.71 2.6 1.22 3.24.93.1-.73.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.5 0-1.21.43-2.2 1.14-2.98-.11-.28-.5-1.4.11-2.92 0 0 .93-.3 3.05 1.13a10.6 10.6 0 0 1 2.78-.38c.94 0 1.89.13 2.78.38 2.12-1.43 3.05-1.13 3.05-1.13.62 1.52.23 2.64.11 2.92.71.78 1.14 1.77 1.14 2.98 0 4.27-2.62 5.22-5.11 5.5.4.34.75 1 .75 2.02 0 1.46-.01 2.64-.01 3c0 .29.2.64.77.53C19.05 20.88 22.25 16.7 22.25 11.75 22.25 5.48 17.27.5 12 .5z"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/manish-kumar-169255331/",
    target: "_blank",
    rel: "noreferrer",
    "aria-label": "LinkedIn",
    title: "LinkedIn \u2014 Manish Kumar",
    className: `inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 text-white shadow-2xl hover:scale-110 hover:-translate-y-1 hover:shadow-cyan-500/30 transform transition duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${iconsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "inline-block"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.852 0-2.135 1.445-2.135 2.94v5.666H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.6 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433a2.064 2.064 0 1 1 0-4.129 2.064 2.064 0 0 1 0 4.129zM6.997 20.452H3.677V9h3.32v11.452z"
  })))))));
}
window.Portfolio = Portfolio;
