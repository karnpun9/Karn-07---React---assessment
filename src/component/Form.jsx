import Admin from "./Admin";

// รับค่า props มาจาก home เพื่อสั่งการต่อ ในเนื้อหาหน้านี้
export default function Form({
  showTableOnly = false,
  tableItem,
  addItem,
  handleDelete,
  handleClear,
}) {
  return (
    <>
      {/* เชื่อมโยงมาจาก Ternary Operator ในหน้า Home เกี่ยวกับ State ที่เก็บค่าการกระทำ เปิด-ปิด true/false */}
      {!showTableOnly && (
        <main>
          <div className="container mx-auto">
            <h1 className="font-bold text-2xl text-center mb-4">
              Create User Here
            </h1>
          </div>

          {/* ส่วนนี้เป็นเหมือการเรียกหน้า Admin ทั้งหน้ามาแปะตรงนี้ โดยส่ง prop ชื่อ addInputForm 
          ไปยังหน้า component Admin เพื่อเป็นการชี้เป้าและเชื่อมโยงข้อมูลใน component ถึงกันได้
          ทำให้สามารถใช้ข้อมูลร่วมกันได้ แม้จะไม่ได้อยู่หน้าเดียวกัน 
          ค่า value ของ addInputForm ที่ส่งไปคือฟังก์ชัน addItem ซึ่งมีอยู่ใน component Home
          ที่สั่งเพิ่ม list เข้าไปใน table form จะเชื่อมโยงกันด้วย props addItem*/}
          <Admin addInputForm={addItem} />
        </main>
      )}

      <section
        id="table"
        className="container mx-auto flex justify-center  mt-6"
      >
        <table id="head-table" className="border-2 table-auto">
          <tr className={`grid ${!showTableOnly ? "grid-cols-4" : "grid-cols-3"} border-b bg-gray-100`}>
            <th className="td-table">Name</th>
            <th className="td-table">Last name</th>
            <th className="td-table">Position</th>
            {!showTableOnly && <th className="td-table">Action</th>}
          </tr>
          {/* เอาข้อมูลที่เรียกเก็บไปใน state tableItem ซึ่งเป็น object array นำมาวน loop ด้วย map ที่จะสร้าง array
ก้อนใหม่ แล้วใส่ไปใน table แต่ละหัวข้อให้ตรงด้วยการเข้าถึงโดยใช้ . จุด ตามด้วย key ของ object */}
          {tableItem.map((items) => (
            <tr className={`grid ${!showTableOnly ? "grid-cols-4" : "grid-cols-3"} border-solid border-collapse justify-center`}>
              <td key={items.id} className="td-table">
                {items.name}
              </td>
              <td className="td-table">{items.lastname}</td>
              <td className="td-table">{items.position}</td>

              {/* showTableOnly จะรับค่า props มาจาก component หน้า Home ที่ดึงค่าไปใช้ในส่วนของ tag component <Form />
เพื่อทำให้เมื่อกดเปิดหรือปิดปุ่ม ส่วนนี้จะถูกซ่อน หรือ แสดง ออกมา */}
              {!showTableOnly && (
                <td
                  className="td-table cursor-pointer text-red-500 hover:text-red-600 font-semibold"
                  onClick={() => handleDelete(items.id)}
                >
                  delete
                </td>
              )}
            </tr>
          ))}
        </table>
      </section>
      <div className="flex justify-center mt-6">
        {!showTableOnly && (
          <button className="delbtn" onClick={handleClear}>
            Delete all
          </button>
        )}
      </div>
    </>
  );
}
