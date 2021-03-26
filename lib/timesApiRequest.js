import React, { useEffect, useState } from 'react';
import { NewYorkTimes_Api } from '../keys/keys';

export const TimesApiFetch = async () => {
  const sections = [];

  const response = await fetch(
    `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${NewYorkTimes_Api}`
  );

  const data = await response.json();
  const results = data.results;

  results.map((item) => {
    let exist = sections.some((section) => {
      if (section == item.section) {
        return true;
      }
    });
    if (!exist) {
      sections.push(item.section);
    }
  });

  console.log(sections, ' <- sections');

  return { sections, results };
};
