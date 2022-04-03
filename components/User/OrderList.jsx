const OrderList = () => {
    return ( 
        <>
        <h2>سفارش ها</h2>
        <div className="order-list">
            <div className="order-menu">
                <p>نام محصول</p>
                <p>نام کاربر</p>
                <p id="res">تاریخ</p>
                <p>جزییات</p>
            </div>
            <div className="order-item">
               <p>iPhone 13</p>
               <p>علی نویدی</p>
               <p id="res">24/5/1379</p>
               <div className="flex"><button>جزییات بیشتر</button></div>
            </div>
            <div className="order-item">
               <p>iPhone 13</p>
               <p>علی نویدی</p>
               <p id="res">24/5/1379</p>
               <div className="flex"><button>جزییات بیشتر</button></div>
            </div>
        </div>
        </>
     );
}
 
export default OrderList;