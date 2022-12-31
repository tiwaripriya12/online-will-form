import { Box, Button, Card, CardContent, CircularProgress, Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import React, { useState } from 'react';
import { mixed, number, object } from 'yup';

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));




export default function Home() {
  return (
    <Card>
      <CardContent>
        <FormikStepper
          initialValues={{
            firstName: '',
            lastName: '',
            millionaire: false,
            money: 0,
            description: '',
          }}
          onSubmit={async (values) => {
            await sleep(3000);
            console.log('values', values);
          }}
        >
          <FormikStep label="About You">
            <p>Do you live in England or Wales?</p>
            <div className="topping">
              <input type="checkbox" id="topping" name="topping" value="Paneer" />Yes
            </div>
            <div className="topping">
              <input type="checkbox" id="topping" name="topping" value="Paneer" />No
            </div>

            <Box paddingBottom={2}>
              <Field fullWidth name="firstName" component={TextField} label="First Name" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="middleName" component={TextField} label="Middle Name" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="lastName" component={TextField} label="Last Name" />
            </Box>

            <p>What is your home address</p>

            <Box paddingBottom={2}>
              <Field fullWidth name="address1" component={TextField} label="Address1" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="address2" component={TextField} label="Address2" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="City" component={TextField} label="City" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="postCode" component={TextField} label="Post Code" />
            </Box>

            <p>What is your Gender?</p>
            <div className="topping">
              <input type="checkbox" id="topping" name="topping" value="male" />Male
            </div>
            <div className="topping">
              <input type="checkbox" id="topping" name="topping" value="female" />Female
            </div>
            <div className="topping">
              <input type="checkbox" id="topping" name="topping" value="other" />Others
            </div>

            <p>What is Your Birth Date?</p>






          </FormikStep>
          <FormikStep
            label="Your Partner"
            validationSchema={object({
              money: mixed().when('millionaire', {
                is: true,
                then: number()
                  .required()
                  .min(
                    1_000_000,
                    'Because you said you are a millionaire you need to have 1 million'
                  ),
                otherwise: number().required(),
              }),
            })}
          >


            <Box paddingBottom={2}>

              <p>What is your relationship status?</p>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" />Married
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" /> Civil Partnership
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" />  Co-habitant
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" />Seperated
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" /> Single
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" />Divorced
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" /> Widowed
              </div>

              <p>What is their full name?
              </p>
              <Box paddingBottom={2}>
                <Field fullWidth name="address1" component={TextField} label="Address1" />
              </Box>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" />  Save as Same Address
              </div>
              <p>What is their address?</p>
              <Box paddingBottom={2}>
                <Field fullWidth name="address1" component={TextField} label="Address Line 1" />
              </Box>
              <Box paddingBottom={2}>
                <Field fullWidth name="address1" component={TextField} label="Address Line 2" />
              </Box>
              <Box paddingBottom={2}>
                <Field fullWidth name="address1" component={TextField} label="City" />
              </Box>
              <Box paddingBottom={2}>
                <Field fullWidth name="address1" component={TextField} label="Post Code" />
              </Box>
              <p>Do they want to make a Will too?</p>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" /> Yes
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" />No
              </div>
              <p>What is their Email addresses?</p>
              <input type="email" id="email" name="email_id" className='w-full h-8' />


            </Box>
          </FormikStep>
          <FormikStep label="Your Family">
            <Box paddingBottom={2}>
              <p>Do you have any children?</p>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" /> Yes
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" />No
              </div>
              <p>How Many children do you have?</p>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" /> 1
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" />2
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" /> 3
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" />4
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" /> 5
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" />6
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" />7
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" />8
              </div> <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" />9
              </div>
              <p>Name of Child 1</p>
              <input type="email" id="email" name="email_id" className='w-full h-8' />
              <p>Gender of Child 1</p>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="male" />Male
              </div> <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" />Female
              </div>
              <p>What is Your child Birth Date?</p>


            </Box>
          </FormikStep>
          <FormikStep label="Guardians">
            <Box paddingBottom={2}>
              <p>Do you want to name Guardians of your dependent children under 18? </p>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="male" />Yes
              </div> <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" />No
              </div>
              <p>Child name</p>
              <input type="cname" id="cname" name="cname" className='w-full h-8' />
              <p>Name of the First Guardian </p>
              <input type="gname" id="gname" name="gname" className='w-full h-8' />
              <p>What relationship are they to you?</p>
              <input type="gname" id="gname" name="gname" className='w-full h-8' />
            </Box>
            <div className="topping">
              <input type="checkbox" id="topping" name="topping" value="female" />  Save as Same Address
            </div>
            <p>Do you know their addreess?</p>
            <Box paddingBottom={2}>
              <Field fullWidth name="address1" component={TextField} label="Address Line 1" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="address1" component={TextField} label="Address Line 2" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="address1" component={TextField} label="City" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="address1" component={TextField} label="Post Code" />
            </Box>
            <p>Should the Guardian only be used in the event of the death of the other parent? </p>
            <div className="topping">
              <input type="checkbox" id="topping" name="topping" value="yes" /> Yes
            </div>
            <div className="topping">
              <input type="checkbox" id="topping" name="topping" value="no" />No
            </div>
            <p>Who is the other parent?</p>
            <input type="email" id="email" name="email_id" className='w-full h-8' />
            <p>What relationship are they to you?</p>
            <input type="email" id="email" name="email_id" className='w-full h-8' />
            <div className="topping">
              <input type="checkbox" id="topping" name="topping" value="female" />  Save as Same Address
            </div>
            <p>Do you know their addreess?</p>
            <Box paddingBottom={2}>
              <Field fullWidth name="address1" component={TextField} label="Address Line 1" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="address1" component={TextField} label="Address Line 2" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="address1" component={TextField} label="City" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="address1" component={TextField} label="Post Code" />
            </Box>
            <p>How should they act?</p>
            <div className="topping">
              <input type="checkbox" id="topping" name="topping" value="yes" /> Jointly with others
            </div>
            <div className="topping">
              <input type="checkbox" id="topping" name="topping" value="no" />On their own
            </div>
            <p>Who is your 2nd Guardian?</p>
            <input type="email" id="email" name="email_id" className='w-full h-8' />
            <p>What relationship are they to you?</p>
            <input type="email" id="email" name="email_id" className='w-full h-8' />
            <div className="topping">
              <input type="checkbox" id="topping" name="topping" value="female" />  Save as Same Address
            </div>
            <p>Do you know their addreess?</p>
            <Box paddingBottom={2}>
              <Field fullWidth name="address1" component={TextField} label="Address Line 1" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="address1" component={TextField} label="Address Line 2" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="address1" component={TextField} label="City" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="address1" component={TextField} label="Post Code" />
            </Box>
            <p>Country</p>
            <input type="email" id="email" name="email_id" className='w-full h-8' />






          </FormikStep>
          <FormikStep label="Your Finance">
            <Box paddingBottom={2}>

              <p>Do you own or part own your home?</p>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="yes" /> Yes
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="no" />No
              </div>
              <p>Do you have any Life Insurance? </p>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" /> Yes
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" />No
              </div>
              <p>Do you have any Private Pensions ?</p>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" /> Yes
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" />No
              </div>
              <p>Do you own your own business?</p>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" /> Yes
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" />No
              </div>
              <p>Do you own any asset outside UK?</p>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" /> Yes
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="female" />No
              </div>



            </Box>
          </FormikStep>
          <FormikStep label="Executors">
            <Box paddingBottom={2}>
              <p>Who is your 1st Executor?</p>
              <input type="email" id="email" name="email_id" className='w-full h-8' />
            </Box>
            <p>What relationship are they to you?</p>
            <input type="email" id="email" name="email_id" className='w-full h-8' />
            <div className="topping">
              <input type="checkbox" id="topping" name="topping" value="female" />  Save as Same Address
            </div>
            <p>Do you know their addreess?</p>
            <Box paddingBottom={2}>
              <Field fullWidth name="address1" component={TextField} label="Address Line 1" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="address1" component={TextField} label="Address Line 2" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="address1" component={TextField} label="City" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="address1" component={TextField} label="Post Code" />
            </Box>
            <p>How should they act?</p>
            <div className="topping">
              <input type="checkbox" id="topping" name="topping" value="yes" /> Jointly with others
            </div>
            <div className="topping">
              <input type="checkbox" id="topping" name="topping" value="no" />On their own
            </div>

          </FormikStep>
          <FormikStep label="Gifts">
            <Box paddingBottom={2}>
              <p>Do you have any specific items you wish to gift?</p>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="yes" />Yes
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="no" />No
              </div>

              <p>Do you wish to give some money to specific people?</p>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="yes" />Yes
              </div>
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="no" />No
              </div>

            </Box>
          </FormikStep>
          <FormikStep label="Residue">
            <Box paddingBottom={2}>
              <Field fullWidth name="description" component={TextField} label="Description" />
            </Box>
          </FormikStep>
          <FormikStep label="Funeral">
            <Box paddingBottom={2}>
              <Field fullWidth name="description" component={TextField} label="Description" />
            </Box>
          </FormikStep>
        </FormikStepper>
      </CardContent>
    </Card >
  );
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);

          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step key={child.props.label} completed={step > index || completed}>
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}

          <Grid container spacing={2}>
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
