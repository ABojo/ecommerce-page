import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import { CartProvider } from "./contexts/CartContext";
import buildImagePaths from "./utils/buildImagePaths";

const { images, thumbnails } = buildImagePaths();

function App() {
  return (
    <CartProvider>
      <div className="container">
        <Header />
        <Product
          brand={"Sneaker Company"}
          name={"Fall Limited Edition Sneakers"}
          description={
            "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
          }
          price={250}
          discount={50}
          images={images}
          thumbnails={thumbnails}
        />
      </div>
    </CartProvider>
  );
}

export default App;
