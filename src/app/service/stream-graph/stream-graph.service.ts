import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';
import { StreamGraphServiceAbstract } from './stream-graph.service.abstract';
@Injectable()
export class StreamGraphService extends StreamGraphServiceAbstract {
  public getColors = (): string[] => Highcharts.getOptions().colors;

  public getCategories = (): string[] => [
    '',
    '1924 Chamonix',
    '1928 St. Moritz',
    '1932 Lake Placid',
    '1936 Garmisch-Partenkirchen',
    '1940 <i>Cancelled (Sapporo)</i>',
    '1944 <i>Cancelled (Cortina d\'Ampezzo)</i>',
    '1948 St. Moritz',
    '1952 Oslo',
    '1956 Cortina d\'Ampezzo',
    '1960 Squaw Valley',
    '1964 Innsbruck',
    '1968 Grenoble',
    '1972 Sapporo',
    '1976 Innsbruck',
    '1980 Lake Placid',
    '1984 Sarajevo',
    '1988 Calgary',
    '1992 Albertville',
    '1994 Lillehammer',
    '1998 Nagano',
    '2002 Salt Lake City',
    '2006 Turin',
    '2010 Vancouver',
    '2014 Sochi'
  ]

  public getFinladData = (): number[] => [ 0, 11, 4, 3, 6, 0, 0, 6, 9, 7, 8, 10, 5, 5, 7, 9, 13, 7, 7, 6, 12, 7, 9, 5, 5];
  public getAustriaData = (): number[] => [ 0, 3, 4, 2, 4, 0, 0, 8, 8, 11, 6, 12, 11, 5, 6, 7, 1, 10, 21, 9, 17, 17, 23, 16, 17];
  public getSweedenData = (): number[] => [0, 2, 5, 3, 7, 0, 0, 10, 4, 10, 7, 7, 8, 4, 2, 4, 8, 6, 4, 3, 3, 7, 14, 11, 15];
  public getUnitedStatesData = (): number[] => [0, 4, 6, 12, 4, 0, 0, 9, 11, 7, 10, 7, 7, 8, 10, 12, 8, 6, 11, 13, 13, 34, 25, 37, 28];
  public getNorwayData = (): number[] => [ 0, 17, 15, 10, 15, 0, 0, 10, 16, 4, 6, 15, 14, 12, 7, 10, 9, 5, 20, 26, 25, 25, 19, 23, 26];
  public getEastGermanyData = (): number[] => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 14, 19, 23, 24, 25, 0, 0, 0, 0, 0, 0, 0];
  public getWestGermanyData = (): number[] => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 5, 10, 5, 4, 8, 0, 0, 0, 0, 0, 0, 0];
  public getGermanyData = (): number[] => [ 0, 0, 1, 2, 6, 0, 0, 0, 7, 2, 8, 9, 0, 0, 0, 0, 0, 0, 26, 24, 29, 36, 29, 30, 19];
  public getNetherlandsData = (): number[] => [  0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 2, 9, 9, 6, 4, 0, 7, 4, 4, 11, 8, 9, 8, 24];
  public getItalyData = (): number[] => [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 1, 4, 4, 5, 4, 2, 2, 5, 14, 20, 10, 13, 11, 5, 8];
  public getCanadaData = (): number[] => [0, 1, 1, 7, 1, 0, 0, 3, 2, 3, 4, 3, 3, 1, 3, 2, 4, 5, 7, 13, 15, 17, 24, 26, 25];
  public getSwitzerlandData = (): number[] => [0, 3, 1, 1, 3, 0, 0, 10, 2, 6, 2, 0, 6, 10, 5, 5, 5, 15, 3, 9, 7, 11, 14, 9, 11];
  public getGreatBritianData = (): number[] => [0, 4, 1, 0, 3, 0, 0, 2, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 2, 1, 2, 1, 1, 4];
  public getFranceData = (): number[] => [0, 3, 1, 1, 1, 0, 0, 5, 1, 0, 3, 7, 9, 3, 1, 1, 3, 2, 9, 5, 8, 11, 9, 11, 15];
  public getHungaryData = (): number[] => [ 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  public getChinaData = (): number[] => [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 8, 8, 11, 11, 9];
  public getSouthKoreaData = (): number[] => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 6, 6, 4, 11, 14, 8];
  public getLatviaData = (): number[] => [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4];
  public getRussiaData = (): number[] => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 18, 13, 22, 15, 33];
  public getJapanData = (): number[] => [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 1, 1, 1, 7, 5, 10, 2, 1, 5, 8];
  public getPolandData = (): number[] => [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 6, 6];
  public getSpainData = (): number[] => [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
  public getBerlarusData = (): number[] => [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 3, 6];
  public getKazakhstamData = (): number[] => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 1, 1];
  public getDenmarkData = (): number[] => [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
  public getUkraineData = (): number[] => [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 2, 0, 2];
  public getRomaniaData = (): number[] => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  public getLiechtensteinData = (): number[] => [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0];
  public getUnifiedTeamData = (): number[] => [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0];
}
