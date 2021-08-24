import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { flipRoom } from "../store/action";
import "./index.css";
import img from "../studio-room_19.jpg";

const selectRooms = (state) => state.rooms;

const RoomList = () => {
  const rooms = useSelector(selectRooms);
  const dispatch = useDispatch();
  return (
    <div>
      <table>
        <caption>Move-out List</caption>
        <thead>
          <tr>
            <th scope="col">Move-out Date</th>
            <th scope="col">ID</th>
            <th scope="col">Address</th>
            <th scope="col">Room</th>
            <th scope="col">Location</th>
            <th scope="col">Last Occupant</th>
            <th scope="col">UID</th>
            <th scope="col">Balance</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index}>
              <td data-label="Account">{room.date}</td>
              <td data-label="Due Date">{room.id}</td>
              <td data-label="Amount" className="row">
                <img src={img} alt="address" />
                <a className="add" href={room.address}>
                  {" "}
                  {room.address}
                </a>
              </td>
              <td data-label="Period" className="room">
                {room.room}
              </td>
              <td data-label="Period">{room.location}</td>
              <td data-label="Period">
                <a href={room.lastOccupant}>{room.lastOccupant}</a>
              </td>
              <td data-label="Period">{room.uid}</td>
              <td data-label="Period">{`[$${room.balance}]`}</td>
              <td>
                <button onClick={() => dispatch(flipRoom(room.id))}>
                  Flip room
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomList;
