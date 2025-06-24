
for (let i = 0; i < 30; i++) {
  const led = document.createElement('div');
  led.classList.add('led');
  led.style.top = Math.random() * 100 + 'vh';
  led.style.left = Math.random() * 100 + 'vw';
  led.style.animationDuration = (Math.random() * 2 + 1) + 's';
  document.body.appendChild(led);
}

const sections = {
  home: `
    <h1>Marcos Vinicius</h1>
    <div class="social-links">
      <a href="https://github.com/Marcos-Ara" target="_blank">GitHub</a>
      <a href="https://www.linkedin.com/in/marcos-vinicius-73b302355/" target="_blank">LinkedIn</a>
      <a href="#" target="_blank">Catho</a>
      <a href="#" target="_blank">Instagram</a>
      <a href="#" target="_blank">Outro Link</a>
    </div>
  `,
  about: `
    <h1>Sobre Mim</h1>
    <p>
      Olá! Meu nome é <strong>Marcos Vinicius Araújo</strong>, sou estudante de <strong>Ciência da Computação</strong> na Cruzeiro do Sul e estou em busca da minha primeira oportunidade no mercado de trabalho.
    </p>
    <p>
      Tenho conhecimento avançado em informática e boa familiaridade com o <strong>pacote Office (Word, Excel e PowerPoint)</strong>. Desenvolvo sites utilizando <strong>HTML, CSS e JavaScript</strong>, e utilizo ferramentas como <strong>Visual Studio Code</strong> e <strong>GitHub</strong> para gerenciar projetos e versionamento de código.
    </p>
    <p>
      Estou estudando também linguagens como <strong>C#, Python, Oracle SQL</strong> e desenvolvimento com <strong>Android Studio</strong>, além de noções de <strong>design responsivo</strong> para dispositivos móveis.
    </p>
    <p>
      Me considero uma pessoa <strong>proativa, comunicativa e motivada</strong> a evoluir, sempre aprendendo com os estudos e trocas com colegas e profissionais experientes. Busco aplicar o que aprendo e crescer profissionalmente em um ambiente colaborativo.
    </p>
  `,
  contact: `
    <h1>Contato</h1>
    <form id="contactForm">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" name="nome" required />

      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" required />

      <label for="mensagem">Mensagem:</label>
      <textarea id="mensagem" name="mensagem" rows="5" required></textarea>

      <button type="submit">Enviar</button>
    </form>
  `
};

const content = document.getElementById('content');
const navLinks = document.querySelectorAll('nav a');

function setActiveSection(section) {
  content.innerHTML = sections[section];
  navLinks.forEach(a => a.classList.toggle('active', a.dataset.section === section));

  if (section === 'contact') {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const mensagem = form.mensagem.value.trim();

      if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      const text = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
      window.open(`https://wa.me/qr/KCCUDXTOCIZ6C1?text=${text}`, '_blank');
    });
  }
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    setActiveSection(link.dataset.section);
  });
});

setActiveSection('home');
