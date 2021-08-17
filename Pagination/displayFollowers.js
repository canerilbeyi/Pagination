const container = document.querySelector(".container");

const display = (followers) => {
  const newFollowers = followers
    .map((person) => {
      const { avatar_url: avatar, login, html_url: html } = person;
      return `<article class="card">
       <img src="${avatar}" alt="${login}">
       <h4>${login}</h4>
       <a href="${html}" class="btn">view profile</a>
       </article>`;
    })
    .join("");
  container.innerHTML = newFollowers;
};

export default display;
