import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { FormContainer, PaymentFormContainer } from './payment-form.styles';
import { Button } from '../ui/button';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;
  };
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <Button className="mt-8" />
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
