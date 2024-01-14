"use client";
import { step_form_key } from "@/constants/localstorageKeys";
import { useRouter } from "@/lib/router-events";
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "@/utils/browserStorage/localstorage";
import { Button, Steps } from "antd";
import { useEffect, useState } from "react";
import { FormProvider, Resolver, useForm } from "react-hook-form";

interface ISteps {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
}

interface IStepsProps {
  steps: ISteps[];
  persistKey: string;
  submitHandler: (el: any) => void;
  navigateLink?: string;
  resolver?: Resolver<any, any>;
}

const StepperForm = ({ steps, submitHandler, navigateLink, persistKey, resolver }: IStepsProps) => {
  const router = useRouter();

  const [current, setCurrent] = useState<number>(
    !!getFromLocalStorage(step_form_key) ? Number(JSON.parse(getFromLocalStorage(step_form_key) as string).step) : 0
  );

  const [savedValues, setSavedValues] = useState(!!getFromLocalStorage(persistKey) ? JSON.parse(getFromLocalStorage(persistKey) as string) : "");

  useEffect(() => {
    setToLocalStorage(step_form_key, JSON.stringify({ step: current }));
  }, [current]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const methods = useForm({ defaultValues: savedValues, resolver: resolver });
  const watch = methods.watch();

  useEffect(() => {
    setToLocalStorage(persistKey, JSON.stringify(watch));
  }, [watch, persistKey]);

  const { handleSubmit, reset } = methods;

  const handleStudentOnSubmit = (data: any) => {
    submitHandler(data);
    reset();
    removeFromLocalStorage(step_form_key);
    removeFromLocalStorage(persistKey);
    navigateLink && router.push(navigateLink);
  };

  return (
    <>
      <Steps current={current} items={items} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleStudentOnSubmit)}>
          <div>{steps[current].content}</div>
          <div style={{ marginTop: 24 }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" htmlType="submit">
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default StepperForm;
