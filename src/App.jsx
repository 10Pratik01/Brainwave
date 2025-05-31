import ButtonGradient from "./assets/svg/ButtonGradient"
import Button from "./components/Button";


const App = () => {
  return (
    <>
      <div className="text-black">hello</div>


      <div className="pt-[4.75rem] lg:pt-[5.75rem] overflow-hidden">
        <Button className="mt-10 " href="#login">
          Something
        </Button>
      </div>
      <ButtonGradient/>
    </>
  );
};

export default App;
