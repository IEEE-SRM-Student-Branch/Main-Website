import Events from "./components/events/Events";
import Gallery from "./components/gallery/Gallery";

export default async function Home() {
  return (
    <div>
      <Events />
      <Gallery />
    </div>
  );
}
