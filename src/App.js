import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [driverName, setDriverName] = useState('');
  const [currentMeter, setCurrentMeter] = useState('');
  const [states, setStates] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [group, setGroup] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [assignedVehicle, setAssignedVehicle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault() 
    const newDriver = {
      driverName,
      currentMeter,
      states,
      vehicleType,
      group,
      licensePlate,
      assignedVehicle,
    };

    try {
      const response = await axios.post('http://localhost:3001/drivers', newDriver);
      console.log('Driver saved:', response.data);
      // Clear the form after successful submission
     setDriverName('');
     setCurrentMeter('');
     setStates('');
     setVehicleType('');
     setGroup('');
     setLicensePlate(''); 
     setAssignedVehicle('')
    } catch (err) {
      console.error('Error saving driver:', err);
    }
  };

  return (
    <div className="App">
      <h1>Driver Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Driver Name:</label>
          <input
            type="text"
            value={driverName}
            onChange={(e) => setDriverName(e.target.value)}
          />
        </div>
        <div>
          <label>Current Meter:</label>
          <input
            type="text"
            value={currentMeter}
            onChange={(e) => setCurrentMeter(e.target.value)}
          />
        </div>
        <div>
          <label>States:</label>
          <input
            type="text"
            value={states}
            onChange={(e) => setStates(e.target.value)}
          />
        </div>
        <div>
          <label>Vehicle Type:</label>
          <input
            type="text"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          />
        </div>
        <div>
          <label>Group:</label>
          <input
            type="text"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          />
        </div>
        <div>
          <label>License Plate:</label>
          <input
            type="text"
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
          />
        </div>
        <div>
          <label>Assigned Vehicle:</label>
          <input
            type="text"
            value={assignedVehicle}
            onChange={(e) => setAssignedVehicle(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
