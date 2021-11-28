import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const rooms = [];
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);
  rooms.push(room1);
  rooms.push(room2);
  rooms.push(room3);
  return rooms;
}
