import "../pages/paper.css";
import {Statistics} from '../js/components/Statistics.js';
import { DataStorage } from "../js/modules/DataStorage.js";
// import {lotsofstuff} from "../js/components/SearchInput.js"

const storage = new DataStorage();
const lastInput = storage.getData('lastInput');
const news = storage.getData(lastInput);


const getObject = new Statistics(news, lastInput);
const stata = getObject.createStatisticsHeader();
const articlesByGroup =  getObject.groupArticles();

const stataContainer = document.querySelector('.analytics__appendbox');
stataContainer.appendChild(stata);

const graghs = getObject.createAnalyticsGraphs();
const graphsContainer = document.querySelector('.analytics__appendnumbers');
graphsContainer.appendChild(graghs);
// console.log(getObject)
