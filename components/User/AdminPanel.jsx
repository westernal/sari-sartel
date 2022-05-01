import Link from "next/link";

const AdminPanel = () => {
  return (
    <>
      <h2>مدیریت محتوا</h2>
      <div className="admin-panel">
        <Link href={"/user/admin/add/product"}>
          <a aria-label="add product">
            <button>اضافه کردن محصول</button>
          </a>
        </Link>
        <Link href={"/user/admin/add/post"}>
          <a aria-label="add post">
            <button>اضافه کردن پست</button>
          </a>
        </Link>
      </div>
    </>
  );
};

export default AdminPanel;
