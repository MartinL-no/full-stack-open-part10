import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from 'yup';


import theme from "../../theme";
import { CreateReviewForm } from "./CreateReviewForm";
import useCreateReview from "../../hooks/useCreateReview";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  createReviewContainer: {
    backgroundColor: theme.colors.secondary,
  },
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Owner Name is required'),
  repositoryName: yup
    .string()
    .required('Owner is required'),
  rating: yup
    .number()
    .min(1, 'Rating must be more than 1')
    .max(100, 'Rating must be less than 100')
    .required('Rating is required'),
  text: yup
    .string()
});

const CreateReview = () => {
  const navigate = useNavigate();
  const [createReview] = useCreateReview();


  const onSubmit = async (values) => {
    try {
      const repositoryId = await createReview(values)

      navigate(`/${repositoryId}`)
      console.log(repositoryId);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.createReviewContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
};

export default CreateReview;