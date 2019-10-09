// @flow
import { type TypePieChart } from 'Shared/types/question';
import { PIE_CHART, HISTOGRAM_CHART } from 'Client/app/constants/elements';

export const MockedPieChartResults: TypePieChart = {
  type: PIE_CHART,
  unit: 'percentage',
  name: 'Pie Chart n° 1',
  legend:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  data: [
    {
      label: 'Justice sociale',
      sublabel: 'et fiscale',
      percent: 21,
      color: '#4c45a5',
      adjustLabel: { textAlign: 'left', xAxis: 2.5 },
    },
    {
      label: 'RSE et politique',
      sublabel: "d'entreprise",
      percent: 12,
      color: '#eb7575',
      adjustLabel: { textAlign: 'left', yAxis: 2.25 },
    },
    {
      label: 'Conditions',
      sublabel: 'de travail',
      percent: 9,
      color: '#eeb29a',
      adjustLabel: { textAlign: 'right', xAxis: 1.75, yAxis: 2.1 },
    },
    {
      label: 'Intêret général',
      percent: 7,
      color: '#ffd674',
      adjustLabel: { textAlign: 'right', xAxis: 1.75 },
    },
    {
      label: 'Méthodes',
      sublabel: 'de travail',
      percent: 6,
      color: '#fff689',
      adjustLabel: { textAlign: 'right', xAxis: 1.75 },
    },
    {
      label: 'Emploi',
      percent: 6,
      color: '#c1ebdd',
      adjustLabel: { textAlign: 'right', xAxis: 1.75, yAxis: 1.9 },
    },
    {
      label: 'Croissance',
      sublabel: 'compétitivité',
      percent: 6,
      color: '#59bad4',
      adjustLabel: { textAlign: 'right', xAxis: 1.75 },
    },
    {
      label: 'Code du',
      sublabel: 'travail et lois',
      percent: 5,
      color: '#5985af',
      adjustLabel: { textAlign: 'left', xAxis: 1.9 },
    },
    {
      label: 'Autre',
      percent: 28,
      color: '#ffffff',
      adjustLabel: { hidePercent: true, yAxis: 1.725 },
    },
  ],
};

export const MockedHistogramResults = {
  type: HISTOGRAM_CHART,
  unit: 'percentage',
  name: 'Participation par région en métropole',
  legend: {
    title: 'Répartition des participants',
    dimensions: {
      first: 'participants',
    },
  },
  data: [
    {
      label: 'Ile-de-France',
      bars: {
        first: 16,
      },
    },
    {
      label: 'Auvergne-Rhone-Alpes',
      bars: {
        first: 13,
      },
    },
    {
      label: 'Nouvelle-Aquitaine',
      bars: {
        first: 10,
      },
    },
    {
      label: 'Occitanie',
      bars: {
        first: 10,
      },
    },
  ],
};

export const MockedHistogram2BarsResults = {
  type: HISTOGRAM_CHART,
  unit: 'percentage',
  name: 'Participation par région en métropole',
  forcedHigherValue: 55,
  legend: {
    title: 'Répartition des participants',
    dimensions: {
      first: 'participants',
      second: 'population générale',
    },
  },
  data: [
    {
      label: 'Ile-de-France',
      color: '#D4D4D4',
      bars: {
        first: 16,
        second: 19,
      },
    },
    {
      label: 'Auvergne-Rhone-Alpes',
      color: '#D4D4D4',
      bars: {
        first: 13,
        second: 12,
      },
    },
    {
      label: 'Nouvelle-Aquitaine',
      color: '#D4D4D4',
      bars: {
        first: 10,
        second: 9,
      },
    },
    {
      label: 'Occitanie',
      color: '#D4D4D4',
      bars: {
        first: 10,
        second: 9,
      },
    },
    {
      label: 'Provence-Alpes-Côte-d-Azur',
      color: '#D4D4D4',
      bars: {
        first: 9,
        second: 8,
      },
    },
    {
      label: 'Grand-Est',
      color: '#D4D4D4',
      bars: {
        first: 8,
        second: 9,
      },
    },
    {
      label: 'Hauts-de-France',
      color: '#D4D4D4',
      bars: {
        first: 8,
        second: 9,
      },
    },
    {
      label: 'Bretagne',
      color: '#D4D4D4',
      bars: {
        first: 6,
        second: 5,
      },
    },
    {
      label: 'Pays-de-la-Loire',
      color: '#D4D4D4',
      bars: {
        first: 6,
        second: 6,
      },
    },
    {
      label: 'Normandie',
      color: '#D4D4D4',
      bars: {
        first: 5,
        second: 5,
      },
    },
    {
      label: 'Bourgogne-Franche-Comté',
      color: '#D4D4D4',
      bars: {
        first: 4,
        second: 4,
      },
    },
    {
      label: 'Centre-Val-de-Loire',
      color: '#D4D4D4',
      bars: {
        first: 4,
        second: 4,
      },
    },
    {
      label: 'Corse',
      color: '#D4D4D4',
      bars: {
        first: 1,
        second: 1,
      },
    },
  ],
};
