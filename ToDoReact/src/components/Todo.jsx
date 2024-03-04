import React, { useState } from "react";

function Todo() {
  const [titel, settitel] = useState("");
  const [desc, setdesc] = useState("");
  const [data, setdata] = useState([]);

  const handelremove=(i)=>{
    let copy = [...data]
      copy.splice(i,1);
      setdata(copy);
  }

 

  let showdata = <div>Empty Todo List</div>;

  const handelsubmit = (e) => {
    e.preventDefault();
    setdata([...data, { titel, desc }]);
    //console.log(data);

    settitel("");
    setdesc("");

    
  };

  const handeledit=(i)=>{
      data[i].desc="asd";
      data[i].titel="test";

      console.log(data);
  }


  showdata = data.map((elem, index) => {
    return (
      
        <div
          key={index}
          className="w-[200px] h-[200px] bg-slate-600  flex items-center justify-center flex-col relative rounded-md text-white shadow-2xl"
        >
          <h4>{elem.titel}</h4>
          <p>{elem.desc}</p>
          <button onClick={()=>handelremove(index)} className="bg-red-400 p-1 rounded px-2 absolute bottom-2 right-2">
            Remove
          </button>
          <button onClick={()=>handeledit(index)} className="bg-green-400 p-1 rounded px-2 absolute bottom-2 left-2">
            Edit
          </button>
        </div>
      
    );
  });

  return (
    <>
      <div className="w-full h-screen bg-slate-300 flex flex-col items-center  ">
        <div className="flex bg-slate-800 flex-col w-1/2 p-5  rounded-xl mt-10 mb-10 shadow-2xl">
          <form onSubmit={handelsubmit}>
            <h3 className="text-white font-semibold font-sansarif">
              ToDo List
            </h3>
            <input
              type="text"
              placeholder="Titel"
              id="titel"
              value={titel}
              onChange={(e) => settitel(e.target.value)}
              className="w-full p-1 m-1 italic rounded-lg px-2"
            />
            <input
              type="text"
              value={desc}
              onChange={(e) => setdesc(e.target.value)}
              placeholder="Description"
              id="desc"
              className="w-full p-1 m-1 italic rounded-lg px-2"
            />
            <button
              id="add"
              type="submit"
              className="w-1/3 bg-blue-400 p-2 py-0 m-1 rounded-md"
            >
              Add
            </button>
          </form>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {showdata}
          {data.titel}
          {data.desc}
        </div>
      </div>
    </>
  );
}

export default Todo;
