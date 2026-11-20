const $ = selector => document.querySelector(selector);
function element(tag, text, className) {
  const node = document.createElement(tag);
  node.textContent = text;
  if (className) node.className = className;
  return node;
}

const menu = $('#menu');
function toggleMenu(open) {
  menu.setAttribute('aria-expanded', String(open));
  $('#links').classList.toggle('open', open);
}
menu.onclick = () => toggleMenu(menu.getAttribute('aria-expanded') === 'false');
$('#links').onclick = () => toggleMenu(false);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    toggleMenu(false);
    menu.focus();
  }
});

const serviceSymbols = ['⌘', '▤', '▦', '</>', '✳', '◈', '▧', '▷'];
const serviceNames = ['Freelance development', 'College projects', 'Office automation', 'Websites & web apps', 'AI applications', 'Poster design', 'UI & UX design', 'Video & motion'];
const serviceMap = {web:3,mern:3,ai:4,college:1,design:6,video:7};
const form = $('#brief');
let chosenService, briefSubject;
function showDetails(item, serviceIndex, isService = false) {
  chosenService = serviceNames[serviceIndex];
  briefSubject = isService ? '' : item.title.split(' – ')[0];
  $('#detailType').textContent = isService ? 'Studio service' : item.categoryLabel;
  $('#detailTitle').textContent = isService ? chosenService : item.title;
  $('#detailDesc').textContent = item.id === 'ai-vision-analyzer' ? 'An academic computer vision project exploring chest X-ray image classification and visual explanations.' : item.fullDesc;
  $('#detailList').replaceChildren(...(item.features || item.highlights).map(line => element('li', line)));
  $('#tags').replaceChildren(...(item.deliverables || item.tags).map(tag => element('span', tag)));
  $('#enquire').textContent = isService ? 'Enquire about this service' : 'Discuss a similar project';
  $('dialog').showModal();
}
servicesData.forEach((service, index) => {
  const button = element('button', '', 'svc');
  const symbol = element('span', serviceSymbols[index], 'symbol');
  symbol.setAttribute('aria-hidden', 'true');
  button.append(symbol, element('b', serviceNames[index]), element('small', service.shortDesc));
  button.onclick = () => showDetails(service, index, true);
  $('#serviceGrid').append(button);
  form.elements.service.add(new Option(serviceNames[index], serviceNames[index]));
});
form.elements.service.add(new Option('Other / help me choose', 'Other / help me choose'));
function projectDetail(item) {
  showDetails(item, item.id === 'tech-summit-poster' ? 5 : serviceMap[item.category]);
}
// Animate each group as it enters the viewport. Content stays visible without JS.
const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  const entering = entries.filter(entry => entry.isIntersecting);
  entering.forEach((entry, index) => {
    const target = entry.target;
    target.style.setProperty('--reveal-delay', Math.min(index, 3) * 55 + 'ms');
    target.classList.add('scroll-reveal');
    revealObserver.unobserve(target);
  });
}, {threshold: 0.06}) : null;
function observeReveals(nodes) {
  for (const node of nodes) revealObserver?.observe(node);
}
function displayProjects(filter) {
  const cards = projectsData.filter(item => filter === 'all' || item.categories.includes(filter)).map(item => {
    const card = element('button', '', 'project');
    card.append(element('span', item.categoryLabel, 'project-meta'), element('b', item.title), element('small', item.shortDesc));
    card.onclick = () => projectDetail(item);
    return card;
  });
  for (const oldCard of $('#projectGrid').children) revealObserver?.unobserve(oldCard);
  $('#projectGrid').replaceChildren(...cards);
  observeReveals(cards);
  for (const button of $('#filters').children) button.setAttribute('aria-pressed', String(button.dataset.filter === filter));
}
projectCategories.forEach(category => {
  const button = element('button', category.label);
  button.dataset.filter = category.id;
  button.onclick = () => displayProjects(category.id);
  $('#filters').append(button);
});
displayProjects('all');
$('#close').onclick = () => $('dialog').close();
$('#enquire').onclick = () => {
  $('dialog').close();
  form.elements.service.value = chosenService;
  if (briefSubject && !form.elements.message.value.trim()) form.elements.message.value = 'I am interested in a project similar to ' + briefSubject + '. ';
  location.hash = 'contact';
  form.elements.name.focus();
};
form.addEventListener('input', event => {event.target.setCustomValidity(''); $('#notice').replaceChildren();});
form.onsubmit = event => {
  event.preventDefault();
  for (const field of [form.elements.name, form.elements.message]) {
    if (!field.value.trim()) {field.setCustomValidity('Please enter a value.'); field.reportValidity(); return;}
  }
  const message = 'Hello Skill Masters, my name is ' + form.elements.name.value.trim() + '.\nService: ' + form.elements.service.value + '\n\n' + form.elements.message.value.trim();
  const url = 'https://wa.me/919361136053?text=' + encodeURIComponent(message);
  const link = element('a', 'Open your WhatsApp draft');
  link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
  $('#notice').replaceChildren(link, document.createTextNode(' and press Send to deliver your enquiry.'));
  window.open(url, '_blank', 'noopener,noreferrer');
};

// Draw an original, shaded wire sculpture for each featured project cover.
const features = [
  {id:'fintech-uiux', label:'Mobile interface design', background:'#bcb2f9', hue:252},
  {id:'mern-ecom', label:'Commerce platform', background:'#a9d6bb', hue:153},
  {id:'brand-promo-video', label:'Film & motion', background:'#f5b19e', hue:11}
];
let active = 0;
function drawCover() {
  const canvas = $('#art'), ctx = canvas.getContext('2d');
  const w = canvas.clientWidth, h = canvas.clientHeight;
  if (!ctx || !w || !h) return;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(w * ratio); canvas.height = Math.round(h * ratio);
  ctx.setTransform(ratio,0,0,ratio,0,0);
  const theme = features[active];
  ctx.fillStyle = theme.background; ctx.fillRect(0,0,w,h);
  const scale = Math.min(w * .178, h * .237);
  const faces = [], rings = [], count = 112, sides = 20;
  for(let i=0;i<count;i++) {
    const t = i * Math.PI * 2 / count, twist = (3 + active) * t, ring = [];
    const radius = 1.19 + .43 * Math.cos(twist);
    for(let j=0;j<sides;j++) {
      const a = j * 2 * Math.PI / sides;
      const r = radius + .31 * Math.cos(a);
      const x = r*Math.cos(2*t), y = r*Math.sin(2*t), z = .68*Math.sin(twist)+.32*Math.sin(a);
      const v = y*.78-z*.63, depth = y*.63+z*.78;
      ring.push({x:w*.53+(x*.94-v*.34)*scale*1.28,y:h*.46+(v*.94+x*.34)*scale,z:depth});
    }
    rings.push(ring);
  }
  rings.forEach((ring,i) => ring.forEach((p,j) => {
    const next = rings[(i+1)%count], k=(j+1)%sides, points=[p,next[j],next[k],ring[k]];
    faces.push({points,z:points.reduce((sum,v)=>sum+v.z,0)/4,light:28+22*(1+Math.cos(j*2*Math.PI/sides-.9))/2});
  }));
  faces.sort((a,b)=>a.z-b.z);
  for(const face of faces) {
    ctx.beginPath();face.points.forEach((point,i)=>i ? ctx.lineTo(point.x,point.y) : ctx.moveTo(point.x,point.y));ctx.closePath();
    ctx.fillStyle='hsl('+theme.hue+' 60% '+face.light+'%)';ctx.fill();
    ctx.lineWidth=.72;ctx.strokeStyle='hsla('+theme.hue+' 80% 86% / .77)';ctx.stroke();
  }
}
function feature(index) {
  active = (index + features.length) % features.length;
  const data = features[active], item = projectsData.find(p => p.id === data.id);
  $('#featureName').textContent = item.title.split(' – ')[0];
  $('#featureType').textContent = data.label;
  $('#count').textContent = '0'+(active+1)+' / 03';
  $('#featureOpen').onclick = () => projectDetail(item);
  drawCover();
}
$('#prev').onclick = () => feature(active-1);
$('#next').onclick = () => feature(active+1);
feature(0);
window.addEventListener('resize',drawCover);
$('#studentOffer').onclick = () => {
  form.elements.service.value = 'College projects';
  if (!form.elements.message.value.includes('STUDENT30')) {
    form.elements.message.value = ('I would like to use the STUDENT30 offer. ' + form.elements.message.value).trim();
  }
  location.hash = 'contact';
  form.elements.name.focus();
};

observeReveals(document.querySelectorAll('.intro, .feature, .section > h2, .svc, .offer, .studio > div, .studio li, .contact-grid > div, #brief'));
const progressBar = $('#reading-progress');
let progressFrame = 0;
function updateProgress() {
  progressFrame = 0;
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const fraction = available > 0 ? Math.max(0, Math.min(window.scrollY / available, 1)) : 0;
  progressBar.style.transform = 'scaleX(' + fraction + ')';
}
function scheduleProgress() {
  if (!progressFrame) progressFrame = requestAnimationFrame(updateProgress);
}
window.addEventListener('scroll', scheduleProgress, {passive: true});
window.addEventListener('resize', scheduleProgress);
window.addEventListener('pageshow', scheduleProgress);
if ('ResizeObserver' in window) new ResizeObserver(scheduleProgress).observe(document.body);
updateProgress();
