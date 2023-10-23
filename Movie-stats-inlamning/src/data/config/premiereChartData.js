import documentariesData from "../documentaries.json";
import featureFilmsData from "../feature-films.json";
import specialsData from "../specials.json";
import generateRandomHexColors from "./colorGen.js";
import React, { useState, useEffect } from "react";

export function premiereChartConfig() {
    const [data, setData] = useState({ labels: [], datasets: [] });
    const [backgroundColor, setBackgroundColor] = useState([]);
  
    useEffect(() => {
      const months = Array.from({ length: 12 }, (_, i) => i + 1);
  
      const documentariesFilms = [...documentariesData];
      const featureFilms = [...featureFilmsData];
      const specialsFilms = [...specialsData];
  
      const datasets = [
        {
          label: 'Documentaries',
          data: [],
          backgroundColor: [],
        },
        {
          label: 'Feature Films',
          data: [],
          backgroundColor: [],
        },
        {
          label: 'Specials',
          data: [],
          backgroundColor: [],
        },
      ];
  
      months.forEach((month) => {
        datasets[0].data.push(
          documentariesFilms.filter((movie) => {
            const premiereDate = new Date(movie.Premiere);
            return premiereDate.getMonth() + 1 === month;
          }).length
        );
  
        datasets[1].data.push(
          featureFilms.filter((movie) => {
            const premiereDate = new Date(movie.Premiere);
            return premiereDate.getMonth() + 1 === month;
          }).length
        );
  
        datasets[2].data.push(
          specialsFilms.filter((movie) => {
            const premiereDate = new Date(movie.Premiere);
            return premiereDate.getMonth() + 1 === month;
          }).length
        );
      });
  

    //   datasets.forEach((dataset) => {
    //     dataset.data = dataset.data.sort((a, b) => b - a);
    //   });

      const monthNames = [
        'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni',
        'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'
      ];
  
      datasets.forEach((dataset) => {
        dataset.backgroundColor = generateRandomHexColors(months.length);
      });
  
      const labels = monthNames.map((month, index) => monthNames[index]);
      setData({ labels, datasets });
  
      const newBackgroundColor = generateRandomHexColors(labels.length);
      setBackgroundColor(newBackgroundColor);
    }, []);
  
    return {
      labels: data.labels,
      datasets: data.datasets,
    };
  }
  


export function premiereChartOptions() {
  return {
      respnsive: true,
    plugins: {
        title:{
            display: true,
            text: "Antal premiere detta år",
            font:{
                size: 50,
            }
        },
        legend:{
            display: false
        }
    },
    hoverOffset: 15,

  }
}


