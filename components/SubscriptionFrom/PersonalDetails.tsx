import { FC } from "react";
import { useFormContext } from "react-hook-form";

import data from "../../data/personalData";

const PersonalDetails: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className="formContainer mx-auto">
        <div className="head">
          <p>Personal Details</p>
        </div>
        <div className="body">
          {Object.keys(errors).length > 0 && (
            <div className="errors">
              {Object.keys(errors).map((key) => (
                <div key={key}>
                  <small>{errors[key].message}</small>
                </div>
              ))}
            </div>
          )}
          <div className="formGrid">
            {data.map((item) => (
              <div key={item.name}>
                <label>{item.label}</label>
                {item.type != "select" ? (
                  <input
                    type={item.type}
                    {...register(item.name, {
                      required: {
                        value: item.required,
                        message: `${item.label} Field is required`,
                      },
                      ...item?.validation,
                    })}
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
            {/* <Button type="submit" tag="input">
              Submit
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
