import ImageSlideshow from "./UI/SlideShow";

export default function HomePage() {
  return (
    <>
      <header>
        <div>
          <div>
            <h1>Welcome to KitchenMP</h1>
            <p>Tase & share food from all over the world</p>
            <ImageSlideshow />
          </div>
        </div>
      </header>
      <main>
        <section>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
