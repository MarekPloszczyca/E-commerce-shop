import { useFormik } from "formik";
import styles from "./CheckoutForm.module.scss";
import FormInput from "./FormInput";
import CheckoutProducts from "./CheckoutProducts";

interface Values {
  firstName?: string;
  lastName?: string;
  address?: string;
  postalCode?: string;
  city?: string;
  phone?: string;
  email?: string;
}

const validate = (values: Values) => {
  const errors: Values = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.trim().length < 2) {
    errors.firstName = "Must be 2 characters or more";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.trim().length < 2) {
    errors.lastName = "Must be 2 characters or more";
  }
  if (!values.address) {
    errors.address = "Required";
  } else if (values.address.trim().length < 2) {
    errors.address = "Must be 2 characters or more";
  }
  if (!values.postalCode) {
    errors.postalCode = "Required";
  } else if (values.postalCode.trim().length < 3) {
    errors.postalCode = "Must be 3 characters or more";
  }
  if (!values.city) {
    errors.city = "Required";
  } else if (values.city.trim().length < 3) {
    errors.city = "Must be 3 characters or more";
  }
  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.toString().trim().length < 9) {
    errors.phone = "Must be 9 numbers or more";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export default function CheckoutForm(props: { submit: () => void }) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      postalCode: "",
      city: "",
      phone: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      props.submit();
      values.firstName = "";
      values.lastName = "";
      values.address = "";
      values.postalCode = "";
      values.city = "";
      values.phone = "";
      values.email = "";
    },
  });
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.inputsContainer}>
          <FormInput
            text="First Name"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            touched={formik.touched.firstName}
            error={formik.errors.firstName}
          />

          <FormInput
            text="Last Name"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            touched={formik.touched.lastName}
            error={formik.errors.lastName}
          />
          <FormInput
            text="Address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            touched={formik.touched.address}
            error={formik.errors.address}
          />

          <FormInput
            text="Postal Code"
            name="postalCode"
            type="string"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.postalCode}
            touched={formik.touched.postalCode}
            error={formik.errors.postalCode}
          />
          <FormInput
            text="City"
            name="city"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            touched={formik.touched.city}
            error={formik.errors.city}
          />
          <FormInput
            text="Phone"
            name="phone"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            touched={formik.touched.phone}
            error={formik.errors.phone}
          />
          <FormInput
            text="Email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            touched={formik.touched.email}
            error={formik.errors.email}
          />
        </div>
        <CheckoutProducts />
      </form>
    </div>
  );
}
