import FormInput from "./FormInput";
export default function LogInPage() {
  return (
    <div className=" mt-24 flex mx-32 gap-3 text-center py-3 ">
      <div className=" bg-white mx-auto w-[100%] py-5 rounded-md">
        <h2 className=" text-3xl">Sign Up/Log In</h2>
        <hr />
        <div className="flex mt-5">
          <div className="w-[50%] border-r-2 border-black">
            <h2 className=" text-2xl">Sign Up</h2>

            <FormInput
              isEmail={true}
              isPassword={true}
              isConfirmPassword={true}
            />
          </div>
          <div className="w-[50%] ">
            <h2 className=" text-2xl">Log In</h2>
            <FormInput isEmail={true} isPassword={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
