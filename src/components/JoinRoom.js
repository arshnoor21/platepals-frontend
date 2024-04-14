import React, { useState } from 'react';

const JoinRoom = () => {
  const [roomCode, setRoomCode] = useState('');

  const handleInputChange = (event) => {
    // Update the room code state when input changes
    setRoomCode(event.target.value);
  };

  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Logic to handle joining the room with the entered room code
    console.log("Joining room with code:", roomCode);
  };

  return (
    <div>
      <h2>Join Room</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Room Code:
          <input
            type="text"
            value={roomCode}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JoinRoom;

