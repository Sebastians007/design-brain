const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {JSDOM}=require('jsdom');
const root=path.resolve(__dirname,'..');
function boot(){
 assert.ok(fs.existsSync(path.join(root,'index.html')),'A runnable recreation must exist');
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 const dom=new JSDOM(html,{runScripts:'outside-only',url:'https://example.com/'});
 const w=dom.window;
 w.matchMedia=()=>({matches:true});
 w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};
 w.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new w.Event('close'));};
 w.eval(fs.readFileSync(path.join(root,'app.js'),'utf8'));
 return {dom,w,d:w.document};
}
test('section navigation resolves and source assets exist locally',()=>{
 const {d}=boot();
 assert.equal(d.querySelectorAll('main > section').length,8);
 assert.equal(d.querySelectorAll('.feature-card').length,6);
 assert.equal(d.querySelectorAll('#faq details').length,7);
 for(const a of d.querySelectorAll('a[href^="#"]')) assert.ok(d.querySelector(a.getAttribute('href')));
 for(const e of d.querySelectorAll('img[src],script[src],link[rel="stylesheet"]')) assert.ok(fs.existsSync(path.join(root,e.getAttribute('src')||e.getAttribute('href'))));
});
test('mobile navigation closes after selecting a destination and Escape',()=>{
 const {w,d}=boot(),toggle=d.querySelector('#menu-toggle'),nav=d.querySelector('#main-nav');
 toggle.click();assert.equal(toggle.getAttribute('aria-expanded'),'true');assert.equal(nav.dataset.open,'true');
 nav.querySelector('a').click();assert.equal(toggle.getAttribute('aria-expanded'),'false');
 toggle.click();d.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape'}));assert.equal(toggle.getAttribute('aria-expanded'),'false');
});
test('Escape returns focus from a hidden mobile navigation link to the toggle',()=>{
 const {w,d}=boot(),toggle=d.querySelector('#menu-toggle'),nav=d.querySelector('#main-nav');
 toggle.click();const link=nav.querySelector('a');link.focus();
 d.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape'}));
 assert.equal(toggle.getAttribute('aria-expanded'),'false');assert.equal(d.activeElement,toggle);
});
test('opening mobile navigation places keyboard focus on its first destination',()=>{
 const {d}=boot();d.querySelector('#menu-toggle').click();assert.equal(d.activeElement,d.querySelector('#main-nav a'));
});
test('example selection and reset give the visitor a fresh preview',()=>{
 const {w,d}=boot(),goal=d.querySelector('#goal');
 d.querySelector('[data-demo]').click();d.querySelector('[data-example]').click();assert.match(goal.value,/launch/);
 d.querySelector('#demo-form').dispatchEvent(new w.Event('submit',{cancelable:true}));assert.equal(d.querySelector('#demo-reset').hidden,false);
 d.querySelector('#demo-reset').click();assert.equal(goal.value,'');assert.equal(d.querySelector('#demo-results').children.length,0);assert.equal(d.querySelector('#demo-reset').hidden,true);assert.equal(d.activeElement,goal);
});
test('plan CTA opens a local demo with selected plan and restores focus on close',()=>{
 const {d}=boot(),cta=d.querySelector('[data-plan="Professional"]'),dialog=d.querySelector('#demo');
 cta.focus();cta.click();assert.equal(dialog.open,true);assert.match(d.querySelector('#demo-plan').textContent,/Professional/);
 d.querySelector('#demo-close').click();assert.equal(dialog.open,false);assert.equal(d.activeElement,cta);
});
test('blank goals are rejected and HTML-like goals are rendered literally',()=>{
 const {w,d}=boot(),form=d.querySelector('#demo-form'),goal=d.querySelector('#goal');
 goal.value='   ';form.dispatchEvent(new w.Event('submit',{cancelable:true}));assert.match(d.querySelector('#demo-status').textContent,/describe/i);assert.equal(d.querySelectorAll('#demo-results li').length,0);
 goal.value='<img src=x onerror=alert(1)> Research our launch';form.dispatchEvent(new w.Event('submit',{cancelable:true}));
 assert.equal(d.querySelectorAll('#demo-results li').length,3);assert.equal(d.querySelectorAll('#demo-results img').length,0);assert.match(d.querySelector('#demo-results').textContent,/<img src=x/);assert.match(d.querySelector('#demo-status').textContent,/simulation/i);
});
test('FAQ uses native keyboard disclosures and reduced-motion rules are supplied',()=>{
 const {d}=boot();for(const e of d.querySelectorAll('#faq details')){assert.ok(e.querySelector('summary'));assert.ok(e.querySelector('p').textContent.trim());}
 const css=fs.readFileSync(path.join(root,'styles.css'),'utf8');assert.match(css,/prefers-reduced-motion/);assert.match(css,/:focus-visible/);
});
