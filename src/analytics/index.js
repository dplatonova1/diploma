import "../pages/paper.css";
import {Statistics} from '../js/components/Statistics.js';
import { DataStorage } from "../js/modules/DataStorage.js";

const storage = new DataStorage();
const lastInput = storage.getData('lastInput');
const news = storage.getData('data');

const getObject = new Statistics(news, lastInput);
const stata = getObject.createStatisticsHeader();
getObject.groupArticles();

const stataContainer = document.querySelector('.analytics__appendbox');
stataContainer.appendChild(stata);

const graphs = getObject.createAnalyticsGraphs();
const graphsContainer = document.querySelector('.analytics__appendnumbers');
graphsContainer.appendChild(graphs);
