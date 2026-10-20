(() => {
const overlay=document.getElementById('palette'),input=document.getElementById('command-input'),out=document.getElementById('command-output');
if(!overlay||!input||!out)return;
const routes={'home':'index.html','cat aboutme.txt':'about.html','cat skills.txt':'about.html','ls experience':'experience.html','ls projects':'projects.html','./scripts/load-projects.sh':'projects.html','research':'research.html','contact':'contact.html','open resume.pdf':'assets/Brayden_Coggin_Resume.pdf'};
const replies={
'whoami':'Brayden Coggin\nUCF Information Technology Student\nCybersecurity • Networking • Software Development',
'sudo hire-me':'[sudo] password for recruiter: ********\nAccess granted.\nCandidate status: worth an interview.\nContact: cogginb66@gmail.com',
'cat fun-facts.txt':'Eagle Scout ✓\nEnjoys solving problems that probably shouldn’t exist.\nProfessional Googler of obscure error messages.',
'git log --oneline':'a7f2026  Joined NCRC-U Cybersecurity Fellowship\nb4d2026  Completed NCRC Red Team Internship\nc8e2026  Built EcoShield SecureRoute\nd3f2025  Started UCF build systems research',
'coffee --status':'Caffeine levels: operational ☕\nTroubleshooting capacity: unlimited*\n*Subject to available sleep.',
'easteregg':'Achievement unlocked: Curious Visitor 🥚\nYou found the hidden command.\nThanks for exploring my portfolio!'
};
const cmds=['help','whoami','sudo hire-me','cat fun-facts.txt','git log --oneline','coffee --status','clear',...Object.keys(routes)];
function toggle(on){overlay.classList.toggle('open',on);overlay.setAttribute('aria-hidden',String(!on));if(on){input.value='';out.textContent='';input.focus();}}
document.getElementById('command-button')?.addEventListener('click',()=>toggle(true));
overlay.addEventListener('click',e=>{if(e.target===overlay)toggle(false)});
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();toggle(!overlay.classList.contains('open'))}if(e.key==='Escape')toggle(false)});
input.addEventListener('keydown',e=>{if(e.key!=='Enter')return;const cmd=input.value.trim().toLowerCase().replace(/\s+/g,' ');if(!cmd)return;
if(cmd==='clear')out.textContent='';else if(cmd==='help')out.textContent='Available commands:\n'+cmds.join('\n')+'\n\nHint: there may be a hidden command.';
else if(Object.prototype.hasOwnProperty.call(replies,cmd))out.textContent=replies[cmd];
else if(Object.prototype.hasOwnProperty.call(routes,cmd)){
if(cmd==='open resume.pdf'&&!document.querySelector('a[href="assets/Brayden_Coggin_Resume.pdf"]'))out.textContent='Résumé file is not bundled yet.';
else location.href=routes[cmd];
}else out.textContent='command not found: '+cmd+'\nType help to see available commands.';input.value='';});
const current=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('.nav a').forEach(a=>{if(a.getAttribute('href')===current){a.classList.add('active');a.setAttribute('aria-current','page')}});
})();