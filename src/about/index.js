import "../pages/about.css";
import inga from "../images/inga.png"
import anton from "../images/anton.png"
import mariia from "../images/mariia.png"
import html from "../images/html.svg"
import css from "../images/css.svg"
import js from "../images/js.svg"
import webpack from "../images/webpack.svg"
import {swiper} from "../js/swiper/swiper.min.js"
swiper();
import {CommitCard} from "../js/components/CommitCard.js"
import {CommitCardList} from "../js/components/CommitCardList.js"

const commits=[
    
        {
          "url": "https://api.github.com/repos/octocat/Spoon-Knife/commits/bb4cc8d3b2e14b3af5df699876dd4ff3acd00b7f",
          "sha": "bb4cc8d3b2e14b3af5df699876dd4ff3acd00b7f",
          "html_url": "https://github.com/octocat/Spoon-Knife/commit/bb4cc8d3b2e14b3af5df699876dd4ff3acd00b7f",
          "comments_url": "https://api.github.com/repos/octocat/Spoon-Knife/commits/bb4cc8d3b2e14b3af5df699876dd4ff3acd00b7f/comments",
          "commit": {
            "url": "https://api.github.com/repos/octocat/Spoon-Knife/git/commits/bb4cc8d3b2e14b3af5df699876dd4ff3acd00b7f",
            "author": {
              "date": "2014-02-04T14:38:36-08:00",
              "name": "The Octocat",
              "email": "octocat@nowhere.com"
            },
            "committer": {
              "date": "2014-02-12T15:18:55-08:00",
              "name": "The Octocat",
              "email": "octocat@nowhere.com"
            },
            "message": "Create styles.css and updated README",
            "tree": {
              "url": "https://api.github.com/repos/octocat/Spoon-Knife/git/trees/a639e96f9038797fba6e0469f94a4b0cc459fa68",
              "sha": "a639e96f9038797fba6e0469f94a4b0cc459fa68"
            },
            "comment_count": 8
          },
          "author": {
            "login": "octocat",
            "id": 583231,
            "node_id": "MDQ6VXNlcjU4MzIzMQ==",
            "avatar_url": "https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=815&q=80",
            "gravatar_id": "",
            "url": "https://api.github.com/users/octocat",
            "html_url": "https://github.com/octocat",
            "followers_url": "https://api.github.com/users/octocat/followers",
            "following_url": "https://api.github.com/users/octocat/following{/other_user}",
            "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
            "organizations_url": "https://api.github.com/users/octocat/orgs",
            "repos_url": "https://api.github.com/users/octocat/repos",
            "events_url": "https://api.github.com/users/octocat/events{/privacy}",
            "received_events_url": "https://api.github.com/users/octocat/received_events",
            "type": "User",
            "site_admin": false
          },
          "committer": {
            "login": "octocat",
            "id": 583231,
            "node_id": "MDQ6VXNlcjU4MzIzMQ==",
            "avatar_url": "https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=815&q=80",
            "gravatar_id": "",
            "url": "https://api.github.com/users/octocat",
            "html_url": "https://github.com/octocat",
            "followers_url": "https://api.github.com/users/octocat/followers",
            "following_url": "https://api.github.com/users/octocat/following{/other_user}",
            "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
            "organizations_url": "https://api.github.com/users/octocat/orgs",
            "repos_url": "https://api.github.com/users/octocat/repos",
            "events_url": "https://api.github.com/users/octocat/events{/privacy}",
            "received_events_url": "https://api.github.com/users/octocat/received_events",
            "type": "User",
            "site_admin": false
          },
          "parents": [
            {
              "url": "https://api.github.com/repos/octocat/Spoon-Knife/commits/a30c19e3f13765a3b48829788bc1cb8b4e95cee4",
              "html_url": "https://github.com/octocat/Spoon-Knife/commit/a30c19e3f13765a3b48829788bc1cb8b4e95cee4",
              "sha": "a30c19e3f13765a3b48829788bc1cb8b4e95cee4"
            }
          ],
          "repository": {
            "id": 1300192,
            "node_id": "MDEwOlJlcG9zaXRvcnkxMzAwMTky",
            "name": "Spoon-Knife",
            "full_name": "octocat/Spoon-Knife",
            "owner": {
              "login": "octocat",
              "id": 583231,
              "node_id": "MDQ6VXNlcjU4MzIzMQ==",
              "avatar_url": "https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=815&q=80",
              "gravatar_id": "",
              "url": "https://api.github.com/users/octocat",
              "html_url": "https://github.com/octocat",
              "followers_url": "https://api.github.com/users/octocat/followers",
              "following_url": "https://api.github.com/users/octocat/following{/other_user}",
              "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
              "organizations_url": "https://api.github.com/users/octocat/orgs",
              "repos_url": "https://api.github.com/users/octocat/repos",
              "events_url": "https://api.github.com/users/octocat/events{/privacy}",
              "received_events_url": "https://api.github.com/users/octocat/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/octocat/Spoon-Knife",
            "description": "This repo is for demonstration purposes only.",
            "fork": false,
            "url": "https://api.github.com/repos/octocat/Spoon-Knife",
            "forks_url": "https://api.github.com/repos/octocat/Spoon-Knife/forks",
            "keys_url": "https://api.github.com/repos/octocat/Spoon-Knife/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/octocat/Spoon-Knife/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/octocat/Spoon-Knife/teams",
            "hooks_url": "https://api.github.com/repos/octocat/Spoon-Knife/hooks",
            "issue_events_url": "https://api.github.com/repos/octocat/Spoon-Knife/issues/events{/number}",
            "events_url": "https://api.github.com/repos/octocat/Spoon-Knife/events",
            "assignees_url": "https://api.github.com/repos/octocat/Spoon-Knife/assignees{/user}",
            "branches_url": "https://api.github.com/repos/octocat/Spoon-Knife/branches{/branch}",
            "tags_url": "https://api.github.com/repos/octocat/Spoon-Knife/tags",
            "blobs_url": "https://api.github.com/repos/octocat/Spoon-Knife/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/octocat/Spoon-Knife/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/octocat/Spoon-Knife/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/octocat/Spoon-Knife/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/octocat/Spoon-Knife/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/octocat/Spoon-Knife/languages",
            "stargazers_url": "https://api.github.com/repos/octocat/Spoon-Knife/stargazers",
            "contributors_url": "https://api.github.com/repos/octocat/Spoon-Knife/contributors",
            "subscribers_url": "https://api.github.com/repos/octocat/Spoon-Knife/subscribers",
            "subscription_url": "https://api.github.com/repos/octocat/Spoon-Knife/subscription",
            "commits_url": "https://api.github.com/repos/octocat/Spoon-Knife/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/octocat/Spoon-Knife/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/octocat/Spoon-Knife/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/octocat/Spoon-Knife/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/octocat/Spoon-Knife/contents/{+path}",
            "compare_url": "https://api.github.com/repos/octocat/Spoon-Knife/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/octocat/Spoon-Knife/merges",
            "archive_url": "https://api.github.com/repos/octocat/Spoon-Knife/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/octocat/Spoon-Knife/downloads",
            "issues_url": "https://api.github.com/repos/octocat/Spoon-Knife/issues{/number}",
            "pulls_url": "https://api.github.com/repos/octocat/Spoon-Knife/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/octocat/Spoon-Knife/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/octocat/Spoon-Knife/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/octocat/Spoon-Knife/labels{/name}",
            "releases_url": "https://api.github.com/repos/octocat/Spoon-Knife/releases{/id}",
            "deployments_url": "https://api.github.com/repos/octocat/Spoon-Knife/deployments"
          },
          "score": 1.0
        },
        {
            "url": "https://api.github.com/repos/octocat/Spoon-Knife/commits/bb4cc8d3b2e14b3af5df699876dd4ff3acd00b7f",
            "sha": "bb4cc8d3b2e14b3af5df699876dd4ff3acd00b7f",
            "html_url": "https://github.com/octocat/Spoon-Knife/commit/bb4cc8d3b2e14b3af5df699876dd4ff3acd00b7f",
            "comments_url": "https://api.github.com/repos/octocat/Spoon-Knife/commits/bb4cc8d3b2e14b3af5df699876dd4ff3acd00b7f/comments",
            "commit": {
              "url": "https://api.github.com/repos/octocat/Spoon-Knife/git/commits/bb4cc8d3b2e14b3af5df699876dd4ff3acd00b7f",
              "author": {
                "date": "2014-02-04T14:38:36-08:00",
                "name": "The Octocat",
                "email": "octocat@nowhere.com"
              },
              "committer": {
                "date": "2014-02-12T15:18:55-08:00",
                "name": "The Octocat",
                "email": "octocat@nowhere.com"
              },
              "message": "Fixed issues, going okay",
              "tree": {
                "url": "https://api.github.com/repos/octocat/Spoon-Knife/git/trees/a639e96f9038797fba6e0469f94a4b0cc459fa68",
                "sha": "a639e96f9038797fba6e0469f94a4b0cc459fa68"
              },
              "comment_count": 8
            },
            "author": {
              "login": "octocat",
              "id": 583231,
              "node_id": "MDQ6VXNlcjU4MzIzMQ==",
              "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/octocat",
              "html_url": "https://github.com/octocat",
              "followers_url": "https://api.github.com/users/octocat/followers",
              "following_url": "https://api.github.com/users/octocat/following{/other_user}",
              "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
              "organizations_url": "https://api.github.com/users/octocat/orgs",
              "repos_url": "https://api.github.com/users/octocat/repos",
              "events_url": "https://api.github.com/users/octocat/events{/privacy}",
              "received_events_url": "https://api.github.com/users/octocat/received_events",
              "type": "User",
              "site_admin": false
            },
            "committer": {
              "login": "octocat",
              "id": 583231,
              "node_id": "MDQ6VXNlcjU4MzIzMQ==",
              "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/octocat",
              "html_url": "https://github.com/octocat",
              "followers_url": "https://api.github.com/users/octocat/followers",
              "following_url": "https://api.github.com/users/octocat/following{/other_user}",
              "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
              "organizations_url": "https://api.github.com/users/octocat/orgs",
              "repos_url": "https://api.github.com/users/octocat/repos",
              "events_url": "https://api.github.com/users/octocat/events{/privacy}",
              "received_events_url": "https://api.github.com/users/octocat/received_events",
              "type": "User",
              "site_admin": false
            },
            "parents": [
              {
                "url": "https://api.github.com/repos/octocat/Spoon-Knife/commits/a30c19e3f13765a3b48829788bc1cb8b4e95cee4",
                "html_url": "https://github.com/octocat/Spoon-Knife/commit/a30c19e3f13765a3b48829788bc1cb8b4e95cee4",
                "sha": "a30c19e3f13765a3b48829788bc1cb8b4e95cee4"
              }
            ],
            "repository": {
              "id": 1300192,
              "node_id": "MDEwOlJlcG9zaXRvcnkxMzAwMTky",
              "name": "Spoon-Knife",
              "full_name": "octocat/Spoon-Knife",
              "owner": {
                "login": "octocat",
                "id": 583231,
                "node_id": "MDQ6VXNlcjU4MzIzMQ==",
                "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=3",
                "gravatar_id": "",
                "url": "https://api.github.com/users/octocat",
                "html_url": "https://github.com/octocat",
                "followers_url": "https://api.github.com/users/octocat/followers",
                "following_url": "https://api.github.com/users/octocat/following{/other_user}",
                "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
                "organizations_url": "https://api.github.com/users/octocat/orgs",
                "repos_url": "https://api.github.com/users/octocat/repos",
                "events_url": "https://api.github.com/users/octocat/events{/privacy}",
                "received_events_url": "https://api.github.com/users/octocat/received_events",
                "type": "User",
                "site_admin": false
              },
              "private": false,
              "html_url": "https://github.com/octocat/Spoon-Knife",
              "description": "This repo is for demonstration purposes only.",
              "fork": false,
              "url": "https://api.github.com/repos/octocat/Spoon-Knife",
              "forks_url": "https://api.github.com/repos/octocat/Spoon-Knife/forks",
              "keys_url": "https://api.github.com/repos/octocat/Spoon-Knife/keys{/key_id}",
              "collaborators_url": "https://api.github.com/repos/octocat/Spoon-Knife/collaborators{/collaborator}",
              "teams_url": "https://api.github.com/repos/octocat/Spoon-Knife/teams",
              "hooks_url": "https://api.github.com/repos/octocat/Spoon-Knife/hooks",
              "issue_events_url": "https://api.github.com/repos/octocat/Spoon-Knife/issues/events{/number}",
              "events_url": "https://api.github.com/repos/octocat/Spoon-Knife/events",
              "assignees_url": "https://api.github.com/repos/octocat/Spoon-Knife/assignees{/user}",
              "branches_url": "https://api.github.com/repos/octocat/Spoon-Knife/branches{/branch}",
              "tags_url": "https://api.github.com/repos/octocat/Spoon-Knife/tags",
              "blobs_url": "https://api.github.com/repos/octocat/Spoon-Knife/git/blobs{/sha}",
              "git_tags_url": "https://api.github.com/repos/octocat/Spoon-Knife/git/tags{/sha}",
              "git_refs_url": "https://api.github.com/repos/octocat/Spoon-Knife/git/refs{/sha}",
              "trees_url": "https://api.github.com/repos/octocat/Spoon-Knife/git/trees{/sha}",
              "statuses_url": "https://api.github.com/repos/octocat/Spoon-Knife/statuses/{sha}",
              "languages_url": "https://api.github.com/repos/octocat/Spoon-Knife/languages",
              "stargazers_url": "https://api.github.com/repos/octocat/Spoon-Knife/stargazers",
              "contributors_url": "https://api.github.com/repos/octocat/Spoon-Knife/contributors",
              "subscribers_url": "https://api.github.com/repos/octocat/Spoon-Knife/subscribers",
              "subscription_url": "https://api.github.com/repos/octocat/Spoon-Knife/subscription",
              "commits_url": "https://api.github.com/repos/octocat/Spoon-Knife/commits{/sha}",
              "git_commits_url": "https://api.github.com/repos/octocat/Spoon-Knife/git/commits{/sha}",
              "comments_url": "https://api.github.com/repos/octocat/Spoon-Knife/comments{/number}",
              "issue_comment_url": "https://api.github.com/repos/octocat/Spoon-Knife/issues/comments{/number}",
              "contents_url": "https://api.github.com/repos/octocat/Spoon-Knife/contents/{+path}",
              "compare_url": "https://api.github.com/repos/octocat/Spoon-Knife/compare/{base}...{head}",
              "merges_url": "https://api.github.com/repos/octocat/Spoon-Knife/merges",
              "archive_url": "https://api.github.com/repos/octocat/Spoon-Knife/{archive_format}{/ref}",
              "downloads_url": "https://api.github.com/repos/octocat/Spoon-Knife/downloads",
              "issues_url": "https://api.github.com/repos/octocat/Spoon-Knife/issues{/number}",
              "pulls_url": "https://api.github.com/repos/octocat/Spoon-Knife/pulls{/number}",
              "milestones_url": "https://api.github.com/repos/octocat/Spoon-Knife/milestones{/number}",
              "notifications_url": "https://api.github.com/repos/octocat/Spoon-Knife/notifications{?since,all,participating}",
              "labels_url": "https://api.github.com/repos/octocat/Spoon-Knife/labels{/name}",
              "releases_url": "https://api.github.com/repos/octocat/Spoon-Knife/releases{/id}",
              "deployments_url": "https://api.github.com/repos/octocat/Spoon-Knife/deployments"
            },
            "score": 1.0
          }
      
  ]

const commitContainer = document.querySelector(".swiper-wrapper");
const commitArray = commits.map(function(element) {
  const card = new CommitCard( element.commit.committer.name,
                element.commit.committer.email,
                element.commit.committer.date,
                element.commit.message,
                element.author.avatar_url);
  return card;
 
});



const commitList = new CommitCardList(commitContainer, commitArray);
commitList.render();