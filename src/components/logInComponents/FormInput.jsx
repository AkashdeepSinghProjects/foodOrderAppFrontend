import LabelInput from "./LabelInput";
import Button from "./Button";
import { useState } from "react";
import { register } from "../../http";

export default function FormInput({ isEmail, isPassword, isConfirmPassword }) {
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [isError, setIsError] = useState({ state: false, message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const allInputs = Object.fromEntries(data.entries());

    if (allInputs["Password"] !== allInputs["Confirm Password"]) {
      setIsInvalidPassword(true);
    } else {
      const result = await register(allInputs["Email"], allInputs["Password"]);
      console.log(result);
      if (!result.isSuccess) {
        setIsError({ state: true, message: result.message });
      } else {
        setIsError({ state: false, message: result.message });
      }

      e.target.reset();
    }
  }

  return (
    <form
      className=" flex flex-col gap-2 mt-5 items-start mx-4"
      onSubmit={handleSubmit}
    >
      {isError.state && (
        <p className=" text-red-800 text-right">*{isError.message}</p>
      )}

      {isEmail && <LabelInput name="Email" isInvalid={false} />}
      {isPassword && <LabelInput name="Password" isPassword={true} />}
      {isConfirmPassword && (
        <LabelInput
          name="Confirm Password"
          isInvalid={isInvalidPassword}
          isPassword={true}
          onChange={() => setIsInvalidPassword(false)}
        />
      )}
      {isConfirmPassword ? (
        <Button green={true} type="submit" className="self-end">
          Sign Up
        </Button>
      ) : (
        <Button green={true} type="submit" className="self-end">
          Log In
        </Button>
      )}
    </form>
  );
}
