const initialState = {
  rooms: [
    {
      date: new Date("Jan 01 2021").toDateString(),
      id: 42312,
      address: "2623 Honeysuck Rd, NW",
      room: 3,
      location: "Atlanta, GA",
      lastOccupant: "Melissa",
      uid: 30020,
      balance: 450,
    },
    {
      date: new Date("Jan 01 2021").toDateString(),
      id: 63451,
      address: "2333 Bridge Street",
      room: 2,
      location: "Missouri",
      lastOccupant: "Richard C Bruner",
      uid: 30020,
      balance: 450,
    },
    {
      date: new Date("Jan 01 2021").toDateString(),
      id: 123456,
      address: " 3698 Ridenour Street",
      room: 6,
      location: "Atlanta, GA",
      lastOccupant: "Gary G Shaw",
      uid: 30020,
      balance: 450,
    },
    {
      date: new Date("Jan 01 2021").toDateString(),
      id: 73452,
      address: "3745 Southern Avenue",
      room: 4,
      location: "Missouri",
      lastOccupant: "Regina R Moss",
      uid: 30020,
      balance: 450,
    },
    {
      date: new Date("Jan 01 2021").toDateString(),
      id: 97452,
      address: "2623 Honeysuck Rd, NW",
      room: 1,
      location: "Missouri",
      lastOccupant: "Harold M Brazell",
      uid: 30020,
      balance: 450,
    },
    {
      date: new Date("Jan 01 2021").toDateString(),
      id: 23461,
      address: "2858 Atha Drive",
      room: 5,
      location: "Missouri",
      lastOccupant: "Tonya P Park",
      uid: 30020,
      balance: 450,
    },
    {
      date: new Date("Jan 01 2021").toDateString(),
      id: 63456,
      address: "1727 Birch Street",
      room: 3,
      location: "Atlanta, GA",
      lastOccupant: "Josephine Padilla",
      uid: 30020,
      balance: 450,
    },
  ],
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "FLIP_ROOM":
      state.rooms.map(
        (room, index) =>
          room.id === action.payload &&
          state.rooms.splice(index, 1) &&
          state.rooms.unshift(room)
      );
      return { ...state, rooms: [...state.rooms] };
    default:
      return state;
  }
}
