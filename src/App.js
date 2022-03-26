import './App.css';
import DeviceDetails from './components/device-details/DeviceDetails';
import Device from './components/device/Device.js';
import Watch from './components/watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name='uPhone' price='13000'></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
