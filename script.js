// Skills data: edit names and levels (0-100) to match you
const skills = [
  { name: "HTML & CSS", level: 85 },
  { name: "JavaScript", level: 65 },
  { name: "Python", level: 70 },
  { name: "NLP model training", level: 55 },
  { name: "Image recognition", level: 60 }
];

const list = document.getElementById("skills-list");
skills.forEach(s => {
  const row = document.createElement("div");
  row.innerHTML = `<div class="skill-row"><span>${s.name}</span><span>${s.level}%</span></div>
                   <div class="bar"><i data-level="${s.level}"></i></div>`;
  list.appendChild(row);
});

// Fill the bars when the skills section scrolls into view
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll("i").forEach(b => b.style.width = b.dataset.level + "%");
      observer.unobserve(e.target);
    }
  });
});
observer.observe(list);

document.getElementById("year").textContent = new Date().getFullYear();