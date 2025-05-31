import ButtonGradient from "./assets/svg/ButtonGradient"
import Button from "./components/Button";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="text-black">hello</div>


      <div className="pt-[4.75rem] lg:pt-[5.75rem] overflow-hidden">
        <Header/>
      </div>
      <ButtonGradient/>
    </>
  );
};

export default App;
