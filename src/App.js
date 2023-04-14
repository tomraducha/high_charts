import HighchartsFlags from './components/HighchartsFlags';
import DropdownRoom from './components/DropdownRoom';
import TimeRangeSelector from './components/TimeRangeSelector';

function App() {
  const handleSelect = (option) => {
    console.log(`Option : ${option}`);
  }

  const handleSelector = (option) => {
    console.log(`Option : ${option}`);
  }

  const options = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <div>
      <TimeRangeSelector options={options} onSelect={handleSelector}/>
      <DropdownRoom options={options} onSelect={handleSelect} />
      <HighchartsFlags />
    </div>
  );
}

export default App;
