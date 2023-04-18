import HighchartsFlags from './components/HighchartsFlags';
import DropdownRoom from './components/DropdownRoom';

function App() {
  function handleSelect (option) {
    console.log(`Option : ${option}`);
  }

  const options = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <div className='app'>
      <DropdownRoom options={options} onSelect={handleSelect} />
      <HighchartsFlags />
    </div>
  );
}

export default App;