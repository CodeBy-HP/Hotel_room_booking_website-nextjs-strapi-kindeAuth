import RoomList from "./RoomList";

const getRooms = async () => {
  const res = await fetch(`http://127.0.0.1:1337/api/rooms?populate=*`, {
    next: {
      revalidate: 0,
    },
  });
  return await res.json();
};

const Rooms = async () => {
  const rooms = await getRooms();
  

  return (
    <section>
      <div className="container mx-auto">
        <RoomList rooms={rooms} />
      </div>
    </section>
  );
};

export default Rooms;
