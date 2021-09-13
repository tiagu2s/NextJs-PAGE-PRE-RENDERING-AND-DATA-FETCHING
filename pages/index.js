import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";
function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    // every 30 min revalidate page SWR could to
    revalidate: 1800,
  };
}
export default HomePage;
