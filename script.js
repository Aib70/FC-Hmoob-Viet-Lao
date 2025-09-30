
// // Search filtering
// const search = document.getElementById('search');
// const cards = Array.from(document.querySelectorAll('.card'));
// search.addEventListener('input', ()=>{
//   const q = search.value.trim().toLowerCase();
//   cards.forEach(c=>{
//     const name = c.dataset.name.toLowerCase();
//     const role = c.dataset.role.toLowerCase();
//     c.style.display = (name.includes(q) || role.includes(q)) ? 'flex' : 'none';
//   });
// });

// // Modal details
// const modal = document.getElementById('modalBackdrop');
// const modalContent = document.getElementById('modalContent');
// const closeBtn = document.getElementById('closeBtn');

// cards.forEach(c=>{
//   c.addEventListener('click', ()=>{
//     const img = c.querySelector('img')?.src || '';
//     const name = c.dataset.name || '';
//     const role = c.dataset.role || '';
//     const desc = c.querySelector('.desc')?.textContent || '';
//     const email = c.querySelector('a')?.textContent || '';

//     modalContent.innerHTML = `
//       <div class="modal-grid">
//         <div class="avatar"><img src="${img}" alt="${name}"></div>
//         <div>
//           <h2 style="margin:0 0 6px">${name}</h2>
//           <div style="color:var(--muted);margin-bottom:10px">${role}</div>
//           <p style="margin:0 0 8px">${desc}</p>
//           <div><strong>Email:</strong> <a href="mailto:${email}">${email}</a></div>
//         </div>
//       </div>
//     `;
//     modal.style.display = 'flex';
//     modal.setAttribute('aria-hidden','false');
//   });
// });
// closeBtn.addEventListener('click', ()=>{modal.style.display='none';modal.setAttribute('aria-hidden','true');});
// modal.addEventListener('click', (e)=>{if(e.target===modal) {modal.style.display='none';modal.setAttribute('aria-hidden','true');}});
// document.addEventListener('keydown', (e)=>{if(e.key==='Escape'){modal.style.display='none';modal.setAttribute('aria-hidden','true');}});
