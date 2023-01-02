
import { Wrapper } from "./components/wrapper/wrapper";
import { Screen } from "./components/screen/screen";
import { ButtonBox } from "./components/buttonBox/buttonBox";
import { Button } from "./components/button/button";

const btnValues = [
  ["C", "+-", "%", "/"],
  [9, 8, 7, "X"],
  [6, 5, 4, "-"],
  [3, 2, 1, "+"],
  [0, ".", "="],
]

const App = () => {
  return (
    <Wrapper>
      <Screen value="0" />
        <ButtonBox>
          {
            btnValues.flat().map((btn, i) => {
              return(
                <Button
                  key={i}
                  className={btn === "=" ? "button equals" : "button"}
                  value={btn}
                  onClick={() => {
                    console.log(`${btn} clicked`);
                  }}
                />
              );
            })
          }
        </ButtonBox>
    </Wrapper>
  );
};

export default App;
