import Alert from "./components/Alert";
import { Button } from "./components/Button";

function App() {

  return (<div>
    <Alert>
      You have won an Iphone
    </Alert>

    <Button onClick={() => console.log('Clicked')}>Button</Button>
    </div>
  );
}
export default App;