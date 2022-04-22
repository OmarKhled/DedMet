import { NextPage } from "next";
import { useForm } from "react-hook-form";
import Button from "../components/Button";

import data from "../data/personalData";

const subscribe: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <div className="__root">
      <h2 className="text-center">Subscription</h2>
      <div className="formContainer mx-auto">
        <div className="head">
          <p>Personal Info</p>
        </div>
        <div className="body">
          <form className="formGrid" onSubmit={handleSubmit(onSubmit)}>
            {data.map((item) => (
              <div key={item.name}>
                <label>{item.label}</label>
                {item.type != "select" ? (
                  <input
                    type={item.type}
                    {...register(item.name, { required: item.required })}
                    placeholder={item.placeholder}
                    className={`${errors[item.name] ? "err" : ""}`}
                  />
                ) : (
                  <>
                    <select
                      {...register(item.name, { required: item.required })}
                      name={item.name}
                    >
                      {item.options?.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </>
                )}
              </div>
            ))}
            <Button type="submit" tag="input">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default subscribe;
