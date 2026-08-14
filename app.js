const projects = [
  {category:'programming',icon:'C',title:{en:'Student Record System',ko:'학생 기록 관리 시스템'},text:{en:'A C program for storing, searching and updating student records using structures and file handling.',ko:'구조체와 파일 처리를 사용해 학생 정보를 저장·검색·수정하는 C 프로그램입니다.'},tags:['C','File I/O']},
  {category:'web',icon:'↗',title:{en:'Personal Portfolio',ko:'개인 포트폴리오'},text:{en:'A responsive personal website shaped around accessibility, clear storytelling and lightweight performance.',ko:'접근성, 명확한 스토리텔링과 빠른 성능을 중심으로 만든 반응형 개인 웹사이트입니다.'},tags:['HTML','CSS','JavaScript'],link:'https://dipeshbastakoti.com.np'},
  {category:'creative',icon:'◉',title:{en:'Dipesh Frames',ko:'디페시 프레임즈'},text:{en:'A growing collection of travel, everyday life and atmospheric visual stories from Korea.',ko:'한국의 여행과 일상, 분위기 있는 순간을 담아가는 사진·영상 프로젝트입니다.'},tags:['Photo','Video'],link:'https://www.instagram.com/dipeshbastakoti/'}
];

const translations = {
  en:{navAbout:'About',navJourney:'Journey',navProjects:'Projects',navContact:'Contact',heroEyebrow:'Nepal → Busan, South Korea',heroTitle:'Learning technology.<br><em>Building a bigger story.</em>',heroLead:'I’m Dipesh—an Intelligence Computing student, aspiring developer, photographer and hands-on brewing learner.',viewWork:'Explore my work',talk:'Let’s talk',basedIn:'Based in Korea',studying:'Studying & building',learning:'Learning by doing',aboutEyebrow:'More than one path',aboutTitle:'Curiosity connects everything I do.',aboutP1:'I’m originally from Nepal and currently study Intelligence Computing at Dong-Eui University in Busan. I enjoy turning ideas into useful, thoughtful digital experiences.',aboutP2:'Outside the classroom, I work in craft beer, explore Korea with a camera, and keep learning through real projects. Long term, I want to connect the experience I gain in Korea with an independent venture in Nepal.',journeyEyebrow:'My journey',journeyTitle:'Learning across worlds.',studyTitle:'Intelligence Computing',studyText:'Building foundations in programming, web development, logic and practical problem solving at Dong-Eui University.',brewTitle:'Craft beer',brewText:'Learning real brewery and taproom operations in Busan—from service and marketing to canning, kegging and brewing support.',photoTitle:'Stories through a lens',photoText:'Capturing travel, daily life and the atmosphere of places through photography and natural video.',projectsEyebrow:'Selected work',projectsTitle:'Projects that show the process.',all:'All',programming:'Programming',creative:'Creative',contactEyebrow:'Start a conversation',contactTitle:'Have an idea, opportunity or just want to say hello?',contactText:'I’m open to learning, collaboration and thoughtful conversations.',name:'Name',message:'Message',send:'Write an email',formNote:'This opens your email app so you stay in control of what is sent.'},
  ko:{navAbout:'소개',navJourney:'여정',navProjects:'프로젝트',navContact:'연락하기',heroEyebrow:'네팔 → 대한민국 부산',heroTitle:'기술을 배우며,<br><em>더 큰 이야기를 만듭니다.</em>',heroLead:'저는 디페시입니다. 인텔리전스 컴퓨팅을 전공하며 개발, 사진 그리고 맥주 양조 현장을 함께 배우고 있습니다.',viewWork:'프로젝트 보기',talk:'이야기 나누기',basedIn:'한국 부산 거주',studying:'공부하고 만들기',learning:'현장에서 배우기',aboutEyebrow:'하나보다 더 많은 길',aboutTitle:'호기심이 제가 하는 모든 일을 연결합니다.',aboutP1:'네팔에서 온 저는 현재 부산 동의대학교에서 인텔리전스 컴퓨팅을 공부하고 있습니다. 아이디어를 유용하고 세심한 디지털 경험으로 만드는 일을 좋아합니다.',aboutP2:'수업 밖에서는 크래프트 맥주 현장에서 일하고, 카메라로 한국을 기록하며, 실제 프로젝트를 통해 계속 배우고 있습니다. 장기적으로는 한국에서 쌓은 경험을 네팔에서의 독립적인 도전으로 이어가고 싶습니다.',journeyEyebrow:'나의 여정',journeyTitle:'서로 다른 세계에서 배웁니다.',studyTitle:'인텔리전스 컴퓨팅',studyText:'동의대학교에서 프로그래밍, 웹 개발, 논리와 실용적인 문제 해결의 기초를 쌓고 있습니다.',brewTitle:'크래프트 맥주',brewText:'부산의 브루어리와 탭룸에서 서비스, 마케팅, 캔·케그 작업과 양조 보조까지 현장 운영을 배우고 있습니다.',photoTitle:'렌즈로 담는 이야기',photoText:'여행과 일상, 공간의 분위기를 사진과 자연스러운 영상으로 기록합니다.',projectsEyebrow:'주요 작업',projectsTitle:'과정을 보여주는 프로젝트.',all:'전체',programming:'프로그래밍',creative:'크리에이티브',contactEyebrow:'대화 시작하기',contactTitle:'아이디어나 기회가 있거나, 그냥 인사하고 싶으신가요?',contactText:'배움과 협업, 좋은 대화를 언제나 환영합니다.',name:'이름',message:'메시지',send:'이메일 작성하기',formNote:'보내기 전에 직접 확인할 수 있도록 이메일 앱이 열립니다.'}
};

let language = localStorage.getItem('language') || 'en';
let activeFilter = 'all';
const root = document.documentElement;
const grid = document.querySelector('#project-grid');

function renderProjects(){
  grid.innerHTML = projects.filter(p=>activeFilter==='all'||p.category===activeFilter).map(p=>`<article class="project-card reveal visible"><div class="project-icon">${p.icon}</div><p class="project-type">${p.category}</p><h3>${p.title[language]}</h3><p>${p.text[language]}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>${p.link?`<a href="${p.link}" target="_blank" rel="noopener" aria-label="Open ${p.title.en}">View project ↗</a>`:''}</article>`).join('');
}
function setLanguage(next){
  language=next; localStorage.setItem('language',language); root.lang=language;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const value=translations[language][el.dataset.i18n]; if(value) el.innerHTML=value;});
  document.querySelector('#language-toggle').textContent=language==='en'?'한국어':'English'; renderProjects();
}
document.querySelector('#language-toggle').addEventListener('click',()=>setLanguage(language==='en'?'ko':'en'));
document.querySelector('#theme-toggle').addEventListener('click',()=>{const dark=root.dataset.theme!=='dark'; root.dataset.theme=dark?'dark':'light'; localStorage.setItem('theme',root.dataset.theme);});
root.dataset.theme=localStorage.getItem('theme')||'light';
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('.filter.active')?.classList.remove('active');btn.classList.add('active');activeFilter=btn.dataset.filter;renderProjects();}));
const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.main-nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
document.querySelector('#contact-form').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.currentTarget);const subject=encodeURIComponent(`Portfolio message from ${data.get('name')}`);const body=encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')} (${data.get('email')})`);location.href=`mailto:bastakotidipesh123@gmail.com?subject=${subject}&body=${body}`;});
document.querySelector('#year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
setLanguage(language);
