// Small interaction: reveal a custom cursor label when hovering over projects.
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
    document.body.classList.add('hovering-project');
  });

  project.addEventListener('mouseleave', () => {
    document.body.classList.remove('hovering-project');
  });
});
