export const getLeftDays = (date) => {
  const endDateTime = new Date(date).getTime();
  const currentTime = Date.now();
  const day = 1000 * 60 * 60 * 24;

  const result = endDateTime - currentTime;
  return Math.ceil(result / day);
};

export const searchTaskByName = (tasks, text) => {
  if (text && text.length) {
    return tasks.filter((item) => item.text.toLowerCase().includes(text.toLowerCase()));
  }
  return tasks;
};

export const tasksSortBy = (tasks, sortValue, sortDirection) => {
  if (sortValue === 'index') {
    return tasks.sort((a, b) => {
      return sortDirection ? a.id - b.id : b.id - a.id;
    });
  } else if (sortValue === 'deadline') {
    return tasks.sort((a, b) => {
      const aDate = new Date(a.date).getTime();
      const bDate = new Date(b.date).getTime();

      return sortDirection ? bDate - aDate : aDate - bDate;
    });
  } else if (sortValue === 'end') {
    return tasks.sort((a, b) => {
      const aDate = new Date(a.endDate).getTime();
      const bDate = new Date(b.endDate).getTime();

      return sortDirection ? bDate - aDate : aDate - bDate;
    });
  }
};
