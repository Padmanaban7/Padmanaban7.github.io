import { v4 as uuidv4 } from 'uuid';
import AutocompleteImage from '../images/autocomplete.png';
import IotWaterValve from '../images/iot-water.png';
import ExpenseManager from '../images/expense-manager.jpg';
import DashboardImage from '../images/DashboardFinal.png';
import MovieRecommendation from '../images/Movie-Recommendation.jpg';
import CPSearchEngine from '../images/cp-search.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Expense manager',
    desc:
      'An mobile app that helps the user to track and visualize the expenses incurred. It also allows user to create group expenses',
    img: ExpenseManager,
  },
  {
    id: uuidv4(),
    name: 'CP Search engine',
    desc:
      'A search engine for retreiving competitve programming problems accross various platforms such as codeforces, leetcode etc.,',
    img: CPSearchEngine,
  },
  {
    id: uuidv4(),
    name: 'Movie recommendation system',
    desc:
      'A web application that allows user to create a list of movies that they like and provides recommendation based on their interest',
    img: MovieRecommendation,
  },
  {
    id: uuidv4(),
    name: 'Iot valve operator',
    desc:
      'An application that allows user to remotely operate the water valve. I developed the arduino and the mobile app',
    img: IotWaterValve,
  },
  {
    id: uuidv4(),
    name: 'Claims management dashboard',
    desc:
      'A web application that allows insurance claim handlers to bring insurance claims to completion.',
    img: DashboardImage,
  },
  {
    id: uuidv4(),
    name: 'Autocomplete',
    desc:
      'An autocomplete module written in Java for a text editor that provides suggestions to user. The dictionary is implemeted using tries to reduce the space.',
    img: AutocompleteImage,
  },
];

export default projects;
