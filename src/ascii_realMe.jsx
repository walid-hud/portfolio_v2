import Room from "./ascii_room";
export default () => {
  return (
    <div className="block lg:flex gap-x-2">
      <pre className="text-md ascii_room_1">{Room}</pre>
      <div className="lg:leading-[2]">
        <br />
        <p>
        I have seen it
        </p>
        <p>
        I have heard of it
        </p>
        <p>
        To draw near without reprisal
        </p>
        <p>Bridge the chasm</p>
        <p>I have sought you out</p>
        <p>But it is to no avail</p>
        <p>I am immobilized</p>
        <p>And when you come near</p>
        <p>Detaching yourself from those with everything</p>
        <p>You will see in my eyes</p>
        <p className=" text-[8rem] font-bold tracking-[-4.5rem] whitespace-nowrap  mt-[-1.3rem] ml-[-8px] 
        transition-all cursor-help duration-300 ease-in-out hover:tracking-widest
        ">
          FEAR
        </p>
      </div>
    </div>
  );
};
