import Header from "../../../../components/Layout/Header/Header";
import Footer from "../../../../components/Layout/Footer";
import Head from "next/head";

const AddProduct = () => {
  return (
    <div className="add-item">
      <Header />

      <Head>
        <title>افزودن محصول - ساری سارتل</title>
      </Head>

      <div className="flex">
        {" "}
        <h1>افزودن محصول</h1>
      </div>

      <div className="add-form">
        <div className="flex">
          <label htmlFor="image">عکس محصول:</label>
          <input type="file" id="image" name="image" accept="image/*" />
        </div>
        <input type="text" placeholder="نام محصول..." id="title" />
        <select>
          <option value="" disabled selected>
            دسته بندی محصول
          </option>
        </select>
        <textarea placeholder="متن محصول..." id="description" />
        <button>پست</button>
      </div>

      <Footer />
    </div>
  );
};

export default AddProduct;
