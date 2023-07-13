import Header from "./components/Header/Header";
import Product from "./components/Product/Product";

function App() {
  return (
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
        images={[""]}
      />
    </div>
  );
}

export default App;
