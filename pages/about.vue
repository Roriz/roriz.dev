<template>
  <div class="about">
    <section class="profile">
      <div class="avatar">
        <img src="assets/radames_roriz.jpg" alt="Avatar">
      </div>
      <h1>Radamés Roriz</h1>
      <p>Software builder</p>
      <div class="social-links">
        <a href="https://www.linkedin.com/in/radames-roriz/"><i class="fa-brands fa-linkedin" /></a>
        <a href="https://github.com/roriz"><i class="fa-brands fa-github" /></a>
      </div>
    </section>
  
    <p>I’m a software engineer with a passion for building innovative solutions.</p>
    <p>With over 15 years of experience in software development, I’ve contributed to a wide range of projects, spanning from agile startups to large-scale enterprise applications.  </p>
    <p>My enthusiasm for technology stems from its ability to solve real-world challenges. This passion has driven my entrepreneurial journey, starting with founding my first company, <b>Aibol</b> (2014), followed by launching my own consulting firm (2015). From 2016 to 2018, I collaborated with a startup builder company, helping launch <b>Docker</b>, <b>Vestgo</b>, <b>Obba</b>, <b>Vinixo</b>, and <b>Sova360</b>. In 2018, I joined the founding team of <b>Dr.Entrega</b> and later became a partner at <b>Revelo</b> in 2020.</p>
    <p>I thrive on generating and executing new ideas—thinking through every aspect from conception to execution: the business model, the technology, the team, the market, and the clients.</p>
    <p>Currently, I’m captivated by the potential of generative AI and its transformative impact on the future, often imagining innovations yet to come.</p>
    <p>This space is a platform for me to share my thoughts, projects, achievements, and anything else I find inspiring.</p>
    <p>If any of this resonates with you, feel free to connect with me on <a href="https://www.linkedin.com/in/radames-roriz/">LinkedIn</a> or reach out via <a href="mailto:radamesroriz@gmail.com">email</a>.</p>
  </div>
</template>

<style scoped>
.about {
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.profile .avatar {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 1px solid var(--bg-accent);
}
.profile .avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: var(--tx-accent);
  font-size: 1.5rem;
}

.social-links a:hover {
  color: var(--tx-primary);
}

p {
  /* improve reading for long term */
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 300;
  font-family: var(--font-secondary);
}

</style>
