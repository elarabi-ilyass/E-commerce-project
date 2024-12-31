import  OrderSummary  from "./OrderSummary";
import  PaymentAndShipping   from "./PaymentAndShipping";
const CheckoutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <PaymentAndShipping />
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutPage;







