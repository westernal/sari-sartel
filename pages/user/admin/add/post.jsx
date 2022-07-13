import Header from "../../../../components/Layout/Header/Header";
import Footer from "../../../../components/Layout/Footer";
import Head from "next/head";

const AddPost = () => {
  return (
    <div className="add-item">
      <Header />

      <Head>
        <title>افزودن پست - ساری سارتل</title>
      </Head>

      <div className="flex">
        {" "}
        <h1>افزودن پست</h1>
      </div>

      <div className="add-form">
        <div className="flex">
          <label htmlFor="image">عکس پست:</label>
          <input type="file" id="image" name="image" accept="image/*" />
        </div>
        <input type="text" placeholder="تیتر پست..." id="title" />
        <textarea placeholder="متن پست..." id="description" />
        <button>پست</button>
      </div>

      <Footer />
    </div>
  );
};

export default AddPost;
