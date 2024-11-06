import React, { useState, useEffect } from "react";
import Form from "./Form";

function Home() {
  // useState สำหรับเก็บค่า ที่จะเกิดการกระทำกับ button User Home Sector และ Admin Home Sector
  //เอาไว้ใช้ เปิดปิด table ที่จะแสดงออกมา
  const [showForm, setShowForm] = useState(true);
  const [showUser, setShowUser] = useState(true);

  //useState สำหรับเก็บค่า input ที่ป้อนมาเป็น object array แล้วจากหน้า admin ใน function handleSubmit
  //ระบุให้เก็บค่า state ที่มีการป้อนเข้ามาก่อนหน้านี้ เอาไปเก็บไว้ใน local storage ของ browser
  const [tableItem, setTableItem] = useState(JSON.parse(localStorage.getItem("tableItem")) || []);


  //useState สำหรับเปลี่ยนหัวข้อใน H1 โดย Set ค่าเริ่มต้นเป็นคำว่า React - Assessment
  const [title, setTitle] = useState("React - Assessment");

  //ใช้ useEffect เพื่อดักจับ event ที่เกิดขึเนกับ state นี้ แล้วนำไปบันทึกไว้ใน local storage ของ browser เพื่อไม่ให้ข้อมูลที่
  //ถูกป้อนเข้ามาแล้ว หายไปเมื่อ refresh browser ใหม่
  useEffect(()=>{
    localStorage.setItem("tableItem", JSON.stringify(tableItem))
  }, [tableItem])

  //function เพิ่ม list item ที่ input ไปใน table form ที่สร้างไว้ใน Form.jsx
  // ด้วยการวน loop array ของ item ที่มาเก็บใน useState tableItem โดยกำหนดให้
  //ค่า parameter ชื่อ item เป็นตัวรับค่าใน array จาก state tableItem มาทั้งหมด ด้วย function ของตัวมันเองคือ setTableItem
  //ใช้ spread operator กับ ตัวแปร item เพื่อกระจาย value เดิมที่เก็บไว้ แล้วให้ค่าใหม่ที่ป้อนเข้ามา เก็บในตัวแปร newItem
  const addItem = (newItem) => {
    setTableItem((item) => [...item, newItem]);
  };

  //function handleDelete สำหรับลบ item ใน table รับ id เป็นพารามิเตอร์ ซึ่งเป็น id ของรายการที่ต้องการลบออกจากตาราง
  //ซึ่งจะไปเชื่อมโยงกับ function onClick={() => handleDelete(items.id) ในหน้า component form
  //tableItem.filter( ) เป็นการสร้างอาร์เรย์ใหม่โดยกรองรายการที่ตรงตามเงื่อนไขในฟังก์ชัน
  //(arrItem) => arrItem.id !== id เป็นเงื่อนไขที่ใช้ใน filter ซึ่งจะตรวจสอบว่า id ของแต่ละรายการ
  //(arrItem.id) ไม่ตรงกับ id ที่ต้องการลบออก
  //ผลลัพธ์คือรายการที่มี id ตรงกับ id ที่ส่งเข้ามาจะถูกกรองออก (ไม่รวมอยู่ในอาร์เรย์ใหม่)

  const handleDelete = (id) => {
    setTableItem(tableItem.filter((arrItem) => arrItem.id !== id));
  };

  //function handleClear สำหรับ clear ค่า arr ที่มีหมดในตารางด้วยการกดปุ่ม จะไปเชื่อมโยงกับ
  //<button className="delbtn" onClick={handleClear}> Delete all </button> ใน componet form
  //โดยใช้ setTableItem ซึ่งเป็น function update ของ tableItem ที่เก็บค่า object array ที่สร้างใหม่ทั้งหมด
  //ที่มีการ input เอาไว้
  const handleClear = () => {
    setTableItem([]);
  };

  //function handleShowForm สำหรับ สั่งการเปิดปิด table ที่แสดงอยู่ เมื่อกดปุ่ม Admin Home Sector ซึ่งจะเชื่อมโยงกับ component form
  //ด้วยการ props เชื่อมโยงเนื้อหาจาก component form แล้วสั่งให้ทำงานจากคำสั่งและเงื่อนไขในหน้านี้ (Home)
  function handleShowForm() {
    setShowForm(!showForm);
    setShowUser(true);
    setTitle("Home - Admin Sector") //เมื่อกดปุ่มจะเปลี่ยนชื่อหัวข้อ
  }

  //function handleShowUser สำหรับ สั่งการเปิดปิด table ที่แสดงอยู่ เมื่อกดปุ่ม User Home Sector ซึ่งจะเชื่อมโยงกับ component form
  //ด้วยการ props เชื่อมโยงเนื้อหาจาก component form แล้วสั่งให้ทำงานจากคำสั่งและเงื่อนไขในหน้านี้ (Home)
  function handleShowUser() {
    setShowUser(!showUser);
    setShowForm(true);
    setTitle("Home - User Sector") //เมื่อกดปุ่มจะเปลี่ยนชื่อหัวข้อ

  }

  return (
    <>
      <h1 className="text-center text-5xl font-bold mt-10">
        Generation Thailand
        <br />
        {/* เมื่อกดปุ่มจะเปลี่ยนชื่อหัวข้อ ไปตาม function ที่สั่งไว้ด้านบน คือปุ่ม Admin Sector และ User Sector*/}
        {title} 
      </h1>

      {/* ปุ่ม User Home Sector ที่มีคำสั่ง onClick เมื่อกดปุ่ม จะทำหน้าที่ตามคำสั่ง function handleShowUser ที่เรียกมาใช้ */}
      <div className="flex justify-center gap-64 my-10">
        <button className="btn-main" onClick={handleShowUser}>
          User Home Sector
        </button>

        {/* ปุ่ม User Home Sector ที่มีคำสั่ง onClick เมื่อกดปุ่ม จะทำหน้าที่ตามคำสั่ง function handleShowForm ที่เรียกมาใช้ */}
        <button className="btn-main" onClick={handleShowForm}>
          Admin Home Sector
        </button>
      </div>

      {/* ใช้คำสั่งเงื่อนไขแบบ Ternary Operator  !showForm หรือ !showUser หมายถึง ถ้า showForm หรือ !showUser เป็น false 
จะทำการ render component <Form ... /> และส่ง props ที่ระบุเข้าไปใน component 
ถ้า showForm เป็น true จะ render ค่า null (ไม่มีการแสดงอะไร) */}
      {!showForm ? (
        <Form
          tableItem={tableItem}
          addItem={addItem}
          handleDelete={handleDelete}
          showTableOnly={false} //ให้ show หรือ hide ในบางส่วนที่ส่งคำสั่งไปใช้งาน ใน component form
          handleClear={handleClear}
        />
      ) : null}

      {!showUser ? (
        <Form
          tableItem={tableItem}
          addItem={addItem}
          handleDelete={handleDelete}
          showTableOnly={true} //ให้ show หรือ hide ในบางส่วนที่ส่งคำสั่งไปใช้งาน ใน component form
        />
      ) : null}
    </>
  );
}

export default Home;
