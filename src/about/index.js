import "../pages/about.css";
import html from "../images/html.svg";
import css from "../images/css.svg";
import js from "../images/js.svg";
import webpack from "../images/webpack.svg";
import { swiper } from "../js/swiper/swiper.min.js";
swiper();
import { GithubApi } from "../js/modules/GithubApi.js";
import { CommitCard } from "../js/components/CommitCard.js";
import { CommitCardList } from "../js/components/CommitCardList.js";

const commitsUrl = "https://api.github.com/repos/dplatonova1/diploma/commits";

const githubApi = new GithubApi({
  baseUrl: commitsUrl,
  method: "GET",
  headers: {
    authorization: "c432bec73f94d8b2a5a94020b608711efb8a4ce7",
    "Content-Type": "application/json",
  },
}); //создаём экземпляр класса апи для коммитов

githubApi
  .getCommits() //отправляем запрос к апи
  .then(function (commits) {
    const commitContainer = document.querySelector(".swiper-wrapper");
    const authorAvatar = commits[0].author.avatar_url;
    const commitArray = commits.map(function (element) {
      const commitCard = new CommitCard(
        element.commit.committer.name,
        element.commit.committer.email,
        element.commit.committer.date,
        element.commit.message,
        authorAvatar
      );
      return commitCard;
    });
    const commitList = new CommitCardList(commitContainer, commitArray);
    commitList.render();
  })

  .catch(() => {
    console.log("Кажется, произошла ошибка :( ");
  });
