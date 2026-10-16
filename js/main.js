(function(){var h=document.querySelector('.site-header'),b=document.querySelector('.menu-toggle');if(!h||!b)return;
function set(o){h.classList.toggle('nav-open',o);b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');}
b.addEventListener('click',function(){set(!h.classList.contains('nav-open'));});
document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false);});
h.querySelectorAll('.site-nav a').forEach(function(a){a.addEventListener('click',function(){set(false);});});
})();
