// // CreateRoom.js
// import React from 'react';

// const CreateRoom = () => {
//   // Generate a unique 6 digit code
//   const generateUniqueCode = () => {
//     const code = Math.floor(100000 + Math.random() * 900000);
//     return code;
//   };

//   const handleViewFriends = () => {
//     // Logic for viewing friends in the room
//     console.log("Viewing friends...");
//   };

//   const roomCode = generateUniqueCode();

//   return (
//     <div>
//       <h2>Your Room Code:</h2>
//       <p>{roomCode}</p>
//       <button onClick={handleViewFriends}>View Friends in Room</button>
//     </div>
//   );
// };

// export default CreateRoom;

import React, { useState } from 'react';

const CreateRoom = () => {
  // Generate a unique 6 digit code
  const generateUniqueCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000);
    return code;
  };

  const [isLocked, setIsLocked] = useState(false); // State variable to track if the room is locked
  const [roomCode, setRoomCode] = useState(generateUniqueCode()); // State variable to store room code

  const handleLockRoom = () => {
    // Logic for locking/unlocking the room
    setIsLocked(!isLocked);
  };

  const handleViewFriends = () => {
    // Logic for viewing friends in the room
    console.log("Viewing friends...");
  };

  return (
    <div>
      <h2>Your Room Code:</h2>
      <p>{roomCode}</p>
      <button onClick={handleViewFriends}>View Friends in Room</button>
      <button onClick={handleLockRoom}>{isLocked ? 'Unlock Room' : 'Lock Room'}</button>
    </div>
  );
};

export default CreateRoom;
