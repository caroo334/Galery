import { Carousel } from '../components/Carousel/Carousel';
import mockImages from '../mock/carousel-images.json';

export default function Home() {
  return (
    <div className="App">
      <Carousel images={mockImages} />
    </div>
  );
}
