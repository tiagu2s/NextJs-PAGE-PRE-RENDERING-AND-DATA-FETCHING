export async function getAllEvents() {
  const response = await fetch(
    "https://events-real-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  console.log("data", data);
  const events = [];

  //   object to array
  for (const key in data) {
    console.log("entrei");
    events.push({
      is: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
