import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
      number: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50,'Must be 50 characters or less')
      .required('Required'),
  });

  const handleSubmit = (values,  actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label} htmlFor="name">Name</label>
        <Field className={styles.input} id="name" name="name" type="text" />
        <ErrorMessage className={styles.error} name="name" component="div" />

        <label className={styles.label} htmlFor="number">Number</label>
        <Field className={styles.input} id="number" name="number" type="text" />
        <ErrorMessage className={styles.error} name="number" component="div" />

        <button className={styles.submitButton} type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;