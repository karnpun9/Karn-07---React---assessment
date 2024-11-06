import React, { useState } from "react";

function Admin({addInputForm}) {
  // useState สำหรับเก็บค่า value input ที่มีการกรอกข้อมูลส่งเข้ามา โดย set เป็นค่าว่างเพื่อรับข้อมูล
  const [inputName, setinputName] = useState("");
  const [inputLastName, setinputLastName] = useState("");
  const [inputPosition, setinputPosition] = useState("");

  //function ดึงข้อมูลที่ user input หรือ กรอกเข้ามาใน form โดยเก็บไว้ในตัวแปรของแต่ละช่องแยกกัน
  const handleInputName = (e) => {
    setinputName(e.target.value);
  };
  const handleInputLastName = (e) => {
    setinputLastName(e.target.value);
  };
  const handleInputPosition = (e) => {
    setinputPosition(e.target.value);
  };

// function submit form เป็นการดึงข้อมูลที่กรอกมาแล้ว เอามาสั่งคำสั่งใหม่ คือ ให้สร้างข้อมูลใหม่ เป็น object array
//แล้วเก็บในตัวแปรที่ตั้งขึ้นมาใหม่ ชื่อ newInput โดยจะไปเชื่อมโยงกับ onChange ใน <input> เพื่อเรียกการใช้งานเมื่อมีการเปลี่ยนแปลงค่า
//หรือก็คือมี user กรอกข้อมูลบางอย่างเข้ามาใสช่อง input และดึงมาใช้ตามคำสั่ง handleSubmit นี้ต่อ
  function handleSubmit(e) {
    e.preventDefault();
    if (inputName.trim() && inputLastName.trim() && inputPosition.trim()) {
      const newInput = {
        id:Math.floor(Math.random() * 1000),
        name: inputName,
        lastname: inputLastName,
        position: inputPosition,
      };
      addInputForm(newInput) //props เชื่อมโยงมาจาก component form เพื่อดึงค่าที่สร้างใหม่ในตัวแปร newInput ไปใช้งานต่อ 
      //หลังจากที่ function ด้านบนทำงานเสร็จ ให้เคลียร์ค่าในช่อง input เป็นค่าว่าง ทุกช่อง
      setinputName("")
      setinputLastName("")
      setinputPosition("")
    }
  }

  return (
    <>
    {/* form ใช้ function handleSubmit จากด้านบนเพื่อมาเชื่อมโยงกับช่อง input ในการดึงค่าออกไปใช้ */}
      <form onSubmit={handleSubmit} className="flex justify-center">
        <input
          type="text"
          placeholder="Name"
          value={inputName}
          onChange={handleInputName}
          className="input"
        />

        <input
          type="text"
          placeholder="Lastname"
          value={inputLastName} //แสดงค่าในช่อง input เป็นค่าที่ user กรอกมา หรือก็คือค่าที่เก็บไว้ในตัวแปร state inputLastName
          onChange={handleInputLastName} //เมื่อมีการเปลี่ยนแปลงให้เก็บค่า(value)ที่ user กรอกมาตามคำสั่งใน function handleInputLastName
          className="input"
        />

        <input
          type="text"
          placeholder="Position"
          value={inputPosition}
          onChange={handleInputPosition}
          className="input"
        />
{/* เมื่อมีการกดปุ่มจะเรียกใช้งาน function handleSubmit ทันที ซึ่ง Type=submit 
จะไปสอดคล้องกับ function onSubmit จึงไม่ต้องใช้ onClick ก็ได้เพียงแค่ปุ่มนี้อยู่ใน form ที่มี function onSubmit */}
        <button type="submit" className="btn-save">Save</button>
      </form>
    </>
  );
}

export default Admin;
